"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: FiMail, href: "mailto:you@email.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Organizations", href: "#organizations" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e2a3a] bg-[#050816] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <Link href="#hero" className="text-xl font-bold gradient-text">
          &lt;YourName /&gt;
        </Link>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#8892b0] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg border border-[#1e2a3a] text-[#8892b0] hover:text-white hover:border-[#6c63ff] transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#4a5568] text-center">
          © {year} Your Name. Designed &amp; Built with ❤️ using Next.js &amp; Three.js
        </p>
      </div>
    </footer>
  );
}
