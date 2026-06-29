import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { patientInfo } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Patient Information — Your Vasectomy Explained",
  description:
    "Exactly what to expect from your no-scalpel vasectomy with Vasectomy Australia — your consultation, the procedure step by step, and how to prepare.",
};

const resources = [
  { label: "Post-operative instructions", href: "/post-operative-instructions" },
  { label: "Post-vasectomy semen testing", href: "/sperm-test" },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "Fees & Medicare", href: "/fees" },
];

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        crumb="Patient Info"
        eyebrow="Patient information"
        title="Your vasectomy, explained."
        lead={patientInfo.intro}
        image={images.treatmentRoom}
      />

      {/* Consultation */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-6">
              <h2 className="text-[length:var(--text-headline)]">
                {patientInfo.consultation.title}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {patientInfo.consultation.body}
              </p>
              <ul className="mt-6 space-y-3">
                {patientInfo.consultation.points.map((p) => (
                  <li key={p} className="flex gap-3 border-t border-line pt-3 text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span className="leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image src={images.consult.src} alt={images.consult.alt} fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Procedure steps */}
      <section className="bg-paper">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5">
              <h2 className="text-[length:var(--text-headline)]">
                {patientInfo.procedure.title}
              </h2>
              <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image src={images.geoffProcedure.src} alt={images.geoffProcedure.alt} fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol>
                {patientInfo.procedure.steps.map((step, i) => (
                  <Reveal as="li" key={i} delay={i * 50}>
                    <div className="flex gap-5 border-t border-line py-5 first:border-t-0 first:pt-0">
                      <span className="figure text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                      <p className="pt-0.5 leading-relaxed text-ink">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <Reveal className="lg:col-span-5 lg:order-2 lg:col-start-8">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
                <Image src={images.anaesthetic.src} alt={images.anaesthetic.alt} fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:order-1">
              <h2 className="text-[length:var(--text-headline)]">
                {patientInfo.preparing.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {patientInfo.preparing.points.map((p) => (
                  <li key={p} className="flex gap-3 border-t border-line pt-3 text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span className="leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-sand">
        <div className="shell py-16 md:py-20">
          <h2 className="font-display text-2xl">Helpful next steps</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between py-5 transition-colors hover:text-teal"
              >
                <span className="font-display text-xl md:text-2xl">{r.label}</span>
                <span className="text-clay transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
