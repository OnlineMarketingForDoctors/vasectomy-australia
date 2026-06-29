import type { Metadata } from "next";
import { locationsByState } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Locations — No-Scalpel Vasectomy Clinics Across Australia",
  description:
    "Vasectomy Australia runs clinics close to patients in every state and territory. Find your nearest no-scalpel vasectomy clinic.",
};

export default function LocationsPage() {
  const totalCities = locationsByState.reduce((n, s) => n + s.cities.length, 0);

  return (
    <>
      <PageHero
        crumb="Locations"
        eyebrow="Locations"
        title="No-scalpel vasectomy clinics across Australia."
        lead={`Dr Geoff Cashion covers NSW, SA and Tasmania; Dr Matt Valentine covers QLD, Victoria, WA and the ACT. Between them, ${totalCities} clinics in every state and territory — so there's almost always one near you.`}
        image={images.treatmentRoom}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="space-y-14">
            {locationsByState.map((s, i) => (
              <Reveal as="div" key={s.state} delay={Math.min(i * 60, 240)}>
                <div className="grid gap-y-5 border-t border-ink/15 pt-8 lg:grid-cols-12 lg:gap-x-12">
                  <div className="lg:col-span-4">
                    <h2 className="font-display text-3xl">{s.state}</h2>
                    <p className="mt-2 text-sm uppercase tracking-wider text-clay">
                      {s.doctor}
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
                    {s.cities.map((c) => (
                      <li key={c} className="flex items-center gap-3 border-b border-line pb-3 text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Find your nearest clinic and book." />
    </>
  );
}
