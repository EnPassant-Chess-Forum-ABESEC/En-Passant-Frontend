'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthControl() {
  const { user, logout, openModal, isClient } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent hydration mismatch by not rendering anything auth-related until client side
  if (!isClient) return null;

  return (
    <div className="fixed top-8 right-8 md:top-12 md:right-12 z-40 flex items-center gap-3">
      {!user ? (
        <div className="flex items-center gap-2 shadow-sm">
          <button 
            onClick={() => openModal('login')}
            className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase chess-cell-dark"
          >
            <span className="cell-text-primary">LOG IN</span>
          </button>
          <button 
            onClick={() => openModal('signup')}
            className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase chess-cell-light"
          >
            <span className="cell-text-primary">SIGN UP</span>
          </button>
        </div>
      ) : (
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-ep-bg border border-ep-border pl-2 pr-4 py-2 flex items-center gap-3 hover:border-ep-gray transition-colors"
          >
            <div className="w-6 h-6 bg-ep-white text-ep-black flex items-center justify-center font-mono text-[10px] font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest">{user.username}</span>
          </button>
          
          {menuOpen && (
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
  );
}
