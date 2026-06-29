import { zip } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ZipMoney() {
  return (
    <section className="bg-sand">
      <div className="shell py-16 md:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/zip-money-logo.svg"
              alt="Zip Money"
              width={300}
              height={135}
              className="mb-6 h-12 w-auto rounded-lg ring-1 ring-ink/10"
            />
            <h2 className="text-balance font-display text-3xl md:text-[2.5rem]">
              {zip.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{zip.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={zip.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
            >
              {zip.primaryCta.label}
            </a>
            <a
              href={zip.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              {zip.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
