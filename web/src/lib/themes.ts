export type ThemeId = "cobalt" | "silver";

export const themes = {
  cobalt: {
    id: "cobalt" as const,
    label: "3a — Cobalt",
    description: "Deep ocean blue + cream sails",
    heroImage: "/images/hero-cobalt-regatta.png",
    heroPosition: "center 45%",
  },
  silver: {
    id: "silver" as const,
    label: "3b — Silver Sea",
    description: "High contrast, film grain drama",
    heroImage: "/images/hero-silver-fleet.png",
    heroPosition: "center 35%",
  },
} satisfies Record<ThemeId, {
  id: ThemeId;
  label: string;
  description: string;
  heroImage: string;
  heroPosition: string;
}>;

export const defaultTheme: ThemeId = "cobalt";
