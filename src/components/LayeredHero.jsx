'use client';

import { useEffect, useRef } from 'react';
import HeroPuzzleBoard from './HeroPuzzleBoard';

export default function LayeredHero() {
  const gridRef = useRef(null);
  
  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;
    
    gridEl.innerHTML = '';

    const cols = 40;
    const rows = 40;
    
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.style.width = `${cellWidth}%`;
      cell.style.height = `${cellHeight}%`;
      cell.style.border = '1px solid rgba(140, 106, 67, 0.2)'; // DARK board color at low opacity
      cell.style.backgroundColor = 'rgba(244, 241, 234, 0)';
      gridEl.appendChild(cell);
    }
  }, []);

  return (
    <section 
      className="relative w-full h-[100svh] min-h-[700px] md:min-h-[800px] overflow-hidden bg-surface-primary flex items-center justify-center border-b border-border-primary pt-24 md:pt-32"
    >
      {/* Static Background Grid */}
      <div 
        ref={gridRef} 
        aria-hidden="true"
        className="absolute inset-0 flex flex-wrap opacity-20"
        style={{
          width: '200vw',
          height: '200vh',
          left: '-50vw',
          top: '-20vh',
          transformOrigin: 'center 40%',
          transform: 'perspective(1000px) rotateX(60deg) scale(1.5)',
        }}
      />
      
      {/* Subtle Static Vignette Overlay using Light Theme */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_10%,_var(--board-light)_100%)] opacity-80" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-30 px-6 md:px-12 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="flex flex-col items-start gap-8 border-l border-border-primary pl-8 md:pl-12 py-4 w-full lg:w-[55%] shrink-0">
            <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:450ms] motion-reduce:opacity-100">
              [OPENING] EnPassant
            </span>
            <h1 className="text-5xl md:text-7xl font-mono text-text-primary leading-none tracking-tight drop-shadow-md opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:600ms] motion-reduce:opacity-100">
              HELLO.<br />
              <span className="text-text-secondary">WE&apos;VE BEEN<br />EXPECTING YOU.</span>
            </h1>
            <p className="font-mono text-sm md:text-base text-text-secondary max-w-md leading-relaxed opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:750ms] motion-reduce:opacity-100">
              400+ PLAYERS DEEP. THE OFFICIAL CHESS FORUM OF ABESEC. A RIGOROUS SPACE FOR TOURNAMENTS, PUZZLES, AND COMMUNITY.
            </p>
            
            <div className="flex items-center gap-6 relative opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:900ms] motion-reduce:opacity-100 mt-4">
              <a href="#community" className="inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest uppercase bg-board-active text-text-on-active border border-[rgba(0,0,0,0.1)] shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <span>MEET THE COMMUNITY</span>
              </a>
              <span className="font-mono text-[10px] text-text-secondary tracking-widest">
                [ e2-e4 ]
              </span>
            </div>
          </div>

          {/* Right Board Column */}
          <div className="flex w-full lg:w-[45%] justify-center lg:justify-end items-center px-4 md:px-0">
            <HeroPuzzleBoard />
          </div>

        </div>
      </div>
    </section>
  );
}

