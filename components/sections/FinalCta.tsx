import Image from "next/image";
import { finalCta } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep text-paper">
      <Image
        src={images.ctaDoctors.src}
        alt={images.ctaDoctors.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover object-top opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/80 to-teal-deep/55" />

      <div className="shell py-28 md:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay-soft">{finalCta.eyebrow}</p>
          <h2 className="mt-5 text-balance text-[length:var(--text-display)] text-paper">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            {finalCta.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={finalCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-paper px-8 py-4 text-sm font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
            >
              {finalCta.primaryCta.label}
            </a>
            <a
              href={finalCta.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-paper/30 px-8 py-4 text-sm font-medium text-paper transition-colors hover:border-paper/70"
            >
              {finalCta.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
