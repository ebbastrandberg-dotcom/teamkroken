import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { teamStory } from "@/lib/content";
import { teamGroupPhoto } from "@/lib/team";

export function TeamAbout() {
  return (
    <Section id="about" tone="base">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div>
              <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
                The team
              </p>
              <h2 className="text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
                {teamStory.heading}
              </h2>
              <p className="mt-2 text-[14px] leading-[1.5] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
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
              <div className="mt-8">
                <ButtonLink href="#team" variant="secondary">
                  Meet the team
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="glass p-2.5 sm:p-3.5">
              <div className="border border-[var(--color-brass)]/45 p-1 sm:p-1.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={teamGroupPhoto}
                    alt="Team Kroken celebrating with trophy"
                    fill
                    quality={95}
                    className="object-cover contrast-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 512px"
                  />
                </div>
              </div>
              <figcaption className="px-2 pt-3.5 pb-1 text-center text-[11px] leading-[1.6] tracking-[1.5px] text-[var(--color-text-muted)] uppercase sm:text-[12px] sm:tracking-[2px]">
                Team Kroken · Gamla Stan Yacht Club · Sommarcupen May 2026
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
