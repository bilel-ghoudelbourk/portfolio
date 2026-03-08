import Link from "next/link";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Section
      title="Projets"
      subtitle="Découvrez une sélection de mes projets et réalisations."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-neutral-400 underline decoration-black/20 underline-offset-4 hover:text-neutral-900 dark:text-white/50 dark:decoration-white/20 dark:hover:text-white"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </Section>
  );
}
