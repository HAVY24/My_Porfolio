"use client";

import { Video, Play, Sparkles } from "lucide-react";

interface ProjectVideoDemoProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
}

export function ProjectVideoDemo({ videoUrl, posterUrl, title }: ProjectVideoDemoProps) {
  return (
    <div className="rounded-2xl border border-accent/30 bg-card p-6 sm:p-8 shadow-2xl my-10 overflow-hidden relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold uppercase tracking-wider mb-1">
            <Video className="w-4 h-4 text-accent" />
            <span>Product Demonstration</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {title || "Live Video Demonstration — EduAI Exam Generator"}
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>HD Video Demo</span>
        </div>
      </div>

      {/* Video Player Container */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border bg-black shadow-lg">
        <video
          controls
          preload="metadata"
          poster={posterUrl || "/images/projects/ai-adaptive-testing.jpg"}
          className="w-full h-full object-contain"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-secondary">
        <span>{title || "Fullstack Application Video Demonstration"}</span>
        <span className="hidden sm:inline">MP4 Video Demo</span>
      </div>
    </div>
  );
}
