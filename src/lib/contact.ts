export const sponsorshipEmail = "strandberg.ebba@gmail.com";

export const sponsorshipDeckPath = "/team-kroken-sponsorship.pdf";

export function hasSponsorshipDeck(): boolean {
  return process.env.NEXT_PUBLIC_HAS_SPONSORSHIP_DECK === "true";
}
