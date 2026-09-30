"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap } from "lucide-react";

export function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar / Profile Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-border bg-card shadow-lg group">
              {!imageError ? (
                <Image
                  src="/images/profile/profile.png"
                  alt="Hà Hoàng Vỹ profile picture"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback SVG / Styled Avatar */
                <div className="w-full h-full bg-gradient-to-br from-card via-border/40 to-card flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-4">
                    <User className="w-10 h-10" />
                  </div>
                  <span className="font-semibold text-foreground text-lg">Hà Hoàng Vỹ</span>
                  <span className="text-xs font-mono text-secondary mt-1">Fullstack Developer</span>
                </div>
              )}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-secondary text-base leading-relaxed">
            <p className="text-foreground text-lg font-medium leading-relaxed">
              I&apos;m a Fullstack Developer focused on building practical web applications from frontend to backend.
            </p>

            <p>
              I started with JavaScript and gradually expanded into React, Next.js, Node.js, PostgreSQL and backend development. Along the way, I worked on ERP and business management systems, built RESTful APIs, and developed fullstack projects from scratch.
            </p>

            <p>
              Recently, I&apos;ve also been exploring AI engineering, including RAG, LLM applications, LangGraph and AI-assisted development.
            </p>

            {/* Quick Specs Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-border/40 text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-secondary font-mono">Location</div>
                  <div className="text-sm font-medium text-foreground">Ho Chi Minh City, Vietnam</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-border/40 text-accent">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-secondary font-mono">Status</div>
                  <div className="text-sm font-medium text-foreground">B.Sc. in Information Technology — 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
