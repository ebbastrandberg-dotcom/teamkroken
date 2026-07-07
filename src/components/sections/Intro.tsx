import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import {
  championshipStory,
  teamRacingStory,
  teamStory,
} from "@/lib/content";

function SectionBlock({
  label,
  heading,
  subheading,
  children,
}: {
  label: string;
  heading: string;
  subheading?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
        {label}
      </p>
      <h2 className="text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-light tracking-[1px] text-[var(--color-sail)]">
        {heading}
      </h2>
      {subheading ? (
        <p className="mt-1 text-[14px] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
          {subheading}
        </p>
      ) : null}
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

export function Intro() {
  return (
    <Section id="about" tone="base">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12">
            <SectionBlock
              label="The team"
              heading={teamStory.heading}
              subheading={teamStory.subheading}
            >
              {teamStory.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </SectionBlock>

            <SectionBlock label="The event" heading={championshipStory.heading}>
              {championshipStory.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </SectionBlock>

            <SectionBlock label="The discipline" heading={teamRacingStory.heading}>
              {teamRacingStory.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </SectionBlock>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
