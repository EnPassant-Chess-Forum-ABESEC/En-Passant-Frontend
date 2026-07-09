export default function Logo() {
  return (
    <div className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-4 pointer-events-none">
      {/* 4x4 chessboard mark */}
      <div className="grid grid-cols-2 grid-rows-2 w-8 h-8 border border-ep-border bg-ep-bg shadow-sm">
        <div className="bg-ep-accent/20"></div>
        <div className="bg-transparent"></div>
        <div className="bg-transparent"></div>
        <div className="bg-ep-accent/20"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-ep-black drop-shadow-md">
          EnPassant
        </span>
        <span className="font-mono text-[9px] tracking-widest text-ep-gray uppercase drop-shadow-md">
          Abesec Chess Forum
        </span>
      </div>
    </div>
  );
}

