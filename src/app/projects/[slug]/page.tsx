import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, ShieldAlert, CheckCircle2, Code2, AlertTriangle, Lightbulb } from "lucide-react";
import { AiArchitectureDiagram } from "@/components/projects/AiArchitectureDiagram";
import { ProjectVideoDemo } from "@/components/projects/ProjectVideoDemo";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Hà Hoàng Vỹ`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        {/* Title Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-accent/10 text-accent">
              {project.subtitle}
            </span>
            {project.isPrivate && (
              <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <ShieldAlert className="w-3 h-3" />
                Private Project
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {project.title}
          </h1>

          <p className="text-lg text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Visual: Video Demo if available, otherwise static screenshot */}
        {project.videoDemo ? (
          <div className="mb-12">
            <ProjectVideoDemo
              videoUrl={project.videoDemo}
              posterUrl={project.image}
              title={`${project.title} — Live Video Demo`}
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-card rounded-xl overflow-hidden border border-border mb-12 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} detailed view`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* External Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-border bg-card/60 mb-12">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-border/40 text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.isPrivate ? (
              <span className="text-xs font-mono text-amber-400">
                {project.privateNote || "Private Repository"}
              </span>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-border/60 hover:bg-border text-xs font-mono font-medium text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent text-accent-foreground text-xs font-mono font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Project Content Body */}
        <div className="space-y-12 text-secondary text-base leading-relaxed">

          {/* Overview */}
          {project.overview && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground tracking-tight border-b border-border/60 pb-2">
                Overview
              </h2>
              <p>{project.overview}</p>
            </section>
          )}

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="p-5 rounded-xl border border-border bg-card/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="p-5 rounded-xl border border-border bg-card/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Architecture Diagram for AI Adaptive Testing */}
          {project.slug === "ai-adaptive-testing" && <AiArchitectureDiagram />}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground tracking-tight border-b border-border/60 pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Decisions */}
          {project.technicalDecisions && project.technicalDecisions.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground tracking-tight border-b border-border/60 pb-2">
                Technical Decisions
              </h2>
              <div className="space-y-3">
                {project.technicalDecisions.map((item) => (
                  <div key={item.decision} className="p-4 rounded-lg border border-border bg-card/50">
                    <div className="font-bold text-foreground text-sm mb-1">{item.decision}</div>
                    <div className="text-xs text-secondary leading-relaxed">{item.rationale}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {project.challenges && (
              <section className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">Challenges</h3>
                <ul className="space-y-2 text-sm">
                  {project.challenges.map((c) => (
                    <li key={c} className="list-disc list-inside text-secondary">
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.whatILearned && (
              <section className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">What I Learned</h3>
                <ul className="space-y-2 text-sm">
                  {project.whatILearned.map((l) => (
                    <li key={l} className="list-disc list-inside text-secondary">
                      {l}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {/* Footer Back Link */}
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
