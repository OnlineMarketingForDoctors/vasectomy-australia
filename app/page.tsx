import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Doctors } from "@/components/sections/Doctors";
import { PullQuote } from "@/components/sections/PullQuote";
import { Procedure } from "@/components/sections/Procedure";
import { Reassurance } from "@/components/sections/Reassurance";
import { Reviews } from "@/components/sections/Reviews";
import { Locations } from "@/components/sections/Locations";
import { Cost } from "@/components/sections/Cost";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Doctors />
      <PullQuote />
      <Procedure />
      <Reassurance />
      <Reviews />
      <Locations />
      <Cost />
      <Faq />
      <FinalCta />
    </>
  );
}
