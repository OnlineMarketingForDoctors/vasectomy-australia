/**
 * Editorial imagery for the homepage.
 *
 * These are AI-generated scenes (Higgsfield / Nano Banana Pro) built from the
 * real reference photos of Dr Geoff Cashion and Dr Matt Valentine, currently
 * served from the Higgsfield CloudFront CDN. When content moves into Sanity,
 * each `src` becomes a CMS image field and this map is replaced by the query.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

const CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG";

export const images = {
  // Hero — Geoff & Matt together (4:5)
  heroDoctors: {
    src: `${CDN}/hf_20260628_231437_cdc0b73c-b5be-42e9-821c-34c9835ac58f_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine, the doctors behind Vasectomy Australia, in a modern clinic",
  },
  // Dr Geoff environmental portrait (4:5)
  geoffPortrait: {
    src: `${CDN}/hf_20260628_231513_0a72e0e2-c45d-41d9-81bc-fe972184568a_min.webp`,
    alt: "Dr Geoff Cashion, founder of Vasectomy Australia",
  },
  // Dr Matt environmental portrait (4:5)
  mattPortrait: {
    src: `${CDN}/hf_20260628_231515_830f7ff8-002b-4f8a-9072-c82dd86633f7_min.webp`,
    alt: "Dr Matt Valentine, vasectomist at Vasectomy Australia",
  },
  // Procedure — clinical detail (3:2)
  procedure: {
    src: `${CDN}/hf_20260628_231517_2e9f3c37-63f6-4b62-a91e-d2a755d518e6_min.webp`,
    alt: "Gloved hands and a sterile instrument tray in a modern vasectomy clinic",
  },
  // Consultation scene (3:2)
  consult: {
    src: `${CDN}/hf_20260628_231521_b1428970-55ea-452c-ae14-ea3488d649c2_min.webp`,
    alt: "A Vasectomy Australia doctor consulting with a patient",
  },
  // Final CTA — both doctors, candid wide (16:9)
  ctaDoctors: {
    src: `${CDN}/hf_20260628_231524_8f1eae10-1b54-43dd-a8df-e952a64a26a1_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine at Vasectomy Australia",
  },
} satisfies Record<string, SiteImage>;
