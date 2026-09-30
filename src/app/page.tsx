import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Journey } from "@/components/journey/Journey";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { HowIBuild } from "@/components/mindset/HowIBuild";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AiEngineeringSection } from "@/components/ai/AiEngineeringSection";
import { CurrentlySection } from "@/components/currently/CurrentlySection";
import { BeyondCodeSection } from "@/components/beyond-code/BeyondCodeSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Journey />
      <ProjectsSection />
      <HowIBuild />
      <SkillsSection />
      <AiEngineeringSection />
      <CurrentlySection />
      <BeyondCodeSection />
      <ContactSection />
    </main>
  );
}
