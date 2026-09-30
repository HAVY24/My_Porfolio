"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { aiTools } from "@/data/skills";

const workflowSteps = [
  { name: "Idea / Feature Spec", role: "Define domain logic & architecture" },
  { name: "AI-Assisted Dev", role: "Generate initial drafts & boilerplate" },
  { name: "Human Code Review", role: "Inspect security, types & performance" },
  { name: "Testing & Validation", role: "Run unit tests & verify edge cases" },
  { name: "Production Deploy", role: "Deploy validated code with confidence" },
];

export function AiEngineeringSection() {
  return (
    <section id="ai-engineering" className="py-20 border-t border-border/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Banner Card */}
        <div className="rounded-2xl border border-accent/30 bg-card/80 backdrop-blur-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Modern Engineering Workflow</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
            AI as an Engineering Tool
          </h2>

          <div className="max-w-3xl text-secondary text-base leading-relaxed mb-10">
            <p className="text-foreground font-medium text-lg mb-2">
              &quot;AI accelerates my development. I remain responsible for understanding, reviewing, and validating the code.&quot;
            </p>
            <p>
              Rather than treating AI as a magic black box, I integrate AI coding assistants (Cursor, Claude Code, ChatGPT, Gemini) into my developer workflow for rapid prototyping and refactoring, while maintaining strict code ownership, unit test verification, and type safety.
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="mb-12">
            <div className="text-xs font-mono text-secondary mb-4 uppercase tracking-wider">
              Assisted Development Pipeline
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {workflowSteps.map((step, idx) => (
                <div
                  key={step.name}
                  className="p-4 rounded-xl border border-border/80 bg-background/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-accent font-bold mb-1">
                      Step 0{idx + 1}
                    </div>
                    <div className="font-bold text-foreground text-sm mb-1">
                      {step.name}
                    </div>
                    <div className="text-xs text-secondary leading-snug">
                      {step.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Grid */}
          <div>
            <div className="text-xs font-mono text-secondary mb-4 uppercase tracking-wider">
              Tools & Models Utilized
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-lg border border-border/60 bg-border/20 flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-bold text-foreground mb-1">
                    {tool.name}
                  </div>
                  <div className="text-[11px] text-secondary leading-tight">
                    {tool.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
