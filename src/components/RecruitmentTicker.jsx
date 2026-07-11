import Link from 'next/link';
import { recruitmentConfig } from '../lib/config/recruitment';
import { useRecruitmentTransition } from '../context/TransitionContext';

export default function RecruitmentTicker() {
  const { transitionState, startRecruitmentTransition } = useRecruitmentTransition() || {};
  if (!recruitmentConfig.isOpen) return null;

  // We duplicate the message multiple times to ensure the marquee is wide enough to seamlessly loop
  const repeatedMessage = Array(10).fill(recruitmentConfig.tickerMessage).join('  //  ');

  const handleClick = (e) => {
    // Don't hijack modified clicks (Ctrl/Cmd+click, middle-click = new tab intent)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (startRecruitmentTransition) {
      e.preventDefault();
      startRecruitmentTransition(recruitmentConfig.informationPath);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-board-light text-text-on-light border-b border-[rgba(0,0,0,0.1)] h-[28px] md:h-[36px] overflow-hidden group hover:bg-board-active hover:text-text-on-active transition-colors duration-300">
      <Link 
        href={recruitmentConfig.informationPath}
        onClick={handleClick}
        className="block w-full h-full focus-visible:outline-none focus-visible:bg-board-active focus-visible:text-text-on-active"
        aria-label={`Recruitment Information: ${recruitmentConfig.tickerMessage.split('//')[1]?.trim() || 'Applications Open'}`}
      >
        {/* Opacity-only fade. The marquee animation exclusively owns `transform`,
            and this wrapper exclusively owns `opacity`. No property conflict = no jitter. */}
        <div className={`flex h-full items-center whitespace-nowrap motion-safe:animate-marquee group-hover:[animation-play-state:paused] transition-opacity duration-500 ease-out w-max ${transitionState !== 'IDLE' ? 'opacity-0' : 'opacity-100 group-hover:opacity-80'}`}>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase pr-8">
            {repeatedMessage}
          </span>
          {/* Duplicate track for seamless looping, hidden from screen readers to prevent redundant reading */}
          <span aria-hidden="true" className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase pr-8">
            {repeatedMessage}
          </span>
        </div>
      </Link>
    </div>
  );
}
