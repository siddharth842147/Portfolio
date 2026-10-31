import {
  Binary,
  BookOpen,
  Bot,
  Boxes,
  Code2,
  Cpu,
  CreditCard,
  Database,
  FileText,
  GitBranch,
  Layers,
  Layout,
  Network,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon } from './Icons';

// Icon mapping helper
const iconMap = {
  Code2,
  Terminal,
  Cpu,
  Binary,
  Database,
  Layout,
  Boxes,
  Server,
  Network,
  Sparkles,
  Layers,
  GitBranch,
  Github: GithubIcon,
  Send,
  Code: Code2,
  Bot,
  BookOpen,
  CreditCard,
  FileText,
  ShieldCheck,
};

/**
 * SkillsSection (Scene 3)
 * Interactive categorized technology matrix with real-time category filtering,
 * hover glow interactions, and mastery badges.
 */
export default function SkillsSection() {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState(0);

  const activeCategory = categories[selectedCategory] || categories[0];

  return (
    <section
      id="skills"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-24 z-10 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SECTOR 03 // TECH STACK & CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            TECH SPECTRUM & <span className="gradient-text-cyan-violet">AI ARSENAL</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Production-grade competencies across modern web architecture, algorithmic computing, and next-gen AI developer tooling.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'glass-panel-cyan text-cyan-300 border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-105'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.name} ({cat.skills.length})
              </button>
            );
          })}
        </div>

        {/* Active Category Skill Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {activeCategory.skills.map((skill, i) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="group glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,240,255,0.15)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 group-hover:bg-cyan-950/20 transition-all">
                    <IconComponent className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-cyan-300/90 border border-cyan-400/20">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="w-full h-1 bg-slate-800/80 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{
                        width:
                          skill.level === 'Expert'
                            ? '95%'
                            : skill.level === 'Advanced' || skill.level === 'Power User'
                            ? '85%'
                            : '70%',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Stack Banner */}
        <div className="mt-8 glass-panel p-4 rounded-2xl border border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-xs text-white block">
                AI-Accelerated Development Workflow
              </span>
              <span className="font-sans text-xs text-slate-400 block">
                Leveraging Claude, Cursor, Codex, and Amazon Q (Kiro) for accelerated prototyping and verified system reliability.
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-400/30">
            10x Velocity
          </span>
        </div>
      </div>
    </section>
  );
}
