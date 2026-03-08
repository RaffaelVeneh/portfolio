"use client";

import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";

const organizations = [
  {
    name: "Organization Name",
    role: "Your Role",
    period: "Jan 2024 – Present",
    description:
      "Describe what this organization does and what you did there. Highlight key responsibilities, impact, and collaboration.",
    highlights: [
      "Led initiative / project X",
      "Contributed to open-source tools",
      "Mentored junior members",
    ],
    logo: "🏢",
    color: "from-[#6c63ff] to-[#a78bfa]",
    link: "https://organization.com",
  },
  {
    name: "Another Organization",
    role: "Member / Contributor",
    period: "Mar 2023 – Dec 2023",
    description:
      "Share your involvement, the community impact, and what you learned. Focus on what made this experience valuable.",
    highlights: [
      "Organized community events",
      "Wrote technical articles",
      "Collaborated with X+ members",
    ],
    logo: "🌐",
    color: "from-[#00d4ff] to-[#6c63ff]",
    link: "https://another-org.com",
  },
  {
    name: "Open Source Project",
    role: "Core Contributor",
    period: "2022 – Present",
    description:
      "Active contributor to [project name], an open-source library used by X developers worldwide.",
    highlights: [
      "Merged X+ pull requests",
      "Fixed critical performance bugs",
      "Wrote documentation",
    ],
    logo: "⚡",
    color: "from-[#f59e0b] to-[#ef4444]",
    link: "https://github.com/org/project",
  },
];

export default function OrganizationsSection() {
  return (
    <section id="organizations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Community & Involvement"
          title="Organizations"
          subtitle="Communities and organizations I've been part of, and the impact we created together."
        />

        <div className="flex flex-col gap-8">
          {organizations.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-hover rounded-2xl bg-[#0d1117] border border-[#1e2a3a] overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${org.color}`} />
              <div className="p-7 flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${org.color} flex items-center justify-center text-2xl`}>
                    {org.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{org.name}</h3>
                      <p className="text-[#6c63ff] text-sm font-medium">{org.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#8892b0] bg-[#1e2a3a] px-3 py-1 rounded-full">
                        {org.period}
                      </span>
                      <a
                        href={org.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${org.name}`}
                        className="text-[#8892b0] hover:text-white transition-colors"
                      >
                        <HiExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                    {org.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5">
                    {org.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#8892b0]">
                        <span className="text-[#6c63ff] mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
