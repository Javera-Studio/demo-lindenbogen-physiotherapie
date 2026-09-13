import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { practice } from "@/lib/data/practice";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Platzhalter-Impressum dieser Konzeptstudie.",
};

export default function ImpressumPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-8 rounded-2xl border border-dashed border-terracotta bg-terracotta-soft px-5 py-4 text-sm text-terracotta-dark">
          <strong className="font-semibold">Platzhalter-Rechtstext:</strong>{" "}
          Dies ist keine vollständige, rechtsgültige Impressumsangabe. Für
          das reale Projekt muss ein individuell geprüfter Rechtstext
          (z. B. nach § 5 DDG) ergänzt werden.
        </div>

        <h1 className="font-serif text-4xl text-petrol-dark">Impressum</h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-soft">
          <div>
            <h2 className="text-lg font-semibold text-ink">Angaben gemäß § 5 DDG (Platzhalter)</h2>
            <p className="mt-2">
              {practice.name}
              <br />
              {practice.street}
              <br />
              {practice.postalCode} {practice.addressLocality}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Kontakt (Platzhalter)</h2>
            <p className="mt-2">
              Telefon: {practice.phoneDisplay}
              <br />
              E-Mail: {practice.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Vertretungsberechtigte Person (Platzhalter)</h2>
            <p className="mt-2">Jana Richter (fiktive Inhaberin dieser Konzeptstudie)</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Berufsrechtliche Angaben (Platzhalter)</h2>
            <p className="mt-2">
              Angaben zu Berufsbezeichnung, zuständiger Kammer und
              berufsrechtlichen Regelungen sind für das reale Projekt zu
              ergänzen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
