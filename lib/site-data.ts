/**
 * Server-side content layer. Each getter reads from Sanity and falls back to
 * the code-based content (lib/content, lib/pages, lib/locations) whenever Sanity
 * is unreachable or a field is empty — so the site always renders, CMS edits win
 * when present. Images resolve to the uploaded Sanity asset if there is one,
 * otherwise the existing editorial image.
 */
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor, type ImageSource } from "@/sanity/lib/image";
import { images, type SiteImage } from "@/lib/images";
import {
  hero,
  pillars,
  doctorsIntro,
  whyChoose,
  howItWorks,
  fees,
  zip,
  finalCta,
  doctors as contentDoctors,
} from "@/lib/content";
import { doctorProfiles, faqAll, blogPosts } from "@/lib/pages";
import { locationsIntro, locationStates, type LocationState } from "@/lib/locations";
import { locationFallbacks, type LocationView } from "@/lib/location-content";

const HOW_VIDEO =
  "https://drive.google.com/file/d/1HdK4ZIzeQ2Hs1Smu54hBPvHAxcwyqike/preview";

/* --------------------------------------------------------------- helpers */

type SanityImageRef = { asset?: { _ref?: string } | null } | null | undefined;

function resolveImg(src: SanityImageRef, fallback: SiteImage, width = 1600): SiteImage {
  if (src && src.asset && src.asset._ref) {
    return {
      src: urlFor(src as unknown as ImageSource).width(width).auto("format").url(),
      alt: fallback.alt,
    };
  }
  return fallback;
}

const str = (v: unknown, fb: string) =>
  typeof v === "string" && v.trim() !== "" ? v : fb;

function arr<T>(v: T[] | null | undefined, fb: T[]): T[] {
  return v && v.length ? v : fb;
}

/* -------------------------------------------------------------- homepage */

type HomepageDoc = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroLead?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  microStats?: { value: string; label: string }[];
  heroImage?: SanityImageRef;
  pillars?: { key: string; body: string }[];
  doctorsEyebrow?: string;
  doctorsTitle?: string;
  doctorsBody?: string;
  doctorsImage?: SanityImageRef;
  whyEyebrow?: string;
  whyTitle?: string;
  whyPoints?: string[];
  whyImage?: SanityImageRef;
  howEyebrow?: string;
  howTitle?: string;
  howBody?: string;
  howVideoUrl?: string;
  howSteps?: { n: string; text: string }[];
  howImageTop?: SanityImageRef;
  howImageBottom?: SanityImageRef;
  feesTitle?: string;
  feesRows?: { label: string; value: string }[];
  feesTotalLabel?: string;
  feesTotalValue?: string;
  feesTerms?: string;
  feesImage?: SanityImageRef;
  zipTitle?: string;
  zipBody?: string;
  locationsEyebrow?: string;
  locationsTitle?: string;
  locationsBody?: string;
  finalCtaTitle?: string;
  finalCtaBody?: string;
  finalCtaImage?: SanityImageRef;
};

const HOMEPAGE_QUERY = `*[_id == "homepage"][0]{
  heroEyebrow, heroTitle, heroLead, primaryCtaLabel, primaryCtaHref,
  secondaryCtaLabel, secondaryCtaHref, microStats[]{value, label}, heroImage,
  pillars[]{key, body},
  doctorsEyebrow, doctorsTitle, doctorsBody, doctorsImage,
  whyEyebrow, whyTitle, whyPoints, whyImage,
  howEyebrow, howTitle, howBody, howVideoUrl, howSteps[]{n, text}, howImageTop, howImageBottom,
  feesTitle, feesRows[]{label, value}, feesTotalLabel, feesTotalValue, feesTerms, feesImage,
  zipTitle, zipBody,
  locationsEyebrow, locationsTitle, locationsBody,
  finalCtaTitle, finalCtaBody, finalCtaImage
}`;

