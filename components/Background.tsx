"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BackgroundProps {
  glowColor?: "fmm" | "emerald" | "indigo" | "none";
}

/**
 * Reusable Background component providing a premium dark studio setting.
 * Renders an abstract wireframe grid and smooth glowing focal points.
 */
export default function Background({ glowColor = "fmm" }: BackgroundProps) {
  const glowRef1 = useRef<HTMLDivElement>(null);
  const glowRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle ambient breath animation for glows
    if (glowRef1.current && glowRef2.current) {
      gsap.to(glowRef1.current, {
        x: "+=50",
        y: "-=30",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowRef2.current, {
        x: "-=40",
        y: "+=60",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  const glowColorMap = {
    fmm: "bg-[#ffc800]/[0.04] shadow-[0_0_120px_60px_rgba(255,200,0,0.03)]",
    emerald: "bg-[#10b981]/[0.04] shadow-[0_0_120px_60px_rgba(16,185,129,0.03)]",
    indigo: "bg-[#6366f1]/[0.04] shadow-[0_0_120px_60px_rgba(99,102,241,0.03)]",
    none: "hidden",
  };

  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-background-canvas">
      {/* Dynamic Ambient Glow Spheres */}
      {glowColor !== "none" && (
        <>
          <div
            ref={glowRef1}
            className={`absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[140px] transition-all duration-700 ${glowColorMap[glowColor]}`}
          />
          <div
            ref={glowRef2}
            className={`absolute bottom-20 right-10 h-80 w-80 rounded-full blur-[120px] transition-all duration-700 ${glowColorMap[glowColor]}`}
          />
        </>
      )}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,10,15,0.9)_90%)] pointer-events-none" />
    </div>
  );
}
