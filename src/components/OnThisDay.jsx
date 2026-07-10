'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { legends } from '../lib/data/legends';
import { getUpcomingMemberBirthdays } from '../lib/data/mockMembers';

export default function OnThisDay() {
  const [thisWeekLegends, setThisWeekLegends] = useState(null);
  const [thisWeekMembers, setThisWeekMembers] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = new Date();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      // Helper to get day of year (approximate, ignoring leap year nuances for simple 7-day window)
      const getDayOfYear = (m, d) => {
        const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let sum = d;
        for (let i = 1; i < m; i++) sum += daysInMonth[i];
        return sum;
      };

      const currentDOY = getDayOfYear(currentMonth, currentDay);

      // Filter legends (within next 7 days, or past 3 days and next 4 days? "a 7-day rolling window centered on or starting from today")
      // Let's use starting from today to today + 7
      let upcoming = legends.map(l => {
        let lDOY = getDayOfYear(l.month, l.day);
        let diff = lDOY - currentDOY;
        // Handle year wrap-around
        if (diff < 0) diff += 365;
        return { ...l, diff };
      }).filter(l => l.diff >= 0 && l.diff <= 7)
        .sort((a, b) => a.diff - b.diff);

      // Cap at 4
      if (upcoming.length > 4) {
        upcoming = upcoming.slice(0, 4);
      }

      // If none found within 7 days, just find the next upcoming one
      if (upcoming.length === 0) {
        upcoming = legends.map(l => {
          let lDOY = getDayOfYear(l.month, l.day);
          let diff = lDOY - currentDOY;
          if (diff < 0) diff += 365;
          return { ...l, diff };
        }).sort((a, b) => a.diff - b.diff).slice(0, 1);
        // Mark as next up
        if (upcoming[0]) upcoming[0].isNextUp = true;
      }

      setThisWeekLegends(upcoming);

      // Fetch members
      const members = getUpcomingMemberBirthdays();
      setThisWeekMembers(members);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Avoid hydration mismatch by not rendering the dates until data is populated client-side
  if (!thisWeekLegends || !thisWeekMembers) {
    return (
      <section className="px-6 md:px-12 lg:px-24 py-28 md:py-32 bg-ep-bg border-b border-ep-border min-h-[500px]">
        {/* Placeholder to prevent layout shift */}
      </section>
    );
  }

  const formatMonth = (m) => {
    const months = ["", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    return months[m];
  };

  const padDay = (d) => String(d).padStart(2, '0');

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-ep-bg border-b border-ep-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8">
        
        <div className="lg:col-span-4 flex flex-col justify-between lg:border-r lg:border-b-0 border-b border-ep-border pb-8 lg:pb-0 lg:pr-8">
          <div>
            <span className="font-mono text-xs text-ep-gray tracking-[0.2em] uppercase mb-4 block">
              [ CALENDAR ]
            </span>
            <h2 className="text-4xl md:text-5xl font-mono text-ep-black uppercase tracking-tight leading-tight">Birthdays &<br/>Anniversaries</h2>
          </div>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ep-border border border-ep-border">
          
          {/* Legends Column */}
          <div className="bg-ep-bg flex flex-col group relative">
            <h3 className="font-mono text-xs tracking-widest text-ep-gray uppercase p-6 border-b border-ep-border">
              {'// Chess Legends'}
            </h3>
            
            <div className="flex-1 flex flex-col gap-px bg-ep-border">
            {thisWeekLegends.length === 0 ? (
               <div className="p-6 h-full flex items-center justify-center bg-ep-bg">
                 <p className="font-mono text-xs text-ep-gray uppercase tracking-widest text-center">NO DATA // CHECK BACK SOON</p>
               </div>
            ) : (
              thisWeekLegends.map((legend, i) => (
                <div key={i} className="p-6 relative chess-cell-dark interactive-active flex-1 group">
                  <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs cell-text-secondary">
                    [{formatMonth(legend.month)}.{padDay(legend.day)}]
                  </div>
                  <div>
                    <p className="font-mono text-lg uppercase tracking-wider mb-2 cell-text-primary">
                      {legend.isNextUp && <span className="font-mono text-[10px] uppercase tracking-widest bg-ep-gray text-ep-bg px-2 py-0.5 mr-3 align-text-top">Next up</span>}
                      {legend.name}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest mb-4 cell-text-secondary">role: {legend.role}</p>
                    <p className="font-mono text-[10px] tracking-widest uppercase cell-text-secondary">
                      DOB: {legend.year}.{formatMonth(legend.month)}.{padDay(legend.day)}
                    </p>
                  </div>
                </div>
              ))
            )}
            </div>
          </div>

          {/* Forum Members Column */}
          <div className="bg-ep-bg flex flex-col group relative">
            <h3 className="font-mono text-xs tracking-widest text-ep-gray uppercase p-6 border-b border-ep-border">
              {'// Forum Members'}
            </h3>
            {thisWeekMembers.length === 0 ? (
              <div className="flex-1 p-6 flex items-center justify-center bg-ep-bg">
                <p className="font-mono text-xs text-ep-gray uppercase tracking-widest text-center">NO DATA // CHECK BACK SOON</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-px bg-ep-border">
              {thisWeekMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-6 p-6 relative chess-cell-dark interactive-active flex-1 group">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all cell-border border relative overflow-hidden">
                    {member.avatarUrl ? <Image src={member.avatarUrl} alt={member.name} fill className="object-cover" unoptimized /> : <span className="font-mono text-xs cell-text-secondary">?</span>}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-lg uppercase tracking-wider mb-2 cell-text-primary">{member.name}</p>
                    <p className="font-mono text-[10px] tracking-widest uppercase cell-text-secondary">
                      TURNS 20 • [{formatMonth(member.month)}.{padDay(member.day)}]
                    </p>
                  </div>
                </div>
              ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
