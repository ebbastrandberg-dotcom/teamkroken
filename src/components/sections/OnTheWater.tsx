"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TeamGallery } from "@/components/sections/TeamGallery";
import { Section } from "@/components/ui/Section";

export function OnTheWater() {
  return (
    <Section id="on-the-water" tone="base">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <TeamGallery />
        </Reveal>
      </div>
    </Section>
  );
}
