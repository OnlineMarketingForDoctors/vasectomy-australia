/**
 * Content for the inner pages — adapted from the live vasectomyaustralia.com.au
 * copy, re-flowed for the editorial layout and the Geoff+Matt focus. Kept as
 * typed data so it maps cleanly onto Sanity later. No patient testimonials
 * (AHPRA); aggregate Google rating only.
 */

/* ----------------------------------------------------------------- Doctors */

export type DoctorProfile = {
  id: string;
  name: string;
  role: string;
  regions: string;
  image: "geoffPortrait" | "mattPortrait";
  lead: string;
  bio: string[];
  personal: string;
  qualifications: { year: string; text: string }[];
  badge: { value: string; label: string };
};

export const doctorProfiles: DoctorProfile[] = [
  {
    id: "geoff",
    name: "Dr Geoff Cashion",
    role: "Founder & Lead Vasectomist",
    regions: "New South Wales · South Australia · Tasmania",
    image: "geoffPortrait",
    lead:
      "Performs more no-scalpel vasectomies than any other doctor in Australia — over 70 every week.",
    bio: [
      "Dr Cashion was born in Brisbane and grew up in Rockhampton. After graduating in medicine from the University of Queensland in 2002, he spent many years working in emergency medicine and general practice.",
      "He completed his training in the no-scalpel vasectomy technique under Dr Doug Stein in Florida — one of the world's most respected vasectomists — with further training in Australia. He now performs more than 70 vasectomies a week across the country.",
      "Geoff is a Fellow of the Australian College of Rural and Remote Medicine (FACRRM) and the Royal College of Emergency Medicine (FRCEM), and is actively involved in teaching general practice registrars as a GP Supervisor with James Cook University.",
    ],
    personal:
      "Geoff lives in Sydney with his wife and two daughters. Outside of medicine he's a professional recording artist, having released two albums and toured nationally.",
    qualifications: [
      { year: "1992", text: "Bachelor of Business, Queensland University of Technology" },
      { year: "2002", text: "Bachelor of Medicine & Bachelor of Surgery, University of Queensland" },
      { year: "2011", text: "Fellowship, Australian College of Rural & Remote Medicine" },
      { year: "2013", text: "Fellowship, The Royal College of Emergency Medicine" },
      { year: "2018", text: "Graduate Certificate in Occupational Medicine, Otago University" },
    ],
    badge: { value: "4,000+", label: "vasectomies a year" },
  },
  {
    id: "matt",
    name: "Dr Matthew Valentine",
    role: "Vasectomist",
    regions: "Queensland · Victoria · Western Australia · ACT",
    image: "mattPortrait",
    lead:
      "Performing vasectomies since 2008, specialising in the lowest-risk open-ended no-scalpel technique.",
    bio: [
      "Dr Valentine completed his medical degree at the University of Adelaide in 2000. Following a two-year internship and residency at the Royal Adelaide Hospital, he spent five years as a full-time Medical Officer in the Royal Australian Air Force — including several overseas deployments and the coordination of aeromedical retrievals.",
      "He has been performing vasectomies in Brisbane since 2008, having first trained in the traditional technique with Dr Greg Silver before further training in the USA, specialising in the no-scalpel technique.",
      "Dr Valentine is a Fellow of the Royal Australian College of General Practitioners and a Designated Aviation Medical Examiner with the Civil Aviation Safety Authority. He performs vasectomies across metropolitan Brisbane, regional Queensland, the Gold Coast, Victoria and Western Australia.",
    ],
    personal:
      "Matt is married and lives in Brisbane with his wife and daughter. In his spare time he enjoys trail running, hiking and mountain biking.",
    qualifications: [
      { year: "2000", text: "Bachelor of Medicine & Bachelor of Surgery, University of Adelaide" },
      { year: "2003", text: "Designated Aviation Medical Examiner, CASA" },
      { year: "2006", text: "Fellowship of the Royal Australian College of General Practitioners" },
    ],
    badge: { value: "Since 2008", label: "performing vasectomies" },
  },
];

