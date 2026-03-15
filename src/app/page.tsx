import Link from "next/link";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredSlugs = [
    "apply-ai",
    "quixo-game",
    "detection-comportementale-langage-naturel",
    "prediction-niveaux-nappes-lstm",
  ];
  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => project !== undefined);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />

      <Section
        title={
          <Link href="/projects" className="hover:text-[rgb(var(--accent-strong))] transition-colors">
            Projets
          </Link>
        }
        subtitle="Sélection de projets académiques et R&D."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="btn-primary rounded-full px-6 py-3 text-sm font-medium transition-all"
          >
            Voir tous les projets
          </Link>
        </div>
      </Section>
    </>
  );
}
