import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { images, type SiteImage } from "@/lib/images";
import { getHomeContent } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Vasectomy Newcastle — No-Scalpel Vasectomy with Dr Geoff Cashion",
  description:
    "A safe, affordable no-scalpel vasectomy in Newcastle, performed under local anaesthetic by Dr Geoff Cashion in under 30 minutes — with a quick recovery and same-day consultation.",
};

// Header + scene imagery supplied for this page (imported to the site CDN).
const heroImg: SiteImage = {
  src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/0aeb80d6-b31b-4200-b52c-95ae24fd8bc4.png",
  alt: "A relaxed, confident man after his no-scalpel vasectomy in Newcastle",
};
const familyImg: SiteImage = {
  src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/0712b831-82a1-4f89-8acc-c2e14904dbe6.png",
  alt: "A father with his children — permanent contraception, complete peace of mind",
};

const quickFacts = [
  { value: "< 30 min", label: "in the clinic" },
  { value: "No scalpel", label: "open-ended technique" },
  { value: "Local anaes.", label: "no hospital, no sedation" },
  { value: "~7 days", label: "back to usual activity" },
];

const recovery = [
  "You may feel a little sore, but this usually lasts only a few days.",
  "Rest and wear supportive underwear to keep bruising and infection risk low.",
  "Avoid aspirin, heavy lifting and strenuous movement for a week.",
  "Desk-based work can usually be resumed the day after your procedure.",
  "Avoid long periods of sitting, bike riding and contact sports for 2–3 weeks.",
  "It takes about three months to clear sperm — keep using contraception until we confirm it's safe.",
];

const nswClinics = [
  "Sydney — Enmore Medical Practice",
  "Sydney — Neutral Bay Medical Centre",
  "Sydney — Blacktown",
  "Newcastle — Cooks Hill",
  "Wollongong",
  "Central Coast / Gosford",
];

const faqs = [
  {
    q: "Can my vasectomy be reversed?",
    a: "While vasectomies can sometimes be reversed, we strongly recommend you don't proceed if you think there's a chance you'll want a reversal — a vasectomy should be thought of as permanent contraception. Reversals are expensive, not covered by Medicare, and can never be guaranteed to work.",
  },
  {
    q: "What will sex be like after my vasectomy?",
    a: "You'll be able to masturbate comfortably a few days after your procedure, and full sexual function returns after roughly a week. There's no change to erections, desire or ejaculation, and you may notice only a slight difference in the volume of ejaculate. Keep using contraception until we confirm your semen is clear of sperm, at around the three-month mark.",
  },
  {
    q: "What long-term risks should I consider?",
    a: "The procedure performed by Dr Cashion is exceptionally safe. Large, well-conducted studies have shown a vasectomy creates no increased risk of long-term complications such as cancer.",
  },
];

const clinicQuery = encodeURIComponent(
  "Cooks Hill Healthcare Hub, 235 Darby St, Cooks Hill NSW 2300"
);