export async function getHomeContent() {
  const s = (await sanityFetch<HomepageDoc>(HOMEPAGE_QUERY)) ?? {};
  return {
    hero: {
      eyebrow: str(s.heroEyebrow, hero.eyebrow),
      title: str(s.heroTitle, hero.title),
      lead: str(s.heroLead, hero.lead),
      primaryCta: {
        label: str(s.primaryCtaLabel, hero.primaryCta.label),
        href: str(s.primaryCtaHref, hero.primaryCta.href),
      },
      secondaryCta: {
        label: str(s.secondaryCtaLabel, hero.secondaryCta.label),
        href: str(s.secondaryCtaHref, hero.secondaryCta.href),
      },
      microStats: arr(s.microStats, hero.microStats),
    },
    heroImage: resolveImg(s.heroImage, images.heroWide, 2000),
    pillars: arr(s.pillars, pillars),
    doctorsIntro: {
      eyebrow: str(s.doctorsEyebrow, doctorsIntro.eyebrow),
      title: str(s.doctorsTitle, doctorsIntro.title),
      body: str(s.doctorsBody, doctorsIntro.body),
    },
    doctorsImage: resolveImg(s.doctorsImage, images.doctorsDiscussion, 1800),
    whyChoose: {
      eyebrow: str(s.whyEyebrow, whyChoose.eyebrow),
      title: str(s.whyTitle, whyChoose.title),
      points: arr(s.whyPoints, whyChoose.points),
    },
    whyImage: resolveImg(s.whyImage, images.geoffProcedure),
    howItWorks: {
      eyebrow: str(s.howEyebrow, howItWorks.eyebrow),
      title: str(s.howTitle, howItWorks.title),
      body: str(s.howBody, howItWorks.body),
      videoUrl: str(s.howVideoUrl, HOW_VIDEO),
      steps: arr(s.howSteps, howItWorks.steps),
    },
    howImageTop: resolveImg(s.howImageTop, images.procedure),
    howImageBottom: resolveImg(s.howImageBottom, images.anaesthetic),
    fees: {
      eyebrow: fees.eyebrow,
      title: str(s.feesTitle, fees.title),
      rows: arr(s.feesRows, fees.rows),
      total: {
        label: str(s.feesTotalLabel, fees.total.label),
        value: str(s.feesTotalValue, fees.total.value),
      },
      terms: str(s.feesTerms, fees.terms),
    },
    feesImage: resolveImg(s.feesImage, images.consult),
    zip: {
      title: str(s.zipTitle, zip.title),
      body: str(s.zipBody, zip.body),
      primaryCta: zip.primaryCta,
      secondaryCta: zip.secondaryCta,
    },
    locationsIntro: {
      eyebrow: str(s.locationsEyebrow, locationsIntro.eyebrow),
      title: str(s.locationsTitle, locationsIntro.title),
      body: str(s.locationsBody, locationsIntro.body),
    },
    finalCta: {
      eyebrow: finalCta.eyebrow,
      title: str(s.finalCtaTitle, finalCta.title),
      body: str(s.finalCtaBody, finalCta.body),
      primaryCta: finalCta.primaryCta,
      secondaryCta: finalCta.secondaryCta,
    },
    finalCtaImage: resolveImg(s.finalCtaImage, images.ctaDoctors, 2000),
  };
}

export type HomeContent = Awaited<ReturnType<typeof getHomeContent>>;

/* --------------------------------------------------------------- doctors */

export type SiteDoctor = {
  id: string;
  name: string;
  role: string;
  regions: string;
  lead: string;
  bio: string[];
  personal: string;
  credentials: string[];
  qualifications: { year: string; text: string }[];
  badge: { value: string; label: string };
  image: SiteImage;
};

type DoctorDoc = {
  _id: string;
  slug?: string;
  name?: string;
  role?: string;
  regions?: string;
  lead?: string;
  bio?: string[];
  personal?: string;
  badgeValue?: string;
  badgeLabel?: string;
  credentials?: string[];
  qualifications?: { year: string; text: string }[];
  image?: SanityImageRef;
};

