import { Reveal } from "@/components/motion/Reveal";
import { seasonMilestones } from "@/lib/stats";

export function SeasonTimeline() {
  return (
    <section
      className="border-y border-[var(--color-border-subtle)] px-4 py-10 sm:px-6 sm:py-12"
      aria-label="Road to Stockholm"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Road to Stockholm
          </p>
          <h2 className="mb-4 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Season 2026
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            Three milestones on the path from the Spring Cup to the World
            Championship on home waters.
          </p>
        </Reveal>

        <ol className="divide-y divide-[var(--color-border-subtle)]">
          {seasonMilestones.map((milestone, index) => (
            <li key={milestone.title} className="py-6 first:pt-0 last:pb-0">
              <Reveal delay={index * 0.06}>
                <div className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-8">
                  <p className="text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                    {milestone.date}
                  </p>
                  <div>
                    <h3 className="text-[clamp(18px,3vw,22px)] tracking-[0.5px] text-[var(--color-sail)]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
                      {milestone.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
