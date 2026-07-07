import { Button } from "@/components/ui/Button";
import { sponsorshipStory } from "@/lib/content";
import { worldChampionship } from "@/lib/event";
import { sponsorshipTiers } from "@/lib/sponsorship";

export function SponsorshipTiers() {
  return (
    <section id="sponsorship" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-[7.5px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
          Partnership opportunities
        </p>
        <h2 className="mb-3 text-[30px] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
          Sponsorship packages
        </h2>
        <p className="mb-4 max-w-2xl text-[10px] leading-[1.65] text-[var(--color-text-muted)]">
          Partner with Team Kroken ahead of the {worldChampionship.title}.
        </p>
        <p className="mb-10 max-w-2xl text-[10px] leading-[1.65] text-[var(--color-text-muted)]">
          {sponsorshipStory}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <article
              key={tier.tier}
              className="border border-[var(--color-card-border)] p-3.5"
            >
              <p className="mb-1 text-[7px] tracking-[3px] text-[var(--color-brass)] uppercase">
                {tier.tier}
              </p>
              <h3 className="text-[17px] tracking-[0.5px] text-[var(--color-sail)]">
                {tier.title}
              </h3>
              <p className="mt-2 text-[13px] tracking-[0.5px] text-[var(--color-brass)]">
                {tier.price}
              </p>
              <p className="mt-2 text-[9.5px] leading-[1.6] text-[var(--color-text-muted)]">
                {tier.benefit}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Button>Become a Partner</Button>
          <Button variant="secondary">Contact the Team</Button>
        </div>
      </div>
    </section>
  );
}
