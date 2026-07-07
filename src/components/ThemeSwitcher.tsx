"use client";

import { useState } from "react";
import { themes, useTheme } from "@/providers/ThemeProvider";
import type { ThemeId } from "@/lib/themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-3 bottom-3 z-50 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="glass rounded px-3 py-2 text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase md:hidden"
        aria-expanded={open}
        aria-label="Toggle theme selector"
      >
        Theme
      </button>

      <div
        className={`glass mt-2 flex max-w-[calc(100vw-1.5rem)] flex-col gap-2 rounded p-3 ${open ? "flex" : "hidden"} md:mt-0 md:flex md:max-w-none`}
        role="group"
        aria-label="Theme selector"
      >
        <p className="text-[10px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
          Compare themes
        </p>
        {(Object.keys(themes) as ThemeId[]).map((id) => {
          const active = theme === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              aria-pressed={active}
              className={`cursor-pointer px-3 py-2 text-left transition-all ${
                active
                  ? "glass glass-strong border-[var(--color-brass)]"
                  : "glass hover:border-[var(--color-brass)]/50"
              }`}
            >
              <span className="block text-[12px] tracking-[1px] text-[var(--color-sail)]">
                {themes[id].label}
              </span>
              <span className="block text-[10px] text-[var(--color-text-muted)]">
                {themes[id].description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
