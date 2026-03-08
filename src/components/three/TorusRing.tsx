"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TorusRingProps {
  radius?: number;
  tube?: number;
  color?: string;
  rotationSpeed?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function TorusRing({
  radius = 2,
  tube = 0.015,
  color = "#00d4ff",
  rotationSpeed = 0.5,
  position = [0, 0, 0],
  rotation = [Math.PI / 2, 0, 0],
}: TorusRingProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += rotationSpeed * 0.01;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + rotation[0];
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}
