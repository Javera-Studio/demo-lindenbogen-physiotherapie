import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteTitle = "LINDENBOGEN Physiotherapie – Konzeptstudie Dresden-Plauen";
const siteDescription =
  "Konzeptstudie einer fiktiven Physiotherapiepraxis in Dresden-Plauen: Leistungen, Team und Ablauf einer individuellen Behandlung.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s – LINDENBOGEN Physiotherapie (Konzeptstudie)",
  },
  description: siteDescription,
  // Konzeptstudie: nicht für Suchmaschinen bestimmt.
  robots: { index: false, follow: false },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-petrol focus:px-5 focus:py-3 focus:text-cream"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
