'use client';


import { recruitmentConfig } from '../../lib/config/recruitment';
import RevealSection from '../../components/RevealSection';
import { useRecruitmentTransition } from '../../context/TransitionContext';

export default function RecruitmentPage() {
  const { hasJustTransitioned } = useRecruitmentTransition() || {};
  const heroBaseAnim = hasJustTransitioned ? 'opacity-[0.15] motion-safe:animate-resolve-up' : 'opacity-0 motion-safe:animate-reveal-up';
  
  const forumTasks = [
    {
      title: "TOURNAMENTS",
      desc: "Plan and execute chess tournaments across campus.",
      coord: "A1"
    },
    {
      title: "COMMUNITY",
      desc: "Moderate and support a community of 400+ chess enthusiasts.",
      coord: "B2"
    },
    {
      title: "OPERATIONS",
      desc: "Handle registrations, pairings, venues, schedules, and event flow.",
      coord: "C3"
    },
    {
      title: "CREATIVE",
      desc: "Build the visual identity, coverage, and communication around events.",
      coord: "D4"
    },
    {
      title: "CHESS",
      desc: "Create puzzles, formats, analysis, and competitive experiences.",
      coord: "E5"
    },
    {
      title: "CONTINUITY",
      desc: "Pass knowledge forward so every new team can build on the last.",
      coord: "F6"
    }
  ];

  const applicantQualities = [
    "care about chess at ABESEC",
    "want to organize real events",
    "enjoy working with teams",
    "want to build something beyond the classroom",
    "bring skills or a willingness to learn"
  ];

  const applicantRoles = [
    "organizers", "designers", "developers", "writers", 
    "photographers", "editors", "managers", "chess players", "problem solvers"
  ];

  const recruitmentProcess = [
    {
      step: "01",
      title: "APPLY",
      desc: "Complete the Forum application."
    },
    {
      step: "02",
      title: "WE REVIEW",
      desc: "The current team reviews your interests, experience, and responses."
    },
    {
      step: "03",
      title: "THE TASK",
      desc: "Selected applicants receive a task based on their interests and strengths."
    },
    {
      step: "04",
      title: "INTERACTION",
      desc: "Shortlisted applicants move to the next interaction or discussion stage."
    },
    {
      step: "05",
      title: "THE TEAM",
      desc: "Final selections become part of the next EnPassant Chess Forum team."
    }
  ];

  return (
    <main className="min-h-screen relative border-x border-border-primary max-w-[1600px] mx-auto bg-surface-primary pb-24">
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-24 border-b border-border-primary relative bg-surface-primary">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start">
          <span className={`font-mono text-xs text-text-secondary tracking-[0.2em] uppercase mb-6 block border border-border-primary px-4 py-2 motion-reduce:opacity-100 ${heroBaseAnim} motion-safe:[animation-delay:0ms]`}>
            [RECRUITMENT // {recruitmentConfig.year}]
          </span>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-mono text-text-primary uppercase tracking-tight leading-none mb-8 motion-reduce:opacity-100 ${heroBaseAnim} motion-safe:[animation-delay:150ms]`}>
            THE NEXT MOVE<br />IS YOURS.
          </h1>
          <p className={`font-mono text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed uppercase tracking-wider mb-12 motion-reduce:opacity-100 ${heroBaseAnim} motion-safe:[animation-delay:250ms]`}>
            EnPassant Chess Forum is looking for the next group of students who will help organize, moderate, and grow chess at ABESEC.
          </p>
          
          <div className={`flex flex-col md:flex-row gap-8 md:gap-16 border-l border-border-primary pl-6 md:pl-10 mb-16 motion-reduce:opacity-100 ${heroBaseAnim} motion-safe:[animation-delay:350ms]`}>
            <div className={`motion-reduce:opacity-100 ${hasJustTransitioned ? 'opacity-[0.15] motion-safe:animate-fade-in' : 'opacity-0 motion-safe:animate-fade-in'} motion-safe:[animation-delay:400ms]`}>
              <span className="font-mono text-[10px] text-text-secondary tracking-widest block mb-1">STATUS</span>
              <span className="font-mono text-sm text-text-primary tracking-widest uppercase font-bold">APPLICATIONS OPEN</span>
            </div>
            <div className={`motion-reduce:opacity-100 ${hasJustTransitioned ? 'opacity-[0.15] motion-safe:animate-fade-in' : 'opacity-0 motion-safe:animate-fade-in'} motion-safe:[animation-delay:500ms]`}>
              <span className="font-mono text-[10px] text-text-secondary tracking-widest block mb-1">FOR</span>
              <span className="font-mono text-sm text-text-primary tracking-widest uppercase font-bold">ABESEC STUDENTS</span>
            </div>
            <div className={`motion-reduce:opacity-100 ${hasJustTransitioned ? 'opacity-[0.15] motion-safe:animate-fade-in' : 'opacity-0 motion-safe:animate-fade-in'} motion-safe:[animation-delay:600ms]`}>
              <span className="font-mono text-[10px] text-text-secondary tracking-widest block mb-1">COMMUNITY</span>
              <span className="font-mono text-sm text-text-primary tracking-widest uppercase font-bold">400+ MEMBERS</span>
            </div>
          </div>
          
          <div className={`bg-surface-secondary text-text-on-dark border border-[rgba(0,0,0,0.1)] p-8 md:p-12 w-full max-w-2xl relative overflow-hidden group motion-reduce:opacity-100 ${heroBaseAnim} motion-safe:[animation-delay:700ms]`}>
            <div className="relative z-10 flex flex-col items-start gap-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-text-on-dark/70">
                {recruitmentConfig.isOpen ? 'RECRUITMENT IS OPEN' : 'RECRUITMENT IS CLOSED'}
              </span>
              <div className="bg-surface-primary text-text-primary border border-[rgba(0,0,0,0.1)] px-8 py-4 w-full cursor-not-allowed transition-colors hover:bg-board-active hover:text-text-on-active">
                <span className="font-mono text-sm tracking-widest uppercase block text-center opacity-80">
                  APPLICATION FORM COMING NEXT PHASE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 - COMMUNITY != FORUM */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-24 border-b border-border-primary bg-surface-secondary text-text-on-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-tight text-text-on-dark mb-12 text-center md:text-left">
            EVERY FORUM MEMBER IS PART OF THE COMMUNITY.<br/>
            <span className="text-text-on-dark/70">NOT EVERY COMMUNITY MEMBER IS PART OF THE FORUM.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-primary border border-border-primary">
            <div className="chess-cell-dark p-8 md:p-12 relative group opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:150ms] motion-reduce:opacity-100">
              <div className="coord-marker">[C1]</div>
              <h3 className="font-mono text-2xl uppercase tracking-widest mb-6 cell-text-primary">THE COMMUNITY</h3>
              <ul className="font-mono text-xs leading-relaxed uppercase tracking-wide cell-text-secondary space-y-4">
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> open to ABESEC students</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> 400+ people connected through chess</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> play & compete</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> learn & discuss</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> enjoy the game</li>
              </ul>
            </div>
            <div className="chess-cell-light p-8 md:p-12 relative group opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:300ms] motion-reduce:opacity-100">
              <div className="coord-marker">[F1]</div>
              <h3 className="font-mono text-2xl uppercase tracking-widest mb-6 cell-text-primary">THE FORUM</h3>
              <ul className="font-mono text-xs leading-relaxed uppercase tracking-wide cell-text-secondary space-y-4">
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> the organizing and moderating team</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> organizes events & activities</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> supports the community</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> maintains continuity</li>
                <li><span className="opacity-50 mr-2" aria-hidden="true">-</span> recruits a selected working team</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 02 - WHAT THE FORUM DOES */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-24 border-b border-border-primary bg-surface-primary">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase mb-4 block">02 // OPERATIONS</span>
            <h2 className="text-4xl md:text-5xl font-mono uppercase tracking-tight text-text-primary">What the Forum Does</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-primary border border-border-primary">
            {forumTasks.map((task, i) => (
              <div key={i} className="chess-cell-dark interactive-active p-8 relative group opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100" style={{ animationDelay: `${150 * (i + 1)}ms` }}>
                <div className="coord-marker">[{task.coord}]</div>
                <h3 className="font-mono text-xl uppercase tracking-widest mb-4 cell-text-primary">{task.title}</h3>
                <p className="font-mono text-xs leading-relaxed uppercase tracking-wide cell-text-secondary">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 03 - WHO SHOULD APPLY */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-24 border-b border-border-primary bg-surface-primary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase mb-4 block">03 // QUALIFICATIONS</span>
            <h2 className="text-4xl md:text-5xl font-mono uppercase tracking-tight text-text-primary mb-8 leading-tight">
              You do not need to be the strongest chess player in the room.
            </h2>
            <div className="space-y-4">
              {applicantQualities.map((q, i) => (
                <div key={i} className="font-mono text-xs uppercase tracking-wider text-text-secondary flex items-start gap-4 opacity-0 motion-safe:animate-reveal-up motion-reduce:opacity-100" style={{ animationDelay: `${150 + (100 * i)}ms` }}>
                  <span className="text-text-primary mt-1" aria-hidden="true">✓</span>
                  <p>{q}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="chess-cell-dark interactive-active p-8 md:p-12 border border-border-primary flex flex-col justify-center opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:650ms] motion-reduce:opacity-100">
            <p className="font-mono text-[10px] tracking-widest mb-6 cell-text-secondary">WE ARE LOOKING FOR:</p>
            <div className="flex flex-wrap gap-3">
              {applicantRoles.map((role, i) => (
                <span key={i} className="font-mono text-xs uppercase tracking-widest border px-3 py-1 cell-text-primary cell-border bg-black/20 opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100" style={{ animationDelay: `${800 + (50 * i)}ms` }}>
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 04 - RECRUITMENT PROCESS */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-24 border-b border-border-primary bg-surface-primary">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase mb-4 block">04 // TIMELINE</span>
            <h2 className="text-4xl md:text-5xl font-mono uppercase tracking-tight text-text-primary">Recruitment Process</h2>
          </div>
          
          <div className="flex flex-col gap-px bg-border-primary border border-border-primary">
            {recruitmentProcess.map((step, i) => (
              <div key={i} className="chess-cell-dark p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 group relative opacity-0 motion-safe:animate-reveal-up motion-reduce:opacity-100" style={{ animationDelay: `${150 * (i + 1)}ms` }}>
                <span className="font-mono text-3xl font-bold text-text-secondary opacity-40 w-16 group-hover:opacity-100 transition-opacity">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-mono text-xl uppercase tracking-widest mb-2 cell-text-primary">{step.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-wide cell-text-secondary">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 05 - APPLICATION AND ACCOUNT MODEL */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-24 border-b border-border-primary bg-surface-secondary text-text-on-dark text-center md:text-left">
        <div className="max-w-3xl mx-auto chess-cell-dark border border-border-primary p-8 md:p-12 relative group opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:150ms] motion-reduce:opacity-100">
          <div className="coord-marker">[H8]</div>
          <h2 className="text-2xl font-mono uppercase tracking-tight cell-text-primary mb-6">About the Application</h2>
          <div className="space-y-4 font-mono text-xs leading-relaxed uppercase tracking-wider cell-text-secondary">
            <p>
              Applying to the Forum will automatically create an EnPassant account if you don&apos;t already have one, ensuring you don&apos;t need to enter profile information twice.
            </p>
            <p>
              Please note that your application status and your general Forum account are separate. Submitting an application enters you into the recruitment process; it does not automatically make you a Forum member.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 06 - FINAL CTA */}
      <RevealSection className="px-6 md:px-12 lg:px-24 py-32 bg-surface-inverse text-center relative" animationClass="motion-safe:animate-reveal-up">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-mono uppercase tracking-tight text-text-inverse mb-12 leading-none">
            THE BOARD DOESN&apos;T<br/>MOVE ITSELF.
          </h2>
          
          <div className="font-mono text-sm uppercase tracking-widest text-text-inverse/70 space-y-3 mb-16">
            <p className="opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:150ms] motion-reduce:opacity-100">Someone plans the tournament.</p>
            <p className="opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:300ms] motion-reduce:opacity-100">Someone creates the pairings.</p>
            <p className="opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:450ms] motion-reduce:opacity-100">Someone designs the poster.</p>
            <p className="opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:600ms] motion-reduce:opacity-100">Someone manages the room.</p>
            <p className="opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:750ms] motion-reduce:opacity-100">Someone keeps the community alive.</p>
            <p className="text-text-inverse mt-8 pt-8 border-t border-[rgba(0,0,0,0.1)] opacity-0 motion-safe:animate-reveal-up motion-safe:[animation-delay:900ms] motion-reduce:opacity-100">THE NEXT SOMEONE COULD BE YOU.</p>
          </div>

          <div className="bg-surface-secondary border border-[rgba(0,0,0,0.1)] p-8 md:p-12 w-full max-w-xl opacity-0 motion-safe:animate-fade-in motion-safe:[animation-delay:1050ms] motion-reduce:opacity-100">
             <div className="bg-surface-primary text-text-primary border border-[rgba(0,0,0,0.1)] px-8 py-4 w-full cursor-not-allowed transition-colors hover:bg-board-active hover:text-text-on-active">
               <span className="font-mono text-sm tracking-widest uppercase block text-center opacity-80">
                 APPLICATION FORM COMING NEXT PHASE
               </span>
             </div>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
