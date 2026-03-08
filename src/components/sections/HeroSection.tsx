"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

const socials = [
  { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse at center, transparent 0%, #050816 70%)"
      }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#6c63ff]/40 bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-medium"
        >
          ✨ Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-xl md:text-2xl text-[#8892b0] mb-4 font-light"
        >
          Full-Stack Developer &amp; Creative Technologist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[#8892b0] text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build beautiful, performant web experiences with a focus on clean
          code and thoughtful design. Let&apos;s create something amazing together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] text-white font-semibold hover:opacity-90 transition-opacity duration-200 text-sm"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-[#1e2a3a] text-[#e6e6e6] font-semibold hover:border-[#6c63ff] transition-colors duration-200 text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex gap-5 justify-center"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg border border-[#1e2a3a] text-[#8892b0] hover:text-white hover:border-[#6c63ff] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#8892b0]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
