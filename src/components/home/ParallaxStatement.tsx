"use client";

import { useEffect, useRef } from "react";

/**
 * Signature-Element der Startseite: ruhige, hochwertige Statement-Section mit
 * subtiler Parallax-Tiefe. Bewusst kein `background-attachment: fixed`
 * (unzuverlässig auf iOS Safari) – stattdessen wird die Hintergrundebene per
 * `transform: translate3d` im Scroll-Handler verschoben (GPU-beschleunigt,
 * kein Layout-Reflow). Die Bewegung ist dezent (max. ~10% der Sectionhöhe),
 * wird auf Mobilgeräten weiter reduziert und bei prefers-reduced-motion
 * vollständig deaktiviert.
 */
export function ParallaxStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (reduceMotionQuery.matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Nur berechnen, während die Section im (erweiterten) Sichtfenster liegt.
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const isMobile = window.innerWidth < 768;
      const strength = isMobile ? 18 : 44; // px Gesamt-Verschiebung
      const offset = (progress - 0.5) * strength;

      layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Praxisphilosophie"
      className="relative isolate overflow-hidden"
    >
      <div className="relative h-[60vh] min-h-[420px] w-full sm:h-[68vh]">
        <div
          ref={layerRef}
          data-final-src="/images/parallax-bewegung.webp"
          className="absolute inset-0 -m-4 bg-gradient-to-br from-petrol via-petrol-dark to-sage/70 will-change-transform motion-reduce:transform-none"
          aria-hidden="true"
        >
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.12]"
          >
            <pattern
              id="parallax-grid"
              width="46"
              height="46"
              patternUnits="userSpaceOnUse"
            >
              <path d="M46 0 L0 0 0 46" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#parallax-grid)" />
          </svg>
        </div>

        {/* Petrol-Überlagerung für ausreichenden Kontrast des weißen Textes */}
        <div
          className="absolute inset-0 bg-petrol-dark/55"
          aria-hidden="true"
        />

        <div className="relative flex h-full items-center justify-center px-5">
          <div className="max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-cream/70">
              Bildplatzhalter: /images/parallax-bewegung.webp
            </p>
            <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl md:text-5xl">
              Bewegung beginnt mit Vertrauen.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
              Persönliche Therapie, die Ihre Ziele und Ihren Alltag in den
              Mittelpunkt stellt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
