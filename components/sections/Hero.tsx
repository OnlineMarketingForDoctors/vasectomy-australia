import Image from "next/image";
import { hero as heroContent } from "@/lib/content";
import { images, type SiteImage } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { GoogleBadge } from "@/components/ui/GoogleBadge";

export function Hero({
  content = heroContent,
  image = images.heroWide,
}: {
  content?: typeof heroContent;
  image?: SiteImage;
}) {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-teal-deep text-paper">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-teal-deep/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep/70 via-transparent to-teal-deep/30" />

      <div className="shell w-full py-24 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay-soft">{content.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[length:var(--text-display)] text-paper">
              {content.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85">
              {content.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={content.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
              >
                {content.primaryCta.label}
              </a>
              <a
                href={content.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-paper/40 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8">
              <GoogleBadge variant="dark" />
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-10 flex max-w-md divide-x divide-paper/20 border-t border-paper/20 pt-6">
              {content.microStats.map((s) => (
                <div key={s.label} className="flex-1 px-4 first:pl-0">
                  <dt className="figure text-3xl text-paper">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-paper/65">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
