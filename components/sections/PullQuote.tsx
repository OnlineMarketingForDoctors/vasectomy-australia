import { pullQuote } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function PullQuote() {
  return (
    <section className="bg-sand">
      <div className="shell py-24 md:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="font-display text-6xl leading-none text-clay">“</span>
          <blockquote className="-mt-6 text-balance font-display text-[length:var(--text-display)] leading-[1.05]">
            {pullQuote.quote}
          </blockquote>
          <p className="mx-auto mt-8 max-w-md text-sm text-ink-soft">
            {pullQuote.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
