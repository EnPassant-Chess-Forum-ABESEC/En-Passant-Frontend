interface ProgressIndicatorProps {
  total: number;
  current: number;
}

const NAV_ITEMS = [
  { glyph: "♙", label: "2ND RANK" },
  { glyph: "♛", label: "HOME" },
  { glyph: "♔", label: "COMMUNITY" },
  { glyph: "♗", label: "ACC" },
  { glyph: "♞", label: "EVENTS" },
  { glyph: "♜", label: "8TH RANK" },
];

export default function ProgressIndicator({ total, current }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-gray-300/60 bg-[#E8E8E6]/90 backdrop-blur-sm">
      {NAV_ITEMS.slice(0, total).map((item, i) => {
        const isCurrent = i === current;

        return (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`transition-all duration-500 text-xl ${
                isCurrent ? "text-accent scale-125" : "text-foreground/30"
              }`}
            >
              {item.glyph}
            </div>
            <span
              className={`font-mono text-[9px] font-bold uppercase tracking-widest transition-colors duration-500 hidden md:block ${
                isCurrent ? "text-accent" : "text-foreground/20"
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
