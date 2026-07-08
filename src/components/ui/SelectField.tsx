"use client";

import { useEffect, useId, useRef, useState } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  defaultValue?: string;
};

const triggerClass =
  "flex w-full items-center justify-between gap-3 border border-[var(--color-card-border)] bg-[var(--color-bg)]/60 px-3 py-2.5 text-left text-[15px] transition-colors hover:border-[var(--color-brass)] focus:border-[var(--color-brass)] focus:outline-none";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      className={`h-2.5 w-2.5 shrink-0 text-[var(--color-brass)] transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1.5 6 6.5 11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function SelectField({
  name,
  label,
  placeholder,
  options,
  defaultValue = "",
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selected = options.find((option) => option.value === value);
  const display = selected?.label ?? placeholder;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function choose(nextValue: string) {
    setValue(nextValue);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative block">
      <span className="mb-1.5 block text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase">
        {label}
      </span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        className={`${triggerClass} ${value ? "text-[var(--color-sail)]" : "text-[var(--color-text-faint)]"}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="truncate">{display}</span>
        <Chevron open={open} />
      </button>
      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="absolute top-full right-0 left-0 z-30 mt-1 max-h-60 overflow-auto border border-[var(--color-card-border)] bg-[var(--color-bg)] py-1 shadow-[0_8px_24px_var(--color-hero-shadow)]"
        >
          <li role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={value === ""}
              className={`block w-full px-3 py-2.5 text-left text-[15px] transition-colors ${
                value === ""
                  ? "text-[var(--color-brass)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-sail)]"
              }`}
              onClick={() => choose("")}
            >
              {placeholder}
            </button>
          </li>
          {options.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                className={`block w-full px-3 py-2.5 text-left text-[15px] transition-colors ${
                  value === option.value
                    ? "text-[var(--color-brass)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-sail)]"
                }`}
                onClick={() => choose(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
