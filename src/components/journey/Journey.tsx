"use client";

import { motion } from "framer-motion";
import { journeyData } from "@/data/journey";

export function Journey() {
  return (
    <section id="journey" className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            My Journey
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-border space-y-12 max-w-3xl mx-auto sm:mx-0">
          {journeyData.map((item) => (
            <div
              key={item.year}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors duration-300" />

              {/* Card / Box */}
              <div className="p-6 rounded-xl border border-border bg-card/60 hover:bg-card transition-all duration-300 shadow-sm">
                <div className="inline-block text-xs font-mono font-bold text-accent mb-2 px-2.5 py-0.5 rounded bg-accent/10">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-border/40 text-foreground/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
