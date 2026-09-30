"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "mailto:TODO_EMAIL";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/HAVY24";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/h%C3%A0-v%E1%BB%B9-001ab3278/";

  return (
    <section id="contact" className="py-24 border-t border-border/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div>
          <div className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Interested in working together or just want to say hello? I&apos;m always open to discussing fullstack opportunities and technical ideas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={email}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-all shadow-lg shadow-accent/20"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-border/30 text-foreground font-medium text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
            </a>

            {linkedinUrl !== "TODO_LINKEDIN_URL" ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-border/30 text-foreground font-medium text-sm transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/40 text-secondary font-mono text-xs opacity-70 cursor-not-allowed">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
            )}

            <a
              href="/cv/HA-HOANG-VY-Fullstack-Developer.pdf"
              download="HA-HOANG-VY-Fullstack-Developer.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-border/30 text-secondary hover:text-foreground font-medium text-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