/* ------------------------------------------------------------ Patient info */

export const patientInfo = {
  intro:
    "Making the decision to have a vasectomy can feel daunting — but it needn't. Most men tolerate the procedure very well and recover quickly. Here's exactly what to expect.",
  consultation: {
    title: "1. Your pre-vasectomy consultation",
    body: "Before the procedure, your doctor sits down with you to:",
    points: [
      "Confirm your decision to have permanent contraception",
      "Review your medical history and any medications (such as aspirin or warfarin) that may need to be paused",
      "Go through the consent form so you understand the risks and potential complications",
      "Perform a brief examination to confirm the vas deferens can be felt",
    ],
  },
  procedure: {
    title: "2. The vasectomy procedure",
    steps: [
      "You'll meet the nurse assisting your doctor, then make yourself comfortable on the bed with a sheet over you.",
      "The area is cleaned with betadine to reduce the chance of infection.",
      "A small needle delivers local anaesthetic to numb the skin — most men barely notice it. A tiny opening is then made at the front of the scrotum.",
      "Further local anaesthetic is applied around each vas deferens. The vas is lifted out, divided, and the prostatic end sealed.",
      "A layer of tissue is placed between the two ends (fascial interposition) and the testicular end is left open to reduce the risk of congestion and post-vasectomy pain.",
      "The same is done on the other side through the same opening. The small wound is closed with steri-strips — no stitches needed — and you're free to go.",
    ],
  },
  preparing: {
    title: "Preparing for your vasectomy",
    points: [
      "Stop any blood-thinning medication at least 7 days before your procedure (check with your GP first if unsure).",
      "On the morning of your procedure, shave the front and both sides of your scrotum.",
      "Arrange time off or light duties — no heavy lifting or straining for 7 days afterwards.",
      "Read and sign the electronic consent form sent by SMS three days before your procedure.",
    ],
  },
};

/* --------------------------------------------------------- Post-op recovery */

export const postOp = {
  intro:
    "After your vasectomy, head home and rest for the remainder of the day. Some men recover quickly; others take up to two weeks. The average is about 7 days.",
  blocks: [
    {
      title: "Wound care",
      body: "You'll have a small wound on the scrotum. Try not to fiddle with it, as it may re-open. A waterproof dressing can be removed after about 48 hours; if it falls off in the first 24 hours, pop a bandaid over the wound for a couple of days.",
    },
    {
      title: "Showering",
      body: "You may shower daily once you're home. Keep the area clean and pat it dry gently.",
    },
    {
      title: "Pain management",
      body: "For the first few days, Paracetamol (2 tablets, 4 times a day) and Nurofen (2 tablets, 3 times a day) will manage any discomfort.",
    },
    {
      title: "Sexual activity",
      body: "Avoid sex for one week after your procedure so you don't upset the surgical site. Gentle masturbation is fine.",
    },
    {
      title: "Bruising is normal",
      body: "A little bleeding can cause black or blue discolouration around the scrotum, sometimes tracking onto the penis. Don't worry — it's normal and settles within a couple of weeks.",
    },
    {
      title: "Semen analysis",
      body: "Complete your post-vasectomy semen analysis at 3 months and after at least 20 ejaculations to confirm success. Assume you're fertile until we tell you otherwise.",
    },
  ],
  restrictions: [
    { period: "1 week", items: "Jogging · gym workouts · lifting that involves straining" },
    { period: "3 weeks", items: "Cycling · contact sports · martial arts" },
  ],
  warning:
    "Failing to follow this advice increases your chance of a post-operative complication such as a scrotal haematoma or infection.",
  closing:
    "Having a vasectomy is a big decision, and you have several options to choose from. Thank you for placing your trust in our doctors. Please remember we're always happy to hear from you — whether it's tomorrow, next week, or two years from now.",
};

/* --------------------------------------------------------- Semen testing */

