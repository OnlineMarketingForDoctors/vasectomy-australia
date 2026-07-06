import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { locationFallbacks } from "@/lib/location-content";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Upload the code-fallback location images into Sanity and attach them to the
 * matching locationPage documents. Runs on Vercel (which can reach both the
 * image CDN and Sanity). Idempotent — an image slot that is already set is left
 * untouched, so it never overwrites an image chosen in the Studio.
 *   GET /api/seed-location-images?secret=SEED_SECRET
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
  const uploaded: string[] = [];
  const skipped: string[] = [];

  try {
    for (const [slug, c] of Object.entries(locationFallbacks)) {
      const docId = `locationPage.${slug}`;
      const existing = (await client.getDocument(docId)) as Record<string, unknown> | undefined;
      if (!existing) {
        skipped.push(`${slug} (no document — run /api/seed-locations first)`);
        continue;
      }

      const slots: { field: string; src: string }[] = [
        { field: "heroImage", src: c.heroImage.src },
        { field: "whatIsImage", src: c.whatIsImage.src },
        { field: "whyImage", src: c.whyImage.src },
      ];

      const patch = client.patch(docId);
      let changed = false;

      for (const slot of slots) {
        if (existing[slot.field]) {
          skipped.push(`${slug}.${slot.field} (already set)`);
          continue;
        }
        const res = await fetch(slot.src);
        if (!res.ok) {
          skipped.push(`${slug}.${slot.field} (fetch ${res.status})`);
          continue;
        }
        const buf = Buffer.from(await res.arrayBuffer());
        const asset = await client.assets.upload("image", buf, {
          filename: `${slug}-${slot.field}.png`,
          contentType: res.headers.get("content-type") || "image/png",
        });
        patch.set({
          [slot.field]: {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
          },
        });
        changed = true;
        uploaded.push(`${slug}.${slot.field}`);
      }

      if (changed) await patch.commit();
    }
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "upload failed", uploaded },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, uploaded, skipped });
}
