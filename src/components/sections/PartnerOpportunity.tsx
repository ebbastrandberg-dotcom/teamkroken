import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { partnerPitch } from "@/lib/content";

export function PartnerOpportunity() {
  return (
    <Section id="partner" tone="base">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Partnership opportunity
          </p>
          <h2 className="text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            {partnerPitch.heading}
          </h2>
          <p className="mt-2 text-[15px] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
            {partnerPitch.subheading}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {partnerPitch.bullets.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="glass h-full p-5">
                <h3 className="text-[17px] tracking-[0.5px] text-[var(--color-sail)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
