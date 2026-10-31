import { BookOpen, Brain, Code, Cpu, Database, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * AboutSection (Scene 2)
 * The Core Monolith: Educational credentials (B.E. ISE, 8.1 CGPA),
 * systems design philosophy, and core development focus areas.
 */
export default function AboutSection() {
  const { about, personal } = portfolioData;

  const pillars = [
    {
      icon: Code,
      title: 'Full-Stack MERN Architectures',
      desc: 'Building responsive React interfaces backed by secure Node/Express REST APIs and structured MongoDB schemas.',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-400/40',
    },
    {
      icon: Brain,
      title: 'AI & LLM Integration',
      desc: 'Integrating real-time AI tools, translation APIs, and automated intelligent workflows into web environments.',
      color: 'text-purple-400',
      border: 'hover:border-purple-400/40',
    },
    {
      icon: Database,
      title: 'Database Modeling & APIs',
      desc: 'Designing normalized SQL and NoSQL databases with optimized queries, indexing, and JWT authentication.',
      color: 'text-sky-400',
      border: 'hover:border-sky-400/40',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-24 z-10 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Monolith Card Bio */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>SECTOR 02 // ABOUT & BACKGROUND</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {about.headline}
            </h2>

            <div className="space-y-4 text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Education Highlight Grid */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-semibold text-xs sm:text-sm text-white block">
                      B.E. Information Science Engineering
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 block">
                      Jnana Vikas Institute of Technology (2023–2027)
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-xl glass-panel-cyan border border-cyan-400/30">
                  <span className="font-mono text-xs text-cyan-300 font-bold">
                    CGPA: 8.1 / 10
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-pink-500/15 border border-pink-400/30 text-pink-300">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-semibold text-xs sm:text-sm text-white block">
                      12th Standard (PCMC)
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 block">
                      Sri Vasavi PU College (March 2023)
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-xl glass-panel border border-pink-400/30">
                  <span className="font-mono text-xs text-pink-300 font-bold">
                    Score: 87.5%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className={`glass-panel p-5 rounded-2xl border border-white/10 ${pillar.border} transition-all duration-300 group hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Location & Availability Badge */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personal.location}
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ready to Deploy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
