"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { useState, useEffect, useRef } from "react";

export default function AuthControl() {
  const { user, openModal, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed top-8 right-8 z-[90]">
      <div className="relative">
        {!user ? (
          <div className="flex items-center gap-1 bg-[#E8E8E6]/90 backdrop-blur-sm rounded-full border border-foreground/10 p-1 transition-all duration-500">
            <button
              onClick={() => openModal("login")}
              className="px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground hover:bg-white/60 rounded-full transition-colors"
            >
              Log In
            </button>
            <button
              onClick={() => openModal("signup")}
              className="px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] bg-foreground text-white hover:bg-foreground/80 rounded-full transition-colors"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 bg-[#E8E8E6]/90 backdrop-blur-sm rounded-full border border-foreground/10 p-1 pr-4 transition-all duration-500 hover:border-foreground/20 group"
            >
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-white font-serif font-bold text-sm group-hover:scale-105 transition-transform">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-mono text-[10px] font-bold text-foreground hidden md:block">
                {user.name}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 right-0 w-44 bg-foreground rounded-2xl shadow-2xl py-1.5 overflow-hidden border border-foreground/80">
                <button
                  className="w-full flex items-center gap-3 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  {/* User icon */}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Profile
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  {/* Settings icon */}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  Settings
                </button>
                <div className="h-px bg-white/10 my-1 mx-3" />
                <button
                  onClick={() => { logout(); setDropdownOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors"
                >
                  {/* Logout icon */}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
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
