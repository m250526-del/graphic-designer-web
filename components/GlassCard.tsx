import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  accent?: "fmm" | "emerald" | "indigo" | "none";
}

/**
 * Reusable GlassCard component adopting frosted glassmorphism styles.
 * Supports configurable borders and dynamic color hover accent states.
 */
export default function GlassCard({
  children,
  className,
  glowOnHover = true,
  accent = "none",
  ...props
}: GlassCardProps) {
  const accentBorderColors = {
    fmm: "hover:border-accent-fmm/30 hover:shadow-[0_0_30px_rgba(255,200,0,0.03)]",
    emerald: "hover:border-accent-emerald/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.03)]",
    indigo: "hover:border-accent-indigo/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.03)]",
    none: "hover:border-white/15",
  };

  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden group",
        glowOnHover ? accentBorderColors[accent] : "",
        className
      )}
      {...props}
    >
      {/* Background card overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none -z-10" />

      {/* Radiant inner highlights */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {children}
    </div>
  );
}
