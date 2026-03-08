"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1.4, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#6c63ff"
        attach="material"
        distort={0.45}
        speed={2}
        roughness={0.1}
        metalness={0.6}
        wireframe={false}
      />
    </Sphere>
  );
}
