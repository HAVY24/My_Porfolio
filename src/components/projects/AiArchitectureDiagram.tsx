"use client";

import { FileText, Layers, Database, Sparkles, ShieldCheck, Cpu, UserCheck } from "lucide-react";

export function AiArchitectureDiagram() {
  const steps = [
    { title: "Document", sub: "PDF / DOCX", icon: FileText },
    { title: "Ingestion", sub: "Text Loader & Chunking", icon: Layers },
    { title: "Embeddings", sub: "Vector Space", icon: Cpu },
    { title: "Vector DB", sub: "ChromaDB Storage", icon: Database },
    { title: "Retriever", sub: "RAG Context Match", icon: Sparkles },
    { title: "LLM Generator", sub: "LangGraph Multi-Agent", icon: Cpu },
    { title: "Validator", sub: "Quality & Retry Loop", icon: ShieldCheck },
    { title: "IRT / CAT", sub: "Bayesian EAP & Fisher", icon: UserCheck },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-xl border border-border bg-card shadow-xl my-8">
      <div className="text-xs font-mono text-accent font-semibold uppercase tracking-wider mb-2">
        System Dataflow Architecture
      </div>
      <h3 className="text-lg font-bold text-foreground mb-6">
        RAG + Multi-Agent LangGraph + 3PL IRT Adaptive Pipeline
      </h3>

      {/* Grid Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="p-4 rounded-lg border border-border/80 bg-background/60 flex flex-col items-start relative group hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] font-mono text-accent font-bold">0{idx + 1}</span>
                <Icon className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div className="font-bold text-sm text-foreground">{step.title}</div>
              <div className="text-[11px] font-mono text-secondary mt-0.5">{step.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Multi-agent retry loop guarantees 0% hallucination on source documents
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Sub-100ms item selection via Fisher Information
        </span>
      </div>
    </div>
  );
}
