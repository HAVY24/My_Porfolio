export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
    ],
  },
  {
    title: "Backend",
    description: "Designing RESTful APIs and server-side business logic",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Prisma ORM" },
      { name: "JWT Auth" },
    ],
  },
  {
    title: "Database",
    description: "Relational data modeling, querying, and schema management",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQL Server" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Containerization, web servers, and self-hosted environments",
    skills: [
      { name: "Docker" },
      { name: "Linux" },
      { name: "Nginx" },
      { name: "Cloudflare" },
      { name: "CI/CD" },
      { name: "Git & GitHub" },
    ],
  },
  {
    title: "AI & Automation",
    description: "LLM integration, RAG architectures, and agentic workflows",
    skills: [
      { name: "RAG" },
      { name: "LangGraph" },
      { name: "Ollama" },
      { name: "ChromaDB" },
      { name: "LLM Applications" },
      { name: "n8n Automation" },
      { name: "AI Coding Tools" },
    ],
  },
];

export const aiTools = [
  { name: "Claude", role: "Architecture design & code reasoning" },
  { name: "Cursor", role: "AI-native IDE pairing & inline refactoring" },
  { name: "ChatGPT", role: "Concept exploration & documentation" },
  { name: "Claude Code", role: "CLI-based agentic code tasks" },
  { name: "Gemini", role: "Multimodal analysis & code review" },
  { name: "Ollama", role: "Local open-weights LLM inference" },
  { name: "n8n", role: "Workflow & webhook automation" },
];
