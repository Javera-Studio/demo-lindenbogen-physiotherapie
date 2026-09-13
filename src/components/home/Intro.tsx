import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Therapie, die zu Ihrem Alltag passt." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 grid gap-6 text-base leading-relaxed text-ink-soft sm:text-lg md:grid-cols-2">
            <p>
              Am Anfang jeder Behandlung steht eine individuelle Befundung.
              Erst wenn klar ist, wo Ihre Beschwerden herkommen und welche
              Ziele Sie im Alltag oder Sport erreichen möchten, entsteht ein
              verständlicher Therapieplan – gemeinsam mit Ihnen besprochen,
              nicht über Ihren Kopf hinweg entschieden.
            </p>
            <p>
              Wir verbinden gezielte manuelle Behandlung mit aktiver
              Bewegung und Training. So bleiben Fortschritte nicht auf die
              Behandlungsliege beschränkt, sondern wirken in Ihrem Alltag
              weiter. Möglich macht das ein kleines, eingespieltes Team mit
              persönlicher Betreuung statt Fließbandbehandlung.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
