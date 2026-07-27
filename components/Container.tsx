import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

/**
 * Reusable Container component maintaining strict architectural grid sizing.
 * Width is capped at 1440px with responsive inline padding.
 */
export default function Container({
  children,
  className,
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        clean ? "" : "max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
