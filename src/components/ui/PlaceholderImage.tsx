const aspectClasses: Record<string, string> = {
  "16/10": "aspect-[16/10]",
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

/**
 * Bildplatzhalter mit finalem Seitenverhältnis und eindeutigem Ziel-Dateinamen.
 * Sobald das echte Foto unter `finalSrc` in /public liegt, wird dieser Platzhalter
 * 1:1 durch <Image src={finalSrc} /> ersetzt – ohne Layoutänderung, da das
 * Seitenverhältnis bereits jetzt feststeht.
 */
export function PlaceholderImage({
  finalSrc,
  alt,
  aspect,
  tone = "petrol",
  className = "",
}: {
  finalSrc: string;
  alt: string;
  aspect: "16/10" | "4/5" | "3/2" | "1/1";
  tone?: "petrol" | "sage" | "terracotta";
  className?: string;
}) {
  const toneGradient: Record<string, string> = {
    petrol: "from-petrol/90 via-petrol-dark/80 to-sage/60",
    sage: "from-sage/80 via-sage-soft/70 to-petrol/50",
    terracotta: "from-terracotta/70 via-terracotta-soft/60 to-petrol/50",
  };

  return (
    <div
      role="img"
      aria-label={alt}
      data-final-src={finalSrc}
      className={`relative w-full overflow-hidden rounded-2xl bg-cream-soft ${aspectClasses[aspect]} ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${toneGradient[tone]} opacity-90`}
        aria-hidden="true"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id={`grid-${finalSrc.replace(/[^a-z0-9]/gi, "")}`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${finalSrc.replace(/[^a-z0-9]/gi, "")})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-cream">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-9 w-9 opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.75" />
          <path d="M4.5 17.5 9 13l3 3 4-4.5 3.5 4" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-[0.12em] opacity-90">
          Bildplatzhalter
        </span>
        <span className="max-w-[85%] text-[0.7rem] leading-snug opacity-75">
          {finalSrc}
        </span>
      </div>
    </div>
  );
}
