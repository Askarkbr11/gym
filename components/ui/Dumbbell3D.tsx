"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Component that tries to load the GLTF model
function DumbbellModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Always call the hook - it will throw if model doesn't exist, which is handled by Suspense
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

// Main component that uses Suspense for error handling
function Dumbbell() {
  return (
    <Suspense fallback={<DumbbellFallback />}>
      <DumbbellModel />
    </Suspense>
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

// Preload the model if available
if (typeof window !== "undefined") {
  try {
    // @ts-ignore
    useGLTF.preload("/assets/3d/dumbbell.gltf");
  } catch {
    // Model not available, that's okay
  }
}
