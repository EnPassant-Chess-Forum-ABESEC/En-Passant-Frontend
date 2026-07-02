export default function EventsPanel() {
  const events = [
    { icon: "⏱", title: "Rapid Nights", desc: "High-tension 10+0 arenas. Pure calculation under pressure.", freq: "Weekly" },
    { icon: "♜", title: "Masterclass", desc: "Titled players dissect specific opening systems and middlegame structures.", freq: "Bi-Weekly" },
    { icon: "⚔", title: "Simul Sessions", desc: "One master vs. twenty boards. Can you be the one to draw?", freq: "Monthly" },
    { icon: "♙", title: "Puzzle Rush", desc: "Fastest-fingers tactical solving. Sharpens your pattern recognition.", freq: "Weekly" },
    { icon: "♞", title: "Inter-College Matches", desc: "Team battles against rival university clubs. Board order matters.", freq: "Quarterly" },
    { icon: "♗", title: "Endgame Workshop", desc: "Philidor, Lucena, opposite-colored bishops — the positions that decide games.", freq: "Monthly" },
  ];

  return (
    <>
      <section className="pt-8 mb-12">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          Club Life
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
          Beyond the<br />
          <span className="italic text-foreground/50">Board.</span>
        </h2>
        <p className="font-mono text-sm text-foreground/40 max-w-md">
          The grind extends past rated play. Workshops, team matches, and sessions designed to break plateaus.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
        {events.map((evt, i) => (
          <div key={i} className="bg-white border border-foreground/5 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group min-h-[200px]">
            <div className="flex justify-between items-start mb-5">
              <div className="text-3xl group-hover:scale-110 transition-transform origin-top-left">{evt.icon}</div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30 bg-foreground/[0.03] px-2.5 py-1 rounded-full">
                {evt.freq}
              </span>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-2">{evt.title}</h4>
              <p className="font-mono text-[11px] text-foreground/40 leading-relaxed">{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
