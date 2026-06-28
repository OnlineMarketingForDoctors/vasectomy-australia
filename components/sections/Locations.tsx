import { locations } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-24 bg-paper">
      <div className="shell py-24 md:py-32">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-clay">{locations.eyebrow}</p>
              <h2 className="mt-5 text-balance text-[length:var(--text-display)]">
                {locations.title}
              </h2>
              <p className="mt-7 leading-relaxed text-ink-soft">
                {locations.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl>
              {locations.states.map((s, i) => (
                <Reveal as="div" key={s.state} delay={i * 60}>
                  <div className="grid grid-cols-1 gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 md:grid-cols-[14rem_1fr] md:gap-8">
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
