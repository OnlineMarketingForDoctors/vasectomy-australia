import { reviews } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-clay ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.47 5.27 5.78.62-4.32 3.86 1.2 5.7L10 14.9l-5.13 2.95 1.2-5.7L1.75 7.4l5.78-.62z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-bone">
      <div className="shell py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">{reviews.eyebrow}</p>
            <h2 className="mt-5 text-[length:var(--text-display)]">
              {reviews.title}
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              {reviews.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-12">
          {/* Featured */}
          <Reveal className="lg:col-span-6">
            <figure className="flex h-full flex-col justify-between border-t-2 border-ink pt-8">
              <div>
                <Stars />
                <blockquote className="mt-6 text-balance font-display text-3xl leading-snug md:text-[2.5rem]">
                  {reviews.featured.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 text-sm text-ink-soft">
                <span className="font-medium text-ink">{reviews.featured.name}</span>
                {" — "}
                {reviews.featured.location}
              </figcaption>
            </figure>
          </Reveal>

          {/* Secondary */}
          <div className="lg:col-span-5 lg:col-start-8">
            {reviews.items.map((r, i) => (
              <Reveal key={i} delay={i * 90}>
                <figure className="border-t border-line py-7 first:pt-0 first:border-t-0">
                  <Stars className="mb-3" />
                  <blockquote className="leading-relaxed text-ink">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-ink-soft">
                    <span className="font-medium text-ink">{r.name}</span>
                    {" — "}
                    {r.location}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
