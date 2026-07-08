export type SponsorshipTier = {
  tier: string;
  title: string;
  price: string;
  benefit: string;
  bestFor: string;
  deliverables: string[];
  featured?: boolean;
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    tier: "Brons",
    title: "Team Supporter",
    price: "15,000 SEK",
    benefit: "Visible support across team kit and events",
    bestFor: "Local brands and community partners",
    deliverables: [
      "Logo on team merchandise",
      "Recognition on team channels",
      "Invitation to select team events",
    ],
  },
  {
    tier: "Silver",
    title: "Official Partner",
    price: "50,000 SEK",
    benefit: "Prominent brand presence throughout the season",
    bestFor: "Regional partners seeking event visibility",
    featured: true,
    deliverables: [
      "Exclusive logo on sailing jackets",
      "Logo on team merchandise",
      "Featured on website and social media",
      "Hospitality at key regattas",
    ],
  },
  {
    tier: "Guld",
    title: "Title Partner",
    price: "100,000 SEK",
    benefit: "Premier association with Sweden's TRWC 2026 team",
    bestFor: "Brands seeking title-level exposure",
    deliverables: [
      "Exclusive logo on all team merchandise",
      "Title partner recognition across channels",
      "Priority hospitality at TRWC 2026",
      "Co-branded content and event presence",
    ],
  },
];