export default async function VasectomyNewcastlePage() {
  const { fees } = await getHomeContent();

  return (
    <>
      <PageHero
        crumb="Vasectomy Newcastle"
        eyebrow="Newcastle · Dr Geoff Cashion"
        title="Vasectomy Newcastle."
        lead="A safe and easy vasectomy Newcastle men can have performed in under 30 minutes — under local anaesthetic, with a no-scalpel technique that means a quicker recovery and a return to usual activities within about seven days."
        image={heroImg}
      />

      {/* Intro + quick facts */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-ink-soft">
                Vasectomy Australia performs your procedure under local
                anaesthetic using an open-ended, no-scalpel technique — proven to
                have the lowest possible risk of complications. Dr Geoff Cashion
                performs over 70 no-scalpel vasectomies every week, with one of
                the lowest vasectomy costs Newcastle can offer.
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                You can have your consultation and procedure on the same day, or
                speak with Dr Cashion first for a free phone consultation. Online
                bookings are available across a range of locations around
                Australia.
              </p>
            </Reveal>
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-line bg-line shadow-soft">
                  {quickFacts.map((f) => (
                    <div key={f.label} className="bg-paper p-6">
                      <dt className="figure text-2xl text-teal">{f.value}</dt>
                      <dd className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
                        {f.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What is a vasectomy */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-6">
              <h2 className="text-[length:var(--text-headline)]">
                What is a vasectomy?
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                A vasectomy is a male sterilisation technique that provides
                permanent contraception. By closing the sperm-carrying tubes —
                the vas deferens — sperm can no longer reach the urethra, so
                there is no chance of pregnancy.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                It&apos;s quick, performed in under 30 minutes, and needs no
                general anaesthetic. Dr Cashion performs more than 4,000
                vasectomies a year with a gentle technique that allows a fast
                recovery and a return to work — all at an affordable price.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                For men and couples who have decided their family is complete,
                a vasectomy offers real peace of mind, with almost zero risk of
                future pregnancy.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image
                  src={familyImg.src}
                  alt={familyImg.alt}
                  fill
                  sizes="(max-width:1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="bg-green-gradient text-paper">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-clay-soft">Recovery</p>
              <h2 className="mt-5 text-[length:var(--text-headline)] text-paper">
                What&apos;s involved in recovery?
              </h2>
              <p className="mt-6 leading-relaxed text-paper/80">
                Recovery is simple. Most men are back to normal within a few
                days, and desk-based workers are often back the next day.
              </p>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="grid gap-x-8 sm:grid-cols-1">
                {recovery.map((r, i) => (
                  <Reveal as="li" key={r} delay={(i % 2) * 70}>
                    <div className="flex gap-3 border-t border-paper/15 py-4 text-paper/90">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-clay-soft" fill="none" aria-hidden>
                        <path d="m5 10.5 3.2 3.2L15 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="leading-snug">{r}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dr Geoff */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                  <Image
                    src={images.geoffPortrait.src}
                    alt={images.geoffPortrait.alt}
                    fill
                    sizes="(max-width:1024px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-4 right-4 max-w-[12rem] rounded-[3px] bg-paper p-5 shadow-soft ring-1 ring-line lg:-bottom-6 lg:-right-6">
                  <p className="figure text-4xl leading-none text-teal">4,000+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    vasectomies a year
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="eyebrow text-clay">Why choose Dr Geoff Cashion</p>
                <h2 className="mt-5 text-[length:var(--text-headline)]">
                  One of Australia&apos;s busiest vasectomists.
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Dr Geoff Cashion has practised medicine for more than two
                    decades and trained in Florida, USA under one of the world&apos;s
                    leading vasectomy surgeons, Dr Doug Stein. He specialises in the
                    no-scalpel technique across multiple locations and is one of the
                    busiest in the field, performing around 70 vasectomies a week.
                  </p>
                  <p>
                    Born in Brisbane, he graduated in Medicine from the University
                    of Queensland in 2002 and is a Fellow of the Australian College
                    of Rural and Remote Medicine (FACRRM) and the Royal College of
                    Emergency Medicine (FRCEM). He is also a former medical educator
                    and supervisor of GP registrars through James Cook University.
                  </p>
                </div>
                <Link href="/our-doctors" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline">
                  Read Dr Cashion&apos;s full profile <span className="text-clay">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle clinic */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow text-clay">Your local clinic</p>
              <h2 className="mt-5 text-[length:var(--text-headline)]">
                Vasectomy Australia in Newcastle.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Dr Cashion performs the no-scalpel procedure at Cooks Hill in
                Newcastle, along with clinics right across New South Wales —
                including Sydney, Wollongong and the Central Coast — and around
                the country.
              </p>
              <div className="mt-7 border-t border-line pt-6">
                <p className="font-display text-xl">Cooks Hill Healthcare Hub</p>
                <p className="mt-1 text-ink-soft">235 Darby St, Cooks Hill NSW 2300</p>
              </div>
              <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {nswClinics.map((c) => (
                  <li key={c} className="flex gap-2 py-1.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep">
                  Book online
                </a>
                <Link href="/locations" className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40">
                  See all locations
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-line bg-sand shadow-soft lg:h-full">
                <iframe
                  title="Map — Cooks Hill, Newcastle"
                  src={`https://www.google.com/maps?q=${clinicQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-clay">Fees</p>
              <h2 className="mt-5 text-[length:var(--text-display)]">
                One simple price. Most of it covered by Medicare.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                No hidden fees and no surprises — a fraction of the cost of a
                vasectomy in a private hospital.
              </p>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <div className="border border-line bg-paper p-8 md:p-10">
                  <dl>
                    {fees.rows.map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between border-b border-line py-4 text-ink-soft">
                        <dt>{row.label}</dt>
                        <dd className="font-medium text-ink">{row.value}</dd>
                      </div>
                    ))}
                    <div className="flex items-baseline justify-between pt-6">
                      <dt className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                        {fees.total.label}
                      </dt>
                      <dd className="figure text-6xl text-teal">{fees.total.value}</dd>
                    </div>
                  </dl>
                </div>
                <p className="mt-6 leading-relaxed text-ink-soft">{fees.terms}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-clay">FAQ</p>
                <h2 className="mt-5 text-balance text-[length:var(--text-display)]">
                  Newcastle vasectomy questions.
                </h2>
                <p className="mt-6 leading-relaxed text-ink-soft">
                  Still unsure? Free phone consultations are available — call{" "}
                  <a href={site.phoneHref} className="font-medium text-teal hover:underline">
                    {site.phoneLabel}
                  </a>
                  .
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {faqs.map((faq, i) => (
                <Reveal as="div" key={faq.q} delay={Math.min(i * 40, 200)}>
                  <details className="group border-t border-line py-2 first:border-t-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                      <span className="font-display text-xl leading-snug md:text-2xl">{faq.q}</span>
                      <span className="relative mt-1 h-5 w-5 shrink-0 text-clay">
                        <span className="absolute left-1/2 top-1/2 h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-1/2 h-4 w-[1.6px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <div className="max-w-2xl pb-6 pr-8 leading-relaxed text-ink-soft">{faq.a}</div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Book your Newcastle vasectomy." />
    </>
  );
}
