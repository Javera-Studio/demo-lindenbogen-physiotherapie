import Image from "next/image";

const aspectClasses = {
  "16/10": "aspect-[16/10]",
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
} as const;

type Aspect = keyof typeof aspectClasses;

/**
 * Fertiges Praxisbild mit festem Seitenverhältnis (kein Layout Shift).
 * Ersetzt PlaceholderImage überall dort, wo bereits ein finales Foto vorliegt.
 */
export function PracticeImage({
  src,
  alt,
  aspect,
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
  className = "",
}: {
  src: string;
  alt: string;
  aspect: Aspect;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
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
        style={{ objectPosition }}
      />
    </div>
  );
}
