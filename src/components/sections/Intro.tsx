import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { championshipStory } from "@/lib/content";

export function Intro() {
  return (
    <Section tone="muted">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            The event
          </p>
          <h2 className="text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            {championshipStory.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-6 max-w-3xl space-y-4">
            {championshipStory.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
