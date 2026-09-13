import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { TeamMember } from "@/lib/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <PlaceholderImage
        finalSrc={member.imageSrc}
        alt={member.imageAlt}
        aspect="4/5"
        tone="sage"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-petrol-dark">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-terracotta-dark">
          {member.role}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-soft">
          {member.qualifications.map((qualification) => (
            <li key={qualification} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
              <span>{qualification}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
