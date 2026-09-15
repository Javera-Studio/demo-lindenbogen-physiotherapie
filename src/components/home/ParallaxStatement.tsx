"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AiLabel } from "@/components/ui/AiLabel";

/**
 * Signature-Element der Startseite: ruhige, hochwertige Statement-Section mit
 * subtiler Parallax-Tiefe. Bewusst kein `background-attachment: fixed`
 * (unzuverlässig auf iOS Safari) – stattdessen wird die Hintergrundebene per
 * `transform: translate3d` im Scroll-Handler verschoben (GPU-beschleunigt,
 * kein Layout-Reflow). Der Effekt läuft ausschließlich auf größeren
 * Desktop-Viewports; auf Mobil-/Tablet-Breiten und bei
 * prefers-reduced-motion bleibt das Bild vollständig stabil.
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
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        layer.style.transform = "";
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const strength = 44; // px Gesamt-Verschiebung – bewusst dezent
      const offset = (progress - 0.5) * strength;

      layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
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
          className="absolute -inset-y-14 inset-x-0 will-change-transform motion-reduce:transform-none"
          aria-hidden="true"
        >
          <Image
            src="/images/praxis-empfang-wartebereich.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Petrol-Überlagerung für ausreichenden Kontrast des hellen Textes */}
        <div className="absolute inset-0 bg-petrol-dark/60" aria-hidden="true" />

        <AiLabel />

        <div className="relative flex h-full items-center justify-center px-5">
          <div className="max-w-2xl text-center">
            <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl md:text-5xl">
              Therapie, die nicht bei der Behandlung endet.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/90 sm:text-lg">
              Verständliche Beratung und individuelle Übungen, die Sie mit
              in Ihren Alltag nehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
