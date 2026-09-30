"use client";

import { motion } from "framer-motion";
import { Server, HardDrive, Shield, Cloud, AppWindow, Cpu } from "lucide-react";

const homelabStack = [
  { name: "Synology", role: "Storage / NAS", icon: HardDrive },
  { name: "Ubuntu Server", role: "Host OS", icon: Server },
  { name: "Docker", role: "Containers", icon: Cpu },
  { name: "Nginx", role: "Reverse Proxy", icon: Shield },
  { name: "Cloudflare", role: "DNS & Tunnel", icon: Cloud },
  { name: "Applications", role: "Self-hosted", icon: AppWindow },
];

export function BeyondCodeSection() {
  return (
    <section className="py-20 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mb-2">
              Personal Tech Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              Beyond Code
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-6">
              When I&apos;m not coding, I enjoy exploring new technologies, building side projects, experimenting with AI, and learning how systems work under the hood.
            </p>
            <p className="text-secondary text-sm leading-relaxed">
              I maintain a personal <strong className="text-foreground">Homelab</strong> to experiment with networking, self-hosting services, and container orchestration in a real infrastructure environment.
            </p>
          </div>

          {/* Right Homelab Flow */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-xl border border-border bg-card shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-4 font-semibold">
                <Server className="w-4 h-4" />
                <span>Homelab Infrastructure Pipeline</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {homelabStack.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.name}
                      className="p-3 rounded-lg border border-border/60 bg-background/50 flex flex-col items-start"
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="text-[10px] font-mono text-accent">0{index + 1}</span>
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="font-bold text-xs text-foreground">{node.name}</div>
                      <div className="text-[10px] font-mono text-secondary mt-0.5">{node.role}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
