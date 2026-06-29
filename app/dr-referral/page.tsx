import Image from "next/image";
import type { Metadata } from "next";
import { drReferral } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/site/LeadForm";

export const metadata: Metadata = {
  title: "Dr Referral — Refer a Patient",
  description:
    "Refer your patient for a no-scalpel vasectomy. Dr Geoff Cashion and Dr Matt Valentine have performed over 23,000 vasectomies — quick, safe, effective and affordable.",
};

export default function DrReferralPage() {
  return (
    <>
      <PageHero
        crumb="Dr Referral"
        eyebrow="For referring doctors"
        title="Refer your patient for a vasectomy."
        lead={drReferral.intro}
        image={images.ctaDoctors}
      />

      {/* Benefits */}
      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-2xl text-[length:var(--text-headline)]">
              Why refer your patients to Vasectomy Australia.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {drReferral.benefits.map((b, i) => (
              <Reveal as="div" key={b.title} delay={(i % 2) * 80}>
                <div className="flex gap-5 border-t border-line py-7">
                  <span className="figure text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-12 max-w-2xl font-display text-2xl leading-snug text-teal">
              {drReferral.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Referral form */}
      <section className="bg-sand">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-clay">Referral form</p>
                <h2 className="mt-5 text-[length:var(--text-headline)]">Refer a patient</h2>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  Provide your patient&apos;s details and we&apos;ll contact them to
                  book their procedure at their preferred clinic.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <LeadForm
                  kind="referral"
                  submitLabel="Refer a patient"
                  fields={[
                    { name: "patient_first", label: "Patient's first name", required: true, half: true },
                    { name: "patient_last", label: "Patient's surname", required: true, half: true },
                    { name: "patient_phone", label: "Patient's phone", type: "tel", half: true },
                    { name: "preferred_clinic", label: "Preferred clinic", half: true },
                    { name: "doctor_name", label: "Referring doctor's name", required: true, half: true },
                    { name: "practice", label: "Practice / clinic", half: true },
                    { name: "doctor_email", label: "Your email", type: "email", required: true },
                    { name: "notes", label: "Notes (optional)", type: "textarea" },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
