import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { RaceCalendar } from "@/components/sections/RaceCalendar";
import { SponsorshipTiers } from "@/components/sections/SponsorshipTiers";
import { Team } from "@/components/sections/Team";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <SponsorshipTiers />
        <RaceCalendar />
        <Team />
        <ContactCta />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
