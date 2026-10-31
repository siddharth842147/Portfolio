import { useEffect, useState } from 'react';

/**
 * IntroLoader
 * Cinematic sci-fi opening title sequence ("SIDDHARTH HM" reveal with neon glow
 * and camera push-in effect), followed by seamless dissolve into the 3D world.
 */
export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('INITIALIZING CORE ENGINE...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const bootSequence = [
      { at: 20, text: 'LOADING 3D SPLINE TRAJECTORY...' },
      { at: 45, text: 'CONFIGURING NEON LIGHT HIGHWAYS...' },
      { at: 70, text: 'CALIBRATING MERN & AI DATA NODES...' },
      { at: 90, text: 'WARPING INTO DEVELOPER UNIVERSE...' },
      { at: 100, text: 'SYSTEM ONLINE.' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 350);
          setTimeout(() => onComplete?.(), 950);
          return 100;
        }
        const next = prev + 2;
        const matchingStep = bootSequence.find((s) => s.at <= next && s.at > prev);
        if (matchingStep) {
          setBootText(matchingStep.text);
        }
        return next;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070D] transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl">
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-2xl glass-panel-cyan flex items-center justify-center mb-6 border border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.3)] animate-pulse">
          <span className="font-display text-2xl font-black text-cyan-400">S</span>
        </div>

        {/* Cinematic Title Reveal */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
          SIDDHARTH <span className="gradient-text-cyan-violet">HM</span>
        </h1>

        <p className="text-xs uppercase tracking-[0.28em] text-cyan-400/80 font-mono mb-8">
          Full-Stack Developer • ISE Student • AI Engineer
        </p>

        {/* Sci-Fi Progress Bar */}
        <div className="w-72 sm:w-80 h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-3 border border-slate-700/50 p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-75 shadow-[0_0_15px_rgba(0,240,255,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Status Line */}
        <div className="flex items-center justify-between w-72 sm:w-80 text-[11px] font-mono text-slate-400">
          <span className="text-cyan-300">{bootText}</span>
          <span className="font-semibold text-slate-300">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
