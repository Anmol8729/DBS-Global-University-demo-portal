import React, { Suspense, useRef, Component } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCubeProps {
  color?: string;
  size?: number;
  speed?: number;
}

// ── Silent error boundary (decorative element) ───────────────────────────────
interface EBState { hasError: boolean }
class CubeErrorBoundary extends Component<{ children: React.ReactNode }, EBState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): EBState { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ── Cube mesh ────────────────────────────────────────────────────────────────
function CubeMesh({ color = "#7c3aed", size = 0.5, speed = 1 }: FloatingCubeProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.4 * speed;
    ref.current.rotation.y += delta * 0.6 * speed;
    ref.current.rotation.z += delta * 0.2 * speed;
  });

  return (
    <RoundedBox ref={ref} args={[size, size, size]} radius={size * 0.18} smoothness={4}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.25}
      />
    </RoundedBox>
  );
}

// ── Public export ────────────────────────────────────────────────────────────
export default function FloatingCube({ color = "#7c3aed", size = 0.5, speed = 1 }: FloatingCubeProps) {
  return (
    <CubeErrorBoundary>
      <Suspense fallback={null}>
        <Canvas
          frameloop="demand"
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 2.5], fov: 45 }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[2, 2, 2]} intensity={1.2} color="#f5c842" />
          <CubeMesh color={color} size={size} speed={speed} />
        </Canvas>
      </Suspense>
    </CubeErrorBoundary>
  );
}
