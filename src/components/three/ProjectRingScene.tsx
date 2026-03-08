"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  emoji: string;
}

const RADIUS = 4.6;
const TILT = Math.PI / 9; // ~20° tilt — Saturn angle

// ─── Single card in 3-D space ───────────────────────────────────────────────
function ProjectCard({
  project,
  angle,
  onHoverStart,
  onHoverEnd,
}: {
  project: ProjectData;
  angle: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const x = RADIUS * Math.cos(angle);
  const z = RADIUS * Math.sin(angle);
  // Rotate so the card faces radially outward from the ring center
  const rotY = Math.PI / 2 - angle;

  return (
    <group position={[x, 0, z]} rotation={[0, rotY, 0]}>
      <Html
        transform
        distanceFactor={7}
        center
        zIndexRange={[0, 50]}
        style={{ pointerEvents: "auto" }}
      >
        <div
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          style={{
            width: "220px",
            background: "rgba(10, 13, 22, 0.96)",
            border: "1px solid rgba(108, 99, 255, 0.4)",
            borderRadius: "16px",
            padding: "20px",
            backdropFilter: "blur(18px)",
            // Critical: hide backface so card vanishes when orbiting to the back
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            userSelect: "none",
            fontFamily: "sans-serif",
          }}
        >
          {/* Gradient top accent */}
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg,#6c63ff,#00d4ff)",
              borderRadius: "4px",
              marginBottom: "14px",
            }}
          />

          {/* Emoji */}
          <div style={{ fontSize: "28px", marginBottom: "10px", lineHeight: 1 }}>
            {project.emoji}
          </div>

          {/* Title */}
          <h3
            style={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              margin: "0 0 8px 0",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              color: "#8892b0",
              fontSize: "11px",
              lineHeight: 1.65,
              margin: "0 0 12px 0",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginBottom: "14px",
            }}
          >
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "2px 8px",
                  borderRadius: "6px",
                  background: "rgba(30,42,58,0.9)",
                  color: "#8892b0",
                  fontSize: "10px",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "8px" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "5px 12px",
                borderRadius: "8px",
                border: "1px solid #1e2a3a",
                color: "#8892b0",
                fontSize: "11px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "#6c63ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#8892b0";
                (e.currentTarget as HTMLElement).style.borderColor = "#1e2a3a";
              }}
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
                  color: "#fff",
                  fontSize: "11px",
                  textDecoration: "none",
                }}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
}

// ─── Main 3-D scene exported to Canvas ──────────────────────────────────────
export default function ProjectRingScene({
  projects,
}: {
  projects: ProjectData[];
}) {
  const innerGroupRef = useRef<THREE.Group>(null);
  const autoRotate = useRef(true);
  const isDragging = useRef(false);
  const lastPointerX = useRef(0);
  const currentRotY = useRef(0);

  // Window-level drag so mouse can leave the canvas without losing drag
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !innerGroupRef.current) return;
      const delta = (e.clientX - lastPointerX.current) * 0.007;
      currentRotY.current += delta;
      innerGroupRef.current.rotation.y = currentRotY.current;
      lastPointerX.current = e.clientX;
    };
    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        // Resume auto-rotate after a short pause
        setTimeout(() => {
          autoRotate.current = true;
        }, 600);
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Auto-rotation loop
  useFrame((_, delta) => {
    if (!innerGroupRef.current) return;
    if (autoRotate.current && !isDragging.current) {
      currentRotY.current += delta * 0.28;
      innerGroupRef.current.rotation.y = currentRotY.current;
    }
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <pointLight position={[8, 6, 10]} intensity={2.8} color="#6c63ff" />
      <pointLight position={[-8, -4, -8]} intensity={1.2} color="#00d4ff" />
      <pointLight position={[0, 12, 0]} intensity={0.5} color="#ffffff" />

      {/* Outer group handles the Saturn tilt (static) */}
      <group rotation={[TILT, 0, 0]}>
        {/* Inner group rotates */}
        <group ref={innerGroupRef}>

          {/* ── Ring bands (all in XZ plane via rotation X = PI/2) ── */}

          {/* Translucent ring disc — the "ring plane" */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[RADIUS - 0.9, RADIUS + 0.9, 128]} />
            <meshStandardMaterial
              color="#6c63ff"
              emissive="#6c63ff"
              emissiveIntensity={0.08}
              transparent
              opacity={0.05}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          {/* Inner guide ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[RADIUS - 0.6, 0.011, 16, 200]} />
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#a78bfa"
              emissiveIntensity={0.4}
              transparent
              opacity={0.65}
            />
          </mesh>

          {/* Main ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[RADIUS, 0.022, 16, 200]} />
            <meshStandardMaterial
              color="#6c63ff"
              emissive="#6c63ff"
              emissiveIntensity={1.0}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>

          {/* Outer glow ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[RADIUS + 0.6, 0.011, 16, 200]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.45}
              transparent
              opacity={0.65}
            />
          </mesh>

          {/* ── Drag-capture ring (invisible, between the bands) ── */}
          <mesh
            rotation={[Math.PI / 2, 0, 0]}
            onPointerDown={(e) => {
              isDragging.current = true;
              autoRotate.current = false;
              lastPointerX.current = e.clientX;
              e.stopPropagation();
            }}
            onPointerEnter={() => {
              if (!isDragging.current) autoRotate.current = false;
            }}
            onPointerLeave={() => {
              if (!isDragging.current) autoRotate.current = true;
            }}
          >
            <ringGeometry args={[RADIUS - 0.95, RADIUS + 0.95, 64]} />
            <meshBasicMaterial
              transparent
              opacity={0}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          {/* ── Project cards ── */}
          {projects.map((project, i) => {
            const angle = (i / projects.length) * Math.PI * 2;
            return (
              <ProjectCard
                key={project.title}
                project={project}
                angle={angle}
                onHoverStart={() => {
                  autoRotate.current = false;
                }}
                onHoverEnd={() => {
                  if (!isDragging.current) autoRotate.current = true;
                }}
              />
            );
          })}
        </group>

        {/* ── Central planet (stays static inside the tilt group) ── */}
        <CenterPlanet />
      </group>
    </>
  );
}

// ─── Small glowing "planet" at the ring center ───────────────────────────────
function CenterPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.55, 32, 32]} />
      <meshStandardMaterial
        color="#1a0a3a"
        emissive="#6c63ff"
        emissiveIntensity={0.6}
        roughness={0.4}
        metalness={0.7}
      />
    </mesh>
  );
}
