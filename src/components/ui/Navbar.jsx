import { Download, FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

/**
 * Navbar
 * Sleek sticky glassmorphism header with section links,
 * active indicator, mobile drawer, and resume CTA.
 */
export default function Navbar({ activeSection = 0, onNavigate, onViewResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Hero', index: 0, id: 'hero' },
    { label: 'About', index: 1, id: 'about' },
    { label: 'Skills', index: 2, id: 'skills' },
    { label: 'Experience', index: 3, id: 'experience' },
    { label: 'Projects', index: 4, id: 'projects' },
    { label: 'Contact', index: 5, id: 'contact' },
  ];

  const handleNavClick = (index, id) => {
    onNavigate?.(index, id);
    setMobileOpen(false);
  };

  const handleResumeClick = () => {
    onViewResume?.();
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Brand Monogram */}
        <button
          onClick={() => handleNavClick(0, 'hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="font-display font-black text-lg text-cyan-400 group-hover:scale-110 transition-transform">
              S
            </span>
          </div>
          <div>
            <span className="font-display font-bold text-sm tracking-tight text-white block">
              SIDDHARTH HM
            </span>
            <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest block uppercase">
              Full-Stack Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.index;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.index, link.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-400/30" />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handleResumeClick}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-200 cursor-pointer active:scale-95"
            title="Preview Resume"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            download="Siddharth_HM_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/60 border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-200 cursor-pointer"
            title="Download PDF Resume"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.index;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.index, link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-mono tracking-wider transition-colors ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                0{link.index + 1} // {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={handleResumeClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/20 border border-cyan-400/30 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Preview Full Resume</span>
            </button>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Siddharth_HM_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono text-slate-300 bg-slate-900/60 border border-white/10"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
