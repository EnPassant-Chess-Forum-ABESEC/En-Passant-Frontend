'use client';

import { useInView } from '../hooks/useInView';

export default function RevealSection({ 
  children, 
  className = '', 
  animationClass = 'motion-safe:animate-reveal-up',
  delay = '0ms',
  as: Component = 'section' 
}) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Component 
      ref={ref} 
      className={`${className} opacity-0 motion-reduce:opacity-100 ${isInView ? animationClass : ''}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </Component>
  );
}
