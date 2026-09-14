import { Container } from "@/components/ui/Container";

const trustStats = [
  {
    value: "4,9 ★",
    valueLabel: "4,9 von 5 Sternen",
    label: "aus 87 Google-Bewertungen*",
  },
  {
    value: "10+ Jahre",
    label: "Berufserfahrung*",
  },
  {
    value: "Alle Kassen",
    label: "sowie privat und Selbstzahler",
  },
  {
    value: "6 Schwerpunkte",
    label: "individuell kombiniert",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Vertrauen und Praxisinformationen"
      className="border-b border-line bg-surface"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 py-7 lg:grid-cols-4 lg:gap-8">
          {trustStats.map((item) => (
            <div key={item.value} className="text-center">
              <dt
                aria-label={item.valueLabel}
                className="font-serif text-2xl font-semibold text-petrol-dark sm:text-3xl"
              >
                {item.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="-mt-2 pb-4 text-center text-[0.68rem] text-ink-soft/75">
          * Beispielwerte der fiktiven Konzeptpraxis
        </p>
      </Container>
    </section>
  );
}
