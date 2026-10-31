import { ArrowUp, Heart, Terminal } from 'lucide-react';

/**
 * Footer
 * Minimalist tech footer with system telemetry and quick return to top.
 */
export default function Footer({ onScrollTop }) {
  return (
    <footer className="relative z-10 px-4 sm:px-8 py-8 border-t border-white/10 glass-panel mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">SYSTEM TELEMETRY: ALL 3D HIGHWAYS NOMINAL</span>
        </div>

        <div className="text-center sm:text-right">
          <span>Siddharth HM © {new Date().getFullYear()} • Bangalore, India</span>
        </div>

        <button
          onClick={onScrollTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all cursor-pointer"
        >
          <span>Sector 01</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
