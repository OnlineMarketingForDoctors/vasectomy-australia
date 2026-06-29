import { pillars } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Pillars() {
  return (
    <section className="bg-teal text-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 100}>
              <div className="border-t border-paper/25 pt-6">
                <h2 className="font-display text-3xl md:text-4xl">{p.key}</h2>
                <p className="mt-4 leading-relaxed text-paper/75">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
