"use client";

import { useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";

const navLinks = [
  { label: "Racing", href: "#calendar" },
  { label: "Team", href: "#team" },
  { label: "Press", href: "#press" },
  { label: "Sponsorship", href: "#sponsorship", active: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="flex min-h-[64px] items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-[11px]">
          <LogoMark />
          <div className="min-w-0">
            <div className="truncate text-[14px] leading-[1.1] tracking-[2px] text-[var(--color-brass)] uppercase sm:tracking-[3px]">
              Team Kroken
            </div>
            <div className="truncate text-[10px] tracking-[1.5px] text-[var(--color-label-muted)] uppercase sm:tracking-[2px]">
              Gamla Stan Yacht Club
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-[18px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[12px] tracking-[2px] uppercase transition-opacity duration-150 hover:opacity-100 ${
                link.active
                  ? "border-b-[0.75px] border-[var(--color-brass)] pb-0.5 text-[var(--color-brass)]"
                  : "text-[var(--color-nav-muted)] hover:text-[var(--color-sail)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`block h-px w-5 bg-[var(--color-brass)] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-[var(--color-brass)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-[var(--color-brass)] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[var(--color-border-subtle)] px-4 py-3 md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[14px] tracking-[2px] uppercase ${
                link.active
                  ? "text-[var(--color-brass)]"
                  : "text-[var(--color-nav-muted)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
