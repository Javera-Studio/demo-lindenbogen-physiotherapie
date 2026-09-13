import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  "Persönliche und individuelle Betreuung",
  "Moderne Behandlungs- und Trainingsräume",
  "Verständliche Übungen für zu Hause",
  "Gesetzlich und privat Versicherte willkommen",
  "Selbstzahlerbehandlungen nach vorheriger Vereinbarung",
  "Gute Erreichbarkeit in Dresden-Plauen",
];

export function Advantages() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Warum LINDENBOGEN" title="Was unsere Praxis ausmacht" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage} delay={index * 50}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-petrol-soft text-petrol-dark"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm font-medium leading-snug text-ink sm:text-base">
                  {advantage}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
