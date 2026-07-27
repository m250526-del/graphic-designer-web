"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom Cursor component implementing the dual-state weightless pointer cursor.
 * Features auto-detection of interactive targets and smooth spring animation follow.
 */
export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<{
    type: "default" | "hover" | "view" | "play";
    visible: boolean;
  }>({
    type: "default",
    visible: false,
  });

  // Framer Motion absolute coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for lag-free following physics
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Identify interactive triggers
      const isLink = target.closest("a, button, [role='button']");
      const isView = target.closest(".cursor-trigger-view");
      const isPlay = target.closest(".cursor-trigger-play");

      if (isPlay) {
        setCursorState((prev) => ({ ...prev, type: "play" }));
      } else if (isView) {
        setCursorState((prev) => ({ ...prev, type: "view" }));
      } else if (isLink) {
        setCursorState((prev) => ({ ...prev, type: "hover" }));
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isLink = target.closest("a, button, [role='button']");
      const isView = target.closest(".cursor-trigger-view");
      const isPlay = target.closest(".cursor-trigger-play");

      if (isLink || isView || isPlay) {
        setCursorState((prev) => ({ ...prev, type: "default" }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, cursorState.visible]);

  if (!mounted) return null;

  // Render hidden on mobile/touch interfaces
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  // Visual variants for state scaling
  const sizeMap = {
    default: { width: 8, height: 8, xOffset: -4, yOffset: -4 },
    hover: { width: 48, height: 48, xOffset: -24, yOffset: -24 },
    view: { width: 64, height: 64, xOffset: -32, yOffset: -32 },
    play: { width: 64, height: 64, xOffset: -32, yOffset: -32 },
  };

  const currentSize = sizeMap[cursorState.type];

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: currentSize.xOffset,
        y: currentSize.yOffset,
      }}
      animate={{
        width: currentSize.width,
        height: currentSize.height,
        opacity: cursorState.visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.2 }}
      className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full border border-white flex items-center justify-center text-[10px] font-sans font-bold tracking-wider text-background-canvas uppercase bg-white/0 mix-blend-difference overflow-hidden`}
    >
      {cursorState.type === "view" && (
        <span className="text-white mix-blend-normal">VIEW</span>
      )}
      {cursorState.type === "play" && (
        <span className="text-white mix-blend-normal">PLAY</span>
      )}
      {cursorState.type === "default" && (
        <div className="w-full h-full rounded-full bg-white" />
      )}
    </motion.div>
  );
}
