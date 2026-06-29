import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fees, zip, site } from "@/lib/content";
import { medicare } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Vasectomy Fees — $597 Out of Pocket",
  description:
    "One simple, transparent price for a no-scalpel vasectomy with Vasectomy Australia: $825 fee, less $228 Medicare rebate — just $597 out of pocket. Zip Money available.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        crumb="Fees"
        eyebrow="Fees"
        title="One simple price. Most of it covered by Medicare."
        lead="No hidden fees and no surprises — and a fraction of the cost of a vasectomy in a private hospital, which can run to $2,260 or more."
        image={images.consult}
      />

      {/* Fee breakdown */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand lg:h-full">
                <Image src={images.consult.src} alt={images.consult.alt} fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
              </div>
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
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep">
                    Book online
                  </a>
                  <a href={site.phoneHref} className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40">
                    Call {site.phoneLabel}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Zip */}
      <section className="bg-sand">
        <div className="shell py-16 md:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-balance font-display text-3xl md:text-[2.5rem]">{zip.title}</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{zip.body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={zip.primaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep">
                {zip.primaryCta.label}
              </a>
              <a href={zip.secondaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40">
                {zip.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Medicare */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-clay">Medicare rebate</p>
              <h2 className="mt-5 text-[length:var(--text-headline)]">
                We handle your Medicare rebate for you.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">{medicare.intro}</p>
            </Reveal>
          </div>
          <Reveal>
            <Link href="/medicare" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline">
              How to claim your rebate yourself <span className="text-clay">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
