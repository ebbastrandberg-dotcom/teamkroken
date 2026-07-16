"use client";

import { useState } from "react";
import { TierCard } from "@/components/motion/TierCard";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import {
  partnerBenefits,
  partnerPitch,
  sponsorshipStory,
  teamRacingFaq,
} from "@/lib/content";
import { sponsorshipTiers } from "@/lib/sponsorship";

function TeamRacingFaq() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 border-t border-[var(--color-border-subtle)] pt-8">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-[15px] tracking-[0.5px] text-[var(--color-sail)]">
          {teamRacingFaq.heading}
        </span>
        <span className="text-[18px] text-[var(--color-brass)]">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <div className="mt-4 space-y-3">
          {teamRacingFaq.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-[16px] leading-[1.65] text-[var(--color-text-muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SponsorshipTiers() {
  return (
    <Section id="sponsorship" tone="muted">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Partnership
          </p>
          <h2 className="text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            {partnerPitch.heading}
          </h2>
          <p className="mt-2 text-[15px] tracking-[0.5px] text-[var(--color-text-subtle)] italic">
            {partnerPitch.subheading}
          </p>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
            {sponsorshipStory}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="glass px-3 py-3 text-center text-[12px] tracking-[1.5px] text-[var(--color-sail)] uppercase sm:text-[13px]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:items-stretch">
          {sponsorshipTiers.map((tier, index) => (
            <Reveal key={tier.tier} delay={index * 0.08} className="h-full">
              <TierCard>
                <div className="flex h-full flex-col">
                  <p
                    className={`mb-1.5 min-h-[15px] text-[10px] tracking-[3px] uppercase ${
                      tier.featured
                        ? "text-[var(--color-brass)]"
                        : "text-transparent select-none"
                    }`}
                    aria-hidden={!tier.featured}
                  >
                    Most popular
                  </p>
                  <p className="text-[10px] tracking-[3px] text-[var(--color-brass)] uppercase">
                    {tier.tier}
                  </p>
                  <h3 className="mt-1 min-h-[24px] text-[20px] leading-[1.2] tracking-[0.5px] text-[var(--color-sail)]">
                    {tier.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] tracking-[0.5px] text-[var(--color-brass)]">
                    {tier.price}
                  </p>
                  <p className="mt-2 min-h-[45px] text-[14px] leading-[1.5] text-[var(--color-text-muted)]">
                    {tier.benefit}
                  </p>
                  <p className="mt-2 min-h-[18px] text-[12px] leading-[1.5] tracking-[1px] text-[var(--color-text-subtle)] italic">
                    {tier.bestFor}
                  </p>
                  <ul className="mt-3 min-h-[92px] space-y-1.5 border-t border-[var(--color-border-subtle)] pt-3">
                    {tier.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] leading-[1.45] text-[var(--color-text-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TierCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact" variant="primary" className="w-full sm:w-auto">
              Become a partner
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
              Contact the team
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <TeamRacingFaq />
        </Reveal>
      </div>
    </Section>
  );
}
