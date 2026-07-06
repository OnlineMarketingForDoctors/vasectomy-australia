import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Doctors } from "@/components/sections/Doctors";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Fees } from "@/components/sections/Fees";
import { ZipMoney } from "@/components/sections/ZipMoney";
import { Locations } from "@/components/sections/Locations";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  getHomeContent,
  getDoctors,
  getFaqs,
  getClinicStates,
} from "@/lib/site-data";

export default async function Home() {
  const [home, doctors, faqs, states] = await Promise.all([
    getHomeContent(),
    getDoctors(),
    getFaqs(),
    getClinicStates(),
  ]);

  return (
    <>
      <Hero content={home.hero} image={home.heroImage} />
      <Pillars items={home.pillars} />
      <Doctors intro={home.doctorsIntro} wideImage={home.doctorsImage} list={doctors} />
      <WhyChoose content={home.whyChoose} image={home.whyImage} />
      <HowItWorks
        content={home.howItWorks}
        videoUrl={home.howItWorks.videoUrl}
        imageTop={home.howImageTop}
        imageBottom={home.howImageBottom}
      />
      <Fees content={home.fees} image={home.feesImage} />
      <ZipMoney content={home.zip} />
      <Locations intro={home.locationsIntro} states={states} />
      <Faq items={faqs} />
      <FinalCta content={home.finalCta} image={home.finalCtaImage} />
    </>
  );
}
