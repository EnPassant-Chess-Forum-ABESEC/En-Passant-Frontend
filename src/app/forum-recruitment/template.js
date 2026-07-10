'use client';

import { useRecruitmentTransition } from '../../context/TransitionContext';

export default function RecruitmentTemplate({ children }) {
  const { hasJustTransitioned } = useRecruitmentTransition() || {};

  return (
    <div className={`theme-light bg-ep-bg min-h-screen ${!hasJustTransitioned ? 'motion-safe:animate-clip-down motion-safe:origin-top motion-reduce:clip-path-none' : ''}`}>
      {children}
    </div>
  );
}
