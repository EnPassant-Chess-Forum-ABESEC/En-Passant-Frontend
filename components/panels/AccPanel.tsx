import Image from "next/image";

export default function AccPanel() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-center gap-8 pt-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-4">
              Flagship Tournament
            </p>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-foreground leading-[0.95] mb-6">
              The ABES Chess<br />
              <span className="text-accent italic">Championship.</span>
            </h2>
            <p className="font-mono text-sm text-foreground/50 leading-relaxed max-w-lg mb-8">
              A grueling two-day classical event that tests preparation, endurance, and nerve.
              Nine rounds of Swiss-system play. FIDE-rated. No shortcuts, no second chances —
              every tempo matters.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: "Next Edition", value: "March 15–16, 2026", sub: "ABESEC Main Auditorium" },
                { label: "Format", value: "9-Round Swiss", sub: "FIDE Rated Classical (90+30)" },
                { label: "Reigning Champion", value: "IM Aryan Singh", sub: "ACC 2025 — 8/9 points" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-foreground/5 rounded-full flex items-center justify-center font-mono text-xs font-bold text-accent shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">{item.label}</div>
                    <div className="font-serif text-lg font-bold text-foreground">{item.value}</div>
                    <div className="font-mono text-[11px] text-foreground/40">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-accent text-white font-mono text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-accent/90 active:scale-95 transition-all shadow-lg">
              Register Now
            </button>
          </div>

          <div className="w-64 h-80 md:w-80 md:h-96 relative shrink-0">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl rotate-2 overflow-hidden">
              <Image
                src="/images/pixel-trophy.png"
                alt="Pixel art chess trophy"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Past Editions */}
      <section className="py-20 border-t border-foreground/10">
        <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Past Editions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: "2025", winner: "IM Aryan Singh", score: "8/9", participants: "128" },
            { year: "2024", winner: "Rahul Sharma", score: "7.5/9", participants: "96" },
            { year: "2023", winner: "Vikram Mehta", score: "7/9", participants: "64" },
          ].map((e, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-foreground/5">
              <div className="font-serif text-4xl font-bold text-foreground mb-2">{e.year}</div>
              <div className="font-serif text-lg font-bold text-foreground">{e.winner}</div>
              <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider mt-1">
                {e.score} pts · {e.participants} players
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