export const spermTest = {
  intro:
    "A vasectomy is permanent contraception, but you're not sterile immediately. Live sperm remain in the upper vas deferens and must be cleared through ejaculation. To confirm success, complete a Post-Vasectomy Semen Analysis (PVSA) at least 3 months after your procedure and after a minimum of 20 ejaculations.",
  important:
    "Keep using contraception until your healthcare provider confirms you are no longer fertile.",
  options: [
    {
      title: "Mail-in test with SnipCheck",
      body: "The easiest option. Order a kit at snipcheck.com.au ($125, includes the kit, lab analysis and results), collect your sample at home and return it in the prepaid envelope. Results are emailed within days, and can be sent to your provider. If sperm is detected, a complimentary follow-up kit is provided.",
      cta: { label: "Order a SnipCheck kit", href: "https://www.snipcheck.com.au" },
    },
    {
      title: "Drop off at a pathology lab",
      body: "We provide a sample jar at your appointment and email a Pathology Request Form afterwards. Collect your sample and deliver it with the form to a nearby pathology laboratory that performs PVSA. We'll contact you with results, usually within 48 hours.",
      cta: { label: "Request a new form", href: "https://bit.ly/sementest" },
    },
  ],
  note:
    "When finding a laboratory (not just a collection centre), confirm they offer PVSA, seminal analysis or semen testing — major providers include Laverty, Douglas Hanly Moir, QML, Sullivan Nicolaides, Melbourne Pathology, Dorevitch, Western Diagnostic, SA Pathology and Australian Clinical Labs.",
};

/* ------------------------------------------------------------ Medicare */

export const medicare = {
  intro:
    "Vasectomy Australia processes your Medicare rebate on your behalf. You'll usually receive your payment into your nominated Medicare bank account within 48 hours. If it hasn't arrived a week after your procedure, just email us.",
  selfTitle: "Prefer to claim it yourself?",
  selfIntro: "You can process your $228 rebate in any of these ways:",
  methods: [
    { title: "Medicare online account", body: "Upload a copy of your paid invoice to your Medicare Online account via myGov." },
    { title: "Express Plus Medicare app", body: "Download the app and process your claim on your phone." },
    { title: "By mail", body: "Complete a Medicare claim form (MS014) and post it." },
    { title: "In person", body: "Visit any Services Australia service centre." },
  ],
  note:
    "To claim, you'll need your itemised, paid invoice from Vasectomy Australia — emailed to you within 48 hours of your appointment. If you haven't received it, contact us.",
};

/* ------------------------------------------------------------ Dr Referral */

export const drReferral = {
  intro:
    "Vasectomy Australia performs more no-scalpel vasectomies each year than any clinic in Australia. Dr Geoff Cashion (NSW, TAS & SA) and Dr Matt Valentine (QLD, VIC, WA & ACT) have together performed over 23,000 vasectomies, and are full-time dedicated specialists in the procedure.",
  benefits: [
    { title: "Quick", body: "Same-day consultation and procedure, most done in about 15 minutes." },
    { title: "Safe", body: "A gentle no-scalpel, open-ended technique for a quick recovery with minimal downtime." },
    { title: "Effective", body: "Greater than 99% effective, with patients able to drive to and from their appointment." },
    { title: "Affordable", body: "Just $597 out of pocket — a vasectomy in a private hospital can cost $2,260 or more." },
  ],
  closing:
    "We look forward to partnering with you and your patients, helping them achieve their family-planning goals.",
};

/* ------------------------------------------------------------ Contact */

export const contact = {
  intro:
    "Our clinics are conveniently located across Australia — visit whichever is most convenient for you. For anything else, get in touch and we'll be glad to help.",
  facebook: "https://www.facebook.com/vasectomyaustralia",
};

/* ------------------------------------------------------------ Locations */

