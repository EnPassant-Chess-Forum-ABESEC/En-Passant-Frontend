import Image from "next/image";

export default function HomePanel() {
  return (
    <>
      {/* ══════════════ HERO / WELCOME ══════════════ */}
      <section className="min-h-[70vh] flex flex-col justify-center gap-8 pt-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-4">
              Est. 2024 — ABES Engineering College
            </p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground leading-[0.95] mb-6">
              Outsmart the<br />
              <span className="text-accent italic">Entire Arena.</span>
            </h1>
            <p className="font-mono text-sm text-foreground/50 leading-relaxed max-w-md">
              EnPassant is ABESEC&apos;s official chess forum — a collective of analytical minds
              dedicated to mastering tempo, exploiting weak squares, and converting endgames.
              This isn&apos;t a hobby. It&apos;s preparation.
            </p>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
            <Image
              src="/images/pixel-king.png"
              alt="Pixel art chess king"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════ ON THIS DAY ══════════════ */}
      <section className="py-20 border-t border-foreground/10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          Calendar
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12">
          On This Day.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Members */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-foreground/5">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Our Community</h3>
            {[
              { name: "Arjun N.", date: "Jul 2", role: "Member since 2024", icon: "♙" },
              { name: "Sarah K.", date: "Jul 4", role: "Treasurer 2024–25", icon: "♘" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-foreground/5 last:border-0">
                <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-xl">{m.icon}</div>
                <div className="flex-1">
                  <div className="font-serif font-bold text-foreground">{m.name}</div>
                  <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">{m.role}</div>
                </div>
                <div className="font-mono text-xs font-bold bg-foreground text-white px-3 py-1 rounded-full">{m.date}</div>
              </div>
            ))}
          </div>

          {/* Legends */}
          <div className="bg-foreground rounded-3xl p-8 shadow-sm text-white">
            <h3 className="font-serif text-2xl font-bold mb-6">Chess Legends</h3>
            {[
              { name: "Vladimir Kramnik", date: "Jun 25", fact: "14th World Champion. Classical stylist.", icon: "♔" },
              { name: "Paul Morphy", date: "Jun 22", fact: "The pride and sorrow of chess.", icon: "♗" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">{l.icon}</div>
                <div className="flex-1">
                  <div className="font-serif font-bold">{l.name}</div>
                  <div className="font-mono text-[10px] text-white/50 leading-relaxed">{l.fact}</div>
                </div>
                <div className="font-mono text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-white/70">{l.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ACTIVITIES ══════════════ */}
      <section className="py-20 border-t border-foreground/10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          The Grind
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12">
          What We Do.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: "♔", title: "Rated Tournaments", desc: "Monthly FIDE-rated classical and rapid events." },
            { icon: "♘", title: "Opening Lab", desc: "Deep dives into specific lines with engine analysis." },
            { icon: "♙", title: "Puzzle Rush", desc: "Timed tactical solving competitions every Friday." },
            { icon: "♖", title: "Endgame Clinics", desc: "Rook endings, pawn structures, practical technique." },
            { icon: "♗", title: "Game Analysis", desc: "Post-mortem sessions dissecting your OTB losses." },
            { icon: "♛", title: "Casual Blitz", desc: "5+0 arena nights. No stakes. Pure instinct." },
          ].map((a, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-foreground/5 group hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-top-left">{a.icon}</div>
              <h4 className="font-serif text-lg font-bold text-foreground mb-1">{a.title}</h4>
              <p className="font-mono text-[11px] text-foreground/40 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section className="py-20 border-t border-foreground/10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          The Story
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
          More Than<br />
          <span className="italic text-foreground/50">Just a Game.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="font-mono text-sm text-foreground/50 leading-relaxed flex flex-col gap-6">
            <p>
              Founded in 2024, EnPassant wasn&apos;t conceived as a social club with a chessboard in the corner.
              It was built for players who understand that a bad bishop is a structural problem, not a minor inconvenience.
              Players who study tablebases at midnight and agonize over whether Nf3 or c4 is the more precise move order.
            </p>
            <p>
              We are a forum in the original sense — a place for rigorous discourse,
              competitive preparation, and the relentless pursuit of improvement.
              Every member here has chosen to take the game seriously.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <ul className="font-mono text-sm text-foreground/50 leading-loose flex flex-col gap-2">
              <li><span className="text-accent font-bold">01</span> — Depth over breadth. Master one line before learning ten.</li>
              <li><span className="text-accent font-bold">02</span> — Every loss is data. Analyze ruthlessly.</li>
              <li><span className="text-accent font-bold">03</span> — Respect the clock. Respect the opponent. Respect the game.</li>
              <li><span className="text-accent font-bold">04</span> — Community is a multiplier. Iron sharpens iron.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section className="py-20 border-t border-foreground/10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          Your Move
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12">
          Get in Touch.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            {[
              { label: "Email", value: "enpassant@abesec.ac.in", icon: "✉" },
              { label: "Phone", value: "+91 98765 43210", icon: "☎" },
              { label: "Instagram", value: "@enpassant.abesec", icon: "◎" },
              { label: "Location", value: "ABES Engineering College, Ghaziabad, UP", icon: "⌖" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center font-mono text-foreground/40">{c.icon}</div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">{c.label}</div>
                  <div className="font-mono text-sm text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="font-mono text-sm text-foreground/50 leading-relaxed">
              Ready to sacrifice a pawn for initiative? We&apos;re always accepting new members —
              rated or unrated, aggressive or positional, freshman or final-year.
            </p>
            <button className="bg-accent text-white font-mono text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-accent/90 active:scale-95 transition-all shadow-lg">
              Join the Club
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
