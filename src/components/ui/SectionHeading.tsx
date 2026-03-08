"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} mb-16 gap-3`}
    >
      {label && (
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6c63ff]">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8892b0] max-w-xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
