"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend,
} from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/yourusername", value: "@yourusername" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", value: "/in/yourusername" },
  { icon: FiTwitter, label: "Twitter", href: "https://twitter.com/yourusername", value: "@yourusername" },
  { icon: FiMail, label: "Email", href: "mailto:you@email.com", value: "you@email.com" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Wire up to your preferred email service (Resend, EmailJS, Formspree, etc.)
    // Simulated delay for now
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Let's Talk"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info & socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#8892b0] leading-relaxed">
              Whether you&apos;re looking for a collaborator on your next big
              project, need a freelance developer, or just want to connect —
              feel free to reach out. I try to respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {socials.map(({ icon: Icon, label, href, value }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1117] border border-[#1e2a3a] hover:border-[#6c63ff] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#1e2a3a] text-[#6c63ff] group-hover:bg-[#6c63ff] group-hover:text-white transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-[#8892b0]">{label}</p>
                    <p className="text-sm text-white font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8 rounded-2xl bg-[#0d1117] border border-[#1e2a3a]"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-[#8892b0] mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#050816] border border-[#1e2a3a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a5568] focus:outline-none focus:border-[#6c63ff] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#8892b0] mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#050816] border border-[#1e2a3a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a5568] focus:outline-none focus:border-[#6c63ff] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#8892b0] mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I'd love to work with you on..."
                className="w-full bg-[#050816] border border-[#1e2a3a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a5568] focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-opacity"
            >
              {status === "sending" ? (
                <>Sending…</>
              ) : status === "sent" ? (
                <>Message sent! 🎉</>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
