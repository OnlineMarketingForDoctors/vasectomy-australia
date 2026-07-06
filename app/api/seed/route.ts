import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import {
  hero,
  pillars,
  doctorsIntro,
  doctors as homeDoctors,
  whyChoose,
  howItWorks,
  fees,
  zip,
  finalCta,
} from "@/lib/content";
import {
  doctorProfiles,
  faqAll,
  blogPosts,
  patientInfo,
  postOp,
  spermTest,
  medicare,
  drReferral,
  privacy,
} from "@/lib/pages";
import { locationsIntro, locationStates } from "@/lib/locations";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const keyed = <T extends object>(arr: T[]) =>
  arr.map((item, i) => ({ _key: String(i), ...item }));

const HOW_VIDEO =
  "https://drive.google.com/file/d/1HdK4ZIzeQ2Hs1Smu54hBPvHAxcwyqike/preview";

/**
 * One-time content seed. Runs on Vercel (which can reach Sanity).
 *   GET /api/seed?secret=SEED_SECRET
 * Requires env: SANITY_WRITE_TOKEN (Editor), SEED_SECRET.
 * Idempotent (createOrReplace) — safe to run more than once.
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

  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    title: "Vasectomy Australia",
    phoneLabel: "1800 SNIPME",
    phoneSub: "1800 764 763",
    phoneHref: "tel:1800764763",
    email: "info@vasectomyaustralia.com.au",
    bookingUrl: "https://vasectomyaustralia.gettimely.com/",
    googleRating: "5.0",
    googleCount: "361",
  });

  tx.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    heroEyebrow: hero.eyebrow,
    heroTitle: hero.title,
    heroLead: hero.lead,
    primaryCtaLabel: hero.primaryCta.label,
    primaryCtaHref: hero.primaryCta.href,
    secondaryCtaLabel: hero.secondaryCta.label,
    secondaryCtaHref: hero.secondaryCta.href,
    microStats: keyed(hero.microStats),
    pillars: keyed(pillars),
    doctorsEyebrow: doctorsIntro.eyebrow,
    doctorsTitle: doctorsIntro.title,
    doctorsBody: doctorsIntro.body,
    whyEyebrow: whyChoose.eyebrow,
    whyTitle: whyChoose.title,
    whyPoints: whyChoose.points,
    howEyebrow: howItWorks.eyebrow,
    howTitle: howItWorks.title,
    howBody: howItWorks.body,
    howVideoUrl: HOW_VIDEO,
    howSteps: keyed(howItWorks.steps),
    feesTitle: fees.title,
    feesRows: keyed(fees.rows),
    feesTotalLabel: fees.total.label,
    feesTotalValue: fees.total.value,
    feesTerms: fees.terms,
    zipTitle: zip.title,
    zipBody: zip.body,
    locationsEyebrow: locationsIntro.eyebrow,
    locationsTitle: locationsIntro.title,
    locationsBody: locationsIntro.body,
    finalCtaTitle: finalCta.title,
    finalCtaBody: finalCta.body,
  });

  doctorProfiles.forEach((d, i) => {
    const credentials = homeDoctors.find((x) => x.id === d.id)?.credentials ?? [];
    tx.createOrReplace({
      _id: `doctor.${d.id}`,
      _type: "doctor",
      name: d.name,
      slug: { _type: "slug", current: d.id },
      order: i,
      role: d.role,
      regions: d.regions,
      lead: d.lead,
      bio: d.bio,
      personal: d.personal,
      badgeValue: d.badge.value,
      badgeLabel: d.badge.label,
      credentials,
      qualifications: keyed(d.qualifications),
    });
  });

  faqAll.forEach((f, i) => {
    tx.createOrReplace({
      _id: `faq.${i}`,
      _type: "faq",
      question: f.q,
      answer: f.a,
      order: i,
    });
  });

  locationStates.forEach((s) => {
    s.clinics.forEach((c, j) => {
      tx.createOrReplace({
        _id: `clinic.${s.code}.${j}`,
        _type: "clinic",
        state: s.state,
        stateCode: s.code,
        doctor: s.doctor,
        city: c.city,
        name: c.clinic,
        address: c.address,
        order: j,
      });
    });
  });

  blogPosts.forEach((p) => {
    tx.createOrReplace({
      _id: `post.${p.slug}`,
      _type: "post",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      excerpt: p.excerpt,
      category: p.category,
      publishedAt: new Date(p.date).toISOString(),
    });
  });

  // Static long-form pages (singletons)
  tx.createOrReplace({
    _id: "patientInfoPage",
    _type: "patientInfoPage",
    intro: patientInfo.intro,
    consultation: patientInfo.consultation,
    procedure: patientInfo.procedure,
    preparing: patientInfo.preparing,
  });

  tx.createOrReplace({
    _id: "postOpPage",
    _type: "postOpPage",
    intro: postOp.intro,
    blocks: keyed(postOp.blocks),
    restrictions: keyed(postOp.restrictions),
    warning: postOp.warning,
    closing: postOp.closing,
  });

  tx.createOrReplace({
    _id: "spermTestPage",
    _type: "spermTestPage",
    intro: spermTest.intro,
    important: spermTest.important,
    options: keyed(spermTest.options),
    note: spermTest.note,
  });

  tx.createOrReplace({
    _id: "medicarePage",
    _type: "medicarePage",
    intro: medicare.intro,
    selfTitle: medicare.selfTitle,
    selfIntro: medicare.selfIntro,
    methods: keyed(medicare.methods),
    note: medicare.note,
  });

  tx.createOrReplace({
    _id: "drReferralPage",
    _type: "drReferralPage",
    intro: drReferral.intro,
    benefits: keyed(drReferral.benefits),
    closing: drReferral.closing,
  });

  tx.createOrReplace({
    _id: "privacyPage",
    _type: "privacyPage",
    intro: privacy.intro,
    sections: keyed(privacy.sections),
  });

  try {
    await tx.commit();
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "commit failed" },
      { status: 500 }
    );
  }

  const clinicCount = locationStates.reduce((n, s) => n + s.clinics.length, 0);
  return NextResponse.json({
    ok: true,
    seeded: {
      siteSettings: 1,
      homepage: 1,
      doctors: doctorProfiles.length,
      faqs: faqAll.length,
      clinics: clinicCount,
      posts: blogPosts.length,
      pages: 6,
    },
    note: "Upload images in the Studio (Homepage, Doctors, Blog).",
  });
}
