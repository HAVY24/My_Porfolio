"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ShieldAlert, ArrowRight, Code2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
    >
      <div>
        {/* Project Screenshot / Placeholder Container */}
        <div className="relative aspect-[16/9] w-full bg-border/30 overflow-hidden border-b border-border">
          {!imageError ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-card via-border/30 to-card">
              <Code2 className="w-12 h-12 text-accent/60 mb-2" />
              <span className="font-bold text-foreground text-lg">{project.title}</span>
              <span className="text-xs font-mono text-secondary mt-1">{project.subtitle}</span>
            </div>
          )}

          {/* Badges overlay */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
            {project.isPrivate && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium backdrop-blur-md">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Private Project</span>
              </div>
            )}
            {project.videoDemo && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-mono font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Video Demo</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="text-xs font-mono text-accent font-semibold mb-1">
            {project.subtitle}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Private note if private */}
          {project.isPrivate && project.privateNote && (
            <div className="mb-4 text-xs font-mono text-amber-400/90 bg-amber-500/5 p-2.5 rounded border border-amber-500/20">
              {project.privateNote}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-0.5 rounded bg-border/50 text-foreground/80 group-hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-border/30 text-secondary">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/40 mt-auto pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline group/link"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors p-1"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors p-1"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
