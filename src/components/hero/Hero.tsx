"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, FileText, Terminal as TerminalIcon } from "lucide-react";

export function Hero() {
  const [typedText, setTypedText] = useState("Fullstack Developer");
  const fullText = "Fullstack Developer";
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTypedText(fullText);
      setIsTypingDone(true);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background glow grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--accent-muted),transparent_40%)] pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>FULLSTACK DEVELOPER</span>
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-accent">Hà Hoàng Vỹ</span>.
          </h1>

          <h2 className="text-xl sm:text-2xl text-secondary font-medium mb-6">
            I build web applications from frontend to backend.
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-secondary max-w-xl mb-8 leading-relaxed">
            Focused on <strong className="text-foreground font-semibold">React</strong>,{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>,{" "}
            <strong className="text-foreground font-semibold">Node.js</strong>,{" "}
            <strong className="text-foreground font-semibold">TypeScript</strong>, and{" "}
            <strong className="text-foreground font-semibold">AI-powered applications</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-all duration-200 shadow-md shadow-accent/20 w-full sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/HAVY24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-border/30 text-foreground font-medium text-sm transition-all duration-200 w-full sm:w-auto"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="/cv/HA-HOANG-VY-Fullstack-Developer.pdf"
              download="HA-HOANG-VY-Fullstack-Developer.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-border/30 text-secondary hover:text-foreground font-medium text-sm transition-all duration-200 w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-border/40 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-secondary text-xs">
                <TerminalIcon className="w-3.5 h-3.5 text-accent" />
                <span>vy@developer: ~</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 text-foreground/90">
              {/* Command 1: whoami */}
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-secondary">$</span>
                  <span>whoami</span>
                </div>
                <div className="mt-1.5 pl-3 border-l-2 border-accent/40 text-foreground font-medium">
                  <div>Hà Hoàng Vỹ (Ha Hoang Vy)</div>
                  <div className="text-secondary">
                    {typedText}
                    <span className="animate-blink font-bold text-accent">|</span>
                  </div>
                </div>
              </div>

              {/* Command 2: stack */}
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-secondary">$</span>
                  <span>stack</span>
                </div>
                <div className="mt-1.5 pl-3 border-l-2 border-accent/40 flex flex-wrap gap-1.5 pt-0.5">
                  {["Next.js", "Node.js", "TypeScript", "PostgreSQL", "React", "Express", "RAG"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-border/60 text-foreground text-xs font-mono"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Command 3: location */}
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-secondary">$</span>
                  <span>location</span>
                </div>
                <div className="mt-1.5 pl-3 border-l-2 border-accent/40 text-secondary">
                  Ho Chi Minh City, Vietnam
                </div>
              </div>

              {/* Command 4: status */}
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-secondary">$</span>
                  <span>status</span>
                </div>
                <div className="mt-1.5 pl-3 border-l-2 border-accent/40 flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
