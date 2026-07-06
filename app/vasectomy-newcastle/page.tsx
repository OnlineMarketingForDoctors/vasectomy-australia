import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { type SiteImage } from "@/lib/images";
import { getHomeContent } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Vasectomy Newcastle — No-Scalpel Vasectomy with Dr Geoff Cashion",
  description:
    "A safe and easy vasectomy Newcastle men can have performed in under 30 minutes — under local anaesthetic, with a no-scalpel technique and a quick recovery.",
};

const linkCls = "text-teal underline underline-offset-2 hover:text-teal-deep";

// Images supplied with the source document, re-hosted on the site CDN.
const heroImg: SiteImage = {
  src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/0aeb80d6-b31b-4200-b52c-95ae24fd8bc4.png",
  alt: "A relaxed, confident man after his no-scalpel vasectomy in Newcastle",
};
const familyImg: SiteImage = {
  src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/0712b831-82a1-4f89-8acc-c2e14904dbe6.png",
  alt: "A father with his children — permanent contraception, complete peace of mind",
};
const geoffImg: SiteImage = {
  src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/28cdd0db-3840-4643-957e-c41b129a5d28.png",
  alt: "Dr Geoff Cashion, Vasectomy Australia",
};

const quickFacts = [
  { value: "< 30 min", label: "in the clinic" },
  { value: "No scalpel", label: "open-ended technique" },
  { value: "Local anaes.", label: "no hospital, no sedation" },
  { value: "~7 days", label: "back to usual activity" },
];

const nswClinics = [
  "Neutral Bay Medical Centre",
  "Enmore Medical Practice",
  "Blacktown Doctors and Medical Centre",
  "Newcastle – Cooks Hill Family Practice",
  "Wollongong – Oche Medical Centre",
  "Central Coast / Gosford – Gynaecology Centres of Australia",
  "Canberra – Gynaecology Centres of Australia Queanbeyan",
];

const otherClinics = [
  "Melbourne – Gladstone Park Superclinic",
  "Melbourne – Bay St Family Medical Centre Brighton",
  "Berwick – Casey Superclinic",
  "Brisbane – Taringa 7 Day Medical Centre",
  "Logan – Logan Central Medical Centre",
  "Morayfield – Morayfield 7 Day Medical Centre",
  "Rockhampton – CQ Doctors",
  "Mackay – City GP Superclinic",
  "Adelaide – Trinity Garden Medical Centre",
];

const faqs: { q: string; a: string[] }[] = [
  {
    q: "Can my vasectomy be reversed?",
    a: [
      "While vasectomies can be reversed, we strongly recommend you do not undergo this procedure if you think there is a chance you'll want a reversal. Vasectomies should be thought of as permanent contraception.",
      "Reversals are very expensive, not covered by Medicare, and cannot be guaranteed to work.",
    ],
  },
  {
    q: "What will sex be like after my vasectomy?",
    a: [
      "You will be able to masturbate comfortably a few days after your procedure, and full sexual functions will be able to be resumed after roughly a week. There will be no change to erections, desire, or ejaculation post-procedure.",
      "You may notice a slight difference in the volume of ejaculate, but for most men, their sex life improves post-vasectomy, courtesy of an almost zero risk of pregnancy or requirement of contraception.",
      "It is vital, however, that you do not rely on your vasectomy as a form of birth control until we have confirmed it is safe to do so, roughly around the three months' mark post-procedure. This time is required to flush the sperm from your semen.",
    ],
  },
  {
    q: "What long-term risks should I be considering when undergoing a vasectomy?",
    a: [
      "The vasectomy procedure performed by Dr. Cashion is exceptionally safe, and it has been proven that the procedure creates no increased risks of long term complications such as cancer.",
    ],
  },
];

const clinicQuery = encodeURIComponent("Cooks Hill, Newcastle NSW 2300");