const DOCTORS_QUERY = `*[_type == "doctor"] | order(order asc){
  _id, "slug": slug.current, name, role, regions, lead, bio, personal,
  badgeValue, badgeLabel, credentials, qualifications[]{year, text}, image
}`;

function portraitFor(id: string): SiteImage {
  return id === "matt" ? images.mattPortrait : images.geoffPortrait;
}

function codeDoctors(): SiteDoctor[] {
  return doctorProfiles.map((d) => ({
    id: d.id,
    name: d.name,
    role: d.role,
    regions: d.regions,
    lead: d.lead,
    bio: d.bio,
    personal: d.personal,
    credentials: contentDoctors.find((x) => x.id === d.id)?.credentials ?? [],
    qualifications: d.qualifications,
    badge: d.badge,
    image: images[d.image],
  }));
}

export async function getDoctors(): Promise<SiteDoctor[]> {
  const docs = await sanityFetch<DoctorDoc[]>(DOCTORS_QUERY);
  if (!docs || !docs.length) return codeDoctors();
  return docs.map((d) => {
    const id = d.slug || d._id.replace(/^doctor\./, "");
    const fallback = codeDoctors().find((x) => x.id === id);
    return {
      id,
      name: str(d.name, fallback?.name ?? ""),
      role: str(d.role, fallback?.role ?? ""),
      regions: str(d.regions, fallback?.regions ?? ""),
      lead: str(d.lead, fallback?.lead ?? ""),
      bio: arr(d.bio, fallback?.bio ?? []),
      personal: str(d.personal, fallback?.personal ?? ""),
      credentials: arr(d.credentials, fallback?.credentials ?? []),
      qualifications: arr(d.qualifications, fallback?.qualifications ?? []),
      badge: {
        value: str(d.badgeValue, fallback?.badge.value ?? ""),
        label: str(d.badgeLabel, fallback?.badge.label ?? ""),
      },
      image: resolveImg(d.image, fallback?.image ?? portraitFor(id)),
    };
  });
}

/* ------------------------------------------------------------------- faqs */

export async function getFaqs(): Promise<{ q: string; a: string }[]> {
  const docs = await sanityFetch<{ question: string; answer: string }[]>(
    `*[_type == "faq"] | order(order asc){question, answer}`
  );
  if (!docs || !docs.length) return faqAll;
  return docs.map((f) => ({ q: f.question, a: f.answer }));
}

/* -------------------------------------------------------------- clinics */

type ClinicDoc = {
  state?: string;
  stateCode?: string;
  doctor?: string;
  city?: string;
  name?: string;
  address?: string;
};

export async function getClinicStates(): Promise<LocationState[]> {
  const docs = await sanityFetch<ClinicDoc[]>(
    `*[_type == "clinic"] | order(order asc){state, stateCode, doctor, city, name, address}`
  );
  if (!docs || !docs.length) return locationStates;

  const order = locationStates.map((s) => s.code);
  const groups = new Map<string, LocationState>();
  for (const c of docs) {
    const code = c.stateCode || c.state || "—";
    let g = groups.get(code);
    if (!g) {
      g = { state: c.state || code, code, doctor: c.doctor || "", clinics: [] };
      groups.set(code, g);
    }
    g.clinics.push({
      city: c.city || "",
      clinic: c.name || "",
      address: c.address || "",
    });
  }
  return [...groups.values()].sort((a, b) => {
    const ia = order.indexOf(a.code);
    const ib = order.indexOf(b.code);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}

/* ------------------------------------------------------------------ blog */

const POST_IMAGES: SiteImage[] = [
  images.consult,
  images.procedure,
  images.recovery,
  images.treatmentRoom,
  images.anaesthetic,
  images.geoffProcedure,
];

export type SitePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  cover: SiteImage;
};

type PostDoc = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  coverImage?: SanityImageRef;
};

