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

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Doctors />
      <WhyChoose />
      <HowItWorks />
      <Fees />
      <ZipMoney />
      <Locations />
      <Faq />
      <FinalCta />
    </>
  );
}
