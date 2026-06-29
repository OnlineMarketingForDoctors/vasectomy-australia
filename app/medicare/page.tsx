import type { Metadata } from "next";
import { medicare } from "@/lib/pages";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Medicare Rebate",
  description:
    "How your $228 Medicare rebate works with Vasectomy Australia — we process it for you, usually within 48 hours, or claim it yourself in a few simple ways.",
};

export default function MedicarePage() {
  return (
    <>
      <PageHero
        crumb="Medicare Rebate"
        eyebrow="Medicare rebate"
        title="Your rebate, sorted."
        lead={medicare.intro}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-[length:var(--text-headline)]">{medicare.selfTitle}</h2>
              <p className="mt-5 leading-relaxed text-ink-soft">{medicare.selfIntro}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-14 gap-y-2 md:grid-cols-2">
            {medicare.methods.map((m, i) => (
              <Reveal as="div" key={m.title} delay={(i % 2) * 80}>
                <div className="flex gap-5 border-t border-line py-6">
                  <span className="figure text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 max-w-2xl border-l-2 border-clay pl-5 leading-relaxed text-ink-soft">
              {medicare.note}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
