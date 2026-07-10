
import Logo from '../components/Logo';
import OnThisDay from '../components/OnThisDay';
import LayeredHero from '../components/LayeredHero';

export default function Home() {
  return (
    <main className="min-h-screen relative border-x border-ep-border max-w-[1600px] mx-auto bg-ep-bg">
      <Logo />
      
      <LayeredHero />

      <OnThisDay />

      {/* ═══════════════════════════════════════════════════════════════
          ACTIVITIES
          ═══════════════════════════════════════════════════════════════ */}
      <section id="community" className="px-6 md:px-12 lg:px-24 pt-24 pb-32 border-b border-ep-border relative bg-ep-bg-raised">
        <div className="relative z-10 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-l border-ep-border pl-6 md:pl-12">
          <div>
            <span className="font-mono text-xs text-ep-gray tracking-[0.2em] uppercase mb-4 block">
              01 // The Proving Grounds
            </span>
            <h2 className="text-4xl md:text-5xl font-mono text-ep-black uppercase tracking-tight">Activities</h2>
          </div>
          <p className="font-mono text-sm text-ep-gray max-w-xs md:text-right uppercase tracking-wider">
            Where theory hits the board. Here&apos;s what keeps the forum running week to week.
          </p>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ep-border border border-ep-border shadow-xl">
          {[
            { 
              title: "Tournaments", 
              desc: "Online brackets every other week, plus occasional over-the-board showdowns.", 
              tag: "Biweekly / Online", 
              notation: "T.01",
              coord: "A1",
              featured: true
            },
            { 
              title: "Coaching", 
              desc: "No formal coaches — just stronger players passing down what they know.", 
              tag: "Ongoing", 
              notation: "C.02",
              coord: "B2" 
            },
            { 
              title: "Casual Play", 
              desc: "Drop into a game on campus or online — no stakes, just chess.", 
              tag: "Anytime", 
              notation: "P.03",
              coord: "C3" 
            },
            { 
              title: "Puzzles", 
              desc: "Daily puzzles, puzzle rush duels, and position breakdowns.", 
              tag: "Daily-ish", 
              notation: "Z.04",
              coord: "D4" 
            },
            { 
              title: "Ratings", 
              desc: "Track your Chess.com and Lichess ratings against the rest of the forum.", 
              tag: "Live", 
              notation: "R.05",
              coord: "E5" 
            },
            { 
              title: "Analysis", 
              desc: "We break down our own games together — the good, the bad, the blunders.", 
              tag: "Ongoing", 
              notation: "A.06",
              coord: "F6" 
            }
          ].map((activity, i) => (
            <div 
              key={i} 
              className={`group flex flex-col p-8 md:p-12 relative interactive-active ${
                activity.featured 
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 chess-cell-light' 
                  : 'chess-cell-dark'
              }`}
            >
              <div className="absolute top-6 right-6 font-mono text-[10px] tracking-widest cell-text-secondary">
                [{activity.notation}]
              </div>
              <div className="coord-marker">[{activity.coord}]</div>
              <div className="flex-1 mt-8">
                <h3 className={`font-mono uppercase tracking-widest mb-2 cell-text-primary ${activity.featured ? 'text-2xl' : 'text-lg'}`}>{activity.title}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-6 border-b pb-4 inline-block cell-text-secondary cell-border">{activity.tag}</p>
              </div>
              <p className={`font-mono text-sm leading-relaxed uppercase tracking-wide cell-text-secondary ${activity.featured ? 'mt-4' : ''}`}>
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 relative border-b border-ep-border bg-ep-bg overflow-hidden">
        {/* Subtle 8x8 micro-grid decorative motif in corner */}
        <div aria-hidden="true" className="absolute top-12 right-12 opacity-10 pointer-events-none grid grid-cols-8 grid-rows-8 w-64 h-64 border border-ep-border">
          {Array.from({length: 64}).map((_, i) => (
            <div key={i} className={`border border-ep-border/30 ${i % 2 === 0 ? 'bg-ep-white' : 'bg-transparent'} ${(i === 27 || i === 36) ? '!bg-ep-white !opacity-100' : ''}`} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-ep-gray tracking-[0.2em] uppercase mb-4 block">
                02 // Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-mono uppercase tracking-tight text-ep-black mb-8">Founded on the 64 Squares</h2>
            </div>
            
            <div className="hidden md:flex border-l border-ep-border pl-6 py-2 flex-col gap-2">
              <span className="font-mono text-[10px] text-ep-primary tracking-widest">[ COORD: E4-C5 ]</span>
              <span className="font-mono text-[10px] text-ep-primary tracking-widest">EST. [DATA]</span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-12">
            <div className="chess-cell-dark p-8 md:p-12 relative group">
              <div className="coord-marker">[G7]</div>
              <blockquote className="border-l border-ep-white pl-6 md:pl-10 cell-border">
                <p className="font-mono text-xl md:text-2xl cell-text-primary uppercase tracking-wide leading-relaxed">
                  &quot;We play for glory, we analyze for truth, and we build community through every checkmate.&quot;
                </p>
              </blockquote>
            </div>

            <div className="space-y-6 text-ep-gray font-mono text-sm leading-relaxed uppercase tracking-wider pl-4 border-l border-ep-border/50">
              <p>
                EnPassant was forged at ABESEC for those who understand that chess is more than a pastime—it is a rigorous discipline of the mind. We started as a handful of students analyzing grandmaster games in empty lecture halls, and have grown into the premier intellectual battleground on campus.
              </p>
              <p>
                Whether you are here to memorize opening gambits, sharpen your endgame technique, or simply enjoy the immense complexity of the board, our forum stands open.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 pb-32 bg-ep-accent text-ep-bg relative text-center">
        <div className="max-w-4xl mx-auto border border-ep-bg/20 p-8 md:p-16 bg-[#F8F7F3] shadow-2xl relative">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-ep-bg/50 tracking-widest">[03]</div>
          <div className="absolute top-4 right-4 font-mono text-[10px] text-ep-bg/50 tracking-widest">[ENDGAME]</div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-mono uppercase tracking-tight text-ep-bg mb-6 mt-8">Take Your Seat</h2>
          <p className="font-mono text-sm md:text-base text-ep-bg/70 mb-16 uppercase tracking-wider">
            Join the conversation. We&apos;re always looking for new challengers.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ep-bg/10 border border-ep-bg/10 mb-16 text-left shadow-sm">
            <a href="https://www.instagram.com/enpassant.abesec/" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col gap-4 group chess-cell-light interactive-active relative">
              <div className="coord-marker">[H1]</div>
              <span className="font-mono text-[10px] uppercase tracking-widest border-b pb-2 cell-text-secondary cell-border">Instagram</span>
              <span className="font-mono text-[10px] uppercase tracking-wide flex items-center justify-between w-full cell-text-primary">@enpassant.abesec <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span></span>
            </a>
            
            <a href="https://chat.whatsapp.com/IoiMk9ru9CpEew7dHJkHve" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col gap-4 group chess-cell-light interactive-active relative">
              <div className="coord-marker">[H2]</div>
              <span className="font-mono text-[10px] uppercase tracking-widest border-b pb-2 cell-text-secondary cell-border">WhatsApp</span>
              <span className="font-mono text-[10px] uppercase tracking-wide flex items-center justify-between w-full cell-text-primary">Join Chat <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span></span>
            </a>

            <a href="https://discord.com/invite/Edtgnxnc37" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col gap-4 group chess-cell-light interactive-active relative">
              <div className="coord-marker">[H3]</div>
              <span className="font-mono text-[10px] uppercase tracking-widest border-b pb-2 cell-text-secondary cell-border">Discord</span>
              <span className="font-mono text-[10px] uppercase tracking-wide flex items-center justify-between w-full cell-text-primary">Join Server <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span></span>
            </a>

            <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col gap-4 group chess-cell-light interactive-active relative">
              <div className="coord-marker">[H4]</div>
              <span className="font-mono text-[10px] uppercase tracking-widest border-b pb-2 cell-text-secondary cell-border">Chess.com</span>
              <span className="font-mono text-[10px] uppercase tracking-wide flex items-center justify-between w-full cell-text-primary">View Chess.com Page <span className="opacity-0 group-hover:opacity-100 transition-opacity">-&gt;</span></span>
            </a>
          </div>

          <button className="px-12 py-4 font-mono text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(10,10,10,0.1)] chess-cell-dark interactive-active">
            <span className="cell-text-primary">APPLY TO THE FORUM</span>
          </button>
        </div>
      </section>
    </main>
  );
}
