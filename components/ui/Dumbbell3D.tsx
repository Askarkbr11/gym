"use client";

import { useRef, Suspense, Component, ErrorInfo, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Error Boundary to catch GLTF loading errors
class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Silently handle missing model file - this is expected
    if (error.message?.includes("404") || error.message?.includes("Failed to load")) {
      console.log("3D model not found, using fallback geometry");
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Component that tries to load the GLTF model
function DumbbellModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Try to load the model - will throw if file doesn't exist
  const model = useGLTF("/assets/3d/dumbbell.gltf");

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={model.scene}
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}

// Fallback component with simple geometry
function DumbbellFallback() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Left weight */}
      <mesh position={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial color="#E10600" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Bar */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 16]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Right weight */}
      <mesh position={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial color="#E10600" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Main component that uses Error Boundary and Suspense for error handling
function Dumbbell() {
  // For now, always use fallback since model doesn't exist
  // When you add the model file, this will automatically try to load it
  // You can also set a flag or environment variable to enable model loading
  const useModel = false; // Set to true when model file is added

  if (!useModel) {
    return <DumbbellFallback />;
  }

  return (
    <ModelErrorBoundary fallback={<DumbbellFallback />}>
      <Suspense fallback={<DumbbellFallback />}>
        <DumbbellModel />
      </Suspense>
    </ModelErrorBoundary>
  );
}

export default function Dumbbell3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      <Environment preset="sunset" />
      <Dumbbell />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

// Note: Model preloading removed to avoid 404 errors
// The component will gracefully fall back to simple geometry if the model doesn't exist
