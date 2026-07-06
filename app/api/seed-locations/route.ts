import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { locationFallbacks } from "@/lib/location-content";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const keyed = <T extends object>(arr: T[]) =>
  arr.map((item, i) => ({ _key: String(i), ...item }));

/**
 * Seed the code-based location pages into Sanity so they are editable in the
 * Studio. Uses createIfNotExists — it never overwrites a document that already
 * exists, so it is safe to run more than once and will not clobber CMS edits.
 *   GET /api/seed-locations?secret=SEED_SECRET
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
  const slugs = Object.keys(locationFallbacks);

  for (const slug of slugs) {
    const c = locationFallbacks[slug];
    tx.createIfNotExists({
      _id: `locationPage.${slug}`,
      _type: "locationPage",
      title: c.title,
      slug: { _type: "slug", current: c.slug },
      eyebrow: c.eyebrow,
      lead: c.lead,
      seoTitle: c.seoTitle,
      seoDescription: c.seoDescription,
      introBody: c.introBody,
      whatIsHeading: c.whatIsHeading,
      whatIsBody: c.whatIsBody,
      recoveryHeading: c.recoveryHeading,
      recoveryBody: c.recoveryBody,
      whyHeading: c.whyHeading,
      whyBody: c.whyBody,
      whyBadgeValue: c.whyBadgeValue,
      whyBadgeLabel: c.whyBadgeLabel,
      areasHeading: c.areasHeading,
      areasBody: c.areasBody,
      nswClinics: c.nswClinics,
      otherClinics: c.otherClinics,
      mapQuery: c.mapQuery,
      areasOutro: c.areasOutro,
      costHeading: c.costHeading,
      costBody: c.costBody,
      showFees: c.showFees,
      costTerms: c.costTerms,
      faqHeading: c.faqHeading,
      faqs: keyed(c.faqs),
      ctaTitle: c.ctaTitle,
    });
  }

  try {
    await tx.commit();
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "commit failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    seeded: { locationPages: slugs.length, slugs },
    note: "Existing docs were left untouched. Upload hero/family/doctor images in the Studio.",
  });
}
