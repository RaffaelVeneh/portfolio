"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that solves [problem]. Built with modern technologies and a focus on performance and user experience.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourusername/project-alpha",
    live: "https://project-alpha.vercel.app",
    featured: true,
    gradient: "from-[#6c63ff] to-[#a78bfa]",
  },
  {
    title: "Project Beta",
    description:
      "An open-source tool that helps developers [do something]. Gained X stars on GitHub and used by hundreds of developers.",
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    github: "https://github.com/yourusername/project-beta",
    live: "https://project-beta.com",
    featured: true,
    gradient: "from-[#00d4ff] to-[#6c63ff]",
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-responsive dashboard for visualizing [data type]. Features real-time updates and interactive charts.",
    tags: ["Vue.js", "Express", "Redis", "Chart.js"],
    github: "https://github.com/yourusername/project-gamma",
    live: null,
    featured: false,
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    title: "Project Delta",
    description:
      "CLI tool that automates [task], saving developers hours of repetitive work every week.",
    tags: ["Python", "Click", "PyPI"],
    github: "https://github.com/yourusername/project-delta",
    live: null,
    featured: false,
    gradient: "from-[#10b981] to-[#00d4ff]",
  },
];

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I'm proud of — each one taught me something new."
        />

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featured.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover rounded-2xl bg-[#0d1117] border border-[#1e2a3a] overflow-hidden group"
            >
              {/* Top color bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 text-[#8892b0] hover:text-white transition-colors"
                    >
                      <FiGithub size={17} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-2 text-[#8892b0] hover:text-white transition-colors"
                      >
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1e2a3a] text-xs text-[#8892b0] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-hover rounded-xl bg-[#0d1117] border border-[#1e2a3a] p-5 group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  {project.title[0]}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-[#8892b0] hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-[#8892b0] hover:text-white transition-colors"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-base font-bold text-white mt-3 mb-1 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-[#8892b0] text-xs leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs text-[#8892b0] font-mono bg-[#1e2a3a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6c63ff] hover:text-[#00d4ff] transition-colors text-sm font-medium"
          >
            <FiGithub size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
