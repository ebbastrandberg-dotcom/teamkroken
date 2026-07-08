import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { teamStory, championshipStory } from "@/lib/content";

export function Intro() {
  return (
    <Section id="about" tone="base">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Why Team Kroken
          </p>
          <h2 className="mb-8 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Credibility on and off the water
          </h2>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <Reveal delay={0.06}>
            <div>
              <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
                The team
              </p>
              <h3 className="min-h-[30px] text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-light tracking-[1px] text-[var(--color-sail)]">
                {teamStory.heading}
              </h3>
              <p className="mt-1 min-h-[22px] text-[14px] leading-[1.5] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
                {teamStory.subheading}
              </p>
              <div className="mt-5 space-y-4">
                {teamStory.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
                The event
              </p>
              <h3 className="min-h-[30px] text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-light tracking-[1px] text-[var(--color-sail)]">
                {championshipStory.heading}
              </h3>
              <p
                className="mt-1 hidden min-h-[22px] text-[14px] leading-[1.5] tracking-[0.5px] text-[var(--color-text-subtle)] italic lg:block"
                aria-hidden="true"
              >
                {"\u00A0"}
              </p>
              <div className="mt-5 space-y-4">
                {championshipStory.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.18}>
          <div className="mt-10">
            <ButtonLink href="#team" variant="secondary">
              Meet the team
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
