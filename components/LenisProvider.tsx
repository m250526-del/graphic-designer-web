"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * LenisProvider initializes the Lenis smooth scroll engine
 * and binds it to the global requestAnimationFrame loop.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Instantiate Lenis smooth scroll with premium easing curve
    const lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve: decel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenisInstance;

    // RAF loop to animate scrolling
    let rafId: number;
    const raf = (time: number) => {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Cleanup hook on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
