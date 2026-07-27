"use client";

import Image from "next/image";

/**
 * GlobalBackground renders the user's halftone texture image
 * fixed across the entire viewport with an optimized Next.js Image component
 * and a 25% subtle dark overlay to maintain crisp typography contrast.
 */
export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-screen h-screen overflow-hidden">
      <Image
        src="/global-background.jpg"
        alt="Global Background Texture"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center select-none"
      />
      {/* 25% Subtle Dark Overlay for Typography Readability */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
    </div>
  );
}
