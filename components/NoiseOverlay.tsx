"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * NoiseOverlay creates a subtle archival paper and tactile leather texture layer across the viewport.
 * Uses inline SVG grain filter with controlled opacity (2.5%) for a subconsciously felt tactile depth.
 */
export default function NoiseOverlay() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[99] h-full w-full opacity-[0.025] bg-repeat noise-overlay-active mix-blend-overlay"
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.8  0 0 0 0 0.82  0 0 0 0 0.85  0 0 0 0.025 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
