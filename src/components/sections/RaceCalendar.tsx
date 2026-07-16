import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { seasonEvents, seasonIntro } from "@/lib/calendar";

export function RaceCalendar() {
  return (
    <Section id="calendar" tone="base">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Road to Stockholm
          </p>
          <h2 className="mb-4 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Season 2026
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            {seasonIntro}
          </p>
        </Reveal>
        <ul className="divide-y divide-[var(--color-border-subtle)]">
          {seasonEvents.map((event, index) => (
            <li key={event.name} className="py-6 first:pt-0 last:pb-0">
              <Reveal delay={index * 0.06}>
                <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <p className="text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                    {event.date}
                  </p>
                  <div>
                    {event.url ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[clamp(18px,3vw,22px)] tracking-[0.5px] text-[var(--color-sail)] transition-opacity duration-150 hover:opacity-80"
                      >
                        {event.name}
                      </a>
                    ) : (
                      <h3 className="text-[clamp(18px,3vw,22px)] tracking-[0.5px] text-[var(--color-sail)]">
                        {event.name}
                      </h3>
                    )}
                    <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">
                      {event.location}
                    </p>
                    {event.outcome ? (
                      <p className="mt-3 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
                        {event.outcome}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
