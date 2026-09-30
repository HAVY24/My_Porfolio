"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, BookOpen, Sparkles } from "lucide-react";

export function CurrentlySection() {
  return (
    <section className="py-16 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl border border-border bg-card/60 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/60">
            <div>
              <div className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-1">
                Active Focus
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Currently
              </h2>
            </div>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary">
                <span className="text-accent font-mono font-bold">01</span>
                <span className="text-foreground">Building fullstack web applications with Next.js and PostgreSQL.</span>
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <span className="text-accent font-mono font-bold">02</span>
                <span className="text-foreground">Learning system design and resilient backend architecture.</span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary">
                <span className="text-accent font-mono font-bold">03</span>
                <span className="text-foreground">Exploring AI engineering, RAG pipelines, and n8n automation.</span>
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <span className="text-accent font-mono font-bold">04</span>
                <span className="text-foreground">Seeking Fullstack / Software Developer opportunities in Ho Chi Minh City.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