export const locationsByState: { state: string; doctor: string; cities: string[] }[] = [
  {
    state: "New South Wales",
    doctor: "Dr Geoff Cashion",
    cities: ["Sydney – Enmore", "Sydney – North Shore", "Sydney – Maroubra", "Sydney – Blacktown", "Sydney – Brookvale", "Sutherland Shire", "Penrith", "Campbelltown", "Central Coast", "Newcastle", "Wollongong", "Port Macquarie", "Orange", "Tamworth"],
  },
  {
    state: "Queensland",
    doctor: "Dr Matt Valentine",
    cities: ["Brisbane", "Gold Coast", "Sunshine Coast", "Springfield", "Toowoomba", "Hervey Bay", "Rockhampton", "Gladstone", "Townsville"],
  },
  {
    state: "Victoria",
    doctor: "Dr Matt Valentine",
    cities: ["Melbourne – Prahran", "Melbourne – Gladstone Park", "Casey", "Bendigo", "Wodonga"],
  },
  {
    state: "Western Australia",
    doctor: "Dr Matt Valentine",
    cities: ["Perth – North", "Perth – South East", "Perth – Inner West", "Rockingham"],
  },
  {
    state: "South Australia",
    doctor: "Dr Geoff Cashion",
    cities: ["Adelaide"],
  },
  {
    state: "Tasmania",
    doctor: "Dr Geoff Cashion",
    cities: ["Launceston", "Hobart – Rosny Park"],
  },
  {
    state: "Australian Capital Territory",
    doctor: "Dr Matt Valentine",
    cities: ["Canberra"],
  },
];

/* ------------------------------------------------------------ Full FAQ */

export const faqAll: { q: string; a: string }[] = [
  { q: "What is a vasectomy?", a: "A vasectomy is a simple, permanent form of male contraception. The vas deferens — the tubes that carry sperm — are divided so sperm can no longer reach the semen. Everything else stays the same: your hormones, erections and ejaculation are unchanged." },
  { q: "How much does a vasectomy cost?", a: "The vasectomy fee is $825, less a $228 Medicare rebate, leaving just $597 out of pocket. A $100 deposit secures your booking, with the $725 balance due on the day." },
  { q: "How long does the procedure take?", a: "The procedure itself takes about 15 minutes. Allow around 45 minutes at the clinic in total." },
  { q: "What are the types of vasectomy?", a: "There's the traditional scalpel method and the modern no-scalpel technique we use — a single tiny opening made with a blunt instrument for less bleeding, less bruising and a faster recovery. We use an open-ended, no-scalpel approach." },
  { q: "How old do I need to be to have a vasectomy?", a: "There's no strict legal age, but a vasectomy should be considered permanent, so we want you to be confident your family is complete. We'll talk it through at your consultation." },
  { q: "I've had hernia surgery — does that affect my vasectomy?", a: "Usually not. Previous hernia or scrotal surgery can occasionally make the anatomy a little trickier, so mention it when you book and we'll let you know if anything changes." },
  { q: "Does a vasectomy increase my risk of prostate cancer?", a: "No. Large, well-conducted studies have found no causal link between having a vasectomy and developing prostate cancer." },
  { q: "Can I have a vasectomy if I only have one testicle?", a: "In most cases, yes. We'll confirm at your consultation that the vas can be felt." },
  { q: "How should I prepare for my vasectomy?", a: "Stop blood-thinning medication 7 days prior (check with your GP), shave the front and sides of the scrotum on the morning, wear supportive underwear, and sign the consent form sent by SMS three days before." },
  { q: "Can I have my procedure done under sedation or a general anaesthetic?", a: "Our procedure is designed around local anaesthetic, which is safer, quicker and means no hospital stay. Raise any concerns at your free phone consult." },
  { q: "Why do you use an open-ended technique?", a: "Leaving the testicular end of the vas open, combined with fascial interposition, helps prevent congestion and reduces the risk of post-vasectomy pain." },
  { q: "Can I drive home after my vasectomy?", a: "Yes — because it's done under local anaesthetic, most men can drive themselves home. Arrange a lift if you'd feel more comfortable." },
  { q: "How many days does it take to recover?", a: "Most men feel back to normal in about 7 days — some sooner, some up to a couple of weeks." },
  { q: "How does recovery take place?", a: "Rest for 24–48 hours with support and ice as needed, avoid heavy lifting and strenuous activity for about a week, and use simple pain relief if needed. We offer 24-hour after-care support." },
  { q: "When can I go back to work?", a: "Most men with a desk job are back within a day or two. Allow longer for physically demanding work." },
  { q: "When can I start having sex again?", a: "Most men wait about a week. Keep using contraception until your semen analysis confirms success." },
  { q: "When will I know the procedure has worked?", a: "You'll complete a semen analysis at 3 months and after at least 20 ejaculations. Until you get the all-clear, keep using contraception." },
  { q: "Can I get my vasectomy reversed?", a: "A vasectomy should be considered permanent. Reversals are sometimes possible but never guaranteed and aren't covered by Medicare." },
  { q: "Do I need a referral from my GP?", a: "No referral is needed to book with us. GPs are welcome to refer patients via our Dr Referral page." },
  { q: "Do you do the “laser” vasectomy?", a: "There's no such thing as a true “laser” vasectomy — it's a marketing term. We use the proven no-scalpel, open-ended technique." },
  { q: "Can my partner come into the procedure room?", a: "For comfort and sterility we generally keep the room to the patient and clinical team, but your partner is welcome to wait nearby." },
  { q: "How do I get my Medicare rebate?", a: "We submit your Medicare claim after the procedure, and your $228 rebate is typically in your bank account within 1–2 days." },
  { q: "Can I use my private health insurance?", a: "A vasectomy with us is an out-of-hospital procedure partly covered by Medicare; private health insurance generally doesn't apply, but you're welcome to check with your fund." },
];

