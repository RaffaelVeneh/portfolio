"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProjectData } from "@/components/three/ProjectRingScene";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);
const ProjectRingScene = dynamic(
  () => import("@/components/three/ProjectRingScene"),
  { ssr: false }
);

const projects: ProjectData[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that solves [problem]. Built with modern technologies and a focus on performance and user experience.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/yourusername/project-alpha",
    live: "https://project-alpha.vercel.app",
    emoji: "🚀",
  },
  {
    title: "Project Beta",
    description:
      "An open-source tool that helps developers [do something]. Gained X stars on GitHub and used by hundreds of developers.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-beta",
    live: "https://project-beta.com",
    emoji: "⚡",
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-responsive dashboard for visualizing [data type]. Real-time updates and interactive charts.",
    tags: ["Vue.js", "Express", "Redis"],
    github: "https://github.com/yourusername/project-gamma",
    live: null,
    emoji: "📊",
  },
  {
    title: "Project Delta",
    description:
      "CLI tool that automates [task], saving developers hours of repetitive work every week.",
    tags: ["Python", "Click", "PyPI"],
    github: "https://github.com/yourusername/project-delta",
    live: null,
    emoji: "🛠️",
  },
  {
    title: "Project Epsilon",
    description:
      "Real-time multiplayer game built with WebSockets. Supports up to 50 concurrent players.",
    tags: ["Socket.io", "Phaser", "Node.js"],
    github: "https://github.com/yourusername/project-epsilon",
    live: "https://project-epsilon.io",
    emoji: "🎮",
  },
  {
    title: "Project Zeta",
    description:
      "AI-powered code review assistant that integrates with GitHub PRs and suggests improvements.",
    tags: ["OpenAI", "TypeScript", "GitHub API"],
    github: "https://github.com/yourusername/project-zeta",
    live: null,
    emoji: "🤖",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#0a0f1e] overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="Drag to spin the ring — or watch it orbit on its own."
        />
      </div>

      {/* 3-D Saturn ring canvas */}
      <div
        style={{ width: "100%", height: "660px" }}
        className="cursor-grab active:cursor-grabbing"
      >
        <Canvas
          camera={{ position: [0, 2.5, 13], fov: 48 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ProjectRingScene projects={projects} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hint + GitHub link */}
      <div className="flex flex-col items-center gap-4 -mt-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-[#4a5568] tracking-[0.2em] uppercase select-none"
        >
          ← drag to explore →
        </motion.p>

        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#6c63ff] hover:text-[#00d4ff] transition-colors text-sm font-medium"
        >
          <FiGithub size={15} />
          View all on GitHub
        </motion.a>
      </div>
    </section>
  );
}
