"use client";

import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import Image from "next/image";
import ProgressIndicator from "./ProgressIndicator";

export interface CardMeta {
  title: string;
  caption: string;
  image: string;
  backdrop: string;
}

interface ScrollStageProps {
  cards: CardMeta[];
  children: ReactNode[];
}

export default function ScrollStage({ cards, children }: ScrollStageProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const totalPanels = cards.length;

  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const changePanel = useCallback(
    (direction: "next" | "prev") => {
      if (expandedIndex !== null) return;
      setHasInteracted(true);
      setCurrentIndex((prev) => {
        if (direction === "next") return Math.min(prev + 1, totalPanels - 1);
        return Math.max(prev - 1, 0);
      });
    },
    [expandedIndex, totalPanels]
  );

  const expand = useCallback((i: number) => {
    setExpandedIndex(i);
    setHasInteracted(true);
  }, []);

  const collapse = useCallback(() => {
    setExpandedIndex(null);
  }, []);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expandedIndex !== null) {
        collapse();
      } else if (expandedIndex === null) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          changePanel("next");
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          changePanel("prev");
        } else if (e.key === "Enter") {
          expand(currentIndex);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changePanel, expand, collapse, expandedIndex, currentIndex]);

  // Scroll-jacking (collapsed strip only)
  useEffect(() => {
    if (isReducedMotion) return;

    const handleGlobalWheel = (e: WheelEvent) => {
      if (expandedIndex !== null) return;
      e.preventDefault();
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      if (isScrolling.current) return;
      if (Math.abs(delta) > 20) {
        isScrolling.current = true;
        if (delta > 0) changePanel("next");
        else changePanel("prev");
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, [changePanel, expandedIndex, isReducedMotion]);

  // Reduced motion fallback
  if (isReducedMotion) {
    return (
      <div className="flex flex-col gap-8 py-12 px-4 md:px-8 max-w-5xl mx-auto">
          {children.map((child, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg p-8 md:p-16 min-h-[80vh]">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#E8E8E6]">
      {/* ── AMBIENT BACKDROP ── */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
          expandedIndex === null ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={cards[currentIndex].backdrop}
          alt="Backdrop"
          fill
          unoptimized
          className="object-cover blur-sm scale-105 opacity-40 transition-all duration-1000"
          priority
        />
        {/* Soft blue overlay as requested */}
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-color" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
      </div>

      {/* ── COLLAPSED STRIP VIEW ── */}
      <div
        className={`absolute inset-0 z-10 flex items-center transition-opacity duration-700 ${
          expandedIndex !== null ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="flex flex-row items-center gap-6 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: `translateX(calc(50vw - ${currentIndex * (340 + 24) + 170}px))`,
          }}
        >
          {cards.map((card, i) => {
            const isCurrent = currentIndex === i;

            return (
              <div
                key={i}
                className={`flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer
                  ${isCurrent ? "scale-100 opacity-100" : "scale-[0.92] opacity-40"}
                `}
                style={{ width: 340 }}
                onClick={() => {
                  if (isCurrent) expand(i);
                  else setCurrentIndex(i);
                }}
                onWheel={(e) => {
                  if (isCurrent && e.deltaY > 20) {
                    expand(i);
                    e.stopPropagation();
                  }
                }}
              >
                {/* PORTRAIT CARD */}
                <div
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transition-shadow duration-500
                    ${isCurrent ? "shadow-2xl" : "shadow-lg"}
                  `}
                  style={{ height: "70vh", maxHeight: 600, minHeight: 450 }}
                >
                  {/* Card image — halftone/grayscale */}
                  <div className="flex-1 relative mx-5 mt-5 mb-4 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      unoptimized
                      className="object-cover halftone-filter"
                    />
                  </div>

                  {/* Card text */}
                  <div className="px-6 pb-6">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2 whitespace-pre-line">
                      {card.title}
                    </h2>
                    <p className="font-mono text-[10px] text-foreground/40 leading-relaxed">
                      {card.caption}
                    </p>
                  </div>
                </div>

                {/* Tap hint (touch devices) */}
                {isCurrent && (
                  <div className="text-center mt-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/25 md:hidden">
                    Tap to explore →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── EXPANDED PANEL VIEW ── */}
      {expandedIndex !== null && (
        <div
          className="absolute inset-0 z-30 bg-[#E8E8E6] overflow-y-auto"
          onWheel={(e) => {
            const el = e.currentTarget;
            if (el.scrollTop <= 0 && e.deltaY < -60) {
              collapse();
            }
          }}
        >
          {/* Back control */}
          <div className="sticky top-0 z-50 flex justify-end items-center p-6 pointer-events-none">
            <button
              className="pointer-events-auto bg-foreground text-white font-mono text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full hover:bg-foreground/80 transition-colors shadow-lg flex items-center gap-2"
              onClick={collapse}
              aria-label="Back to strip"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Close
            </button>
          </div>

          {/* Panel content */}
          <div className="px-6 md:px-16 lg:px-24 pb-24 max-w-6xl mx-auto">
            {children[expandedIndex]}
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div
        className={`absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center transition-opacity duration-500 ${
          expandedIndex !== null ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ProgressIndicator total={totalPanels} current={currentIndex} />
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute top-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          !hasInteracted ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="bg-foreground text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 px-5 rounded-full shadow-lg">
          Scroll to Explore
        </span>
      </div>
    </div>
  );
}
