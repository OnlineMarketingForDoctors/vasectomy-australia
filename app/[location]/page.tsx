import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/content";
import { getLocationPage, getLocationSlugs, getHomeContent } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { PortableBody } from "@/components/site/PortableBody";

export async function generateStaticParams() {
  const slugs = await getLocationSlugs();
  return slugs.map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = await getLocationPage(location);
  if (!loc) return { title: "Not found" };
  return {
    title: loc.seoTitle || loc.title,
    description: loc.seoDescription || undefined,
  };
}

const quickFacts = [
  { value: "< 30 min", label: "in the clinic" },
  { value: "No scalpel", label: "open-ended technique" },
  { value: "Local anaes.", label: "no hospital, no sedation" },
  { value: "~7 days", label: "back to usual activity" },
];

export default async function LocationRoute({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = await getLocationPage(location);
  if (!loc) notFound();

  const home = loc.showFees ? await getHomeContent() : null;
  const mapQuery = encodeURIComponent(loc.mapQuery);

  return (
    <>
      <PageHero
        crumb={loc.title}
        eyebrow={loc.eyebrow}
        title={loc.title}
        lead={loc.lead || undefined}
        image={loc.heroImage}
      />

      {/* Intro + quick facts */}
      {loc.introBody.length > 0 && (
        <section className="bg-bone">
          <div className="shell py-20 md:py-28">
            <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
              <Reveal className="lg:col-span-7">
                <PortableBody
                  value={loc.introBody}
                  className="space-y-5 text-lg leading-relaxed text-ink-soft"
                />
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
      )}

      {/* H2 — What is a vasectomy */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow text-clay">The procedure</p>
              <h2 className="mt-5 text-[length:var(--text-headline)]">{loc.whatIsHeading}</h2>
              <PortableBody
                value={loc.whatIsBody}
                className="mt-6 space-y-4 leading-relaxed text-ink-soft"
              />
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image
                  src={loc.whatIsImage.src}
                  alt={loc.whatIsImage.alt}
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
      {loc.recoveryBody.length > 0 && (
        <section className="bg-green-gradient text-paper">
          <div className="shell py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="eyebrow text-clay-soft">Recovery</p>
                <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">
                  {loc.recoveryHeading}
                </h3>
                <PortableBody
                  value={loc.recoveryBody}
                  className="mt-6 space-y-4 leading-relaxed text-paper/85"
                />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* H3 — Why choose */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                  <Image
                    src={loc.whyImage.src}
                    alt={loc.whyImage.alt}
                    fill
                    sizes="(max-width:1024px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                {loc.whyBadgeValue && (
                  <div className="absolute bottom-4 right-4 max-w-[12rem] rounded-[3px] bg-paper p-5 shadow-soft ring-1 ring-line lg:-bottom-6 lg:-right-6">
                    <p className="figure text-4xl leading-none text-teal">{loc.whyBadgeValue}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-soft">
                      {loc.whyBadgeLabel}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="eyebrow text-clay">Your doctor</p>
                <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">{loc.whyHeading}</h3>
                <PortableBody
                  value={loc.whyBody}
                  className="mt-6 space-y-4 leading-relaxed text-ink-soft"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* H3 — Service areas */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow text-clay">Locations</p>
              <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">{loc.areasHeading}</h3>
              <PortableBody
                value={loc.areasBody}
                className="mt-6 leading-relaxed text-ink-soft"
              />

              {loc.nswClinics.length > 0 && (
                <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {loc.nswClinics.map((c) => (
                    <li key={c} className="flex gap-2 py-1.5 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {loc.otherClinics.length > 0 && (
                <>
                  <p className="mt-8 font-medium text-ink">
                    Other clinics accessible across Australia include:
                  </p>
                  <ul className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                    {loc.otherClinics.map((c) => (
                      <li key={c} className="flex gap-2 py-1.5 text-sm text-ink-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {loc.areasOutro.length > 0 && (
                <PortableBody
                  value={loc.areasOutro}
                  className="mt-8 leading-relaxed text-ink-soft"
                />
              )}
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-line bg-sand shadow-soft lg:sticky lg:top-28">
                <iframe
                  title={`Map — ${loc.mapQuery}`}
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
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
              <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">{loc.costHeading}</h3>
              <PortableBody
                value={loc.costBody}
                className="mt-6 leading-relaxed text-ink-soft"
              />
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                {home && (
                  <div className="border border-line bg-paper p-8 md:p-10">
                    <dl>
                      {home.fees.rows.map((row) => (
                        <div key={row.label} className="flex items-baseline justify-between border-b border-line py-4 text-ink-soft">
                          <dt>{row.label}</dt>
                          <dd className="font-medium text-ink">{row.value}</dd>
                        </div>
                      ))}
                      <div className="flex items-baseline justify-between pt-6">
                        <dt className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                          {home.fees.total.label}
                        </dt>
                        <dd className="figure text-6xl text-teal">{home.fees.total.value}</dd>
                      </div>
                    </dl>
                  </div>
                )}
                {loc.costTerms && (
                  <p className="mt-6 leading-relaxed text-ink-soft">{loc.costTerms}</p>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* H3 — FAQ */}
      {loc.faqs.length > 0 && (
        <section className="bg-sand">
          <div className="shell py-20 md:py-28">
            <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="eyebrow text-clay">FAQ</p>
                  <h3 className="mt-5 font-display text-3xl md:text-[2.5rem]">{loc.faqHeading}</h3>
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
                {loc.faqs.map((faq, i) => (
                  <Reveal as="div" key={`${faq.question}-${i}`} delay={Math.min(i * 40, 200)}>
                    <details className="group border-t border-line py-2 first:border-t-0">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                        <span className="font-display text-xl leading-snug md:text-2xl">{faq.question}</span>
                        <span className="relative mt-1 h-5 w-5 shrink-0 text-clay">
                          <span className="absolute left-1/2 top-1/2 h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-1/2 h-4 w-[1.6px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                        </span>
                      </summary>
                      <div className="max-w-2xl space-y-3 pb-6 pr-8 leading-relaxed text-ink-soft">
                        {faq.answer.map((p, j) => (
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
      )}

      <CtaBand title={loc.ctaTitle} />
    </>
  );
}
