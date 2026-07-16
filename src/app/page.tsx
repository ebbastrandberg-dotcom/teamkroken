import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { OnTheWater } from "@/components/sections/OnTheWater";
import { Press } from "@/components/sections/Press";
import { RaceCalendar } from "@/components/sections/RaceCalendar";
import { SponsorshipTiers } from "@/components/sections/SponsorshipTiers";
import { Team } from "@/components/sections/Team";
import { TeamAbout } from "@/components/sections/TeamAbout";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-24 md:pb-0">
        <Hero />
        <SponsorshipTiers />
        <TeamAbout />
        <Intro />
        <RaceCalendar />
        <Team />
        <Press />
        <ContactCta />
        <OnTheWater />
      </main>
      <Footer />
    </>
  );
}
