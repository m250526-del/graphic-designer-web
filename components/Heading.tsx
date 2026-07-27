import React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "display" | "title" | "section" | "card" | "body";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  variant?: HeadingVariant;
  children: React.ReactNode;
}

/**
 * Reusable Heading component mapping directly to typographic design tokens.
 * Automatically handles font weight, size, letter-spacing, and line-heights.
 */
export default function Heading({
  level: Component = "h2",
  variant,
  children,
  className,
  ...props
}: HeadingProps) {
  // Determine variant based on level if not explicitly provided
  const activeVariant = variant || (Component === "h1" ? "display" : Component === "h2" ? "section" : "card");

  const baseStyles = {
    display: "font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7.2xl tracking-tighter leading-1.05 text-text-primary",
    title: "font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-1.1 text-text-primary",
    section: "font-display font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight leading-1.15 text-text-primary",
    card: "font-sans font-bold text-lg sm:text-xl md:text-2xl tracking-normal leading-1.3 text-text-primary",
    body: "font-sans font-medium text-base sm:text-lg tracking-normal leading-1.4 text-text-primary",
  };

  return (
    <Component
      className={cn(baseStyles[activeVariant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
