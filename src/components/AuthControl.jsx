'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { recruitmentConfig } from '../lib/config/recruitment';
import { useRecruitmentTransition } from '../context/TransitionContext';
import { useScrollState } from '../hooks/useScrollState';
import Link from 'next/link';

export default function AuthControl() {
  const { user, logout, openModal } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const { startRecruitmentTransition } = useRecruitmentTransition() || {};
  const isScrolled = useScrollState(60);

  const handleApplyClick = (e) => {
    // Don't hijack modified clicks (Ctrl/Cmd+click, middle-click = new tab intent)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (startRecruitmentTransition) {
      e.preventDefault();
      startRecruitmentTransition(recruitmentConfig.informationPath);
    }
  };

  return (
    <div className="fixed top-[calc(2rem+var(--recruitment-ticker-height,0px))] right-8 md:top-[calc(3rem+var(--recruitment-ticker-height,0px))] md:right-12 z-40 flex items-center gap-3 transition-all duration-300">
      {recruitmentConfig.isOpen && (
        <Link 
          href={recruitmentConfig.informationPath}
          onClick={handleApplyClick}
          className={`bg-ep-accent text-ep-bg border border-ep-accent px-4 md:px-6 py-3 font-mono text-[10px] tracking-widest uppercase interactive-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-board-active ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:150ms] motion-reduce:opacity-100' : ''}`}
        >
          <span className="hidden md:inline">APPLY TO THE FORUM</span>
          <span className="md:hidden">APPLY</span>
        </Link>
      )}

      {/* Auth Controls Wrapper */}
      <div 
        className={`flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled 
            ? 'max-w-0 opacity-0 -translate-y-1 pointer-events-none' 
            : 'max-w-[400px] opacity-100 translate-y-0 gap-2 shadow-sm'
        }`}
        aria-hidden={isScrolled}
      >
        {!user ? (
          <>
            <button 
              onClick={() => openModal('login')}
              tabIndex={isScrolled ? -1 : 0}
              className={`px-6 py-3 font-mono text-[10px] tracking-widest uppercase chess-cell-dark interactive-invert whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:300ms] motion-reduce:opacity-100' : ''}`}
            >
              <span className="cell-text-primary">LOG IN</span>
            </button>
            <button 
              onClick={() => openModal('signup')}
              tabIndex={isScrolled ? -1 : 0}
              className={`px-6 py-3 font-mono text-[10px] tracking-widest uppercase chess-cell-light interactive-invert whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:450ms] motion-reduce:opacity-100' : ''}`}
            >
              <span className="cell-text-primary">SIGN UP</span>
            </button>
          </>
        ) : (
          <div className={`relative whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:300ms] motion-reduce:opacity-100' : ''}`}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              tabIndex={isScrolled ? -1 : 0}
              className="bg-ep-bg border border-ep-border pl-2 pr-4 py-2 flex items-center gap-3 hover:border-ep-gray transition-colors w-full"
            >
              <div className="w-6 h-6 bg-ep-white text-ep-black flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest">{user.username}</span>
            </button>
            
            {menuOpen && !isScrolled && (
              <div className="absolute right-0 mt-2 w-48 bg-ep-bg border border-ep-border shadow-xl overflow-hidden py-2">
                <button className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-ep-bg-alt transition-colors">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-ep-bg-alt transition-colors">
                  Settings
                </button>
                <div className="h-px bg-ep-border my-1"></div>
                <button 
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-ep-white hover:bg-ep-bg-alt transition-colors"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
