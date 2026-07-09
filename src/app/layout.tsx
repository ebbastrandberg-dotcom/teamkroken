import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { worldChampionship } from "@/lib/event";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Team Kroken — Partner with Sweden's TRWC 2026 Team",
  description:
    `Partner with Team Kroken, Gamla Stan Yacht Club — ${worldChampionship.title}. Sponsorship packages from 15,000 SEK.`,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
