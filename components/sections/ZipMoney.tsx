import { zip } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ZipMoney() {
  return (
    <section className="bg-green-gradient text-paper">
      <div className="shell py-16 md:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/zip-money-logo.svg"
              alt="Zip Money"
              width={300}
              height={135}
              className="mb-6 h-12 w-auto rounded-lg ring-1 ring-paper/20"
            />
            <h2 className="text-balance font-display text-3xl text-paper md:text-[2.5rem]">
              {zip.title}
            </h2>
            <p className="mt-4 leading-relaxed text-paper/80">{zip.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={zip.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
            >
              {zip.primaryCta.label}
            </a>
            <a
              href={zip.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-paper/40 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
            >
              {zip.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
