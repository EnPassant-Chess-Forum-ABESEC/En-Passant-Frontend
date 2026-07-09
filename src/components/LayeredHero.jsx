'use client';

import { useEffect, useRef } from 'react';

export default function LayeredHero() {
  const containerRef = useRef(null);
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
      cell.style.border = '1px solid rgba(241, 239, 232, 0.03)';
      cell.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      gridEl.appendChild(cell);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-ep-bg flex items-center justify-center border-b border-ep-border"
    >
      {/* Static Background Grid */}
      <div 
        ref={gridRef} 
        className="absolute inset-0 flex flex-wrap opacity-60"
        style={{
          width: '200vw',
          height: '200vh',
          left: '-50vw',
          top: '-20vh',
          transformOrigin: 'center 40%',
          transform: 'perspective(1000px) rotateX(60deg) scale(1.5)',
        }}
      />
      
      {/* Subtle Static Vignette Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#080808_100%)]" />

      {/* Content */}
      <div className="relative z-30 px-6 md:px-12 w-full max-w-5xl mx-auto mt-[-5vh]">
        <div className="flex flex-col items-start gap-6 border-l border-ep-border pl-8 md:pl-12 py-4">
          <span className="font-mono text-xs text-ep-gray tracking-[0.2em] uppercase chess-cell-dark inline-block px-4 py-2">
            <span className="cell-text-primary">[SYS.INIT] EnPassant</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-mono text-ep-black mb-4 leading-none tracking-tight drop-shadow-md">
            HELLO.<br />
            <span className="text-ep-gray">WE'VE BEEN<br />EXPECTING YOU.</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-ep-gray max-w-md leading-relaxed">
            400+ PLAYERS DEEP. THE OFFICIAL CHESS FORUM OF ABESEC. A RIGOROUS SPACE FOR TOURNAMENTS, PUZZLES, AND COMMUNITY.
          </p>
          
          <div className="mt-8 flex items-center gap-4 relative">
            <a href="#community" className="inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest uppercase chess-cell-dark group shadow-[4px_4px_0_0_rgba(241,239,232,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              <span className="cell-text-primary">MEET THE COMMUNITY</span>
              <span className="ml-3 cell-text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">-&gt;</span>
            </a>
            <span className="font-mono text-xs text-ep-gray tracking-widest ml-4 chess-cell-dark px-3 py-1">
              <span className="cell-text-secondary">[ e2-e4 ]</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

