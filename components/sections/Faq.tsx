import { faqs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-sand">
      <div className="shell py-24 md:py-32">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-clay">FAQ</p>
              <h2 className="mt-5 text-balance text-[length:var(--text-display)]">
                The questions men actually ask.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <Reveal as="div" key={faq.q} delay={i * 50}>
                <details className="group border-t border-line py-2 first:border-t-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                    <span className="font-display text-xl leading-snug md:text-2xl">
                      {faq.q}
                    </span>
                    <span className="relative mt-1 h-5 w-5 shrink-0 text-clay">
                      <span className="absolute left-1/2 top-1/2 h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-[1.6px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <div className="max-w-2xl pb-6 pr-8 leading-relaxed text-ink-soft">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
