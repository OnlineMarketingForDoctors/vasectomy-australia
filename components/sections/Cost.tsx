import { cost } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Cost() {
  return (
    <section id="cost" className="scroll-mt-24 bg-bone">
      <div className="shell py-24 md:py-32">
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-clay">{cost.eyebrow}</p>
            <p className="mt-6 figure text-[clamp(3.5rem,9vw,6rem)] text-teal">
              {cost.price}
            </p>
            <p className="mt-3 max-w-xs text-ink-soft">{cost.priceNote}</p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h2 className="text-balance text-[length:var(--text-headline)]">
                {cost.title}
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">{cost.body}</p>
              <ul className="mt-8 space-y-3">
                {cost.included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-line pt-3 text-ink"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-1 h-4 w-4 shrink-0 text-teal"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="m5 10.5 3.2 3.2L15 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
