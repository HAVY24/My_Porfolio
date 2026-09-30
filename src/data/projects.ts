export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  videoDemo?: string;
  isPrivate?: boolean;
  privateNote?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architectureNotes?: string[];
  technicalDecisions?: { decision: string; rationale: string }[];
  challenges?: string[];
  whatILearned?: string[];
}

export const projectsData: Project[] = [
  {
    slug: "ai-adaptive-testing",
    title: "AI Adaptive Testing",
    subtitle: "RAG + LLM + IRT Adaptive Assessment System",
    description: "An intelligent adaptive testing system combining Retrieval-Augmented Generation, LLM question synthesis, and Item Response Theory.",
    longDescription:
      "Graduation project building an end-to-end Computerized Adaptive Testing (CAT) system. The platform ingests educational documents (PDF/DOCX), generates validated multiple-choice items using RAG and LLMs (Ollama/Llama/LangGraph), and dynamically adjusts question difficulty using Item Response Theory (3PL IRT & Bayesian EAP).",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "LangGraph",
      "Ollama",
      "Llama",
      "ChromaDB",
      "RAG",
      "IRT",
      "CAT",
    ],
    features: [
      "Automated PDF and DOCX document ingestion and semantic text chunking",
      "High-density vector embeddings stored and queried via ChromaDB",
      "RAG pipeline for context-grounded item generation",
      "Multi-agent LangGraph workflow for AI question generation and self-validation",
      "Automated validation retry loop ensuring question quality and taxonomy compliance",
      "Psychometric Item Response Theory (3PL model) engine for item parameter estimation",
      "Bayesian Expected A Posteriori (EAP) ability estimation after every response",
      "Maximum Fisher Information item selection for optimal assessment accuracy",
      "Computerized Adaptive Testing (CAT) dynamic stopping criteria",
      "Interactive candidate performance and ability estimation charts",
    ],
    image: "/images/projects/ai-adaptive-testing.jpg",
    github: "https://github.com/HAVY24/AI-Auto_Generation",
    liveDemo: undefined,
    videoDemo: "/videos/eduai-demo.mp4",
    isPrivate: false,
    overview:
      "Standard static tests fail to accurately measure student competence efficiently. This system leverages state-of-the-art AI generation paired with psychometric measurement to create personalized, highly accurate adaptive evaluations.",
    problem:
      "Manual test item creation is labor-intensive and standard static tests force high-performing and struggling students to answer redundant, uninformative questions.",
    solution:
      "Built a hybrid RAG + LangGraph generator that extracts knowledge from course materials, validates output via multi-agent checks, and feeds generated items into an IRT engine that adapts question difficulty in real time based on user responses.",
    architectureNotes: [
      "Document Ingestion: PDF/DOCX Parsing → Semantic Chunking → Vector Embeddings",
      "Vector Storage: ChromaDB indexing context for instant retrieval",
      "Generation & Validation: LangGraph multi-agent RAG workflow → Quality Check → Automated Retry Loop",
      "Adaptive Test Engine: Item Response Theory (3PL IRT) → Bayesian EAP Ability Estimator → Max Fisher Information Item Selection",
    ],
    technicalDecisions: [
      {
        decision: "LangGraph for LLM Agent Control",
        rationale: "Provides deterministic state graphs for multi-step prompt chaining, rule checking, and retry loops during item generation.",
      },
      {
        decision: "Local LLM via Ollama (Llama)",
        rationale: "Enables private, cost-effective inference without exposing sensitive academic source materials to external APIs.",
      },
      {
        decision: "3PL IRT with Bayesian EAP",
        rationale: "3PL accounts for difficulty, discrimination, and guessing parameters, while EAP guarantees stable score estimates even with short test lengths.",
      },
    ],
    challenges: [
      "Ensuring LLM generated questions strictly strictly adhere to source factual content without hallucinations.",
      "Optimizing vector retrieval speed and parameter calculation so adaptive item selection happens seamlessly in milliseconds.",
    ],
    whatILearned: [
      "Mastered multi-agent graph orchestration (LangGraph), RAG architecture, and local vector database management.",
      "Bridged advanced psychometrics (IRT/CAT) with modern web tech stacks for practical educational applications.",
    ],
  },
  {
    slug: "thap-thap-pagoda",
    title: "Thap Thap Pagoda",
    subtitle: "Buddhist Content & Event Platform",
    description: "A fullstack web platform for Buddhist articles, news, and community events with secure authentication and API documentation.",
    longDescription:
      "Thap Thap Pagoda is a dedicated web application designed to manage and publish Buddhist content, news, and upcoming temple events. Built with modern fullstack practices, it features secure session handling, robust content publishing workflows, and automated API documentation via Swagger.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    features: [
      "Responsive, accessible frontend design optimized for reader engagement",
      "Role-based authentication with dual access and refresh token mechanics",
      "Session management and secure credential handling",
      "RESTful API architecture powering content publishing",
      "PostgreSQL database managed via type-safe Prisma ORM",
      "Interactive Swagger API documentation for backend services",
      "Full content management system for temple news and announcements",
      "Event schedule tracking and community notification hub",
    ],
    image: "/images/projects/thap-thap.jpg",
    github: undefined,
    liveDemo: "https://todinhthapthap.com/",
    videoDemo: "/videos/thap-thap-demo.mp4",
    isPrivate: false,
    overview:
      "The project serves as a digital platform for Thap Thap Pagoda to publish spiritual content, announce temple ceremonies, and maintain an archive of articles for visitors.",
    problem:
      "Traditional communications relied on static announcements and fragmented channels, making it difficult for visitors and devotees to access updated event schedules and verified spiritual articles.",
    solution:
      "Designed and delivered a modern fullstack web platform featuring a clear reader interface alongside an administrative dashboard powered by Express, PostgreSQL, and Prisma.",
    technicalDecisions: [
      {
        decision: "Express + Prisma + PostgreSQL Backend",
        rationale: "Ensures rigid schema safety, relational consistency for content & users, and fast querying for high-read articles.",
      },
      {
        decision: "JWT Dual-Token Refresh Flow",
        rationale: "Maintains high security with short-lived access tokens while preserving seamless user experience via secure HTTP-only refresh tokens.",
      },
      {
        decision: "Swagger API Documentation",
        rationale: "Provides structured interactive documentation for all endpoints, simplifying client-server integration and future maintenance.",
      },
    ],
    challenges: [
      "Implementing resilient token rotation and refresh handling on the client side without disrupting active reading sessions.",
      "Optimizing PostgreSQL queries and Prisma indexing for fast article pagination.",
    ],
    whatILearned: [
      "Deepened understanding of fullstack architecture, stateful vs stateless auth, and REST API design principles.",
      "Gained hands-on experience structuring production-grade database schemas and managing migrations with Prisma.",
    ],
  },
];
