import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { pressItems } from "@/lib/press";

export function Press() {
  return (
    <Section id="press" tone="muted">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            In the media
          </p>
          <h2 className="mb-10 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Press
          </h2>
        </Reveal>
        <ul className="divide-y divide-[var(--color-border-subtle)]">
          {pressItems.map((item, index) => (
            <li key={item.url} className="py-4">
              <Reveal delay={index * 0.06}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-opacity duration-150 hover:opacity-80"
                >
                  <p className="text-[clamp(17px,4vw,20px)] tracking-[0.5px] text-[var(--color-sail)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">
                    {item.source} · {item.date}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
