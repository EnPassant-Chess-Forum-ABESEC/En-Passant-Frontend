interface PersonCardProps {
  name: string;
  role: string;
  imagePlaceholder: string;
  variant: "current" | "alumni";
  rating?: string;
  tenure?: string;
  bio?: string;
}

export default function PersonCard({
  name,
  role,
  imagePlaceholder,
  variant,
  rating,
  tenure,
  bio,
}: PersonCardProps) {
  const isAlumni = variant === "alumni";

  return (
    <div
      className={`group flex flex-col items-center text-center transition-all duration-300 ${
        isAlumni ? "opacity-70 hover:opacity-100" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-32 h-32 md:w-40 md:h-40 rounded-full mb-5 flex items-center justify-center text-5xl md:text-6xl shadow-inner transition-all duration-500
          ${
            isAlumni
              ? "bg-gray-200 border-2 border-gray-300 grayscale group-hover:grayscale-0"
              : "bg-gray-100 border-4 border-white shadow-lg group-hover:scale-105"
          }
        `}
      >
        <span className={isAlumni ? "opacity-40" : "opacity-60"}>
          {imagePlaceholder}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight">
        {name}
      </h3>

      {/* Role */}
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-2">
        {role}
      </div>

      {/* Rating or tenure */}
      {rating && !isAlumni && (
        <div className="inline-flex items-center gap-1.5 bg-foreground text-white rounded-full px-3 py-1 text-xs font-mono font-bold mt-3">
          <span className="text-white/50">ELO</span>
          <span>{rating}</span>
        </div>
      )}

      {tenure && isAlumni && (
        <div className="inline-flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1 text-xs font-mono font-bold text-foreground/50 mt-3">
          {tenure}
        </div>
      )}

      {/* Bio */}
      {bio && (
        <p className="font-mono text-xs text-foreground/40 mt-3 max-w-[200px] leading-relaxed">
          {bio}
        </p>
      )}

      {/* Social icons */}
      {!isAlumni && (
        <div className="flex gap-3 mt-4 text-foreground/25 group-hover:text-foreground/50 transition-colors">
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Mail */}
          <a href="#" aria-label="Email">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
