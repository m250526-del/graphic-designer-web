"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type AnimationPreset = "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Reusable MotionWrapper component standardizing scroll reveals and entries.
 * Utilizes performance-optimized Framer Motion hooks and custom easing tokens.
 */
export default function MotionWrapper({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  triggerOnce = true,
  className,
  ...props
}: MotionWrapperProps) {
  // Expressive easing curve matching design specs: cubic-bezier(0.16, 1, 0.3, 1)
  const expressiveEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const presets = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={presets[preset]}
      transition={{
        duration: duration,
        delay: delay,
        ease: expressiveEasing,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
