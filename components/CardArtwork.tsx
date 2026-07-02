"use client";

import Image from "next/image";

interface CardArtworkProps {
  src: string;
  alt: string;
  graySrc?: string;
  isExpanded: boolean;
}

export default function CardArtwork({ src, alt, graySrc, isExpanded }: CardArtworkProps) {
  return (
    <div className="relative w-full h-full">
      {/* Orange glow behind artwork — only visible when expanded */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-1000 ${
          isExpanded ? "opacity-100 accent-glow" : "opacity-0"
        }`}
      />

      <div className={`relative w-full h-full ${isExpanded ? "idle-float" : ""}`}>
        {/* Grayscale/halftone layer — visible when collapsed */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ease-out ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={graySrc || src}
            alt={alt}
            fill
            className="object-contain halftone-filter"
          />
        </div>

        {/* Color layer — revealed on expand */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ease-out ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
