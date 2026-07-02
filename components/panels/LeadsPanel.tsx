import PersonCard from "@/components/PersonCard";

export default function LeadsPanel() {
  const leads = [
    { name: "Rahul Sharma", role: "President", rating: "2150", imagePlaceholder: "♔", bio: "Najdorf main. 800+ rated games." },
    { name: "Ananya Patel", role: "Vice President", rating: "1980", imagePlaceholder: "♕", bio: "Positional grinder. QGD loyalist." },
    { name: "Karan Singh", role: "Treasurer", rating: "1850", imagePlaceholder: "♖", bio: "Endgame technician. Rook endings." },
    { name: "Priya Das", role: "Event Coordinator", rating: "1720", imagePlaceholder: "♗", bio: "Rapid specialist. French Defense." },
  ];

  return (
    <>
      <section className="pt-8 mb-12">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          Leadership
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
          The 2nd Rank.
        </h2>
        <p className="font-mono text-sm text-foreground/40 max-w-lg">
          In chess, the second rank is where the pieces stand that do the daily defending and building —
          the foundation everything else rests on. These are the people who hold the structure together.
        </p>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-16">
        {leads.map((lead, i) => (
          <PersonCard key={i} {...lead} variant="current" />
        ))}
      </div>
    </>
  );
}
