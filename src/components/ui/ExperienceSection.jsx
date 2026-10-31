import { BookOpen, Briefcase, Calendar, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * ExperienceSection (Scene 4)
 * The Glowing Data Highway: Milestone markers for Freelance Full-Stack,
 * Pinnacle Labs AI/ML Internship, and Information Science degree.
 */
export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-24 z-10 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto w-full pointer-events-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SECTOR 04 // EXPERIENCE & TRAJECTORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            MILESTONES & <span className="gradient-text-cyan-violet">IMPACT</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            A track record of customer-facing deliverables, AI model deployment, and rigorous academic foundations.
          </p>
        </div>

        {/* Chronological Milestone Spine */}
        <div className="relative pl-6 sm:pl-10 space-y-8">
          {/* Vertical Glowing Energy Spine Line */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-sky-400 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Waypoint Node Icon */}
              <div
                className="absolute -left-6 sm:-left-10 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-slate-950 border-2 transition-transform duration-300 group-hover:scale-125"
                style={{
                  borderColor: item.badgeColor,
                  boxShadow: `0 0 15px ${item.badgeColor}80`,
                }}
              >
                {idx === 3 ? (
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400" />
                ) : idx === 2 ? (
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                ) : idx === 1 ? (
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group-hover:-translate-y-1">
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <span className="font-heading font-medium text-sm text-slate-300">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/60 border border-white/5 hidden sm:inline-block">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 pt-3 border-t border-white/5">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 font-sans">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: item.badgeColor }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
