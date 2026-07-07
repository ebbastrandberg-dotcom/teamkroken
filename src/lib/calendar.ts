import { worldChampionship } from "@/lib/event";

export type CalendarEvent = {
  date: string;
  name: string;
  location: string;
  url?: string;
};

export const seasonEvents: CalendarEvent[] = [
  {
    date: "Apr 2026",
    name: "Vårcupen 2026",
    location: "Stockholm, Sweden",
  },
  {
    date: "May 2026",
    name: "Sommarcupen 2026",
    location: "Beckholmen, Stockholm",
  },
  {
    date: "12–16 Aug",
    name: worldChampionship.title,
    location: `${worldChampionship.location}, Sweden`,
    url: worldChampionship.url,
  },
];
