import { Button } from "@/components/ui/Button";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";
import { worldChampionship } from "@/lib/event";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border-subtle)] px-6 py-16"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <OrnamentalRule className="mb-4" />
        <p className="mb-3 text-[7.5px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
          Join us on the water
        </p>
        <h2 className="text-[clamp(24px,4vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
          Become a partner
        </h2>
        <p className="mt-4 max-w-md text-[10px] leading-[1.65] text-[var(--color-text-muted)]">
          Align your brand with Team Kroken as we prepare for the{" "}
          {worldChampionship.title}. We welcome conversations with partners who
          share our commitment to excellence on and off the race course.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <Button>Contact the Team</Button>
          <Button variant="secondary">View Sponsorship Deck</Button>
        </div>
        <OrnamentalRule className="mt-8" />
        <p className="mt-4 text-[9px] text-[var(--color-text-muted)]">
          sponsorship@teamkroken.se
        </p>
      </div>
    </section>
  );
}
