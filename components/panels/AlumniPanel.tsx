import PersonCard from "@/components/PersonCard";

export default function AlumniPanel() {
  const alumni = [
    { name: "Vikram Mehta", role: "Founding President", tenure: "2020–2022", imagePlaceholder: "♔", bio: "Built the club from an idea into an institution." },
    { name: "Sneha Rao", role: "Vice President", tenure: "2021–2023", imagePlaceholder: "♕", bio: "Organized the first ACC. 1900+ peak." },
    { name: "Aditya Verma", role: "Secretary", tenure: "2022–2024", imagePlaceholder: "♘", bio: "Grew membership from 30 to 150." },
  ];

  return (
    <>
      <section className="pt-8 mb-12">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">
          Alumni
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
          The Promoted<br />
          <span className="italic text-foreground/50">8th Rank.</span>
        </h2>
        <p className="font-mono text-sm text-foreground/40 max-w-lg">
          A pawn that reaches the 8th rank earns promotion — it becomes something greater than what it started as.
          These members served, built, and carried the forum forward. They reached their 8th rank.
        </p>
      </section>

      <div className="flex flex-row justify-center flex-wrap gap-10 md:gap-16 pb-16">
        {alumni.map((a, i) => (
          <PersonCard key={i} {...a} variant="alumni" />
        ))}
      </div>
    </>
  );
}
