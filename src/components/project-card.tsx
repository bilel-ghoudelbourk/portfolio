import Image from "next/image";
import Link from "next/link";
import { BrandIcon, resolveBrandIcon } from "@/components/brand-icon";
import { TechnologyPill } from "@/components/technology-pill";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const showImage = Boolean(project.image) && project.slug !== "apply-ai";

  return (
    <article className="card card-hover group flex h-full flex-col p-6 transition-colors">
      <Link href={`/projects/${project.slug}`} className="block">
        {showImage ? (
          <div className="surface-accent relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </Link>

      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors hover:text-[rgb(var(--accent-strong))]"
        >
          <h3 className="text-base font-semibold">{project.title}</h3>
        </Link>
        <span className="text-muted shrink-0 text-xs">{project.year}</span>
      </div>

      <p className="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechnologyPill
            key={tag}
            label={tag}
            monochromeIcon
            className="chip rounded-full px-3 py-1 text-xs"
          />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
        <Link href={`/projects/${project.slug}`} className="link-accent transition-colors">
          Voir le projet <span className="text-muted ml-0.5 opacity-70">→</span>
        </Link>

        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="link-accent inline-flex items-center gap-2 transition-colors"
          >
            {(() => {
              const iconName = resolveBrandIcon(link.label);
              if (iconName) {
                return <BrandIcon name={iconName} size={15} monochrome className="shrink-0" />;
              }
              return null;
            })()}
            {link.label} <span className="text-muted ml-0.5 opacity-70">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}
