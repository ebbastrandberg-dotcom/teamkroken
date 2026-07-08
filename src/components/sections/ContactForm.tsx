"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/SelectField";
import { sponsorshipEmail } from "@/lib/contact";
import { sponsorshipTiers } from "@/lib/sponsorship";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("submitting");

    if (formEndpoint) {
      try {
        const response = await fetch(`https://formspree.io/f/${formEndpoint}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setState("success");
          form.reset();
          return;
        }
      } catch {
        setState("error");
        return;
      }
    }

    const name = data.get("name");
    const company = data.get("company");
    const email = data.get("email");
    const tier = data.get("tier");
    const message = data.get("message");

    const subject = encodeURIComponent("Partnership enquiry — Team Kroken");
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nTier interest: ${tier || "Not specified"}\n\n${message}`,
    );

    window.location.href = `mailto:${sponsorshipEmail}?subject=${subject}&body=${body}`;
    setState("idle");
  }

  const inputClass =
    "w-full border border-[var(--color-card-border)] bg-[var(--color-bg)]/60 px-3 py-2.5 text-[15px] text-[var(--color-sail)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-brass)] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase">
            Company
          </span>
          <input
            type="text"
            name="company"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </label>
      <SelectField
        name="tier"
        label="Tier interest"
        placeholder="Select a package (optional)"
        options={sponsorshipTiers.map((tier) => ({
          value: tier.title,
          label: `${tier.title} — ${tier.price}`,
        }))}
      />
      <label className="block">
        <span className="mb-1.5 block text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your brand and how you'd like to partner with Team Kroken."
        />
      </label>
      <Button
        type="submit"
        className="w-full sm:w-auto"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
      {state === "success" ? (
        <p className="text-[14px] text-[var(--color-brass)]">
          Thank you — we will be in touch shortly.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-[14px] text-[var(--color-sail)]">
          Something went wrong. Please email{" "}
          <a
            href={`mailto:${sponsorshipEmail}`}
            className="text-[var(--color-brass)] underline"
          >
            {sponsorshipEmail}
          </a>{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}
