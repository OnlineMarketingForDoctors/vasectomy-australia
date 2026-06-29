import type { Metadata } from "next";
import { faqAll } from "@/lib/pages";
import { site } from "@/lib/content";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { GoogleBadge } from "@/components/ui/GoogleBadge";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions men actually ask about no-scalpel vasectomy — cost, recovery, effectiveness, the procedure, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="FAQ"
        title="The questions men actually ask."
        lead="Everything you might be wondering about a no-scalpel vasectomy. Still unsure? Free phone consultations are available."
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="leading-relaxed text-ink-soft">
                    Can&apos;t find your answer? Call{" "}
                    <a href={site.phoneHref} className="font-medium text-teal hover:underline">
                      {site.phoneLabel}
                    </a>{" "}
                    or email{" "}
                    <a href={`mailto:${site.email}`} className="font-medium text-teal hover:underline">
                      {site.email}
                    </a>
                    .
                  </p>
                  <div className="mt-6">
                    <GoogleBadge />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {faqAll.map((faq, i) => (
                <Reveal as="div" key={faq.q} delay={Math.min(i * 25, 200)}>
                  <details className="group border-t border-line py-2">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                      <span className="font-display text-xl leading-snug md:text-2xl">{faq.q}</span>
                      <span className="relative mt-1 h-5 w-5 shrink-0 text-clay">
                        <span className="absolute left-1/2 top-1/2 h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-1/2 h-4 w-[1.6px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <div className="max-w-2xl pb-6 pr-8 leading-relaxed text-ink-soft">{faq.a}</div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
