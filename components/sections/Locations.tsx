import Image from "next/image";
import { locations } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-clay">{locations.eyebrow}</p>
              <h2 className="mt-5 text-balance text-[length:var(--text-display)]">
                {locations.title}
              </h2>
              <p className="mt-7 leading-relaxed text-ink-soft">
                {locations.body}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand">
                <Image
                  src={images.reception.src}
                  alt={images.reception.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl>
              {locations.states.map((s, i) => (
                <Reveal as="div" key={s.state} delay={i * 60}>
                  <div className="grid grid-cols-1 gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-8">
                    <dt className="font-display text-2xl leading-tight">
                      {s.state}
                    </dt>
                    <dd className="text-ink-soft">{s.cities}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
