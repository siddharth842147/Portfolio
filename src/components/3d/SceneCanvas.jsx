import { Canvas } from '@react-three/fiber';
import { Suspense, memo } from 'react';
import CameraRig from './CameraRig';
import DeveloperUniverse from './DeveloperUniverse';

/**
 * SceneCanvas
 * Fixed fullscreen WebGL Canvas hosting the 3D Developer Universe
 * and CameraRig driven by scroll progress.
 */
function SceneCanvas({ scrollProgress = 0, isMobile = false }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070D]">
      <Canvas
        camera={{
          position: [0, 0.4, 22],
          fov: isMobile ? 65 : 50,
          near: 0.1,
          far: 60,
        }}
        dpr={[1, typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <CameraRig scrollProgress={scrollProgress} isMobile={isMobile} />
          <DeveloperUniverse isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default memo(SceneCanvas);
