import {
  championshipStory,
  teamRacingStory,
  teamStory,
} from "@/lib/content";

function SectionBlock({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-[7.5px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
        {label}
      </p>
      <h2 className="text-[30px] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
        {heading}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

export function Intro() {
  return (
    <section className="border-b border-[var(--color-border-subtle)] px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="mb-3 text-[7.5px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
              The team
            </p>
            <h2 className="text-[30px] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
              {teamStory.heading}
            </h2>
            <p className="mt-1 text-[11px] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
              {teamStory.subheading}
            </p>
          </div>
          <div className="space-y-4">
            {teamStory.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[10px] leading-[1.65] text-[var(--color-text-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <SectionBlock label="The event" heading={championshipStory.heading}>
            {championshipStory.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[10px] leading-[1.65] text-[var(--color-text-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock label="The discipline" heading={teamRacingStory.heading}>
            {teamRacingStory.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[10px] leading-[1.65] text-[var(--color-text-muted)]"
              >
                {paragraph}
              </p>
            ))}
          </SectionBlock>
        </div>
      </div>
    </section>
  );
}
