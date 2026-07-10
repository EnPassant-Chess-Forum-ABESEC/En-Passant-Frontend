'use client';

import Link from 'next/link';
import { useScrollState } from '../hooks/useScrollState';

export default function Logo() {
  const isScrolled = useScrollState(60);

  return (
    <Link 
      href="/" 
      aria-hidden={isScrolled}
      tabIndex={isScrolled ? -1 : 0}
      className={`fixed top-[calc(1.5rem+var(--recruitment-ticker-height,0px))] left-6 md:top-[calc(2.5rem+var(--recruitment-ticker-height,0px))] md:left-10 z-50 flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ep-white focus-visible:ring-offset-4 focus-visible:ring-offset-ep-bg w-fit ${
        isScrolled ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* 4x4 chessboard mark */}
      <div className="grid grid-cols-2 grid-rows-2 w-8 h-8 border border-ep-border bg-ep-bg shadow-sm transition-transform group-hover:scale-105 opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100">
        <div className="bg-ep-accent/20"></div>
        <div className="bg-transparent"></div>
        <div className="bg-transparent"></div>
        <div className="bg-ep-accent/20"></div>
      </div>
      
      {/* Editorial Line Reveal */}
      <div className="hidden md:block w-px h-8 bg-ep-border opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:150ms] motion-reduce:opacity-100 origin-top"></div>

      <div className="flex flex-col">
        <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-ep-black drop-shadow-md opacity-0 motion-safe:animate-fade-in motion-safe:[animation-delay:300ms] motion-reduce:opacity-100">
          EnPassant
        </span>
        <span className="font-mono text-[9px] tracking-widest text-ep-gray uppercase drop-shadow-md opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:450ms] motion-reduce:opacity-100">
          Abesec Chess Forum
        </span>
      </div>
    </Link>
  );
}

