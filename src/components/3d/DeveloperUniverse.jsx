import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * DeveloperUniverse
 * The continuous 3D world containing the light highway,
 * floating geometric shapes, glowing monoliths, and interactive beacons.
 */
export default function DeveloperUniverse({ isMobile = false }) {
  const highwayRef = useRef();
  const heroCoreRef = useRef();
  const monolithRef = useRef();
  const skillsGroupRef = useRef();
  const beaconRef = useRef();
  const particlesRef = useRef();

  // Procedural highway spline curve through 3D space
  const highwayCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -2, 26),
      new THREE.Vector3(1.5, -1.2, 17),
      new THREE.Vector3(-1.8, -0.8, 8),
      new THREE.Vector3(1.2, -0.6, -2),
      new THREE.Vector3(-1.4, -0.4, -13),
      new THREE.Vector3(1.0, -0.2, -23),
      new THREE.Vector3(0, 0, -35),
    ], false, 'catmullrom', 0.5);
  }, []);

  // Highway tube geometry
  const highwayGeometry = useMemo(() => {
    return new THREE.TubeGeometry(highwayCurve, 120, 0.12, 12, false);
  }, [highwayCurve]);

  // Ambient Starfield / Cyber Dust Particles
  const particleCount = isMobile ? 350 : 1200;
  const [particlePositions, particleColors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color('#00F0FF');
    const violet = new THREE.Color('#A855F7');
    const white = new THREE.Color('#FFFFFF');

    for (let i = 0; i < particleCount; i++) {
      // Scatter particles along a cylindrical volume following the Z axis
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70 - 5;

      // Color distribution
      const mixVal = Math.random();
      const chosenColor = mixVal < 0.5 ? cyan : mixVal < 0.85 ? violet : white;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    return [positions, colors];
  }, [particleCount]);

  // Orbiting Skills nodes configuration
  const skillNodes = useMemo(() => {
    const count = 10;
    const nodes = [];
    const radius = 3.2;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const yOffset = (i % 2 === 0 ? 0.7 : -0.7);
      nodes.push({
        position: [Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius],
        size: 0.28 + (i % 3) * 0.08,
        color: i % 2 === 0 ? '#00F0FF' : '#A855F7',
        speed: 0.4 + (i % 4) * 0.15,
      });
    }
    return nodes;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Rotate Hero Core
    if (heroCoreRef.current) {
      heroCoreRef.current.rotation.x = t * 0.3;
      heroCoreRef.current.rotation.y = t * 0.45;
    }

    // Rotate Monolith Rings
    if (monolithRef.current) {
      monolithRef.current.rotation.y = t * 0.2;
    }

    // Rotate Skills Orbit
    if (skillsGroupRef.current) {
      skillsGroupRef.current.rotation.y = t * 0.25;
      skillsGroupRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
    }

    // Pulse Transmission Beacon
    if (beaconRef.current) {
      beaconRef.current.rotation.y = -t * 0.4;
      const s = 1 + Math.sin(t * 2) * 0.08;
      beaconRef.current.scale.set(s, 1, s);
    }

    // Drift Particles gently
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} color="#00F0FF" />
      <directionalLight position={[-10, -10, -10]} intensity={0.6} color="#A855F7" />
      <pointLight position={[0, 4, 18]} intensity={2.0} color="#00F0FF" distance={20} />
      <pointLight position={[0, 2, -32]} intensity={3.5} color="#A855F7" distance={25} />

      {/* Atmospheric Fog */}
      <fog attach="fog" args={['#05070D', 8, 48]} />

      {/* Ambient Cyber Dust Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Glowing Energy Highway Tube */}
      <mesh ref={highwayRef} geometry={highwayGeometry}>
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00E5FF"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Highway Wireframe Glow Overlay */}
      <mesh geometry={highwayGeometry} scale={[1.05, 1.05, 1]}>
        <meshBasicMaterial
          color="#A855F7"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* ============================================================== */}
      {/* SCENE 1: HERO CORE (Z: ~17) */}
      {/* ============================================================== */}
      <group position={[0, 0, 17]}>
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <group ref={heroCoreRef}>
            {/* Outer Icosahedron Wireframe */}
            <mesh>
              <icosahedronGeometry args={[1.5, 1]} />
              <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.65} />
            </mesh>
            {/* Inner Solid Crystal */}
            <mesh>
              <octahedronGeometry args={[0.9, 0]} />
              <meshStandardMaterial
                color="#060914"
                emissive="#A855F7"
                emissiveIntensity={1.6}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>
          </group>
        </Float>
        {/* Floating Orbital Rings */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.5, 0.025, 16, 64]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3.2, 0.02, 16, 64]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* ============================================================== */}
      {/* SCENE 2: ABOUT MONOLITH (Z: ~10) */}
      {/* ============================================================== */}
      <group position={[1.4, 0, 10]}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
          {/* Glass Pillar Monolith */}
          <mesh>
            <boxGeometry args={[1.2, 3.8, 1.2]} />
            <meshStandardMaterial
              color="#070C1B"
              emissive="#00F0FF"
              emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.9}
              transparent
              opacity={0.85}
            />
          </mesh>
          {/* Inner Glowing Wireframe Core */}
          <mesh>
            <boxGeometry args={[0.8, 3.4, 0.8]} />
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
          </mesh>
        </Float>
        {/* Rotating Energy Rings around Monolith */}
        <group ref={monolithRef} position={[0, 0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.8, 0.03, 16, 64]} />
            <meshBasicMaterial color="#A855F7" transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
            <torusGeometry args={[2.3, 0.02, 16, 64]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.4} />
          </mesh>
        </group>
      </group>

      {/* ============================================================== */}
      {/* SCENE 3: SKILLS ORBITING CONSTELLATION (Z: ~3) */}
      {/* ============================================================== */}
      <group position={[0, 0, 3]}>
        {/* Central Quantum Node */}
        <mesh>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#080C1E"
            emissive="#00F0FF"
            emissiveIntensity={1.8}
            roughness={0.2}
          />
        </mesh>
        {/* Rotating Constellation Cluster */}
        <group ref={skillsGroupRef}>
          {skillNodes.map((node, i) => (
            <group key={i} position={node.position}>
              <Float speed={node.speed * 2} floatIntensity={0.6}>
                <mesh>
                  <octahedronGeometry args={[node.size, 0]} />
                  <meshStandardMaterial
                    color={node.color}
                    emissive={node.color}
                    emissiveIntensity={1.2}
                    roughness={0.2}
                  />
                </mesh>
                <mesh scale={[1.4, 1.4, 1.4]}>
                  <octahedronGeometry args={[node.size, 0]} />
                  <meshBasicMaterial
                    color={node.color}
                    wireframe
                    transparent
                    opacity={0.35}
                  />
                </mesh>
              </Float>
            </group>
          ))}
        </group>
      </group>

      {/* ============================================================== */}
      {/* SCENE 4: EXPERIENCE DATA BEACONS (Z: ~ -8) */}
      {/* ============================================================== */}
      <group position={[0, 0, -8]}>
        {/* Milestone Beacon 1: Freelance */}
        <group position={[1.5, 0.2, 2]}>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 16]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.4, 0.48, 32]} />
            <meshBasicMaterial color="#00F0FF" side={THREE.DoubleSide} transparent opacity={0.7} />
          </mesh>
        </group>

        {/* Milestone Beacon 2: AI/ML Intern */}
        <group position={[-1.6, 0.2, -2]}>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 16]} />
            <meshBasicMaterial color="#A855F7" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.4, 0.48, 32]} />
            <meshBasicMaterial color="#A855F7" side={THREE.DoubleSide} transparent opacity={0.7} />
          </mesh>
        </group>

        {/* Milestone Beacon 3: Education (B.E. JVIT) */}
        <group position={[1.4, 0.2, -5.5]}>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 16]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.4, 0.48, 32]} />
            <meshBasicMaterial color="#38BDF8" side={THREE.DoubleSide} transparent opacity={0.7} />
          </mesh>
        </group>

        {/* Milestone Beacon 4: Education (PU College) */}
        <group position={[-1.3, 0.2, -8.5]}>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3.5, 16]} />
            <meshBasicMaterial color="#EC4899" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.4, 0.48, 32]} />
            <meshBasicMaterial color="#EC4899" side={THREE.DoubleSide} transparent opacity={0.7} />
          </mesh>
        </group>
      </group>

      {/* ============================================================== */}
      {/* SCENE 5: PROJECTS HOLOGRAPHIC PORTALS (Z: ~ -20) */}
      {/* ============================================================== */}
      <group position={[0, 0, -20]}>
        {/* Floating Portal 1 (Digital Library) */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <group position={[-2.4, 0.2, 1.5]} rotation={[0, 0.35, 0]}>
            <mesh>
              <planeGeometry args={[2.8, 1.8]} />
              <meshStandardMaterial
                color="#060C1D"
                emissive="#00F0FF"
                emissiveIntensity={0.25}
                roughness={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[2.85, 1.85]} />
              <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
            </mesh>
          </group>
        </Float>

        {/* Floating Portal 2 (Kartiva E-Commerce) */}
        <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.6}>
          <group position={[0, 0.8, -1]} rotation={[0.05, 0, 0]}>
            <mesh>
              <planeGeometry args={[2.8, 1.8]} />
              <meshStandardMaterial
                color="#190618"
                emissive="#EC4899"
                emissiveIntensity={0.25}
                roughness={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[2.85, 1.85]} />
              <meshBasicMaterial color="#EC4899" wireframe transparent opacity={0.5} />
            </mesh>
          </group>
        </Float>

        {/* Floating Portal 3 (AI Translator) */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <group position={[2.4, -0.2, -3.5]} rotation={[0, -0.35, 0]}>
            <mesh>
              <planeGeometry args={[2.8, 1.8]} />
              <meshStandardMaterial
                color="#120822"
                emissive="#A855F7"
                emissiveIntensity={0.25}
                roughness={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
              <planeGeometry args={[2.85, 1.85]} />
              <meshBasicMaterial color="#A855F7" wireframe transparent opacity={0.5} />
            </mesh>
          </group>
        </Float>
      </group>

      {/* ============================================================== */}
      {/* SCENE 6: TRANSMISSION BEACON NEXUS (Z: ~ -33) */}
      {/* ============================================================== */}
      <group position={[0, 0, -33]}>
        {/* Vertical Light Conduit */}
        <mesh position={[0, 4, 0]}>
          <cylinderGeometry args={[0.08, 0.4, 14, 32]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.6} />
        </mesh>
        {/* Inverted Cyber Spire Core */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[1.5, 4.5, 8]} />
          <meshStandardMaterial
            color="#0A0618"
            emissive="#A855F7"
            emissiveIntensity={1.4}
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>
        {/* Concentric Aura Rings */}
        <group ref={beaconRef} position={[0, 0, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.0, 2.12, 48]} />
            <meshBasicMaterial color="#00F0FF" side={THREE.DoubleSide} transparent opacity={0.7} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3.2, 3.3, 48]} />
            <meshBasicMaterial color="#A855F7" side={THREE.DoubleSide} transparent opacity={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
