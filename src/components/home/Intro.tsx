import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const trustPoints = [
  "Beweglichkeit erhalten und verbessern",
  "Belastbarkeit für Alltag und Sport aufbauen",
  "Selbstständigkeit langfristig stärken",
];

export function Intro() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Therapie, die zu Ihrem Alltag passt." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 grid gap-6 text-base leading-relaxed text-ink-soft sm:text-lg md:grid-cols-2">
            <p>
              Wir behandeln Beschwerden nicht nur punktuell. Ziel jeder
              Therapie bei LINDENBOGEN ist, Beweglichkeit, Belastbarkeit und
              Selbstständigkeit im Alltag spürbar zu fördern.
            </p>
            <p>
              Dafür verbinden wir gezielte manuelle Behandlung mit aktiver
              Bewegung – begleitet von einem kleinen, eingespielten Team,
              das sich Zeit für Ihren Befund und Ihre Ziele nimmt.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-ink"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-terracotta-dark"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
