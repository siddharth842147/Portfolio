import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * Futuristic cyber cursor with smooth trailing dot and reactive hover expansion.
 * Automatically disabled on touch screens and mobile viewports.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .tilt-card, .interactive');
      setIsHovered(!!isInteractive);
    };

    // Smooth physics loop for the outer trailing ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', checkHoverable, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHoverable);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Central Cyber Core Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-cyan-400 rounded-full pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-0' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Floating Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 border transition-all duration-200 ease-out -ml-4 -mt-4 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-cyan-400 bg-cyan-400/15 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
            : 'w-8 h-8 border-cyan-400/50 bg-cyan-400/5'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
