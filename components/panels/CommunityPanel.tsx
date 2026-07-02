"use client";

import { useState } from "react";

interface Member {
  id: string;
  name: string;
  avatar: string;
  headline: string;
  peakRating: string;
  currentRating: string;
  recentGames: { opponent: string; result: "W" | "L" | "D"; date: string }[];
  openings: string[];
}

const MEMBERS: Member[] = [
  { id: "1", name: "Aman Gupta", avatar: "♔", headline: "2100 Lichess · Najdorf specialist", peakRating: "2150", currentRating: "2095",
    recentGames: [ { opponent: "GM_HikaruFan", result: "L", date: "2 hrs ago" }, { opponent: "chess_noob99", result: "W", date: "5 hrs ago" }, { opponent: "tactics_master", result: "D", date: "1 day ago" } ],
    openings: ["Sicilian Defense: Najdorf", "King's Indian Defense"] },
  { id: "2", name: "Neha Singh", avatar: "♕", headline: "1950 Chess.com · Positional grinder", peakRating: "1980", currentRating: "1950",
    recentGames: [ { opponent: "blitz_king", result: "W", date: "3 hrs ago" }, { opponent: "endgame_grinder", result: "W", date: "4 hrs ago" }, { opponent: "e4_player", result: "L", date: "2 days ago" } ],
    openings: ["Queen's Gambit Declined", "Caro-Kann Defense"] },
  { id: "3", name: "Rohan Das", avatar: "♘", headline: "1600 Lichess · Tactical puncher", peakRating: "1620", currentRating: "1580",
    recentGames: [ { opponent: "tricky_knight", result: "D", date: "1 hr ago" }, { opponent: "pawn_pusher", result: "L", date: "5 hrs ago" } ],
    openings: ["Italian Game", "French Defense"] },
  { id: "4", name: "Kritika Verma", avatar: "♗", headline: "1400 Chess.com · Rapid climber", peakRating: "1410", currentRating: "1405",
    recentGames: [ { opponent: "london_system", result: "W", date: "20 mins ago" }, { opponent: "scholars_mate", result: "W", date: "1 day ago" } ],
    openings: ["London System", "Ruy Lopez"] },
  { id: "5", name: "Samir Khan", avatar: "♖", headline: "1850 Lichess · Endgame technician", peakRating: "1890", currentRating: "1850",
    recentGames: [ { opponent: "attacking_mind", result: "D", date: "2 days ago" }, { opponent: "defensive_wall", result: "W", date: "3 days ago" } ],
    openings: ["Slav Defense", "Nimzo-Indian Defense"] },
  { id: "6", name: "Pooja Mehra", avatar: "♙", headline: "1200 Chess.com · Learning the ropes", peakRating: "1250", currentRating: "1190",
    recentGames: [ { opponent: "beginner_123", result: "L", date: "10 mins ago" } ],
    openings: ["Four Knights Game"] },
  { id: "7", name: "Vikrant Tiwari", avatar: "♞", headline: "1750 Lichess · Gambit devotee", peakRating: "1780", currentRating: "1740",
    recentGames: [ { opponent: "solid_player", result: "W", date: "6 hrs ago" }, { opponent: "titled_tuesday", result: "L", date: "1 day ago" } ],
    openings: ["King's Gambit", "Evans Gambit", "Scotch Game"] },
  { id: "8", name: "Anika Reddy", avatar: "♛", headline: "1920 Chess.com · Correspondence queen", peakRating: "1950", currentRating: "1920",
    recentGames: [ { opponent: "deep_thinker", result: "W", date: "4 hrs ago" }, { opponent: "time_trouble", result: "D", date: "1 day ago" }, { opponent: "opening_nerd", result: "W", date: "2 days ago" } ],
    openings: ["Catalan Opening", "English Opening"] },
];

function MemberCard({ member, onClick }: { member: Member; onClick: () => void }) {
  return (
    <div
      className="break-inside-avoid mb-4 bg-white border border-foreground/5 rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:border-foreground/15 transition-all duration-300 group"
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-full bg-foreground/5 mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
        {member.avatar}
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground leading-tight">{member.name}</h3>
      <div className="font-mono text-[10px] text-foreground/35 mt-1.5 tracking-wider">{member.headline}</div>
    </div>
  );
}

function ProfileDetail({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-foreground/5 hover:bg-foreground/10 rounded-full transition-colors z-20"
          aria-label="Close profile"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center gap-6 mb-10 pb-8 border-b border-foreground/10">
            <div className="w-20 h-20 rounded-full bg-foreground/5 flex items-center justify-center text-4xl shrink-0">
              {member.avatar}
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{member.name}</h2>
              <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest mt-1">{member.headline}</div>
            </div>
          </div>

          {/* Ratings */}
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-foreground/5 rounded-2xl p-5 text-center">
              <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-foreground/35 mb-1">Peak</div>
              <div className="font-serif text-3xl font-bold text-foreground">{member.peakRating}</div>
            </div>
            <div className="flex-1 bg-foreground rounded-2xl p-5 text-center text-white">
              <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Current</div>
              <div className="font-serif text-3xl font-bold">{member.currentRating}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Recent Games */}
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-5">Recent Games</h3>
              <div className="flex flex-col gap-2">
                {member.recentGames.map((g, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-foreground/[0.03] rounded-xl">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold font-mono
                        ${g.result === "W" ? "bg-green-100 text-green-700" : g.result === "L" ? "bg-red-100 text-red-700" : "bg-gray-200 text-gray-700"}
                      `}>{g.result}</div>
                      <span className="font-mono text-sm text-foreground">{g.opponent}</span>
                    </div>
                    <span className="font-mono text-[10px] text-foreground/30">{g.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Openings */}
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-5">Top Openings</h3>
              <div className="flex flex-col gap-2">
                {member.openings.map((o, i) => (
                  <div key={i} className="p-3 bg-foreground/[0.03] rounded-xl font-mono text-sm text-foreground">
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommunityPanel() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <>
      <div className="mb-12">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          The Directory
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
          Know Your<br />
          <span className="italic text-foreground/50">Opposition.</span>
        </h2>
        <p className="font-mono text-sm text-foreground/40 max-w-md">
          Every player in the forum. Click a card to see their weapon of choice.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 pb-16">
        {MEMBERS.map((m) => (
          <MemberCard key={m.id} member={m} onClick={() => setSelectedMember(m)} />
        ))}
      </div>

      {selectedMember && (
        <ProfileDetail member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
}
