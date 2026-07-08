'use client';

import { useEffect, useRef } from 'react';

// Flat SVG assets for layered depth
const CloudsLayer = () => (
  <svg viewBox="0 0 1440 320" className="w-full h-full object-cover" preserveAspectRatio="none">
    <path fill="#ffffff" fillOpacity="0.6" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    <path fill="#ffffff" fillOpacity="0.4" d="M0,64L60,85.3C120,107,240,149,360,154.7C480,160,600,128,720,112C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>
);

const HorizonLayer = () => (
  <svg viewBox="0 0 1440 320" className="w-full h-full object-cover" preserveAspectRatio="none">
    {/* Stylized rolling board-square terrain / horizon */}
    <path fill="#527A9B" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,192C672,181,768,203,864,224C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    <path fill="#4A3728" d="M0,288L60,277.3C120,267,240,245,360,245.3C480,245,600,267,720,277.3C840,288,960,288,1080,272C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
);

// Simple flat cutout pieces
const FlatPawn = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <circle cx="50" cy="30" r="15" />
    <path d="M40 45 L60 45 L65 55 L35 55 Z" />
    <path d="M35 55 Q25 80 20 90 L80 90 Q75 80 65 55 Z" />
    <rect x="15" y="90" width="70" height="10" rx="3" />
  </svg>
);

const FlatKnight = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M40 90 L20 90 C15 70 20 50 30 35 C40 20 60 15 70 20 C60 35 70 55 80 70 C85 75 75 90 70 90 Z" />
    <circle cx="45" cy="35" r="3" fill="#FFFDF7" />
    <rect x="15" y="90" width="70" height="10" rx="3" />
  </svg>
);

const FlatKing = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <rect x="45" y="5" width="10" height="20" />
    <rect x="35" y="10" width="30" height="10" />
    <path d="M30 30 C30 20 70 20 70 30 L65 40 L35 40 Z" />
    <path d="M35 40 Q20 80 20 90 L80 90 Q80 80 65 40 Z" />
    <rect x="15" y="90" width="70" height="10" rx="3" />
  </svg>
);

export default function LayeredHero() {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return; // Disable parallax if user prefers reduced motion

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Slower background layers
        if (layer1Ref.current) layer1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
        if (layer2Ref.current) layer2Ref.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
        
        // Faster foreground layers (moves opposite to scroll or very fast)
        if (layer3Ref.current) layer3Ref.current.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
        if (layer4Ref.current) layer4Ref.current.style.transform = `translate3d(0, ${scrollY * -0.2}px, 0)`;
        
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-ep-bg-alt flex items-center justify-center">
      {/* ── PARALLAX LAYERS ── */}
      
      {/* Layer 1: Distant Clouds */}
      <div ref={layer1Ref} className="absolute inset-0 z-0 opacity-80 will-change-transform">
        <CloudsLayer />
      </div>

      {/* Layer 2: Horizon Terrain */}
      <div ref={layer2Ref} className="absolute bottom-[-10vh] left-0 right-0 h-[60vh] z-10 will-change-transform">
        <HorizonLayer />
      </div>

      {/* Layer 3: Midground Pieces */}
      <div ref={layer3Ref} className="absolute inset-0 z-20 pointer-events-none will-change-transform">
        <div className="absolute top-[40%] left-[10%] w-32 md:w-48 text-ep-primary opacity-60 transform -rotate-12">
          <FlatKnight />
        </div>
        <div className="absolute bottom-[20%] right-[15%] w-24 md:w-32 text-ep-accent opacity-80 transform rotate-12">
          <FlatPawn />
        </div>
      </div>

      {/* Layer 4: Foreground Piece Bleeding Edge */}
      <div ref={layer4Ref} className="absolute inset-0 z-40 pointer-events-none will-change-transform">
        <div className="absolute -bottom-10 -left-10 w-64 md:w-96 text-ep-black opacity-90 transform rotate-6">
          <FlatKing />
        </div>
      </div>


      {/* ── CONTENT (Z-30, floats above horizon but behind foreground pieces) ── */}
      <div className="relative z-30 px-6 md:px-12 w-full max-w-5xl mx-auto text-center mt-[-10vh]">
        <span className="inline-block px-4 py-1.5 rounded-full bg-ep-white/80 text-ep-accent font-sans font-bold text-sm tracking-wide mb-6 shadow-sm backdrop-blur-sm">
          Welcome to EnPassant
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-ep-black mb-6 leading-tight drop-shadow-sm">
          Hello.<br />We've been expecting you.
        </h1>
        <p className="font-sans text-lg md:text-xl text-ep-black/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          400+ players deep. We're the official chess club of ABESEC—a friendly, colorful space for tournaments, puzzles, and daily community.
        </p>
        <a href="#community" className="inline-block bg-ep-accent text-ep-white px-10 py-5 rounded-xl font-sans font-bold text-base hover:bg-ep-accent-hover transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
          Meet the Community
        </a>
      </div>
    </section>
  );
}
