import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { pressFraming } from "@/lib/content";
import { pressItems } from "@/lib/press";

export function Press() {
  return (
    <Section id="press" tone="muted">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Visibility & press
          </p>
          <h2 className="mb-3 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            In the media
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            {pressFraming}
          </p>
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
