import Image from "next/image";
import type { Metadata } from "next";
import { postOp } from "@/lib/pages";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Post-Operative Instructions",
  description:
    "Recovering from your no-scalpel vasectomy: wound care, pain management, activity restrictions, semen testing and 24-hour after-care support.",
};

export default function PostOpPage() {
  return (
    <>
      <PageHero
        crumb="Post-Operative Instructions"
        eyebrow="After your vasectomy"
        title="Looking after yourself afterwards."
        lead={postOp.intro}
        image={images.recovery}
      />

      {/* Care blocks */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-x-14 gap-y-2 md:grid-cols-2">
            {postOp.blocks.map((b, i) => (
              <Reveal as="div" key={b.title} delay={(i % 2) * 80}>
                <div className="border-t border-line py-7">
                  <h2 className="font-display text-2xl">{b.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activity restrictions */}
      <section className="bg-teal text-paper">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <h2 className="text-[length:var(--text-headline)] text-paper">
              Take it easy — here&apos;s the timeline.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {postOp.restrictions.map((r) => (
                <div key={r.period} className="border-t border-paper/25 pt-5">
                  <p className="figure text-4xl text-paper">{r.period}</p>
                  <p className="mt-3 text-paper/80">Avoid: {r.items}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl border-l-2 border-clay-soft pl-5 text-paper/80">
              {postOp.warning}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Help + closing */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-7">
              <h2 className="text-[length:var(--text-headline)]">Need help?</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
                If you have any problems after your procedure, request a callback
                from your doctor — or for less urgent matters, email us. We offer
                24-hour after-care support.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep">
                  Request a call back
                </a>
                <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40">
                  {site.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <blockquote className="border-l-2 border-clay pl-6 font-display text-2xl leading-snug text-ink">
                {postOp.closing}
              </blockquote>
              <p className="mt-4 pl-6 text-sm text-ink-soft">— The team at Vasectomy Australia</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
