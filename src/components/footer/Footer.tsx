import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/HAVY24";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/h%C3%A0-v%E1%BB%B9-001ab3278/";

  return (
    <footer className="py-12 border-t border-border bg-card/40 text-xs text-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="text-foreground font-medium">
            Designed & built by Hà Hoàng Vỹ.
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="font-mono text-[11px] text-secondary">
            Next.js · TypeScript · Node.js
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px]">© 2026 Hà Hoàng Vỹ</span>
          <div className="flex items-center gap-3 border-l border-border pl-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            {linkedinUrl !== "#" && linkedinUrl !== "TODO_LINKEDIN_URL" && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
