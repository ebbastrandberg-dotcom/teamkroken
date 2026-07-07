import { Reveal } from "@/components/motion/Reveal";
import { worldChampionship } from "@/lib/event";

const events = [
  { date: "12–14 Jun", name: "Scandinavian Open", location: "Sandhamn, Sweden" },
  { date: "4–6 Jul", name: "Baltic Cup", location: "Mariehamn, Åland" },
  {
    date: "12–16 Aug",
    name: worldChampionship.title,
    location: `${worldChampionship.location}, Sweden`,
    url: worldChampionship.url,
  },
  { date: "5–7 Sep", name: "Stockholm Archipelago Race", location: "Stockholm, Sweden" },
];

export function RaceCalendar() {
  return (
    <section
      id="calendar"
      className="border-y border-[var(--color-border-subtle)] px-4 py-10 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Season 2026
          </p>
          <h2 className="mb-10 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Race calendar
          </h2>
        </Reveal>
        <ul className="divide-y divide-[var(--color-border-subtle)]">
          {events.map((event, index) => (
            <li
              key={event.name}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <Reveal delay={index * 0.06} className="flex w-full flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="min-w-[88px] text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                    {event.date}
                  </span>
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[clamp(17px,4vw,20px)] tracking-[0.5px] text-[var(--color-sail)] transition-opacity duration-150 hover:opacity-80"
                    >
                      {event.name}
                    </a>
                  ) : (
                    <span className="text-[clamp(17px,4vw,20px)] tracking-[0.5px] text-[var(--color-sail)]">
                      {event.name}
                    </span>
                  )}
                </div>
                <span className="text-[14px] text-[var(--color-text-muted)]">
                  {event.location}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
