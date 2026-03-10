"use client";

import { useRef, Suspense, Component, ErrorInfo, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
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
      const time = state.clock.elapsedTime;
      // Enhanced animation with smoother movement
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.15;
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

// Enhanced fallback component with better materials and animations
function DumbbellFallback() {
  const groupRef = useRef<THREE.Group>(null);
  const leftWeightRef = useRef<THREE.Mesh>(null);
  const rightWeightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Smooth floating animation with multiple sine waves for natural movement
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
      
      // Subtle individual weight rotation for more dynamic look
      if (leftWeightRef.current) {
        leftWeightRef.current.rotation.z = Math.sin(time * 1.2) * 0.1;
      }
      if (rightWeightRef.current) {
        rightWeightRef.current.rotation.z = Math.sin(time * 1.2 + Math.PI) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Left weight with enhanced material and emissive glow */}
      <mesh ref={leftWeightRef} position={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial
          color="#E10600"
          metalness={0.9}
          roughness={0.1}
          emissive="#E10600"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Bar with enhanced metallic finish */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 16]} />
        <meshStandardMaterial
          color="#CCCCCC"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1}
        />
      </mesh>
      {/* Right weight with enhanced material */}
      <mesh ref={rightWeightRef} position={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial
          color="#E10600"
          metalness={0.9}
          roughness={0.1}
          emissive="#E10600"
          emissiveIntensity={0.15}
        />
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
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="w-full h-full"
      performance={{ min: 0.5 }} // Reduce quality if FPS drops below 50%
    >
      {/* Enhanced lighting setup for better depth and realism */}
      <ambientLight intensity={0.3} />
      {/* Main directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      {/* Fill light for softer shadows */}
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      {/* Rim light with brand color for depth */}
      <pointLight position={[0, 5, -5]} intensity={0.5} color="#E10600" />
      <Dumbbell />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
}

// Note: Model preloading removed to avoid 404 errors
// The component will gracefully fall back to simple geometry if the model doesn't exist
