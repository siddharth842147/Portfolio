import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * CameraRig
 * Smoothly interpolates the Three.js camera along a 3D Catmull-Rom spline
 * mapped 1:1 with Lenis/GSAP scroll progress, with subtle mouse parallax.
 */
export default function CameraRig({ scrollProgress = 0, isMobile = false }) {
  const { camera } = useThree();
  const currentProgress = useRef(0);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Camera waypoint spline path (6 major scenes)
  const cameraCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.4, 22),       // Scene 1: Hero (elevated frontal perspective)
      new THREE.Vector3(3.2, 0.8, 14),     // Scene 2: About (banking to the right around Monolith)
      new THREE.Vector3(-2.8, -0.2, 5),    // Scene 3: Skills (sweeping left into orbit cluster)
      new THREE.Vector3(2.2, 1.2, -6),     // Scene 4: Experience (riding above data highway)
      new THREE.Vector3(-2.5, 0.2, -18),   // Scene 5: Projects (approaching floating portals)
      new THREE.Vector3(0, 0.8, -30),      // Scene 6: Contact & Beacon (converging on nexus)
    ], false, 'catmullrom', 0.5);
  }, []);

  // LookAt target spline path
  const targetCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),          // Target 1: Origin / Hero core
      new THREE.Vector3(0.5, 0.3, 11),     // Target 2: Monolith core
      new THREE.Vector3(0, -0.1, 3),       // Target 3: Skills cluster center
      new THREE.Vector3(0, 0.2, -8),       // Target 4: Data highway axis
      new THREE.Vector3(0, 0, -20),        // Target 5: Project display center
      new THREE.Vector3(0, 0.5, -34),      // Target 6: Transmission beacon core
    ], false, 'catmullrom', 0.5);
  }, []);

  // Mouse move listener for parallax
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useFrame((_, delta) => {
    // Smooth lerp scroll progress for cinematic momentum
    const lerpFactor = Math.min(delta * 4.5, 1);
    currentProgress.current = THREE.MathUtils.lerp(
      currentProgress.current,
      scrollProgress,
      lerpFactor
    );

    // Smooth lerp mouse parallax
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, mouse.current.targetX, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, mouse.current.targetY, 0.05);

    // Clamp progress safely between 0.001 and 0.999
    const clampedProgress = THREE.MathUtils.clamp(currentProgress.current, 0.0001, 0.9999);

    // Compute spline positions
    const targetCamPos = cameraCurve.getPointAt(clampedProgress);
    const targetLookAt = targetCurve.getPointAt(clampedProgress);

    // Apply gentle mouse parallax offset
    const parallaxIntensity = isMobile ? 0 : 0.45;
    targetCamPos.x += mouse.current.x * parallaxIntensity;
    targetCamPos.y += mouse.current.y * (parallaxIntensity * 0.5);

    camera.position.copy(targetCamPos);
    camera.lookAt(targetLookAt);
  });

  return null;
}
