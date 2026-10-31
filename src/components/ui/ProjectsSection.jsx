import { CheckCircle, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon } from './Icons';

/**
 * 3D Tilt Project Card
 * Reactively tilts based on mouse position within the card bounds.
 */
function ProjectTiltCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const accentConfig = {
    cyan: {
      border: 'hover:border-cyan-400/50',
      glow: 'bg-cyan-500',
      badge: 'bg-cyan-950/40 text-cyan-300 border-cyan-400/30',
      pulse: 'bg-cyan-400 animate-pulse',
      icon: 'text-cyan-400',
      btn: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]',
    },
    pink: {
      border: 'hover:border-pink-400/50',
      glow: 'bg-pink-500',
      badge: 'bg-pink-950/40 text-pink-300 border-pink-400/30',
      pulse: 'bg-pink-400 animate-pulse',
      icon: 'text-pink-400',
      btn: 'bg-pink-500 text-white hover:bg-pink-400 shadow-[0_0_20px_rgba(244,63,94,0.35)]',
    },
    violet: {
      border: 'hover:border-purple-400/50',
      glow: 'bg-purple-500',
      badge: 'bg-purple-950/40 text-purple-300 border-purple-400/30',
      pulse: 'bg-purple-400 animate-pulse',
      icon: 'text-purple-400',
      btn: 'bg-purple-500 text-white hover:bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]',
    },
  };

  const currentTheme = accentConfig[project.accent] || accentConfig.cyan;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between transition-transform duration-200 ease-out relative overflow-hidden group ${currentTheme.border}`}
    >
      {/* Background Accent Gradient Glow */}
      <div
        className={`absolute -right-20 -top-20 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40 ${currentTheme.glow}`}
      />

      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider border ${currentTheme.badge}`}
          >
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <span className={`w-2 h-2 rounded-full ${currentTheme.pulse}`} />
            <span>FEATURED</span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        <div className="mb-6 space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
            Key Architecture & Features:
          </span>
          {project.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle
                className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${currentTheme.icon}`}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-900/80 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-heading font-semibold transition-all duration-200 cursor-pointer ${currentTheme.btn}`}
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-slate-300 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Code</span>
        </a>
      </div>
    </div>
  );
}

/**
 * ProjectsSection (Scene 5)
 * Floating 3D holographic screens showcasing Siddharth's flagship applications:
 * Digital Library Management System, Kartiva E-Commerce, and AI Translator.
 */
export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-24 z-10 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full pointer-events-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SECTOR 05 // FEATURED SHIPMENTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            FLAGSHIP <span className="gradient-text-cyan-violet">ENGINEERING</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Interactive full-stack deployments solving complex logistics, real-time multilingual processing, and payment integration.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectTiltCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
