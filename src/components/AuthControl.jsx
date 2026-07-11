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
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto transition-all duration-300 mt-6 md:mt-0">
      {recruitmentConfig.isOpen && (
        <Link 
          href={recruitmentConfig.informationPath}
          onClick={handleApplyClick}
          className={`w-full md:w-auto text-center bg-board-active text-text-on-active border border-board-active px-6 py-3 font-mono text-xs md:text-[10px] tracking-widest uppercase transition-colors hover:bg-board-light hover:text-text-on-light hover:border-[rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-board-active ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:150ms] motion-reduce:opacity-100' : ''}`}
        >
          <span>APPLY TO THE FORUM</span>
        </Link>
      )}

      {/* Auth Controls Wrapper */}
      <div 
        className={`flex items-center w-full md:w-auto overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled 
            ? 'max-h-0 md:max-w-0 opacity-0 md:-translate-y-1 pointer-events-none' 
            : 'max-h-[200px] md:max-w-[400px] opacity-100 translate-y-0 gap-3 md:gap-2 shadow-sm'
        }`}
        aria-hidden={isScrolled}
      >
        {!user ? (
          <>
            <button 
              onClick={() => openModal('login')}
              tabIndex={isScrolled ? -1 : 0}
              className={`flex-1 md:flex-none px-6 py-3 font-mono text-[10px] tracking-widest uppercase bg-board-dark text-text-on-dark transition-colors hover:bg-board-active hover:text-text-on-active whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:300ms] motion-reduce:opacity-100' : ''}`}
            >
              <span>LOG IN</span>
            </button>
            <button 
              onClick={() => openModal('signup')}
              tabIndex={isScrolled ? -1 : 0}
              className={`flex-1 md:flex-none px-6 py-3 font-mono text-[10px] tracking-widest uppercase bg-board-light text-text-on-light border border-border-primary transition-colors hover:bg-board-active hover:text-text-on-active hover:border-board-active whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:450ms] motion-reduce:opacity-100' : ''}`}
            >
              <span>SIGN UP</span>
            </button>
          </>
        ) : (
          <div className={`relative whitespace-nowrap ${!isScrolled ? 'opacity-0 motion-safe:animate-reveal-down motion-safe:[animation-delay:300ms] motion-reduce:opacity-100' : ''}`}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              tabIndex={isScrolled ? -1 : 0}
              className="bg-surface-primary border border-border-primary pl-2 pr-4 py-2 flex items-center gap-3 hover:border-border-primary transition-colors w-full"
            >
              <div className="w-6 h-6 bg-surface-inverse text-text-primary flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest">{user.username}</span>
            </button>
            
            {menuOpen && !isScrolled && (
              <div className="absolute right-0 mt-2 w-48 bg-surface-primary border border-border-primary shadow-xl overflow-hidden py-2">
                <button className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-surface-primary-alt transition-colors">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-surface-primary-alt transition-colors">
                  Settings
                </button>
                <div className="h-px bg-border-primary my-1"></div>
                <button 
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-text-inverse hover:bg-surface-primary-alt transition-colors"
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
