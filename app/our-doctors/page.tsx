import Image from "next/image";
import type { Metadata } from "next";
import { doctorProfiles, type DoctorProfile } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Doctors — Dr Geoff Cashion & Dr Matt Valentine",
  description:
    "Meet the two doctors behind Vasectomy Australia — Dr Geoff Cashion and Dr Matt Valentine — among the most experienced no-scalpel vasectomists in the country.",
};

function Profile({ doctor, flip }: { doctor: DoctorProfile; flip: boolean }) {
  const img = images[doctor.image];
  return (
    <div className="grid items-start gap-y-10 lg:grid-cols-12 lg:gap-x-14">
      <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand lg:sticky lg:top-28">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
        <Reveal>
          <p className="eyebrow text-clay">{doctor.regions}</p>
          <h2 className="mt-4 text-[length:var(--text-headline)]">{doctor.name}</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-soft">
            {doctor.role}
          </p>
          <p className="mt-6 font-display text-2xl leading-snug text-teal">
            {doctor.lead}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            {doctor.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-ink">{doctor.personal}</p>
          </div>

          <h3 className="eyebrow mt-10 text-ink-soft">Qualifications</h3>
          <dl className="mt-4">
            {doctor.qualifications.map((q) => (
              <div key={q.year} className="flex gap-6 border-t border-line py-3">
                <dt className="figure w-16 shrink-0 text-xl text-clay">{q.year}</dt>
                <dd className="text-sm leading-snug text-ink">{q.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}

export default function OurDoctorsPage() {
  return (
    <>
      <PageHero
        crumb="Our Doctors"
        eyebrow="Our doctors"
        title="You're booking Geoff or Matt — not a clinic."
        lead="Every Vasectomy Australia procedure is performed by one of two doctors, both among the most experienced no-scalpel vasectomists in the country. Here's who you'll meet."
        image={images.doctorsConversation}
      />

      <section className="bg-bone">
        <div className="shell space-y-24 py-24 md:space-y-32 md:py-32">
          {doctorProfiles.map((doctor, i) => (
            <Profile key={doctor.id} doctor={doctor} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaBand title="Book with Geoff or Matt." />
    </>
  );
}
