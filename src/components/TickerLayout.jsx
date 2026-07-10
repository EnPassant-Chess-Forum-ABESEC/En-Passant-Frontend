'use client';

import { usePathname } from 'next/navigation';
import RecruitmentTicker from './RecruitmentTicker';
import { recruitmentConfig } from '../lib/config/recruitment';

export default function TickerLayout({ children }) {
  const pathname = usePathname();
  const showTicker = recruitmentConfig.isOpen && pathname === '/';

  return (
    <div className={`${showTicker ? 'recruitment-open' : ''} ${pathname === '/forum-recruitment' ? 'theme-light' : ''}`}>
      {showTicker && <RecruitmentTicker />}
      <div className="relative z-10 pt-[var(--recruitment-ticker-height,0px)]">
        {children}
      </div>
    </div>
  );
}
