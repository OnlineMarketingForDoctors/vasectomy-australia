/**
 * Homepage content. Structured as plain data so it maps directly onto Sanity
 * documents/objects when the CMS is wired up. Copy is adapted from the current
 * vasectomyaustralia.com.au site, restructured for an editorial layout and
 * re-focused on the two doctors (Dr Geoff Cashion & Dr Matt Valentine).
 */

export const site = {
  name: "Vasectomy Australia",
  bookingUrl: "https://vasectomyaustralia.gettimely.com/",
  nav: [
    { label: "The Doctors", href: "#doctors" },
    { label: "The Procedure", href: "#procedure" },
    { label: "Reviews", href: "#reviews" },
    { label: "Locations", href: "#locations" },
    { label: "Cost", href: "#cost" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const hero = {
  eyebrow: "Australia's most trusted vasectomists",
  // The names lead — the brand sits behind the doctors.
  titleLines: ["Geoff", "& Matt."],
  lead:
    "Two doctors. One quiet reputation built on thousands of men who'd send a mate without a second thought. This is the team behind Vasectomy Australia.",
  primaryCta: { label: "Book your vasectomy", href: "https://vasectomyaustralia.gettimely.com/" },
  secondaryCta: { label: "Meet Geoff & Matt", href: "#doctors" },
  microStats: [
    { value: "4,000+", label: "a year" },
    { value: "<15 min", label: "in & out" },
    { value: ">99%", label: "effective" },
  ],
};

export const stats = [
  { value: "4,000+", label: "Vasectomies a year, by Dr Geoff alone" },
  { value: "23,000+", label: "Procedures performed by the team" },
  { value: ">99%", label: "Effective at preventing pregnancy" },
  { value: "<15 min", label: "Most procedures, start to finish" },
];

export const doctorsIntro = {
  eyebrow: "The doctors",
  title: "You're not booking a clinic. You're booking Geoff or Matt.",
  body:
    "Most men who come to us were sent by someone who'd been through it — a brother, a mate, a colleague who said \"go and see this bloke.\" That word-of-mouth is the whole business. So we keep it simple: every procedure is done by Dr Geoff Cashion or Dr Matt Valentine — two of the most experienced no-scalpel vasectomists in the country — not a rotating roster of faces you'll never meet again.",
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
  stat: { value: string; label: string };
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
      "Full-time vasectomist since 2017",
    ],
    stat: { value: "4,000+", label: "vasectomies a year" },
  },
  {
    id: "matt",
    name: "Dr Matt Valentine",
    role: "Vasectomist",
    region: "Queensland & ACT",
    image: "mattPortrait",
    lead:
      "Performing vasectomies in Brisbane since 2008 — with the lowest risk, open-ended technique.",
    bio: [
      "Matt has been doing vasectomies since 2008, first training in the traditional technique and then travelling to the United States to specialise in the open-ended, no-scalpel method that has the lowest possible risk of complications.",
      "He completed his medical degree at the University of Adelaide and spent five years as a full-time Medical Officer in the Royal Australian Air Force before dedicating his practice to men's procedures across Queensland and Canberra.",
    ],
    credentials: [
      "MBBS, University of Adelaide",
      "Former Medical Officer, Royal Australian Air Force",
      "US-trained, open-ended no-scalpel technique",
      "Performing vasectomies since 2008",
    ],
    stat: { value: "Since 2008", label: "thousands of procedures" },
  },
];

export const pullQuote = {
  quote: "He's the doc who did my vasectomy — and he's great.",
  attribution: "A comment that turns up, again and again, under our posts.",
};

export const procedure = {
  eyebrow: "The procedure",
  title: "The no-scalpel difference.",
  body:
    "No scalpel. No stitches. One tiny opening, made with a blunt instrument, through which both tubes are reached and sealed. It means less bleeding, less bruising and a faster recovery than the old cut-and-stitch method — all under local anaesthetic, while you're wide awake and comfortable.",
  steps: [
    {
      n: "01",
      title: "Consult & decide",
      text: "A straightforward conversation about whether a vasectomy is right for you. No pressure, plenty of room for questions.",
    },
    {
      n: "02",
      title: "The procedure",
      text: "Local anaesthetic, then the no-scalpel technique. Most men are in and out in under 15 minutes and walk out the same day.",
    },
    {
      n: "03",
      title: "Recovery",
      text: "Take it easy for a couple of days. Most men are back to normal in about a week, and back to most activities sooner.",
    },
  ],
};

export const reassurance = {
  eyebrow: "What it's actually like",
  title: "Calm, private, and over before you've talked yourself out of it.",
  body:
    "The thing men worry about most is the thing we've made routine. You're awake, comfortable and treated with respect from the moment you arrive. We've looked after men with needle phobias, men who put it off for a decade, and men who booked on a Friday and were back at work Monday. The fear is almost always bigger than the procedure.",
  points: [
    "Done under local anaesthetic — you're awake and comfortable",
    "Performed by Geoff or Matt, start to finish — never handed off",
    "Private, unhurried clinics with staff who do this every day",
  ],
};

export const reviews = {
  eyebrow: "Reviews",
  title: "Hundreds of men. One recommendation.",
  intro:
    "Vasectomy Australia holds hundreds of 5-star reviews across Google, ProductReview and beyond — most of them naming the doctor by name.",
  featured: {
    quote:
      "I was made to feel completely comfortable before the operation, with plenty of time to ask questions. The procedure itself was quick and I felt no discomfort. I'd recommend Geoff to anyone.",
    name: "Verified patient",
    location: "Sydney, NSW",
  },
  items: [
    {
      quote:
        "I have a real needle phobia and was dreading it. Geoff and his assistant could not have been more accommodating — it was over before I knew it, and recovery was fine.",
      name: "Verified patient",
      location: "Newcastle, NSW",
    },
    {
      quote:
        "Dr Cashion and his team were incredibly professional. Clean, welcoming clinic and friendly staff who explained everything before and after.",
      name: "Verified patient",
      location: "Gold Coast, QLD",
    },
    {
      quote:
        "Start to finish in about ten minutes. Matt talked me through every step. Honestly the easiest medical thing I've ever done.",
      name: "Verified patient",
      location: "Brisbane, QLD",
    },
  ],
};

export const locations = {
  eyebrow: "Locations",
  title: "No-scalpel vasectomy clinics across Australia.",
  body:
    "Geoff covers New South Wales and South Australia; Matt covers Queensland and the ACT. Between the team, Vasectomy Australia runs clinics in every state — so there's almost always one near you.",
  states: [
    { state: "New South Wales", cities: "Sydney CBD · Inner West · Eastern Suburbs · North Shore · Northern Beaches · The Hills · Penrith · Sutherland · Central Coast · Newcastle · Wollongong · Orange · Dubbo" },
    { state: "Queensland", cities: "Brisbane · Gold Coast · Sunshine Coast · Springfield · Toowoomba · Rockhampton · Mackay" },
    { state: "South Australia", cities: "Adelaide" },
    { state: "ACT", cities: "Canberra" },
    { state: "Victoria", cities: "Melbourne · Casey" },
    { state: "Western Australia", cities: "Perth" },
  ],
};

export const cost = {
  eyebrow: "Cost",
  title: "One simple price. Most of it covered by Medicare.",
  price: "$567–$597",
  priceNote: "out of pocket after your Medicare rebate",
  body:
    "No hidden fees and no surprises. A small deposit secures your appointment, with the balance due on the day. Pricing varies slightly by location.",
  included: [
    "Your consultation and the procedure itself",
    "Local anaesthetic, performed by Geoff or Matt",
    "Post-procedure care and your follow-up semen analysis",
  ],
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Does it hurt?",
    a: "You'll feel the local anaesthetic going in — a brief sting — and after that, mostly pressure rather than pain. Most men are surprised by how little there is to it. There's some tenderness for a few days afterwards, easily managed with simple pain relief.",
  },
  {
    q: "How long does the whole thing take?",
    a: "The procedure itself is usually under 15 minutes. Allow around 45 minutes at the clinic in total, including a final chat and getting you comfortable.",
  },
  {
    q: "When can I go back to work and normal life?",
    a: "Most men take it easy for a day or two and are back at a desk job within a couple of days. Plan for about a week before strenuous activity, and roughly a week before resuming sex.",
  },
  {
    q: "How effective is it?",
    a: "A no-scalpel vasectomy is more than 99% effective at preventing pregnancy — one of the most reliable forms of contraception available. We confirm success with a follow-up semen analysis.",
  },
  {
    q: "Am I awake during it?",
    a: "Yes. It's done under local anaesthetic, so you're awake and comfortable the whole time. There's no general anaesthetic and no hospital stay.",
  },
  {
    q: "Is a vasectomy reversible?",
    a: "A vasectomy should be considered permanent. Reversals are possible but not guaranteed, so it's best chosen when you're confident your family is complete. We'll talk it through honestly at your consult.",
  },
];

export const finalCta = {
  eyebrow: "Ready when you are",
  title: "Book your vasectomy with Geoff or Matt.",
  body:
    "It's quicker, calmer and easier than you're imagining — and you'll be in the hands of two of the most experienced vasectomists in the country.",
  primaryCta: { label: "Book online", href: "https://vasectomyaustralia.gettimely.com/" },
  secondaryCta: { label: "See clinic locations", href: "#locations" },
};
