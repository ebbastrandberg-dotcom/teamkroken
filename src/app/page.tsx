import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { PartnerOpportunity } from "@/components/sections/PartnerOpportunity";
import { Press } from "@/components/sections/Press";
import { RaceCalendar } from "@/components/sections/RaceCalendar";
import { SponsorshipTiers } from "@/components/sections/SponsorshipTiers";
import { Team } from "@/components/sections/Team";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-24 md:pb-0">
        <Hero />
        <PartnerOpportunity />
        <SponsorshipTiers />
        <Intro />
        <RaceCalendar />
        <Team />
        <Press />
        <ContactCta />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
