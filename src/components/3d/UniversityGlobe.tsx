import React, { Suspense, useRef, useMemo, Component } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

// ── WebGL detection ──────────────────────────────────────────────────────────
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

// ── Error Boundary ───────────────────────────────────────────────────────────
interface EBState { hasError: boolean }
class ThreeDErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  EBState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): EBState { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback ?? <GlobeFallback />;
    return this.props.children;
  }
}

// ── Static fallback ──────────────────────────────────────────────────────────
function GlobeFallback() {
  return (
    <div className="flex h-[480px] w-full items-center justify-center rounded-[36px] border border-white/15 bg-white/5 backdrop-blur-xl">
      <div className="h-48 w-48 rounded-full bg-gradient-to-br from-purple-900/60 to-amber-400/30 blur-2xl" />
    </div>
  );
}

// ── Skeleton while loading ───────────────────────────────────────────────────
function GlobeSkeleton() {
  return (
    <div className="flex h-[480px] w-full animate-pulse items-center justify-center rounded-[36px] border border-white/10 bg-white/5">
      <div className="h-40 w-40 rounded-full bg-white/10" />
    </div>
  );
}

// ── Particle field (stars) ───────────────────────────────────────────────────
function StarField() {
  const count = 260;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f5c842"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

// ── Orbiting campus nodes ────────────────────────────────────────────────────
function OrbitingDots() {
  const groupRef = useRef<THREE.Group>(null!);
  const count = 8;

  const dots = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      angle:   (i / count) * Math.PI * 2,
      radius:  1.65 + (i % 3) * 0.18,
      yOffset: Math.sin(i * 1.3) * 0.5,
      speed:   0.28 + i * 0.04,
    })), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const d = dots[i];
      const a = d.angle + t * d.speed;
      child.position.set(
        Math.cos(a) * d.radius,
        d.yOffset + Math.sin(t * 0.4 + i) * 0.12,
        Math.sin(a) * d.radius
      );
    });
  });

  return (
    <group ref={groupRef}>
      {dots.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#f5c842" : "#c084fc"}
            emissive={i % 2 === 0 ? "#f5c842" : "#a855f7"}
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// ── Globe mesh with DGU campus texture ──────────────────────────────────────
function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  // DGU campus photo mapped onto the sphere surface
  const texture = useTexture(
    "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg"
  );

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.18;
    wireRef.current.rotation.y += delta * 0.18;
    wireRef.current.rotation.x += delta * 0.05;
    glowRef.current.rotation.y -= delta * 0.08;
    // Mouse parallax
    meshRef.current.rotation.x +=
      (mouse.y * 0.18 - meshRef.current.rotation.x) * 0.04;
    wireRef.current.rotation.x = meshRef.current.rotation.x;
  });

  return (
    <group>
      {/* Outer glow sphere */}
      <mesh ref={glowRef} scale={1.22}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          emissive="#7c3aed"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Campus photo sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.6}
          metalness={0.1}
          // Subtle purple tint to blend with the hero background
          emissive="#2e0d5e"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Gold wireframe octahedron overlay */}
      <mesh ref={wireRef} scale={1.04}>
        <octahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#f5c842"
          wireframe
          transparent
          opacity={0.22}
          emissive="#f5c842"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

// ── Scene ────────────────────────────────────────────────────────────────────
function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.0} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, -2, -3]} intensity={0.5} color="#7c3aed" />
      <StarField />
      <GlobeMesh />
      <OrbitingDots />
    </>
  );
}

// ── Public export ────────────────────────────────────────────────────────────
export default function UniversityGlobe() {
  if (!detectWebGL()) return <GlobeFallback />;

  return (
    <ThreeDErrorBoundary fallback={<GlobeFallback />}>
      <Suspense fallback={<GlobeSkeleton />}>
        <Canvas
          frameloop="always"
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 3.8], fov: 50 }}
          style={{ background: "transparent", width: "100%", height: "480px" }}
          gl={{ antialias: true, alpha: true }}
        >
          <GlobeScene />
        </Canvas>
      </Suspense>
    </ThreeDErrorBoundary>
  );
}
