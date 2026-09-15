/**
 * Nur das Bogen-Symbol aus dem LINDENBOGEN-Logo (siehe LogoMark.tsx), ohne
 * Wortmarke – für dezente Seiten-Intros, die auf das Logo anspielen sollen,
 * ohne den vollständigen Schriftzug zu wiederholen.
 */
export function ArchMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 58"
      role="img"
      aria-label="LINDENBOGEN Bogensymbol"
      className={className}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 46 A34 34 0 0 1 76 46" stroke="var(--color-terracotta)" strokeWidth="6" />
        <path
          d="M18 46 C26 28 40 22 54 26 C62 28 68 34 74 42"
          stroke="var(--color-petrol-dark)"
          strokeWidth="3.2"
        />
        <path d="M8 46 H76" stroke="var(--color-petrol-dark)" strokeWidth="2.4" />
      </g>
    </svg>
  );
}
