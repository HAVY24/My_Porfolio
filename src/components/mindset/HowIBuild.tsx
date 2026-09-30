"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code, CheckCircle2, Rocket } from "lucide-react";

const buildSteps = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, requirements, and constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description: "Design the data model, APIs, and application structure.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    description: "Implement frontend, backend, and database features.",
    icon: Code,
  },
  {
    step: "04",
    title: "Validate",
    description: "Test, debug, review, and verify the result.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Improve",
    description: "Refactor, optimize, and prepare the application for production.",
    icon: Rocket,
  },
];

export function HowIBuild() {
  return (
    <section className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <div>
            <div className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-1">
              Engineering Mindset
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              How I Build
            </h2>
          </div>
          <div className="h-px bg-border flex-1 max-w-xs ml-auto hidden sm:block" />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {buildSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connector arrow on desktop */}
                {index < buildSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-border group-hover:text-accent/60 transition-colors">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
