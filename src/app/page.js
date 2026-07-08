import Image from 'next/image';
import Logo from '../components/Logo';
import OnThisDay from '../components/OnThisDay';
import LayeredHero from '../components/LayeredHero';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Logo />
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO / WELCOME — New Layered Depth Illustration System
          ═══════════════════════════════════════════════════════════════ */}
      <LayeredHero />

      {/* ═══════════════════════════════════════════════════════════════
          2. ON THIS DAY — warm-gray chapter break
          ═══════════════════════════════════════════════════════════════ */}
      <OnThisDay />

      {/* ═══════════════════════════════════════════════════════════════
          3. ACTIVITIES — Soft colorful cards, friendly layout
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 pb-32 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-ep-accent/10 text-ep-accent font-sans font-bold text-xs tracking-wide mb-4">
              Activities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-ep-black">The Proving Grounds</h2>
          </div>
          <p className="font-sans text-base text-ep-gray max-w-xs md:text-right">
            Where theory hits the board. Here's what keeps the forum running week to week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Tournaments", 
              desc: "Online brackets every other week, plus occasional over-the-board showdowns.", 
              tag: "Biweekly / Online", 
              icon: "M5 16h14l1-9-4 2-4-5-4 5-4-2 1 9zm0 2h14v2H5v-2z",
              featured: true
            },
            { 
              title: "Coaching", 
              desc: "No formal coaches — just stronger players passing down what they know.", 
              tag: "Ongoing", 
              icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
            },
            { 
              title: "Casual Play", 
              desc: "Drop into a game on campus or online — no stakes, just chess.", 
              tag: "Anytime", 
              icon: "M12 2a3 3 0 0 0-3 3c0 1.1.6 2.05 1.5 2.6L9 11v1h6v-1l-1.5-3.4c.9-.55 1.5-1.5 1.5-2.6a3 3 0 0 0-3-3zM8 14v2h8v-2H8zm-1 4v2h10v-2H7z" 
            },
            { 
              title: "Puzzles", 
              desc: "Daily puzzles, puzzle rush duels, and position breakdowns.", 
              tag: "Daily-ish", 
              icon: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" 
            },
            { 
              title: "Ratings", 
              desc: "Track your Chess.com and Lichess ratings against the rest of the forum.", 
              tag: "Live", 
              icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" 
            },
            { 
              title: "Analysis", 
              desc: "We break down our own games together — the good, the bad, the blunders.", 
              tag: "Ongoing", 
              icon: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" 
            }
          ].map((activity, i) => (
            <div 
              key={i} 
              className={`group flex flex-col rounded-[2rem] p-8 transition-transform hover:-translate-y-1 cursor-pointer ${
                activity.featured 
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 bg-ep-primary text-ep-white shadow-lg' 
                  : 'bg-ep-white border border-ep-lightgray shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex-1">
                <div className={`mb-6 flex items-center justify-center w-12 h-12 rounded-full ${activity.featured ? 'bg-ep-white/20' : 'bg-ep-bg-alt text-ep-primary'}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d={activity.icon} />
                  </svg>
                </div>
                <h4 className={`font-serif mb-2 ${activity.featured ? 'text-3xl' : 'text-xl'}`}>{activity.title}</h4>
                <p className={`font-sans font-bold text-[11px] uppercase tracking-wider mb-4 ${activity.featured ? 'text-ep-white/80' : 'text-ep-accent'}`}>{activity.tag}</p>
              </div>
              <p className={`font-sans text-sm leading-relaxed ${activity.featured ? 'text-ep-white/90' : 'text-ep-gray'}`}>
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* thin editorial rule between Activities and About */}
      <div className="max-w-xs mx-auto">
        <hr className="border-ep-lightgray" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          4. ABOUT — Warm rounded card, friendly prose
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 relative">
        <div className="max-w-5xl mx-auto bg-ep-white rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-sm border border-ep-lightgray relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-ep-primary/10 text-ep-primary font-sans font-bold text-xs tracking-wide mb-6">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ep-black mb-8">Founded on the 64 Squares</h2>
              
              <blockquote className="border-l-4 border-ep-accent pl-6 mb-8">
                <p className="font-serif text-2xl text-ep-black/90 italic leading-snug">
                  "We play for glory, we analyze for truth, and we build community through every checkmate."
                </p>
              </blockquote>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-base leading-relaxed text-ep-gray">
                EnPassant was forged at ABESEC for those who understand that chess is more than a pastime—it is a rigorous discipline of the mind. We started as a handful of students analyzing grandmaster games in empty lecture halls, and have grown into the premier intellectual battleground on campus.
              </p>
              <p className="font-sans text-base leading-relaxed text-ep-gray">
                Whether you are here to memorize opening gambits, sharpen your endgame technique, or simply enjoy the immense complexity of the board, our forum stands open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CONTACT — Friendly CTA and footer
          ═══════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-32 bg-ep-bg relative text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-ep-accent/10 text-ep-accent font-sans font-bold text-xs tracking-wide mb-6">
            Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-ep-black mb-8">Take Your Seat</h2>
          <p className="font-sans text-lg text-ep-gray mb-16">
            Join the conversation. We're always looking for new challengers.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16 border-y border-ep-lightgray py-12">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-xs uppercase text-ep-primary tracking-wider">Email</span>
              <a href="mailto:enpassantabesec@gmail.com" className="font-sans text-sm text-ep-black hover:text-ep-accent transition-colors break-words">enpassantabesec<br/>@gmail.com</a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-xs uppercase text-ep-primary tracking-wider">WhatsApp</span>
              <a href="https://chat.whatsapp.com/IoiMk9ru9CpEew7dHJkHve" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ep-black hover:text-ep-accent transition-colors">Join Chat</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-xs uppercase text-ep-primary tracking-wider">Discord</span>
              <a href="https://discord.com/invite/Edtgnxnc37" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ep-black hover:text-ep-accent transition-colors">Join Server</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-xs uppercase text-ep-primary tracking-wider">Social</span>
              <a href="https://www.instagram.com/enpassant.abesec/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ep-black hover:text-ep-accent transition-colors">@enpassant.abesec</a>
              <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ep-black hover:text-ep-accent transition-colors mt-1">Chess.com Club</a>
            </div>
          </div>

          <button className="bg-ep-primary text-ep-white px-10 py-4 rounded-xl font-sans font-bold text-base hover:bg-ep-black transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform">
            Join the Club
          </button>
        </div>
      </section>
    </main>
  );
}
