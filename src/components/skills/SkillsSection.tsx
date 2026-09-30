"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Code2, Server, Database, Container, Bot } from "lucide-react";

const categoryIcons = [Code2, Server, Database, Container, Bot];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
              Technologies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              What I Work With
            </h2>
          </div>
          <p className="text-sm text-secondary max-w-md">
            Technologies and tools I use to build fullstack web applications, REST APIs, and AI integrations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-border bg-card/60 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-secondary mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-border/40 text-foreground border border-border/50 hover:border-accent/40 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
