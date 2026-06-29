/**
 * Homepage content — adapted from the live vasectomyaustralia.com.au copy,
 * re-flowed for an editorial layout and re-focused on the two doctors
 * (Dr Geoff Cashion & Dr Matt Valentine). Patient testimonials are intentionally
 * omitted for AHPRA compliance; aggregate Google rating is shown instead.
 *
 * Kept as typed data so it maps directly onto Sanity documents later.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const nav: NavItem[] = [
  {
    label: "Patient Info",
    href: "/patient-info",
    children: [
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Post-Operative Instructions", href: "/post-operative-instructions" },
      { label: "Post-Vasectomy Semen Testing", href: "/sperm-test" },
      { label: "Vasectomy Fees", href: "/fees" },
      { label: "Medicare Rebate", href: "/medicare" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Fees", href: "/fees" },
  { label: "Locations", href: "/locations" },
  { label: "Dr Referral", href: "/dr-referral" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const site = {
  name: "Vasectomy Australia",
  phoneLabel: "1800 SNIPME",
  phoneSub: "1800 764 763",
  phoneHref: "tel:1800764763",
  email: "info@vasectomyaustralia.com.au",
  bookingUrl: "https://vasectomyaustralia.gettimely.com/",
  nav,
};

export const google = {
  rating: "5.0",
  count: "361",
  href: "https://www.google.com/search?q=vasectomy+australia+reviews",
};

export const hero = {
  eyebrow: "Dr Geoff Cashion & Dr Matt Valentine",
  title: "Safe, effective and affordable no-scalpel vasectomy.",
  lead:
    "Australia's most trusted vasectomists. Every procedure is performed by Geoff or Matt themselves — under local anaesthetic, in about 15 minutes, with a greater than 99% success rate.",
  primaryCta: { label: "Book online", href: "https://vasectomyaustralia.gettimely.com/" },
  secondaryCta: { label: "Meet Geoff & Matt", href: "#doctors" },
  microStats: [
    { value: "9,000+", label: "procedures a year" },
    { value: "~15 min", label: "in & out" },
    { value: ">99%", label: "effective" },
  ],
};

export const pillars = [
  {
    key: "Safe",
    body:
      "Vasectomy Australia performs every vasectomy under local anaesthetic. Most procedures take less than 15 minutes, and our no-scalpel technique means a quicker recovery — so you can get back to your usual activities, usually within 7 days.",
  },
  {
    key: "Effective",
    body:
      "A no-scalpel vasectomy with Vasectomy Australia has a greater than 99% success rate — one of the most reliable forms of contraception available.",
  },
  {
    key: "Affordable",
    body:
      "Vasectomy Australia is one of the most affordable vasectomies on the market, with a low out-of-pocket expense of just $597 after your Medicare rebate.",
  },
];

export const doctorsIntro = {
  eyebrow: "Our doctors",
  title: "You're not booking a clinic. You're booking Geoff or Matt.",
  body:
    "Both of our doctors trained under world-leading vasectomists and have dedicated their full-time practice to this one procedure — together performing over 9,000 cases a year. When you book with Vasectomy Australia, your vasectomy is done by Dr Geoff Cashion or Dr Matt Valentine personally, start to finish.",
};

export type Doctor = {
  id: string;
  name: string;
  role: string;
  region: string;
  image: "geoffPortrait" | "mattPortrait";
  lead: string;
  bio: string[];
  credentials: string[];
  badge: { value: string; label: string };
};

export const doctors: Doctor[] = [
  {
    id: "geoff",
    name: "Dr Geoff Cashion",
    role: "Founder & Lead Vasectomist",
    region: "New South Wales & South Australia",
    image: "geoffPortrait",
    lead:
      "Performs more no-scalpel vasectomies each year than any other doctor in Australia.",
    bio: [
      "Geoff founded Vasectomy Australia and has grown it into one of the country's largest dedicated vasectomy practices — while still personally performing more than 4,000 procedures a year.",
      "After graduating in medicine from the University of Queensland, he spent years in emergency medicine and general practice before training in the no-scalpel technique under Dr Doug Stein in Florida, one of the world's most respected vasectomy surgeons.",
    ],
    credentials: [
      "MBBS, University of Queensland",
      "Fellow, Australian College of Rural & Remote Medicine",
      "No-scalpel trained under Dr Doug Stein (Florida)",
      "Full-time vasectomist",
    ],
    badge: { value: "4,000+", label: "vasectomies a year" },
  },
  {
    id: "matt",
    name: "Dr Matt Valentine",
    role: "Vasectomist",
    region: "Queensland & ACT",
    image: "mattPortrait",
    lead:
      "Performing vasectomies since 2008 — with the lowest-risk, open-ended technique.",
    bio: [
      "Matt has been doing vasectomies since 2008, first training in the traditional technique and then travelling to the United States to specialise in the open-ended, no-scalpel method that carries the lowest possible risk of complications.",
      "He completed his medical degree at the University of Adelaide and spent five years as a full-time Medical Officer in the Royal Australian Air Force before dedicating his practice to vasectomy across Queensland and Canberra.",
    ],
    credentials: [
      "MBBS, University of Adelaide",
      "Former Medical Officer, Royal Australian Air Force",
      "US-trained, open-ended no-scalpel technique",
      "Performing vasectomies since 2008",
    ],
    badge: { value: "Since 2008", label: "performing vasectomies" },
  },
];

export const whyChoose = {
  eyebrow: "Why choose us",
  title: "Why men choose Vasectomy Australia.",
  points: [
    "Expert training under world-leading vasectomists",
    "Over 9,000 cases performed a year, collectively",
    "A gentle technique for fast recovery with minimal downtime",
    "No-scalpel and open-ended techniques",
    "One simple, affordable price",
    "24-hour after-care support",
    "Same-day consultation and procedure",
    "Free phone consultations available",
    "Multiple locations close to patients across Australia",
    "Quick and easy online bookings",
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "What actually happens — in about 15 minutes.",
  body:
    "Dr Cashion explains how a vasectomy works and what recovery looks like, so you can make an informed decision about whether it's right for you. The operation takes about 15 minutes and goes like this:",
  steps: [
    {
      n: "01",
      text: "A local anaesthetic is injected using a fine needle — it feels no worse than a flu injection or a dentist's needle.",
    },
    {
      n: "02",
      text: "A tiny hole is made in the scrotum — no scalpel, and no stitches required.",
    },
    {
      n: "03",
      text: "The vas deferens is divided and the testicular end is left open. This open-ended approach helps prevent congestion and reduces the risk of pain or post-vasectomy syndrome.",
    },
    {
      n: "04",
      text: "A tiny layer of tissue is placed between the two ends of the vas to stop them re-joining.",
    },
    {
      n: "05",
      text: "The same procedure is performed on the other side, through the very same opening.",
    },
    {
      n: "06",
      text: "The skin edge is clipped together without stitches, and a dressing is applied. You're done.",
    },
  ],
};

export const fees = {
  eyebrow: "Fees",
  title: "One simple price. Most of it covered by Medicare.",
  rows: [
    { label: "Vasectomy fee", value: "$825" },
    { label: "Less Medicare rebate", value: "−$228" },
  ],
  total: { label: "Out-of-pocket cost", value: "$597" },
  terms:
    "A $100 deposit secures your booking, with the $725 balance due on procedure day. We'll submit your Medicare claim after the procedure, and your $228 rebate will land in your bank account within 1–2 days. See our cancellation policy for details.",
};

export const zip = {
  title: "Vasectomy Australia now accepts Zip Money.",
  body:
    "Need a hand spreading the cost? You can now use Zip Money to pay for your procedure — apply and book in minutes.",
  primaryCta: { label: "Book using Zip Money", href: "https://vasectomyaustralia.gettimely.com/" },
  secondaryCta: { label: "Sign up for Zip", href: "https://zip.co/au/zip-money" },
};

export const locations = {
  eyebrow: "Locations",
  title: "No-scalpel vasectomy clinics across Australia.",
  body:
    "Geoff covers New South Wales and South Australia; Matt covers Queensland and the ACT. Between the team, Vasectomy Australia runs clinics close to patients in every state — so there's almost always one near you.",
  states: [
    { state: "New South Wales", cities: "Sydney CBD · Inner West · Eastern Suburbs · North Shore · Northern Beaches · The Hills · Penrith · Sutherland · Central Coast · Newcastle · Wollongong · Orange · Dubbo" },
    { state: "Queensland", cities: "Brisbane · Gold Coast · Sunshine Coast · Springfield · Toowoomba · Rockhampton · Mackay" },
    { state: "South Australia", cities: "Adelaide" },
    { state: "ACT", cities: "Canberra" },
    { state: "Victoria", cities: "Melbourne · Casey" },
    { state: "Western Australia", cities: "Perth" },
  ],
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is a vasectomy?",
    a: "A vasectomy is a simple, permanent form of male contraception. The vas deferens — the tubes that carry sperm — are divided so sperm can no longer reach the semen. Everything else stays exactly the same: your hormones, erections and ejaculation are unchanged.",
  },
  {
    q: "How long does the procedure take?",
    a: "The procedure itself takes about 15 minutes. Allow roughly 45 minutes at the clinic in total, including a final chat and getting you comfortable.",
  },
  {
    q: "What are the types of vasectomy?",
    a: "There are two broad approaches: the traditional scalpel method, and the modern no-scalpel technique we use — a single tiny opening made with a blunt instrument, which means less bleeding, less bruising and a faster recovery. We use an open-ended, no-scalpel technique.",
  },
  {
    q: "How old do I need to be to have a vasectomy?",
    a: "There's no strict legal age, but a vasectomy should be considered permanent, so we want you to be confident your family is complete. We're happy to talk it through with you at your consultation.",
  },
  {
    q: "Can I drive home after my vasectomy?",
    a: "Because the procedure is done under local anaesthetic — not sedation — most men are able to drive themselves home. If you'd feel more comfortable, arrange a lift.",
  },
  {
    q: "Can I have my procedure done under sedation or a general anaesthetic?",
    a: "Our procedure is designed around local anaesthetic, which is safer and quicker and means no hospital stay. If you have particular concerns, raise them during your free phone consultation.",
  },
  {
    q: "Is there any special preparation I need to do?",
    a: "Very little. Wear snug, supportive underwear, follow the simple pre-procedure instructions we send you, and have a light meal beforehand.",
  },
  {
    q: "Can I get my vasectomy reversed?",
    a: "A vasectomy should be considered permanent. Reversals are sometimes possible but are never guaranteed and are not covered by Medicare, so it's best chosen when you're sure.",
  },
  {
    q: "What are the risks of having a vasectomy?",
    a: "A vasectomy is very safe. As with any procedure there are small risks such as bruising, swelling, infection or, rarely, ongoing discomfort. Our open-ended, no-scalpel technique is chosen specifically to keep these risks as low as possible.",
  },
  {
    q: "When will I know the procedure has worked?",
    a: "You'll provide a follow-up semen sample for analysis. Until you receive the all-clear, keep using your usual contraception.",
  },
  {
    q: "When can I go back to work?",
    a: "Most men with a desk job are back within a day or two. Allow a little longer if your work is physically demanding.",
  },
  {
    q: "When can I start having sex again?",
    a: "Most men wait about a week. Remember to keep using contraception until your semen analysis confirms the procedure has worked.",
  },
  {
    q: "Do I need a referral from my GP?",
    a: "No referral is needed to book with us. GPs are welcome to refer patients — see our Dr Referral page.",
  },
  {
    q: "How many days does it take to recover?",
    a: "Most men feel back to normal in about 7 days — some sooner, and some take up to a couple of weeks.",
  },
  {
    q: "Do you do the “laser” vasectomy?",
    a: "There's no such thing as a true “laser” vasectomy — it's a marketing term. We use the proven no-scalpel, open-ended technique.",
  },
  {
    q: "How should I prepare for my vasectomy?",
    a: "Wear supportive underwear, follow the simple instructions we send before your appointment, and have a light meal beforehand. That's all that's needed.",
  },
  {
    q: "How does recovery take place?",
    a: "Rest for 24–48 hours with support and an ice pack as needed, avoid heavy lifting and strenuous activity for about a week, and use simple pain relief if you need it. We also offer 24-hour after-care support.",
  },
  {
    q: "How do I get my Medicare rebate?",
    a: "We submit your Medicare claim for you after the procedure, and your $228 rebate is typically in your bank account within 1–2 days.",
  },
  {
    q: "Can I use my private health insurance?",
    a: "A vasectomy with us is an out-of-hospital procedure partly covered by Medicare; private health insurance generally doesn't apply, but you're welcome to check with your fund.",
  },
];

export const finalCta = {
  eyebrow: "Ready when you are",
  title: "Ready to book now?",
  body:
    "It's quicker, calmer and easier than you're imagining — and you'll be in the hands of two of the most experienced vasectomists in the country. Free phone consultations are available.",
  primaryCta: { label: "Book online", href: "https://vasectomyaustralia.gettimely.com/" },
  secondaryCta: { label: "See clinic locations", href: "#locations" },
};
