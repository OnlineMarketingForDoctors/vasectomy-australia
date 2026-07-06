import Image from "next/image";
import { fees as feesContent, site } from "@/lib/content";
import { images, type SiteImage } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function Fees({
  content = feesContent,
  image = images.consult,
}: {
  content?: typeof feesContent;
  image?: SiteImage;
}) {
  return (
    <section id="fees" className="scroll-mt-24 bg-bone">
      <div className="shell py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">{content.eyebrow}</p>
            <h2 className="mt-5 text-[length:var(--text-display)]">
              {content.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft lg:h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Fee breakdown */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="border border-line bg-paper p-8 md:p-10">
                <dl>
                  {content.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between border-b border-line py-4 text-ink-soft"
                    >
                      <dt>{row.label}</dt>
                      <dd className="font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between pt-6">
                    <dt className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                      {content.total.label}
                    </dt>
                    <dd className="figure text-6xl text-teal">
                      {content.total.value}
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="mt-6 leading-relaxed text-ink-soft">{content.terms}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
                >
                  Book online
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                >
                  Call {site.phoneLabel}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
