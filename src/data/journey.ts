export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  highlights?: string[];
}

export const journeyData: JourneyItem[] = [
  {
    year: "2023",
    title: "Web Development Foundations",
    description: "Started learning web development fundamentals, mastering JavaScript, HTML/CSS, and core browser concepts.",
    highlights: ["JavaScript ES6+", "DOM Manipulation", "Basic Backend Fundamentals"],
  },
  {
    year: "2024",
    title: "Fullstack Ecosystem Expansion",
    description: "Expanded into modern frontend and backend frameworks: React, Node.js, Express, and component-driven architecture.",
    highlights: ["React & Hooks", "Node.js & Express", "RESTful API Design", "Git & Version Control"],
  },
  {
    year: "2025",
    title: "Enterprise Systems & Databases",
    description: "Worked on ERP business management systems, building production REST APIs and relational database architectures with PostgreSQL and Prisma.",
    highlights: ["PostgreSQL & SQL Server", "Prisma ORM", "ERP Business Modules", "JWT Authentication"],
  },
  {
    year: "2026",
    title: "AI Adaptive Testing Graduation Project",
    description: "Architected and built an AI-powered adaptive testing system integrating RAG, LLM multi-agent workflows (LangGraph), and Item Response Theory (IRT).",
    highlights: ["LangGraph & Ollama", "Vector DB (ChromaDB)", "RAG Pipelines", "3PL IRT Psychometrics"],
  },
  {
    year: "2026 — Present",
    title: "AI Engineering & Fullstack Architecture",
    description: "Actively exploring AI engineering, system design, homelab infrastructure, and seeking Fullstack Developer opportunities.",
    highlights: ["System Design", "n8n Automation", "Docker & Homelab", "AI-assisted workflows"],
  },
];
