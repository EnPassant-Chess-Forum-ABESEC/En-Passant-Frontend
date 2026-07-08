export default function Logo() {
  return (
    <div className="fixed bottom-8 left-8 z-40 flex items-center gap-2 pointer-events-none">
      <div className="w-8 h-8 bg-ep-black text-ep-white rounded-sm flex items-center justify-center">
        {/* Simple pawn SVG inline */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2a3 3 0 0 0-3 3c0 1.1.6 2.05 1.5 2.6L9 11v1h6v-1l-1.5-3.4c.9-.55 1.5-1.5 1.5-2.6a3 3 0 0 0-3-3zM8 14v2h8v-2H8zm-1 4v2h10v-2H7z" />
        </svg>
      </div>
      <span className="font-mono text-sm tracking-widest uppercase font-bold text-ep-black">
        EnPassant
      </span>
    </div>
  );
}
