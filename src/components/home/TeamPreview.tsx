import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/data/team";

export function TeamPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Praxis & Team"
            title="Ein kleines Team, das Sie persönlich kennt"
            description="Bei LINDENBOGEN behandelt Sie kein wechselndes Fließband, sondern ein überschaubares, eingespieltes Team."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.slug} delay={index * 70}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-8">
            <LinkButton href="/praxis-team" variant="secondary">
              Praxis & Team kennenlernen
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
