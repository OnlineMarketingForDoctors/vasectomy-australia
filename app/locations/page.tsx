import type { Metadata } from "next";
import { locationsIntro } from "@/lib/locations";
import { images } from "@/lib/images";
import { getClinicStates } from "@/lib/site-data";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { LocationsTabs } from "@/components/sections/LocationsTabs";

export const metadata: Metadata = {
  title: "Locations — No-Scalpel Vasectomy Clinics Across Australia",
  description:
    "Find your nearest Vasectomy Australia clinic. No-scalpel vasectomy clinics across NSW, QLD, VIC, WA, SA and Tasmania — with addresses, maps and online booking.",
};

export default async function LocationsPage() {
  const states = await getClinicStates();
  const totalClinics = states.reduce((n, s) => n + s.clinics.length, 0);

  return (
    <>
      <PageHero
        crumb="Locations"
        eyebrow={locationsIntro.eyebrow}
        title={locationsIntro.title}
        lead={`${locationsIntro.body} ${totalClinics} clinics and counting.`}
        image={images.treatmentRoom}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <LocationsTabs states={states} />
        </div>
      </section>

      <CtaBand title="Find your nearest clinic and book." />
    </>
  );
}
