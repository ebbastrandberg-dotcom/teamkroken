import { TierCard } from "@/components/motion/TierCard";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { sponsorshipStory } from "@/lib/content";
import { worldChampionship } from "@/lib/event";
import { sponsorshipTiers } from "@/lib/sponsorship";

export function SponsorshipTiers() {
  return (
    <section id="sponsorship" className="px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Partnership opportunities
          </p>
          <h2 className="mb-3 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Sponsorship packages
          </h2>
          <p className="mb-4 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            Partner with Team Kroken ahead of the {worldChampionship.title}.
          </p>
          <p className="mb-10 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            {sponsorshipStory}
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {sponsorshipTiers.map((tier, index) => (
            <Reveal key={tier.tier} delay={index * 0.08}>
              <TierCard>
                <p className="mb-1 text-[10px] tracking-[3px] text-[var(--color-brass)] uppercase">
                  {tier.tier}
                </p>
                <h3 className="text-[20px] tracking-[0.5px] text-[var(--color-sail)]">
                  {tier.title}
                </h3>
                <p className="mt-2 text-[15px] tracking-[0.5px] text-[var(--color-brass)]">
                  {tier.price}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-muted)]">
                  {tier.benefit}
                </p>
              </TierCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Button className="w-full sm:w-auto">Become a Partner</Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Contact the Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
