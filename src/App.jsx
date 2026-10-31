import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useCallback, useEffect, useRef, useState } from 'react';

// 3D Scene Container
import SceneCanvas from './components/3d/SceneCanvas';

// UI Overlays
import AboutSection from './components/ui/AboutSection';
import ContactSection from './components/ui/ContactSection';
import CustomCursor from './components/ui/CustomCursor';
import ExperienceSection from './components/ui/ExperienceSection';
import Footer from './components/ui/Footer';
import HeroSection from './components/ui/HeroSection';
import IntroLoader from './components/ui/IntroLoader';
import Navbar from './components/ui/Navbar';
import ProjectsSection from './components/ui/ProjectsSection';
import ResumeModal from './components/ui/ResumeModal';
import ScrollProgress from './components/ui/ScrollProgress';
import SkillsSection from './components/ui/SkillsSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const lenisRef = useRef(null);
  const sectionsRef = useRef([]);

  // Check viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize Lenis Smooth Scroll & GSAP ScrollTrigger Integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      const progress = e.progress; // 0 to 1
      setScrollProgress(progress);

      // Map progress to active section (0 - 5)
      if (progress < 0.16) {
        setActiveSection(0);
      } else if (progress < 0.35) {
        setActiveSection(1);
      } else if (progress < 0.54) {
        setActiveSection(2);
      } else if (progress < 0.72) {
        setActiveSection(3);
      } else if (progress < 0.90) {
        setActiveSection(4);
      } else {
        setActiveSection(5);
      }
    });

    // GSAP Ticker loop
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  // Smooth programmatic scroll navigation
  const navigateTo = useCallback((index, id) => {
    const targetElement = document.getElementById(id);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070D] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Intro Loader Sequence */}
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}

      {/* Futuristic Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Fixed 3D Developer Universe WebGL Canvas */}
      <SceneCanvas scrollProgress={scrollProgress} isMobile={isMobile} />

      {/* Top Glassmorphic Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={navigateTo}
        onViewResume={() => setResumeOpen(true)}
      />

      {/* Right HUD Scroll Telemetry & Waypoints */}
      <ScrollProgress
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onNavigate={navigateTo}
      />

      {/* Scrollable DOM Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Scene 1: Hero */}
        <HeroSection
          onExplore={() => navigateTo(1, 'about')}
          onContact={() => navigateTo(5, 'contact')}
          onViewResume={() => setResumeOpen(true)}
        />

        {/* Scene 2: About */}
        <AboutSection />

        {/* Scene 3: Skills */}
        <SkillsSection />

        {/* Scene 4: Experience */}
        <ExperienceSection />

        {/* Scene 5: Projects */}
        <ProjectsSection />

        {/* Scene 6: Contact & Resume */}
        <ContactSection onViewResume={() => setResumeOpen(true)} />
      </main>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Sleek Tech Footer */}
      <Footer onScrollTop={() => navigateTo(0, 'hero')} />
    </div>
  );
}
