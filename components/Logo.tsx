export default function Logo() {
  return (
    <div className="fixed top-8 left-8 z-[80] flex items-center gap-2.5 select-none">
      <span className="text-2xl" aria-hidden="true">♞</span>
      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-foreground">
        EnPassant
      </span>
    </div>
  );
}
