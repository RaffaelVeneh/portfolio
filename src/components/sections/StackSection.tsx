"use client";

import { motion } from "framer-motion";
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiTailwindcss, SiFigma, SiRedis, SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    name: "Frontend",
    color: "from-[#6c63ff] to-[#a78bfa]",
    skills: [
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "React", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    name: "Backend",
    color: "from-[#00d4ff] to-[#6c63ff]",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85 },
      { name: "Python", icon: SiPython, level: 80 },
      { name: "GraphQL", icon: SiGraphql, level: 70 },
    ],
  },
  {
    name: "Databases",
    color: "from-[#10b981] to-[#00d4ff]",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "Redis", icon: SiRedis, level: 65 },
    ],
  },
  {
    name: "Tools & Cloud",
    color: "from-[#f59e0b] to-[#ef4444]",
    skills: [
      { name: "Docker", icon: SiDocker, level: 75 },
      { name: "Git", icon: SiGit, level: 90 },
      { name: "AWS", icon: FaAws, level: 65 },
      { name: "Figma", icon: SiFigma, level: 70 },
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Technologies"
          title="My Tech Stack"
          subtitle="Tools and technologies I work with to build modern applications."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl bg-[#0d1117] border border-[#1e2a3a] p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-base font-semibold text-white">{cat.name}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-[#8892b0]" size={15} />
                        <span className="text-sm text-[#e6e6e6]">{skill.name}</span>
                      </div>
                      <span className="text-xs text-[#8892b0] font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1e2a3a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.07, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon cloud - all skills flat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {categories.flatMap((c) => c.skills).map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1117] border border-[#1e2a3a] text-[#8892b0] hover:text-white hover:border-[#6c63ff] transition-all duration-200 text-sm"
            >
              <skill.icon size={15} />
              {skill.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
