import Link from "next/link";
import { Container } from "@/components/container";
import { TechnologyPill } from "@/components/technology-pill";

const experiences = [
    {
        title: "Développeur IA",
        org: "Quadient",
        location: "Avignon, France",
        period: "Sept. 2024 — Août 2025",
        detailsHref: "/alternance/developpeur-ia-quadient",
        recommendationHref: "/lettre-recommandation-bilel.pdf",
        bullets: [
            "Pipelines ETL géospatiaux (Rasterio, Shapely)",
            "Modèles Computer Vision — annotation, entraînement, validation",
            "Système RAG multilingue (LangChain, ChromaDB/FAISS, AWS Bedrock)",
            "Agent conversationnel (POC) orchestrant des outils via LLMs",
            "Application web cartographique full-stack (React/Next.js, MySQL)",
        ],
        tech: ["Python", "PyTorch", "RAG", "LangChain", "AWS", "Docker", "React"],
    },
    {
        title: "Stagiaire Machine Learning",
        org: "Wamanu",
        location: "Alger, Algérie",
        period: "2022",
        bullets: [
            "Système ML pour estimer les prix immobiliers",
            "Analyse des données, conception et amélioration des modèles",
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    },
];

const education = [
    {
        title: "Master Intelligence Artificielle",
        org: "Université d'Avignon — CERI",
        location: "Avignon, France",
        period: "2023 — 2025",
    },
    {
        title: "Master Ingénierie du Logiciel et Traitement de l'Information",
        org: "Université M'Hamed Bougara",
        location: "Boumerdes, Algérie",
        period: "2021 — 2023",
    },
    {
        title: "Licence Systèmes Informatiques",
        org: "Université M'Hamed Bougara",
        location: "Boumerdes, Algérie",
        period: "2018 — 2021",
    },
];

export function Experience() {
    return (
        <section className="section-divider border-t py-14">
            <Container>
                <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
                    <div>
                        <p className="eyebrow text-xs font-semibold uppercase tracking-widest">
                            Parcours
                        </p>
                        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Expériences & Formation
                        </h2>
                    </div>

                    <div className="space-y-10">

                        <div>
                            <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-widest">
                                Expériences professionnelles
                            </p>
                            <div className="relative space-y-4">
                                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgba(var(--accent),0.18)]" />
                                {experiences.map((item) => (
                                    <div key={item.org + item.period} className="relative pl-8">
                                        <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[rgb(var(--accent-strong))] bg-[rgb(var(--background-elevated))]" />
                                        <div className="card p-4">
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <div>
                                                    <p className="text-sm font-semibold">{item.title}</p>
                                                    <p className="text-muted text-xs">
                                                        {item.org} · {item.location}
                                                    </p>
                                                </div>
                                                <span className="chip shrink-0 rounded-full px-2 py-0.5 text-xs">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <ul className="mt-3 space-y-1">
                                                {item.bullets.map((b, j) => (
                                                    <li key={j} className="text-muted flex gap-2 text-xs">
                                                        <span className="text-accent mt-0.5 shrink-0">—</span>
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {item.tech.map((t) => (
                                                    <TechnologyPill
                                                        key={t}
                                                        label={t}
                                                        monochromeIcon
                                                        className="chip rounded-full px-2 py-0.5 text-xs"
                                                    />
                                                ))}
                                            </div>
                                            {item.detailsHref || item.recommendationHref ? (
                                                <div className="mt-4 flex flex-wrap gap-4">
                                                    <Link
                                                        href={item.detailsHref ?? "#"}
                                                        className="link-accent text-sm font-medium transition-colors"
                                                    >
                                                        Voir détails →
                                                    </Link>
                                                    {item.recommendationHref ? (
                                                        <a
                                                            href={item.recommendationHref}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="link-accent text-sm font-medium transition-colors"
                                                        >
                                                            Lettre de recommandation ↗
                                                        </a>
                                                    ) : null}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-widest">
                                Formation
                            </p>
                            <div className="relative space-y-4">
                                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgba(var(--accent),0.18)]" />
                                {education.map((item) => (
                                    <div key={item.org + item.period} className="relative pl-8">
                                        <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[rgba(var(--accent),0.6)] bg-[rgb(var(--background-elevated))]" />
                                        <div className="card p-4">
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <div>
                                                    <p className="text-sm font-semibold">{item.title}</p>
                                                    <p className="text-muted text-xs">
                                                        {item.org} · {item.location}
                                                    </p>
                                                </div>
                                                <span className="chip shrink-0 rounded-full px-2 py-0.5 text-xs">
                                                    {item.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
