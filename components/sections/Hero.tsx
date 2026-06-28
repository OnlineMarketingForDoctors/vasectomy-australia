import Image from "next/image";
import { Fragment } from "react";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="shell">
        <div className="grid items-stretch gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          {/* Copy */}
          <div className="order-2 flex flex-col justify-center pb-14 pt-4 lg:order-1 lg:col-span-6 lg:pb-28 lg:pt-24">
            <Reveal>
              <p className="eyebrow text-clay">{hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-[length:var(--text-mega)]">
                {hero.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line.split("&").map((part, j) => (
                      <Fragment key={j}>
                        {j > 0 && <span className="text-clay">&</span>}
                        {part}
                      </Fragment>
                    ))}
                  </span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                {hero.lead}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <dl className="mt-12 flex max-w-md divide-x divide-line border-t border-line pt-6">
                {hero.microStats.map((s) => (
                  <div key={s.label} className="flex-1 px-4 first:pl-0">
                    <dt className="figure text-3xl text-teal">{s.value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand lg:absolute lg:inset-y-8 lg:right-[-3.5rem] lg:aspect-auto lg:left-0 lg:h-[calc(100%-4rem)]">
              <Image
                src={images.heroDoctors.src}
                alt={images.heroDoctors.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-paper">
                Dr Geoff Cashion &amp; Dr Matt Valentine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
