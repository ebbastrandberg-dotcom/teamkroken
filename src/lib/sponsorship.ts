export type SponsorshipTier = {
  tier: string;
  title: string;
  price: string;
  benefit: string;
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    tier: "Brons",
    title: "Team Supporter",
    price: "15,000 SEK",
    benefit: "Logo on team merchandise",
  },
  {
    tier: "Silver",
    title: "Official Partner",
    price: "50,000 SEK",
    benefit: "Exclusive logo on sailing jackets",
  },
  {
    tier: "Guld",
    title: "Title Partner",
    price: "100,000 SEK",
    benefit: "Exclusive logo on all merchandise",
  },
];
