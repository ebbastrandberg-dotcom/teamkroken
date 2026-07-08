"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navLinks = [
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Team", href: "#team" },
  { label: "Season", href: "#calendar" },
  { label: "Press", href: "#press" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--glass-border)] transition-[box-shadow,background-color] duration-300 glass ${
          scrolled ? "glass-strong" : ""
        }`}
      >
        <div className="flex min-h-[64px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
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

          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] tracking-[2px] text-[var(--color-nav-muted)] uppercase transition-opacity duration-150 hover:text-[var(--color-sail)]"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="px-3 py-1.5 text-[11px] font-normal tracking-[2px]"
            >
              Partner with us
            </ButtonLink>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          className={`border-t border-[var(--color-border-subtle)] px-4 py-3 lg:hidden ${open ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] tracking-[2px] text-[var(--color-nav-muted)] uppercase"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="w-full px-3 py-2 text-[12px] font-normal tracking-[2px]"
              onClick={() => setOpen(false)}
            >
              Partner with us
            </ButtonLink>
          </div>
        </div>
      </nav>
      <div aria-hidden="true" className="h-[var(--nav-height)]" />
    </>
  );
}