export default async function VasectomyNewcastlePage() {
  const { fees } = await getHomeContent();

  return (
    <>
      <PageHero
        crumb="Vasectomy Newcastle"
        eyebrow="Newcastle · Dr Geoff Cashion"
        title="Vasectomy Newcastle"
        lead="Are you looking for a safe and easy vasectomy Newcastle men can have performed in under 30 minutes?"
        image={heroImg}
      />

      {/* Intro + quick facts */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-ink-soft">
                Vasectomy Australia performs this procedure under local
                anaesthetic with a{" "}
                <Link href="/" className={linkCls}>
                  no-scalpel vasectomy technique
                </Link>{" "}
                that allows for a quicker recovery, meaning you can resume usual
                activities within seven days.
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Dr. Geoff Cashion performs over 70 of these procedures per week
                with one of the lowest vasectomy costs Newcastle can offer. His
                open-ended no-scalpel technique is proven to have the lowest risk
                of complications possible.
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

      {/* H2 — What Is A Vasectomy? */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow text-clay">The procedure</p>
              <h2 className="mt-5 text-[length:var(--text-headline)]">
                What Is A Vasectomy?
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                The{" "}
                <Link href="/vasectomy-procedure-explained" className={linkCls}>
                  vasectomy procedure
                </Link>{" "}
                is a male sterilisation technique that creates a permanent method
                of contraception via a surgical procedure. By closing the
                sperm-carrying tubes called the vas deferens, sperm is no longer
                able to access the urethra meaning there are no chances of possible
                pregnancy.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The vasectomy procedure is quick and able to be performed in under
                30 minutes and does not require a general anaesthetic. Dr. Cashion
                performs over 4,000 vasectomies a year with a gentle technique that
                allows for a fast recovery and return to work all at an affordable
                price.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                You will be able to have your consultation and the procedure on the
                same day in our clinic or speak to Dr. Cashion for a free phone
                consultation. Online bookings are also available for a range of
                locations around Australia.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                For those who are no longer wanting to have children, the vasectomy
                procedure provides peace of mind for both men and women, creating
                almost zero risk of possible pregnancy.
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

      {/* H3 — Recovery */}
      <section className="bg-green-gradient text-paper">
        <div className="shell py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow text-clay-soft">Recovery</p>
              <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                What Is Involved in The Recovery of a Vasectomy?
              </h3>
              <div className="mt-6 space-y-4 leading-relaxed text-paper/85">
                <p>
                  Recovery after the vasectomy procedure is very simple. You may
                  feel a little sore; however, this will only last for a few days.
                  It will take around three months for your semen to become clear
                  of sperm, at which point you will no longer require any birth
                  control methods during intercourse.
                </p>
                <p>
                  There can be risks of bruising or infection; however, these are
                  quite low and can be minimised by resting and wearing underpants
                  that provide ample support.
                </p>
                <p>
                  We recommend that you avoid aspirin as well as heavy lifting or
                  extreme movement for a week after the vasectomy. Desk-based roles,
                  however, should be able to be resumed the day after having your
                  vasectomy.
                </p>
                <p>
                  It would also be best to avoid sitting for long periods, bike
                  riding, and contact sports for around 2-3 weeks.
                </p>
                <p>
                  For those who are no longer wanting to have children, the
                  vasectomy procedure provides peace of mind for both men and women,
                  leaving almost zero risk of pregnancy once completed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* H3 — Why Choose Dr Geoff Cashion */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                  <Image
                    src={geoffImg.src}
                    alt={geoffImg.alt}
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
                <p className="eyebrow text-clay">Your doctor</p>
                <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                  Why Choose Dr. Geoff Cashion?
                </h3>
                <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Dr. Geoff Cashion has been practising medicine for over{" "}
                    <Link href="/about" className={linkCls}>
                      two decades
                    </Link>{" "}
                    and was trained in Florida, USA by one of the world&apos;s
                    leading vasectomy surgeons, Dr. Doug Stein.
                  </p>
                  <p>
                    Dr. Cashion specialises in the no-scalpel technique via multiple
                    locations across Australia and is one of the busiest in the
                    field, performing over 70 vasectomies a week. Many men have
                    trusted his skills in ensuring they no longer have to worry
                    about an unplanned pregnancy with their partner.
                  </p>
                  <p>
                    Born in Brisbane, Dr. Cashion graduated from the University of
                    Queensland in Medicine in 2002 and is a fellow of the{" "}
                    <a
                      href="https://www.acrrm.org.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkCls}
                    >
                      Australian College of Rural and Remote Medicine (FACRRM)
                    </a>{" "}
                    and the{" "}
                    <a
                      href="https://www.rcem.ac.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkCls}
                    >
                      Royal College of Emergency Medicine (FRCEM)
                    </a>
                    . He is also a former medical educator and supervisor of general
                    practice registrars through James Cook University.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* H3 — Which Locations Are Serviced */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow text-clay">Locations</p>
              <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                Which Locations Are Serviced by Vasectomy Australia?
              </h3>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Dr. Cashion performs the no-scalpel procedure in a range of{" "}
                <Link href="/locations" className={linkCls}>
                  vasectomy clinic locations across Australia
                </Link>{" "}
                with a focus on Sydney vasectomy services, including other areas
                within New South Wales, Victoria, Queensland, and South Australia.
              </p>

              <p className="mt-8 font-medium text-ink">
                For those interested in a New South Wales based clinic, the options
                are as follows:
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {nswClinics.map((c) => (
                  <li key={c} className="flex gap-2 py-1.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-medium text-ink">
                Other clinics accessible across Australia include:
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {otherClinics.map((c) => (
                  <li key={c} className="flex gap-2 py-1.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-8 leading-relaxed text-ink-soft">
                Bookings can be made over the phone or{" "}
                <Link href="/book-online" className={linkCls}>
                  online by selecting the clinic you wish to visit
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-line bg-sand shadow-soft lg:sticky lg:top-28">
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

      {/* H3 — Cost */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-clay">Fees</p>
              <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                How Much Does the Vasectomy Procedure Cost?
              </h3>
              <p className="mt-6 leading-relaxed text-ink-soft">
                The vasectomy cost Newcastle men have access to via Vasectomy
                Australia is based on the fee recommended by the{" "}
                <a
                  href="https://ama.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Australian Medical Association (AMA)
                </a>
                :
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
                <p className="mt-6 leading-relaxed text-ink-soft">
                  We require that the total fee be payable on the day of your
                  procedure. Your Medicare rebate can be credited to your account
                  on the same day in most cases.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* H3 — FAQ */}
      <section className="bg-sand">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-clay">FAQ</p>
                <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                  Frequently Asked Questions
                </h3>
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
                    <div className="max-w-2xl space-y-3 pb-6 pr-8 leading-relaxed text-ink-soft">
                      {faq.a.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
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
