'use client';

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  // IDLE → OPENING → NAVIGATING → SETTLING → IDLE
  const [transitionState, setTransitionState] = useState('IDLE');
  const [hasJustTransitioned, setHasJustTransitioned] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const timersRef = useRef([]);

  // Safe timer helper — all timers are tracked and cleaned up
  const scheduleTimer = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  // Clean up all pending timers on unmount
  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  // Handle state progression after route change
  useEffect(() => {
    if (transitionState === 'NAVIGATING') {
      // Route has changed. Transition to SETTLING immediately (deferred to avoid
      // synchronous setState-in-effect lint violation).
      const id = scheduleTimer(() => {
        setTransitionState('SETTLING');
      }, 16); // One frame delay — enough to let the destination mount
      return () => clearTimeout(id);
    }
    if (transitionState === 'SETTLING') {
      // Wait for the overlay fade-out to complete, then go IDLE
      const id = scheduleTimer(() => {
        setTransitionState('IDLE');
      }, 600);
      return () => clearTimeout(id);
    }
    if (transitionState === 'IDLE' && hasJustTransitioned) {
      const id = scheduleTimer(() => {
        setHasJustTransitioned(false);
      }, 100);
      return () => clearTimeout(id);
    }
  }, [transitionState, pathname, hasJustTransitioned, scheduleTimer]);

  const startRecruitmentTransition = useCallback((href = '/forum-recruitment') => {
    if (pathname === href) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    setTransitionState('OPENING');
    setHasJustTransitioned(true);

    // Navigate after the overlay surface has covered the viewport (600ms)
    scheduleTimer(() => {
      setTransitionState('NAVIGATING');
      router.push(href);
    }, 600);
  }, [pathname, router, scheduleTimer]);

  return (
    <TransitionContext.Provider value={{ transitionState, startRecruitmentTransition, hasJustTransitioned }}>
      {children}

      {/* Transition overlay — sits BELOW the real ticker (z-[90] vs ticker z-[100]).
          This is the key architectural decision: the real ticker fades its own text
          while this same-colored surface expands behind it, creating seamless continuity
          with zero position-mismatch jitter. */}
      <div
        className={`
          fixed inset-x-0 top-0 z-[90] pointer-events-none
          origin-top transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${transitionState !== 'IDLE' ? 'scale-y-100' : 'scale-y-0'}
          motion-reduce:hidden
        `}
        style={{ height: '100vh' }}
        aria-hidden="true"
      >
        {/* Solid surface — same color as ticker bg and recruitment page bg.
            Fades out during SETTLING to reveal the destination page underneath. */}
        <div
          className={`
            absolute inset-0 bg-ep-accent
            transition-opacity duration-[600ms] ease-out
            ${transitionState === 'SETTLING' ? 'opacity-0' : 'opacity-100'}
          `}
        />
      </div>
    </TransitionContext.Provider>
  );
}

export function useRecruitmentTransition() {
  return useContext(TransitionContext);
}
