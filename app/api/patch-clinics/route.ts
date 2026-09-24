import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { locationStates } from "@/lib/locations";
import { site } from "@/lib/content";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

type ClinicDoc = {
  _id: string;
  state?: string;
  stateCode?: string;
  city?: string;
};

const key = (stateCode: string, city: string) =>
  `${stateCode}|${city}`.toLowerCase();

/**
 * Surgically sync the clinic directory into Sanity: clinic name, address and
 * the Google listing / Timely booking URLs. Documents are matched to the code
 * directory by state + city, so Studio ordering and document ids don't matter.
 * Only those fields are set — everything else on the document is untouched.
 *   GET /api/patch-clinics?secret=SEED_SECRET
 */
export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret");
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Missing SANITY_WRITE_TOKEN env var" },
      { status: 500 }
    );
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  let docs: ClinicDoc[];
  try {
    docs = await client.fetch<ClinicDoc[]>(
      `*[_type == "clinic"]{_id, state, stateCode, city}`
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "fetch failed" },
      { status: 500 }
    );
  }

  const byKey = new Map<string, ClinicDoc>();
  for (const d of docs) {
    byKey.set(key(d.stateCode || d.state || "", d.city || ""), d);
  }

  const tx = client.transaction();
  const patched: string[] = [];
  const unmatched: string[] = [];

  for (const s of locationStates) {
    for (const c of s.clinics) {
      const doc = byKey.get(key(s.code, c.city));
      if (!doc) {
        unmatched.push(`${s.code} / ${c.city}`);
        continue;
      }
      tx.patch(doc._id, {
        set: {
          name: c.clinic,
          address: c.address,
          ...(c.gbpUrl ? { gbpUrl: c.gbpUrl } : {}),
          ...(c.bookingUrl ? { bookingUrl: c.bookingUrl } : {}),
        },
      });
      patched.push(`${s.code} / ${c.city}`);
    }
  }

  try {
    await tx.commit();
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "clinic patch failed",
        patched: patched.length,
        unmatched,
      },
      { status: 500 }
    );
  }

  // Clinic documents that no longer exist in the directory (e.g. a closed
  // clinic). Reported by default; only removed when ?prune=1 is passed, so a
  // Studio-added clinic can't be deleted by accident.
  const codeKeys = new Set(
    locationStates.flatMap((s) => s.clinics.map((c) => key(s.code, c.city)))
  );
  const orphans = docs.filter(
    (d) => !codeKeys.has(key(d.stateCode || d.state || "", d.city || ""))
  );
  const label = (d: ClinicDoc) => `${d.stateCode || d.state || "?"} / ${d.city || "?"}`;
  let deleted: string[] = [];
  if (new URL(request.url).searchParams.get("prune") === "1" && orphans.length) {
    const del = client.transaction();
    for (const o of orphans) del.delete(o._id);
    try {
      await del.commit();
      deleted = orphans.map(label);
    } catch (err) {
      return NextResponse.json(
        {
          ok: false,
          error: err instanceof Error ? err.message : "prune failed",
          patched: patched.length,
          orphans: orphans.map(label),
        },
        { status: 500 }
      );
    }
  }

  // Separate commit so a missing siteSettings document can't roll back the clinics.
  let siteSettings: string;
  try {
    await client.patch("siteSettings").set({ bookingUrl: site.bookingUrl }).commit();
    siteSettings = site.bookingUrl;
  } catch (err) {
    siteSettings = `skipped: ${err instanceof Error ? err.message : "patch failed"}`;
  }

  return NextResponse.json({
    ok: true,
    patched: patched.length,
    unmatched,
    orphans: orphans.map(label),
    deleted,
    siteSettings,
  });
}
