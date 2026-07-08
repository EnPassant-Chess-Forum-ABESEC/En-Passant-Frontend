'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthControl() {
  const { user, logout, openModal, isClient } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent hydration mismatch by not rendering anything auth-related until client side
  if (!isClient) return null;

  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-3">
      {!user ? (
        <div className="bg-ep-white/80 backdrop-blur-md px-2 py-2 rounded-full flex items-center gap-2 shadow-sm border border-ep-lightgray/50">
          <button 
            onClick={() => openModal('login')}
            className="px-4 py-2 font-mono text-xs text-ep-gray hover:text-ep-black transition-colors"
          >
            Log In
          </button>
          <button 
            onClick={() => openModal('signup')}
            className="bg-ep-black text-ep-white px-5 py-2 rounded-full font-mono text-xs hover:bg-ep-accent transition-colors shadow-sm"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-ep-white/80 backdrop-blur-md pl-2 pr-4 py-2 rounded-full flex items-center gap-3 shadow-sm border border-ep-lightgray/50 hover:border-ep-gray transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-ep-black text-ep-white flex items-center justify-center font-mono text-xs font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="font-mono text-xs">{user.username}</span>
          </button>
          
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-ep-black text-ep-white rounded-2xl shadow-xl overflow-hidden py-2 border border-ep-gray/30">
              <button className="w-full text-left px-4 py-2 font-mono text-xs hover:bg-ep-gray/20 transition-colors">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 font-mono text-xs hover:bg-ep-gray/20 transition-colors">
                Settings
              </button>
              <div className="h-px bg-ep-gray/30 my-1"></div>
              <button 
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 font-mono text-xs text-ep-accent hover:bg-ep-gray/20 transition-colors"
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
