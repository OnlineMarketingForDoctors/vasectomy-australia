import Image from "next/image";
import { whyChoose } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-24 bg-bone">
      <div className="shell py-24 md:py-32">
        <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-14">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand">
              <Image
                src={images.geoffProcedure.src}
                alt={images.geoffProcedure.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Points */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow text-clay">{whyChoose.eyebrow}</p>
              <h2 className="mt-5 text-[length:var(--text-headline)]">
                {whyChoose.title}
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {whyChoose.points.map((point, i) => (
                <Reveal as="li" key={point} delay={(i % 2) * 80}>
                  <div className="flex gap-3 border-t border-line py-4 text-ink">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="m5 10.5 3.2 3.2L15 7"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="leading-snug">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
