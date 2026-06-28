import Image from "next/image";
import { procedure } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function Procedure() {
  return (
    <section id="procedure" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">{procedure.eyebrow}</p>
            <h2 className="mt-5 text-[length:var(--text-display)]">
              {procedure.title}
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              {procedure.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand sm:aspect-[3/2] lg:h-full">
              <Image
                src={images.procedure.src}
                alt={images.procedure.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <ol>
              {procedure.steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 90}>
                  <div className="flex gap-6 border-t border-line py-7 first:border-t-0 first:pt-0">
                    <span className="figure text-4xl text-clay">{step.n}</span>
                    <div>
                      <h3 className="font-display text-2xl">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">
                        {step.text}
                      </p>
                    </div>
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
