import { locationsIntro } from "@/lib/locations";
import { Reveal } from "@/components/ui/Reveal";
import { LocationsTabs } from "@/components/sections/LocationsTabs";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">{locationsIntro.eyebrow}</p>
            <h2 className="mt-5 text-balance text-[length:var(--text-display)]">
              {locationsIntro.title}
            </h2>
            <p className="mt-7 leading-relaxed text-ink-soft">
              {locationsIntro.body}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <LocationsTabs initialCount={3} />
        </Reveal>
      </div>
    </section>
  );
}
