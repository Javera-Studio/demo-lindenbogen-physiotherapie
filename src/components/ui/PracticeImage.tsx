import Image from "next/image";
import { AiLabel } from "@/components/ui/AiLabel";

const aspectClasses = {
  "16/10": "aspect-[16/10]",
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
} as const;

type Aspect = keyof typeof aspectClasses;

/**
 * Fertiges Praxisbild mit festem Seitenverhältnis (kein Layout Shift).
 */
export function PracticeImage({
  src,
  alt,
  aspect,
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
  zoom = 1,
  className = "",
}: {
  src: string;
  alt: string;
  aspect: Aspect;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  /** Optionaler Zuschnitts-Zoom (>1), um unterschiedlich weite Bildausschnitte
   * innerhalb einer Kartenreihe optisch anzugleichen, ohne das Foto neu zu erstellen. */
  zoom?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-cream-soft ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{
          objectPosition,
          // Zoom wird bewusst mittig verankert (nicht objectPosition-basiert):
          // Bei exakt passendem Seitenverhältnis beschneidet object-position
          // nichts, daher zoomt der Ausschnitt von der Bildmitte aus nach
          // innen – das rückt einen höher sitzenden Bildausschnitt (z. B.
          // einen Kopf) näher an den oberen Bildrand heran.
          transform: zoom !== 1 ? `scale(${zoom})` : undefined,
          transformOrigin: "center",
        }}
      />
      <AiLabel />
    </div>
  );
}
