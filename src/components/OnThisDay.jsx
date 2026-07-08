'use client';

import { useState, useEffect } from 'react';
import { legends } from '../lib/data/legends';
import { getUpcomingMemberBirthdays } from '../lib/data/mockMembers';

export default function OnThisDay() {
  const [thisWeekLegends, setThisWeekLegends] = useState([]);
  const [thisWeekMembers, setThisWeekMembers] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
  }, []);

  // Avoid hydration mismatch by not rendering the dates until mounted
  if (!mounted) {
    return (
      <section className="px-6 md:px-12 lg:px-24 py-28 md:py-32 bg-ep-bg-warm min-h-[500px]">
        {/* Placeholder to prevent layout shift */}
      </section>
    );
  }

  const formatMonth = (m) => {
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[m];
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-ep-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 rounded-full bg-ep-accent/10 text-ep-accent font-sans font-bold text-xs tracking-wide mb-4">
            On This Day
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-ep-black">Birthdays & Anniversaries</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Legends Column */}
          <div className="bg-ep-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-ep-lightgray relative overflow-hidden group hover:shadow-md transition-shadow">
            <h3 className="font-serif text-3xl text-ep-black mb-8 border-b border-ep-lightgray pb-4">
              Chess Legends
            </h3>
            
            <div className="space-y-6">
            {thisWeekLegends.length === 0 ? (
               <p className="font-sans text-sm text-ep-gray">No legends celebrate this week — check back soon.</p>
            ) : (
              thisWeekLegends.map((legend, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-ep-bg-alt transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-ep-primary/10 text-ep-primary flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2L9 9H2l5.5 4.5L5.5 22 12 17l6.5 5-2-8.5L22 9h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-ep-black">
                      {legend.isNextUp && <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-ep-accent mr-2 bg-ep-accent/10 px-2 py-1 rounded-full">Next up</span>}
                      {legend.name}
                    </p>
                    <p className="font-sans text-sm text-ep-gray mb-1">{legend.role}</p>
                    <p className="font-sans text-sm font-bold text-ep-accent">
                      Born {formatMonth(legend.month)} {legend.day}, {legend.year}
                    </p>
                  </div>
                </div>
              ))
            )}
            </div>
          </div>

          {/* Members Column */}
          <div className="bg-ep-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-ep-lightgray relative overflow-hidden group hover:shadow-md transition-shadow">
            <h3 className="font-serif text-3xl text-ep-black mb-8 border-b border-ep-lightgray pb-4">
              Club Members
            </h3>
            {thisWeekMembers.length === 0 ? (
              <p className="font-sans text-sm text-ep-gray">No members celebrate this week — check back soon.</p>
            ) : (
              <div className="space-y-6">
              {thisWeekMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-ep-bg-alt transition-colors">
                  <div className="w-16 h-16 rounded-full bg-ep-bg border-2 border-ep-lightgray overflow-hidden flex-shrink-0">
                    {member.avatarUrl && <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-ep-black">{member.name}</p>
                    <p className="font-sans text-sm font-bold text-ep-accent">
                      Turns 20 • {formatMonth(member.month)} {member.day}
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
