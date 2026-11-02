import { ChevronRight, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * HeroSection (Scene 1)
 * High-impact cinematic opening viewport with glowing title,
 * full-stack developer credentials, quick stats, and scroll cue.
 */
export default function HeroSection({ onExplore, onContact, onViewResume }) {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-12 z-10 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto">
        {/* Status Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-cyan border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>AVAILABLE FOR FULL STACK SOFTWARE ENGINEER ROLES • FRESHER</span>
        </div>

        {/* Display Name */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 uppercase">
          SIDDHARTH <span className="gradient-text-cyan-violet">HM</span>
        </h1>

        {/* Cinematic Tagline */}
        <div className="max-w-3xl mb-8">
          <p className="font-heading text-lg sm:text-2xl md:text-3xl font-medium text-slate-200 tracking-tight leading-snug">
            Full Stack Software Engineer <span className="text-cyan-400 font-semibold">(Fresher)</span> |{' '}
            <span className="text-cyan-300 font-semibold">React.js</span> •{' '}
            <span className="text-purple-400 font-semibold">Node.js</span> •{' '}
            <span className="text-slate-300 font-medium">REST APIs</span> •{' '}
            <span className="text-pink-400 font-semibold">AI & LLM Projects</span>
          </p>
        </div>

        {/* Quick Metric Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full mb-10">
          {personal.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel px-4 py-3 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all text-center"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                {stat.label}
              </span>
              <span className="font-heading font-bold text-sm text-cyan-300">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Explore 3D Universe</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewResume}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-cyan-300 glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </button>

          <button
            onClick={onContact}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white glass-panel border border-white/15 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Initiate Contact</span>
          </button>
        </div>

        {/* Scroll Cue Animation */}
        <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-400/80">
            Scroll to Travel Through Scenes
          </span>
          <div className="w-6 h-10 rounded-full border border-cyan-400/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
