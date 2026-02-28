"use client";

import { useRef, Suspense, Component, ErrorInfo, ReactNode, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, ContactShadows, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
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

// Improved lighting setup
function Lighting() {
  return (
    <>
      {/* Main directional light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {/* Fill light */}
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      {/* Rim light for depth */}
      <pointLight position={[0, 5, -5]} intensity={0.5} color="#E10600" />
      {/* Ambient for overall illumination */}
      <ambientLight intensity={0.3} />
    </>
  );
}

// Enhanced dumbbell with better materials and animations
function EnhancedDumbbellFallback() {
  const groupRef = useRef<THREE.Group>(null);
  const leftWeightRef = useRef<THREE.Mesh>(null);
  const rightWeightRef = useRef<THREE.Mesh>(null);
  const barRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;
    
    // Smooth floating animation
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
    
    // Subtle weight rotation
    if (leftWeightRef.current) {
      leftWeightRef.current.rotation.z = Math.sin(time * 1.2) * 0.1;
    }
    if (rightWeightRef.current) {
      rightWeightRef.current.rotation.z = Math.sin(time * 1.2 + Math.PI) * 0.1;
    }
    
    // Bar subtle flex
    if (barRef.current) {
      barRef.current.rotation.x = Math.sin(time * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Left weight with enhanced material */}
      <mesh ref={leftWeightRef} position={[-0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial
          color="#E10600"
          metalness={0.9}
          roughness={0.1}
          emissive="#E10600"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Bar with metallic finish */}
      <mesh ref={barRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 16]} />
        <meshStandardMaterial
          color="#CCCCCC"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Right weight */}
      <mesh ref={rightWeightRef} position={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial
          color="#E10600"
          metalness={0.9}
          roughness={0.1}
          emissive="#E10600"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Component that tries to load the GLTF model
function DumbbellModel() {
  const meshRef = useRef<THREE.Group>(null);
  const model = useGLTF("/assets/3d/dumbbell.gltf");

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
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

// Camera controller for scroll-based movement
function CameraController() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    // Subtle camera movement based on scroll
    const offset = scrollY * 0.0001;
    camera.position.z = 2 + offset;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main component
function Dumbbell() {
  const useModel = false; // Set to true when model file is added

  if (!useModel) {
    return <EnhancedDumbbellFallback />;
  }

  return (
    <ModelErrorBoundary fallback={<EnhancedDumbbellFallback />}>
      <Suspense fallback={<EnhancedDumbbellFallback />}>
        <DumbbellModel />
      </Suspense>
    </ModelErrorBoundary>
  );
}

export default function Dumbbell3DImproved() {
  const [performance, setPerformance] = useState<"high" | "low">("high");

  useEffect(() => {
    // Detect device performance
    const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                     (navigator as any).deviceMemory <= 4;
    setPerformance(isLowEnd ? "low" : "high");
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 50 }}
      gl={{
        antialias: performance === "high",
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      className="w-full h-full"
      dpr={performance === "high" ? [1, 2] : 1} // Limit pixel ratio on low-end devices
      performance={{ min: 0.5 }} // Reduce quality if FPS drops
    >
      <Lighting />
      <Environment preset="sunset" />
      <Dumbbell />
      
      {/* Soft shadows for depth */}
      {performance === "high" && (
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.3}
          scale={2}
          blur={2}
          far={1}
        />
      )}
      
      {/* Disable controls for background element */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
      
      {/* Optional: Camera controller for scroll effects */}
      {/* <CameraController /> */}
    </Canvas>
  );
}
