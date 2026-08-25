/**
 * Editorial imagery for the homepage.
 *
 * AI-generated scenes (Higgsfield / Nano Banana Pro) built from the real
 * reference photos of Dr Geoff Cashion and Dr Matt Valentine, served from the
 * Higgsfield CloudFront CDN. When content moves into Sanity, each `src` becomes
 * a CMS image field and this map is replaced by the query.
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
    src: `${CDN}/hf_20260825_123712_ad9012c5-97c1-4a34-a45d-b37a19e66857_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine, the doctors behind Vasectomy Australia",
  },
  // Homepage hero — both doctors on the right (Geoff right, Matt left),
  // open negative space on the left (16:9)
  heroWide: {
    src: `${CDN}/hf_20260825_123711_84abaa80-d426-4f43-b75e-b194fe217f4f_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine in a modern clinic",
  },
  // Dr Geoff environmental portrait (4:5)
  geoffPortrait: {
    src: `${CDN}/hf_20260825_123711_14e8db29-9096-4c4e-ae3e-115ca71edd03_min.webp`,
    alt: "Dr Geoff Cashion, founder of Vasectomy Australia",
  },
  // Dr Matt environmental portrait (4:5)
  mattPortrait: {
    src: `${CDN}/hf_20260825_123711_815de6fe-854e-4346-ae12-b471fe8c4ed1_min.webp`,
    alt: "Dr Matt Valentine, vasectomist at Vasectomy Australia",
  },
  // Procedure — gloved hands + instrument tray (3:2)
  procedure: {
    src: `${CDN}/hf_20260628_231517_2e9f3c37-63f6-4b62-a91e-d2a755d518e6_min.webp`,
    alt: "Sterile instruments in a modern no-scalpel vasectomy clinic",
  },
  // Consultation scene (3:2)
  consult: {
    src: `${CDN}/hf_20260628_231521_b1428970-55ea-452c-ae14-ea3488d649c2_min.webp`,
    alt: "A Vasectomy Australia doctor consulting with a patient",
  },
  // Both doctors, candid wide (16:9)
  ctaDoctors: {
    src: `${CDN}/hf_20260825_123711_4d98828f-7fe5-4d66-9cae-bbe5416720ec_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine at Vasectomy Australia",
  },
  // Clinic reception interior (3:2)
  reception: {
    src: `${CDN}/hf_20260629_000652_63c0fe27-7866-4543-9769-d8890c2c2b3b_min.webp`,
    alt: "The calm, modern reception of a Vasectomy Australia clinic",
  },
  // Local anaesthetic — gentle fine-needle detail (3:2)
  anaesthetic: {
    src: `${CDN}/hf_20260629_000653_56c693ad-fe6a-467f-b179-762326ad36e5_min.webp`,
    alt: "A doctor preparing a fine needle of local anaesthetic",
  },
  // Dr Geoff in the procedure room (3:2)
  geoffProcedure: {
    src: `${CDN}/hf_20260825_123711_be12e38f-1232-4821-90b5-5418e4fe6cd6_min.webp`,
    alt: "Dr Geoff Cashion preparing in a modern procedure room",
  },
  // Both doctors together (16:9)
  doctorsDiscussion: {
    src: `${CDN}/hf_20260825_123712_d79a39c2-40fb-4147-9fdd-d5ec75a6bd42_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine at Vasectomy Australia",
  },
  // Both doctors in conversation (16:9)
  doctorsConversation: {
    src: `${CDN}/hf_20260825_123711_ab7cb65e-c146-427e-8452-c6f201f5aacf_min.webp`,
    alt: "Dr Geoff Cashion and Dr Matt Valentine in conversation",
  },
  // Bright, empty modern procedure room (16:9)
  treatmentRoom: {
    src: `${CDN}/hf_20260629_004220_07b880c8-d33f-4d88-96e2-95d1aad09abe_min.webp`,
    alt: "A bright, modern Vasectomy Australia procedure room",
  },
  // Man relaxing at home — recovery (3:2)
  recovery: {
    src: `${CDN}/hf_20260629_004221_ec514d2a-0262-4a78-a007-3fe237a6d968_min.webp`,
    alt: "A man resting comfortably at home during vasectomy recovery",
  },
} satisfies Record<string, SiteImage>;
