import Image from "next/image";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  title = "Ready to book now?",
  body = "It's quicker, calmer and easier than you're imagining — and you'll be in the hands of two of the most experienced vasectomists in the country. Free phone consultations are available.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep text-paper">
      <Image
        src={images.ctaDoctors.src}
        alt={images.ctaDoctors.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover object-top opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/85 to-teal-deep/60" />
      <div className="shell py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay-soft">Ready when you are</p>
          <h2 className="mt-5 text-balance text-[length:var(--text-display)] text-paper">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-paper px-8 py-4 text-sm font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
            >
              Book online
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center rounded-full border border-paper/30 px-8 py-4 text-sm font-medium text-paper transition-colors hover:border-paper/70"
            >
              Call {site.phoneLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
