"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass" | "link";
  magnetic?: boolean;
  arrow?: boolean;
}

/**
 * Reusable premium Button component supporting optional magnetic pull.
 * Extends Framer Motion HTMLMotionProps to guarantee full animatable type safety.
 */
export default function Button({
  children,
  className,
  variant = "primary",
  magnetic = true,
  arrow = false,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle magnetic grid pull coordinates
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit pull displacement bounds (e.g. 15px max)
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-full px-6 py-3.5 focus:outline-none focus:ring-1 focus:ring-accent-fmm cursor-none active:scale-95";

  const variants = {
    primary:
      "bg-accent-fmm text-background-canvas border border-accent-fmm hover:bg-transparent hover:text-accent-fmm shadow-[0_0_20px_rgba(255,200,0,0.15)]",
    secondary:
      "bg-transparent text-text-primary border border-white/20 hover:border-white hover:bg-white/5",
    glass:
      "glass-panel text-text-primary border border-white/8 hover:bg-white/10 hover:border-white/20",
    link:
      "px-0 py-1 rounded-none bg-transparent text-text-primary border-b border-white/20 hover:border-accent-fmm hover:text-accent-fmm uppercase tracking-widest",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.15 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {arrow && (
          <svg
            className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        )}
      </span>
    </motion.button>
  );
}
