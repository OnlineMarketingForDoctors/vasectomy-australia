import Image from "next/image";
import { howItWorks } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" aria-hidden>
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HowItWorks() {
  const steps = howItWorks.steps;

  return (
    <section id="how" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-clay">{howItWorks.eyebrow}</p>
              <h2 className="mt-5 text-[length:var(--text-display)]">
                {howItWorks.title}
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-ink-soft">
                {howItWorks.body}
              </p>
            </Reveal>
          </div>

          {/* Explainer video (streamed from Drive) */}
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-teal-deep/10 shadow-soft ring-1 ring-line">
              <iframe
                src="https://drive.google.com/file/d/1HdK4ZIzeQ2Hs1Smu54hBPvHAxcwyqike/preview"
                title="How a no-scalpel vasectomy works — Dr Geoff Cashion"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Images */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image
                  src={images.procedure.src}
                  alt={images.procedure.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image
                  src={images.anaesthetic.src}
                  alt={images.anaesthetic.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Steps timeline */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="flex h-full flex-col">
              {steps.map((step, i) => {
                const last = i === steps.length - 1;
                return (
                  <Reveal
                    as="li"
                    key={step.n}
                    delay={i * 70}
                    className={`flex gap-6 ${last ? "" : "flex-1"}`}
                  >
                    {/* Rail: numbered node + connecting line */}
                    <div className="flex flex-col items-center self-stretch">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-clay/40 bg-clay/5">
                        <span className="figure text-lg text-clay">{step.n}</span>
                      </span>
                      {!last && (
                        <div className="flex min-h-12 w-full flex-1 flex-col items-center pt-2">
                          <span className="w-px flex-1 bg-gradient-to-b from-clay/55 to-clay/15" />
                          <ChevronDown className="mt-1 h-3 w-3 text-clay/50" />
                        </div>
                      )}
                    </div>

                    {/* Copy */}
                    <p className="max-w-md pb-10 pt-2.5 leading-relaxed text-ink">
                      {step.text}
                    </p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
