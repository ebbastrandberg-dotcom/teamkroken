"use client";

import Image from "next/image";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";
import { worldChampionship } from "@/lib/event";
import { themes, useTheme } from "@/providers/ThemeProvider";

export function Hero() {
  const { theme } = useTheme();
  const config = themes[theme];

  return (
    <section className="relative h-[min(70vh,520px)] overflow-hidden">
      <Image
        src={config.heroImage}
        alt="Team Kroken racing on the water"
        fill
        priority
        className="object-cover brightness-[1.05] contrast-[1.05]"
        style={{ objectPosition: config.heroPosition }}
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(175deg, var(--color-hero-overlay-start) 0%, var(--color-hero-overlay-end) 100%)`,
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <OrnamentalRule className="mb-3.5" />
        <p className="mb-3 text-[8.5px] tracking-[5px] text-[var(--color-brass)] uppercase">
          Gamla Stan Yacht Club · Sweden
        </p>
        <h1
          className="text-[clamp(32px,5vw,54px)] leading-[0.92] font-light tracking-[7px] text-[var(--color-sail)] uppercase"
          style={{ textShadow: "0 2px 24px var(--color-hero-shadow)" }}
        >
          Team
          <br />
          Kroken
        </h1>
        <OrnamentalRule className="mt-3.5 mb-2.5" />
        <p className="max-w-md text-[8px] leading-[1.6] tracking-[3px] text-[var(--color-event-label)] uppercase">
          {worldChampionship.title}
        </p>
        <a
          href={worldChampionship.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 text-[8px] tracking-[3px] text-[var(--color-brass)] uppercase transition-opacity duration-150 hover:opacity-80"
        >
          {worldChampionship.subtitle}
        </a>
      </div>
    </section>
  );
}
