import { Container } from "@/components/container";

export function About() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow text-xs font-semibold uppercase tracking-widest">
              À propos
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Qui suis-je ?
            </h2>
          </div>

          <div className="text-muted space-y-4 leading-relaxed">
            <p>
              Titulaire d&apos;un <strong>Master en Intelligence Artificielle</strong> et d&apos;un{" "}
              <strong>Master en Génie Logiciel</strong>, je conçois des systèmes IA de bout en
              bout, de la préparation des données et de l&apos;entraînement des modèles jusqu&apos;à
              leur intégration et leur mise en production.
            </p>
            <p>
              Lors de mon alternance chez <strong>Quadient</strong> à Avignon, j&apos;ai travaillé
              sur des pipelines de données géospatiales, des modèles de computer vision, un
              système RAG multilingue et un agent conversationnel. Je recherche un{" "}
              <strong>CDI en France</strong>, disponible immédiatement.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <span className="flex items-center gap-1.5">
                <span>📍</span> France
              </span>
              <span className="flex items-center gap-1.5">
                <span>🌐</span> Français · Anglais · Arabe
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎯</span> Disponible immédiatement
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
