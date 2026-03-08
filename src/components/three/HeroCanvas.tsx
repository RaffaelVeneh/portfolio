"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);
const FloatingSphere = dynamic(() => import("./FloatingSphere"), { ssr: false });
const TorusRing = dynamic(() => import("./TorusRing"), { ssr: false });
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function HeroCanvas() {
  return (
    <div className="canvas-container" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#6c63ff" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#00d4ff" />
        <Suspense fallback={null}>
          <ParticleField />
          <FloatingSphere />
          <TorusRing radius={2.2} tube={0.015} color="#6c63ff" rotationSpeed={0.4} rotation={[Math.PI / 3, 0, 0]} />
          <TorusRing radius={2.6} tube={0.01} color="#00d4ff" rotationSpeed={-0.3} rotation={[Math.PI / 6, Math.PI / 4, 0]} />
          <TorusRing radius={3.0} tube={0.008} color="#a78bfa" rotationSpeed={0.2} rotation={[Math.PI / 2, Math.PI / 3, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
