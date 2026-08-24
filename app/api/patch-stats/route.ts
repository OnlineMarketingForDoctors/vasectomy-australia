import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { doctorProfiles } from "@/lib/pages";
import { doctorsIntro } from "@/lib/content";
import { locationFallbacks } from "@/lib/location-content";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Surgically patch the vasectomy-count stats into the live Sanity documents so
 * they match the code. Only the specific fields are set — everything else
 * (uploaded images, other edits) is left untouched.
 *   GET /api/patch-stats?secret=SEED_SECRET
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
  const tx = client.transaction();
  const patched: string[] = [];

  for (const d of doctorProfiles) {
    tx.patch(`doctor.${d.id}`, {
      set: { badgeValue: d.badge.value, badgeLabel: d.badge.label },
    });
    patched.push(`doctor.${d.id}`);
  }

  tx.patch("homepage", { set: { doctorsBody: doctorsIntro.body } });
  patched.push("homepage.doctorsBody");

  const nc = locationFallbacks["vasectomy-newcastle"];
  if (nc) {
    tx.patch("locationPage.vasectomy-newcastle", {
      set: { whyBadgeValue: nc.whyBadgeValue, whyBadgeLabel: nc.whyBadgeLabel },
    });
    patched.push("locationPage.vasectomy-newcastle");
  }

  try {
    await tx.commit();
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "patch failed", patched },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, patched });
}
