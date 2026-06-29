import Image from "next/image";
import { howItWorks } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="max-w-2xl">
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

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Images */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand">
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
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand">
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

          {/* Steps */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol>
              {howItWorks.steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 70}>
                  <div className="flex gap-6 border-t border-line py-6 first:border-t-0 first:pt-0">
                    <span className="figure text-3xl text-clay">{step.n}</span>
                    <p className="pt-1 leading-relaxed text-ink">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
