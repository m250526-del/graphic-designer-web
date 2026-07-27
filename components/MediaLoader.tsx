"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface MediaLoaderProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt?: string;
  isVideo?: boolean;
  videoMuted?: boolean;
  videoLoop?: boolean;
  videoAutoPlay?: boolean;
}

/**
 * MediaLoader wraps image/video visual elements with loading states.
 * Guarantees smooth image/video lazy loads and handles skeleton fallback fades.
 */
export default function MediaLoader({
  src,
  alt = "Isa Alvi Portfolio Asset",
  isVideo = false,
  videoMuted = true,
  videoLoop = true,
  videoAutoPlay = true,
  className,
  width,
  height,
  fill,
  ...props
}: MediaLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-surface-primary group">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface-primary">
          <div className="w-8 h-8 rounded-full border-2 border-white/5 border-t-accent-fmm animate-spin" />
        </div>
      )}

      {isVideo ? (
        <video
          src={src}
          muted={videoMuted}
          loop={videoLoop}
          autoPlay={videoAutoPlay}
          playsInline
          onCanPlay={handleMediaLoad}
          className={cn(
            "object-cover w-full h-full transition-transform duration-700 ease-expressive group-hover:scale-103",
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100",
            className
          )}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          onLoad={handleMediaLoad}
          className={cn(
            "object-cover transition-transform duration-700 ease-expressive group-hover:scale-103",
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
}
