import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
}

/**
 * Reusable Section component providing standardized vertical spacing
 * that adheres to the master visual layout specs.
 */
export default function Section({
  children,
  className,
  id,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "py-20 sm:py-28 md:py-36 lg:py-40 w-full relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
