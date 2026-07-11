'use client';

import React from 'react';

const PIECE_MAP = {
  wK: '\u2654\uFE0E',
  wQ: '\u2655\uFE0E',
  wR: '\u2656\uFE0E',
  wB: '\u2657\uFE0E',
  wN: '\u2658\uFE0E',
  wP: '\u2659\uFE0E',
  bK: '\u265A\uFE0E',
  bQ: '\u265B\uFE0E',
  bR: '\u265C\uFE0E',
  bB: '\u265D\uFE0E',
  bN: '\u265E\uFE0E',
  bP: '\u265F\uFE0E',
};

const DEFAULT_POSITION = [
  // Rank 8
  ['bR', '', '', '', '', 'bR', 'bK', ''],
  // Rank 7
  ['bP', 'bP', 'bQ', '', '', 'bP', 'bP', 'bP'],
  // Rank 6
  ['', '', '', 'bN', '', '', '', ''],
  // Rank 5
  ['', '', '', '', '', '', '', ''],
  // Rank 4
  ['', '', '', '', '', '', '', ''],
  // Rank 3
  ['', '', 'wN', '', '', 'wN', '', ''],
  // Rank 2
  ['wP', 'wP', '', 'wQ', '', 'wP', 'wP', 'wP'],
  // Rank 1
  ['wR', '', '', '', 'wR', '', 'wK', '']
];

const DEFAULT_HIGHLIGHTS = [
  { row: 4, col: 4 }, // e4 (origin)
  { row: 2, col: 3 }, // d6 (destination)
];

export default function HeroPuzzleBoard({
  position = DEFAULT_POSITION,
  highlights = DEFAULT_HIGHLIGHTS,
  topLabel = '[PUZZLE // PREVIEW]',
  bottomLabel = 'WHITE TO MOVE',
  subBottomLabel = 'FIND THE BEST MOVE'
}) {
  const isHighlighted = (r, c) => {
    return highlights.some(h => h.row === r && h.col === c);
  };

  return (
    <div 
      className="flex flex-col group relative z-10 w-full max-w-[420px] lg:max-w-[500px] mx-auto lg:mx-0 p-4 md:p-6 bg-board-dark text-text-on-dark border border-[rgba(0,0,0,0.1)] shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1"
      aria-label="Chess puzzle preview. White to move."
    >
      {/* Top Label */}
      <div className="flex justify-between items-end mb-4 opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:1000ms] motion-reduce:opacity-100">
        <span className="font-mono text-[10px] tracking-widest text-text-on-dark/70 uppercase">
          {topLabel}
        </span>
      </div>

      {/* The Board */}
      <div 
        className="grid grid-cols-8 grid-rows-8 w-full aspect-square border border-border-primary/50 group-hover:border-border-primary transition-colors duration-500 bg-surface-primary shadow-[0_8px_30px_rgb(0,0,0,0.4)] opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:1150ms] motion-reduce:opacity-100"
        aria-hidden="true"
      >
        {position.map((row, rIndex) => (
          row.map((piece, cIndex) => {
            const isDarkSquare = (rIndex + cIndex) % 2 === 1;
            const highlighted = isHighlighted(rIndex, cIndex);
            
            let squareClass = isDarkSquare ? 'bg-board-dark text-text-on-dark' : 'bg-board-light text-text-on-light';
            if (highlighted) {
              // Note: using arbitrary values for colors here would break if we don't strictly use the variable.
              squareClass = 'bg-board-active text-text-on-active motion-safe:animate-fade-in';
            }

            return (
              <div 
                key={`${rIndex}-${cIndex}`} 
                className={`flex items-center justify-center relative w-full h-full ${squareClass}`}
                style={highlighted ? { animationDelay: '1600ms' } : {}}
              >
                {/* Coordinates (Subtle) */}
                {cIndex === 0 && (
                  <span className="absolute top-0.5 left-1 text-[8px] font-sans opacity-40 select-none">
                    {8 - rIndex}
                  </span>
                )}
                {rIndex === 7 && (
                  <span className="absolute bottom-0 right-1 text-[8px] font-sans opacity-40 select-none">
                    {String.fromCharCode(97 + cIndex)}
                  </span>
                )}
                
                {/* Piece */}
                {piece && (
                  <span 
                    className="text-3xl sm:text-4xl lg:text-5xl select-none opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100"
                    style={{ fontVariantEmoji: 'text', lineHeight: 1, animationDelay: '1400ms' }}
                  >
                    {PIECE_MAP[piece]}
                  </span>
                )}
              </div>
            );
          })
        ))}
      </div>

      {/* Bottom Content Area: Metadata and CTA */}
      <div className="mt-5 flex flex-col items-start gap-4 opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:1300ms] motion-reduce:opacity-100 border-t border-[rgba(0,0,0,0.1)] pt-4">
        
        {/* Metadata */}
        <div className="flex flex-col items-start">
          <span className="font-mono text-sm tracking-widest text-text-on-dark uppercase font-bold">
            {bottomLabel}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-text-on-dark/70 uppercase mt-1">
            {subBottomLabel}
          </span>
        </div>

        {/* Puzzle CTA */}
        <a 
          href="https://www.chess.com/puzzles"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-4 py-3 bg-board-light text-text-on-light border border-border-primary font-mono text-[11px] tracking-widest uppercase transition-colors hover:bg-board-active hover:text-text-on-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-board-active focus-visible:ring-offset-2 focus-visible:ring-offset-board-dark group/cta"
        >
          <span>Solve the Daily Puzzle</span>
          <span className="opacity-70 group-hover/cta:opacity-100 group-hover/cta:translate-x-1 transition-transform">-&gt;</span>
        </a>

      </div>
    </div>
  );
}
