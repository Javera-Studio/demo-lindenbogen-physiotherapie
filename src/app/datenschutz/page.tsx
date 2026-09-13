import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Platzhalter-Datenschutzerklärung dieser Konzeptstudie.",
};

export default function DatenschutzPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-8 rounded-2xl border border-dashed border-terracotta bg-terracotta-soft px-5 py-4 text-sm text-terracotta-dark">
          <strong className="font-semibold">Platzhalter-Rechtstext:</strong>{" "}
          Dies ist keine vollständige, DSGVO-konforme Datenschutzerklärung.
          Für das reale Projekt muss ein individuell geprüfter Rechtstext
          erstellt werden, u. a. mit konkreten Angaben zu eingesetzten
          Diensten, Cookies und Rechtsgrundlagen.
        </div>

        <h1 className="font-serif text-4xl text-petrol-dark">Datenschutz</h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-soft">
          <div>
            <h2 className="text-lg font-semibold text-ink">Verantwortliche Stelle (Platzhalter)</h2>
            <p className="mt-2">
              Angaben zur verantwortlichen Stelle gemäß Art. 4 Nr. 7 DSGVO
              werden für das reale Projekt ergänzt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Kontaktformular</h2>
            <p className="mt-2">
              Das Terminanfrageformular dieser Konzeptstudie ist eine reine
              Demo-Funktion. Es werden keine Formulardaten übermittelt,
              gespeichert oder verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Hinweis</h2>
            <p className="mt-2">
              Diese Seite dient ausschließlich der Darstellung innerhalb
              einer Konzeptstudie und ersetzt keine rechtliche Beratung.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
