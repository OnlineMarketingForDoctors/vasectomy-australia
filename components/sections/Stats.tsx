import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="bg-teal text-paper">
      <div className="shell py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="border-t border-paper/20 pt-5">
                <p className="figure text-5xl text-paper md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 max-w-[15ch] text-sm leading-snug text-paper/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