export async function getPosts(): Promise<SitePost[]> {
  const docs = await sanityFetch<PostDoc[]>(
    `*[_type == "post"] | order(publishedAt desc){title, "slug": slug.current, excerpt, category, publishedAt, coverImage}`
  );
  if (!docs || !docs.length) {
    return blogPosts.map((p, i) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      date: p.date,
      cover: POST_IMAGES[i % POST_IMAGES.length],
    }));
  }
  return docs.map((p, i) => ({
    slug: p.slug || "",
    title: p.title || "",
    excerpt: p.excerpt || "",
    category: p.category || "",
    date: p.publishedAt || "",
    cover: resolveImg(p.coverImage, POST_IMAGES[i % POST_IMAGES.length], 1200),
  }));
}

export type PostDetail = SitePost & { body: unknown[] | null };

export async function getPost(slug: string): Promise<PostDetail | null> {
  const doc = await sanityFetch<PostDoc & { body?: unknown[] }>(
    `*[_type == "post" && slug.current == $slug][0]{title, "slug": slug.current, excerpt, category, publishedAt, coverImage, body}`,
    { slug }
  );
  if (doc && doc.slug) {
    return {
      slug: doc.slug,
      title: doc.title || "",
      excerpt: doc.excerpt || "",
      category: doc.category || "",
      date: doc.publishedAt || "",
      cover: resolveImg(doc.coverImage, images.treatmentRoom, 2000),
      body: doc.body && doc.body.length ? doc.body : null,
    };
  }
  const code = blogPosts.find((p) => p.slug === slug);
  if (!code) return null;
  return {
    slug: code.slug,
    title: code.title,
    excerpt: code.excerpt,
    category: code.category,
    date: code.date,
    cover: images.treatmentRoom,
    body: null,
  };
}

