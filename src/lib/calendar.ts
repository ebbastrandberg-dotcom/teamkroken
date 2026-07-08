import { worldChampionship } from "@/lib/event";

export type CalendarEvent = {
  date: string;
  name: string;
  location: string;
  outcome?: string;
  url?: string;
};

export const seasonEvents: CalendarEvent[] = [
  {
    date: "Apr 2026",
    name: "Vårcupen 2026",
    location: "Stockholm, Sweden",
    outcome: "Opening team race of the season — first step on the road to Stockholm.",
  },
  {
    date: "May 2026",
    name: "Sommarcupen 2026",
    location: "Beckholmen, Stockholm",
    outcome: "Qualified Sweden for the Team Racing World Championship.",
  },
  {
    date: "12–16 Aug",
    name: worldChampionship.title,
    location: `${worldChampionship.location}, Sweden`,
    outcome: "Twelve teams compete on home waters — Team Kroken representing Gamla Stan Yacht Club.",
    url: worldChampionship.url,
  },
];

export const seasonIntro =
  "Three milestones on the path from the Spring Cup to the World Championship on home waters.";
