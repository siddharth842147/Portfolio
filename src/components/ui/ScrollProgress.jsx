/**
 * ScrollProgress
 * Right-side HUD telemetry bar showing current scene index (01 - 06),
 * vertical progress indicator, and clickable scene jump markers.
 */
export default function ScrollProgress({ activeSection = 0, scrollProgress = 0, onNavigate }) {
  const scenes = [
    { label: 'HERO', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
      {/* Telemetry Box */}
      <div className="glass-panel px-3 py-2 rounded-xl text-right mb-2 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-[10px] text-cyan-400 block tracking-widest uppercase">
          SECTOR 0{activeSection + 1}
        </span>
        <span className="font-display font-bold text-xs tracking-wider text-slate-200">
          {scenes[activeSection]?.label}
        </span>
      </div>

      {/* Vertical Waypoint Spine */}
      <div className="relative flex flex-col items-center gap-4 py-2 px-1">
        {/* Background track line */}
        <div className="absolute top-2 bottom-2 w-px bg-white/10" />

        {/* Dynamic Glowing Progress Indicator line */}
        <div
          className="absolute top-2 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full transition-all duration-75 shadow-[0_0_10px_rgba(0,240,255,0.7)]"
          style={{ height: `${Math.min(scrollProgress * 100, 100)}%` }}
        />

        {/* Waypoint Nodes */}
        {scenes.map((scene, idx) => {
          const isActive = activeSection === idx;
          return (
            <button
              key={scene.id}
              onClick={() => onNavigate?.(idx, scene.id)}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
              aria-label={`Jump to ${scene.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-6 px-2.5 py-1 rounded bg-slate-900/90 border border-white/10 text-[10px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                0{idx + 1} • {scene.label}
              </span>

              {/* Waypoint Dot */}
              <span
                className={`relative z-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3.5 h-3.5 bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.9)] ring-4 ring-cyan-400/20'
                    : 'w-2 h-2 bg-slate-600 group-hover:bg-cyan-300 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Progress Percentage */}
      <div className="font-mono text-[10px] text-slate-500 tracking-wider">
        {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}
