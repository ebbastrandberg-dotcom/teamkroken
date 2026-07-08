import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";
import { Section } from "@/components/ui/Section";
import {
  hasSponsorshipDeck,
  sponsorshipDeckPath,
  sponsorshipEmail,
} from "@/lib/contact";
import { worldChampionship } from "@/lib/event";

export function ContactCta() {
  const showDeck = hasSponsorshipDeck();

  return (
    <Section id="contact" tone="base" className="py-12 sm:py-16">
      <Reveal>
        <div className="glass mx-auto flex max-w-2xl flex-col items-center p-8 text-center sm:p-10">
          <OrnamentalRule className="mb-4" />
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Join us on the water
          </p>
          <h2 className="text-[clamp(24px,4vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Become a partner
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            Align your brand with Team Kroken as we prepare for the{" "}
            {worldChampionship.title}. Tell us about your company and we will
            follow up with partnership details.
          </p>
          <ContactForm />
          {showDeck ? (
            <div className="mt-6">
              <ButtonLink href={sponsorshipDeckPath} variant="secondary" external>
                View sponsorship deck
              </ButtonLink>
            </div>
          ) : null}
          <OrnamentalRule className="mt-8" />
          <p className="mt-4 text-[14px] text-[var(--color-text-muted)]">
            Or email{" "}
            <a
              href={`mailto:${sponsorshipEmail}`}
              className="text-[var(--color-brass)] transition-opacity hover:opacity-80"
            >
              {sponsorshipEmail}
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