export async function getPostSlugs(): Promise<string[]> {
  const codeSlugs = blogPosts.map((p) => p.slug);
  const docs = await sanityFetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`
  );
  const sanitySlugs = (docs ?? []).map((d) => d.slug).filter(Boolean);
  return [...new Set([...codeSlugs, ...sanitySlugs])];
}

/* -------------------------------------------------------- location pages */

type LocationDoc = {
  title?: string;
  slug?: string;
  eyebrow?: string;
  lead?: string;
  heroImage?: SanityImageRef;
  seoTitle?: string;
  seoDescription?: string;
  introBody?: unknown[];
  whatIsHeading?: string;
  whatIsBody?: unknown[];
  whatIsImage?: SanityImageRef;
  recoveryHeading?: string;
  recoveryBody?: unknown[];
  whyHeading?: string;
  whyBody?: unknown[];
  whyImage?: SanityImageRef;
  whyBadgeValue?: string;
  whyBadgeLabel?: string;
  areasHeading?: string;
  areasBody?: unknown[];
  nswClinics?: string[];
  otherClinics?: string[];
  mapQuery?: string;
  areasOutro?: unknown[];
  costHeading?: string;
  costBody?: unknown[];
  showFees?: boolean;
  costTerms?: string;
  faqHeading?: string;
  faqs?: { question: string; answer: string[] }[];
  ctaTitle?: string;
};

const LOCATION_QUERY = `*[_type == "locationPage" && slug.current == $slug][0]{
  title, "slug": slug.current, eyebrow, lead, heroImage,
  seoTitle, seoDescription,
  introBody,
  whatIsHeading, whatIsBody, whatIsImage,
  recoveryHeading, recoveryBody,
  whyHeading, whyBody, whyImage, whyBadgeValue, whyBadgeLabel,
  areasHeading, areasBody, nswClinics, otherClinics, mapQuery, areasOutro,
  costHeading, costBody, showFees, costTerms,
  faqHeading, faqs[]{question, answer},
  ctaTitle
}`;

function defaultLocation(slug: string): LocationView {
  return {
    slug,
    title: slug,
    eyebrow: "",
    lead: "",
    heroImage: images.reception,
    seoTitle: "",
    seoDescription: "",
    introBody: [],
    whatIsHeading: "What Is A Vasectomy?",
    whatIsBody: [],
    whatIsImage: images.consult,
    recoveryHeading: "What Is Involved in The Recovery of a Vasectomy?",
    recoveryBody: [],
    whyHeading: "Why Choose Vasectomy Australia?",
    whyBody: [],
    whyImage: images.geoffPortrait,
    whyBadgeValue: "",
    whyBadgeLabel: "",
    areasHeading: "Which Locations Are Serviced by Vasectomy Australia?",
    areasBody: [],
    nswClinics: [],
    otherClinics: [],
    mapQuery: "Australia",
    areasOutro: [],
    costHeading: "How Much Does the Vasectomy Procedure Cost?",
    costBody: [],
    showFees: true,
    costTerms: "",
    faqHeading: "Frequently Asked Questions",
    faqs: [],
    ctaTitle: "Book your vasectomy.",
  };
}

export async function getLocationPage(slug: string): Promise<LocationView | null> {
  const doc = await sanityFetch<LocationDoc>(LOCATION_QUERY, { slug });
  const fb = locationFallbacks[slug];
  if (!doc && !fb) return null;

  const base = fb ?? defaultLocation(slug);
  if (!doc) return base;

  const body = (v: unknown[] | undefined, fbv: unknown[]) =>
    Array.isArray(v) && v.length ? v : fbv;

  return {
    slug,
    title: str(doc.title, base.title),
    eyebrow: str(doc.eyebrow, base.eyebrow),
    lead: str(doc.lead, base.lead),
    heroImage: resolveImg(doc.heroImage, base.heroImage, 2000),
    seoTitle: str(doc.seoTitle, base.seoTitle || base.title),
    seoDescription: str(doc.seoDescription, base.seoDescription),
    introBody: body(doc.introBody, base.introBody),
    whatIsHeading: str(doc.whatIsHeading, base.whatIsHeading),
    whatIsBody: body(doc.whatIsBody, base.whatIsBody),
    whatIsImage: resolveImg(doc.whatIsImage, base.whatIsImage),
    recoveryHeading: str(doc.recoveryHeading, base.recoveryHeading),
    recoveryBody: body(doc.recoveryBody, base.recoveryBody),
    whyHeading: str(doc.whyHeading, base.whyHeading),
    whyBody: body(doc.whyBody, base.whyBody),
    whyImage: resolveImg(doc.whyImage, base.whyImage),
    whyBadgeValue: str(doc.whyBadgeValue, base.whyBadgeValue),
    whyBadgeLabel: str(doc.whyBadgeLabel, base.whyBadgeLabel),
    areasHeading: str(doc.areasHeading, base.areasHeading),
    areasBody: body(doc.areasBody, base.areasBody),
    nswClinics: arr(doc.nswClinics, base.nswClinics),
    otherClinics: arr(doc.otherClinics, base.otherClinics),
    mapQuery: str(doc.mapQuery, base.mapQuery),
    areasOutro: body(doc.areasOutro, base.areasOutro),
    costHeading: str(doc.costHeading, base.costHeading),
    costBody: body(doc.costBody, base.costBody),
    showFees: typeof doc.showFees === "boolean" ? doc.showFees : base.showFees,
    costTerms: str(doc.costTerms, base.costTerms),
    faqHeading: str(doc.faqHeading, base.faqHeading),
    faqs:
      doc.faqs && doc.faqs.length
        ? doc.faqs.map((f) => ({ question: f.question, answer: f.answer ?? [] }))
        : base.faqs,
    ctaTitle: str(doc.ctaTitle, base.ctaTitle),
  };
}

export async function getLocationSlugs(): Promise<string[]> {
  const codeSlugs = Object.keys(locationFallbacks);
  const docs = await sanityFetch<{ slug: string }[]>(
    `*[_type == "locationPage" && defined(slug.current)]{"slug": slug.current}`
  );
  const sanitySlugs = (docs ?? []).map((d) => d.slug).filter(Boolean);
  return [...new Set([...codeSlugs, ...sanitySlugs])];
}
