"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "X+", label: "Years Experience" },
  { value: "X+", label: "Projects Built" },
  { value: "X+", label: "Organizations" },
  { value: "X+", label: "Contributions" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Introduction"
          title="About Me"
          subtitle="A passionate developer who loves turning ideas into reality."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Glowing ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6c63ff] to-[#00d4ff] opacity-30 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-full border-2 border-[#6c63ff]/40 overflow-hidden bg-[#0d1117] flex items-center justify-center">
                {/* Replace src with your actual photo */}
                <span className="text-7xl select-none">🧑‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <p className="text-[#8892b0] leading-relaxed text-base">
              Hey there! I&apos;m <span className="text-white font-semibold">Your Name</span>, a
              passionate full-stack developer based in{" "}
              <span className="text-white font-semibold">Your City, Country</span>. I
              specialize in building modern, performant web applications and love
              working at the intersection of design and engineering.
            </p>
            <p className="text-[#8892b0] leading-relaxed text-base">
              When I&apos;m not coding, you can find me contributing to open-source
              projects, mentoring junior developers, or exploring the latest
              advancements in web technology. I believe great software is built
              through collaboration, curiosity, and craftsmanship.
            </p>
            <p className="text-[#8892b0] leading-relaxed text-base">
              My goal is to create digital experiences that are not just
              functional, but truly memorable.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["📍 Your Location", "🎓 Your Degree", "💼 Open to work", "🌐 Remote / On-site"].map((fact) => (
                <span
                  key={fact}
                  className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#1e2a3a] text-sm text-[#8892b0]"
                >
                  {fact}
                </span>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="mt-4 self-start px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 p-6 rounded-2xl bg-[#0d1117] border border-[#1e2a3a] text-center"
            >
              <span className="text-3xl font-bold gradient-text">{s.value}</span>
              <span className="text-[#8892b0] text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