/* ------------------------------------------------------------ Blog */

export const blogPosts: { slug: string; title: string; excerpt: string; category: string; date: string }[] = [
  { slug: "what-to-expect-on-the-day", title: "What to expect on the day of your vasectomy", excerpt: "A calm, step-by-step walk-through of your appointment — from consultation to walking back out the door.", category: "Procedure", date: "2026-05-12" },
  { slug: "no-scalpel-vs-traditional", title: "No-scalpel vs traditional vasectomy: what's the difference?", excerpt: "Why a single tiny opening means less bleeding, less bruising and a faster recovery.", category: "Education", date: "2026-04-28" },
  { slug: "vasectomy-recovery-tips", title: "Five tips for a smooth vasectomy recovery", excerpt: "Simple things that make the first week easier — from supportive underwear to when to get moving again.", category: "Recovery", date: "2026-04-09" },
  { slug: "is-a-vasectomy-right-for-me", title: "Is a vasectomy right for me?", excerpt: "Questions worth asking yourself before booking permanent contraception.", category: "Education", date: "2026-03-22" },
  { slug: "understanding-your-medicare-rebate", title: "Understanding your Medicare rebate", excerpt: "How the $228 rebate works and the simplest way to claim it.", category: "Fees", date: "2026-03-05" },
  { slug: "semen-testing-explained", title: "Post-vasectomy semen testing, explained", excerpt: "Why you're not sterile straight away, and how to confirm your vasectomy has worked.", category: "Recovery", date: "2026-02-18" },
];

/* ------------------------------------------------------------ Privacy */

export const privacy = {
  intro:
    "Vasectomy Australia is committed to protecting your privacy and handling your personal and health information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
  sections: [
    { title: "Information we collect", body: "We collect personal and health information you provide when you book, consult or correspond with us — including your name, contact details, Medicare details and relevant medical history — so we can safely provide your care." },
    { title: "How we use it", body: "Your information is used to provide and administer your vasectomy care, process Medicare claims and payments, send appointment and after-care communications, and meet our legal and professional obligations." },
    { title: "Disclosure", body: "We only disclose your information where necessary for your care (for example, to a pathology provider for semen testing), where you've consented, or where required by law. We do not sell your information." },
    { title: "Storage & security", body: "Your records are stored securely with access limited to authorised staff, and retained for the period required by law." },
    { title: "Access & corrections", body: "You may request access to, or correction of, your personal information at any time by contacting us." },
    { title: "Contact", body: "For any privacy question or request, email info@vasectomyaustralia.com.au or call 1800 SNIPME (1800 764 763)." },
  ],
};
