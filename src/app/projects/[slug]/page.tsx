import { notFound } from "next/navigation";
import Link from "next/link";
import { BrandIcon } from "@/components/brand-icon";
import { TechnologyPill } from "@/components/technology-pill";
import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.summary,
    };
}

const details: Record<string, React.ReactNode> = {
    "detection-comportementale-langage-naturel": <BehavioralNlpDetail />,
    "prediction-niveaux-nappes-lstm": <GroundwaterLstmDetail />,
    "fusion-images-satellites-transformers": <FusionDetail />,
    "systeme-recherche-information": <InformationRetrievalDetail />,
};

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const content = details[project.slug] ?? (
        <div className="rounded-2xl border border-black/10 bg-black/5 p-8 text-center text-neutral-400 dark:border-white/10 dark:bg-white/5 dark:text-white/40">
            <p className="text-sm">Contenu détaillé à venir...</p>
        </div>
    );

    return (
        <Section title={project.title}>
            <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-neutral-400 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
                        {project.year}
                    </span>
                    {project.tags.map((t) => (
                        <TechnologyPill
                            key={t}
                            label={t}
                            monochromeIcon
                            className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                        />
                    ))}
                </div>

                <p className="max-w-2xl text-base text-neutral-600 dark:text-white/80">{project.summary}</p>

                {content}

                {project.links?.length ? (
                    <div className="flex flex-wrap gap-3">
                        {project.links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm text-neutral-600 hover:bg-black/5 hover:text-neutral-900 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                                {l.label === "GitHub" ? (
                                    <BrandIcon name="github" size={16} monochrome className="shrink-0" />
                                ) : null}
                                {l.label} ↗
                            </a>
                        ))}
                    </div>
                ) : null}

                <div>
                    <Link
                        href="/projects"
                        className="text-sm text-neutral-400 underline decoration-black/20 underline-offset-4 hover:text-neutral-900 dark:text-white/50 dark:decoration-white/20 dark:hover:text-white"
                    >
                        ← Retour aux projets
                    </Link>
                </div>
            </div>
        </Section>
    );
}

function FusionDetail() {
    return (
        <div className="space-y-6">
            <DetailBlock title="Contexte">
                <p>
                    Les satellites ne peuvent pas capturer simultanément une image à haute résolution spatiale
                    <em> et </em> spectrale. L&apos;image panchromatique (Pan) offre de fins détails spatiaux
                    mais est monochrome ; l&apos;image multispectrale (MS) contient l&apos;information
                    couleur/spectrale mais est de résolution plus faible. Le <strong>pansharpening</strong>{" "}
                    vise à fusionner les deux pour obtenir une image MS haute résolution utile en
                    agriculture de précision, surveillance environnementale, cartographie urbaine.
                </p>
            </DetailBlock>

            <DetailBlock title="Problème identifié">
                <ul className="space-y-2">
                    <li>
                        <span className="font-medium text-neutral-800 dark:text-white/90">CNN :</span>{" "}
                        extraction hiérarchique efficace, mais manque de modélisation des dépendances à longue distance.
                    </li>
                    <li>
                        <span className="font-medium text-neutral-800 dark:text-white/90">ViT classique :</span>{" "}
                        capture les relations globales, mais souffre d&apos;un <em>artefact en grille</em> sur
                        l&apos;image de sortie et d&apos;une complexité quadratique en auto-attention.
                    </li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Architecture proposée - PanNesT">
                <p>
                    Basée sur <strong>NesT (Nested Vision Transformer)</strong>, l&apos;architecture
                    traite les images par blocs imbriqués (tokens locaux agrégés hiérarchiquement), ce
                    qui élimine l&apos;artefact en grille et réduit la complexité quadratique. Un module
                    spectral et un module spatial traitent respectivement l&apos;information couleur et les
                    détails géométriques avant fusion.
                </p>
                <p className="mt-3 text-sm text-neutral-400 dark:text-white/60">
                    Une variante hybride (CNN + ViT) a également été implémentée pour comparaison.
                </p>
            </DetailBlock>

            <DetailBlock title="Résultats" highlight>
                <p>
                    Évaluation sur deux datasets satellites : <strong>QuickBird</strong> et{" "}
                    <strong>WorldView-3</strong>. Métriques : UQI, SAM, ERGAS (échelle réduite) et QNR
                    (pleine échelle).
                </p>
                <ul className="mt-3 space-y-2">
                    <li>
                        PanNesT surpasse les CNN de référence (PNN, DiCNN, MSDCNN, DRPNN) sur UQI, SAM et ERGAS.
                    </li>
                    <li>
                        Légèrement inférieur en QNR à certains CNN, compromis attendu face au gain qualitatif visuel.
                    </li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Perspectives">
                <p>
                    L&apos;architecture NesT ouvre la voie à une reformulation du problème en{" "}
                    <strong>modèle génératif d&apos;images</strong> (image-to-image generation), en
                    transposant directement l&apos;architecture vers des Transformers de génération.
                </p>
            </DetailBlock>
        </div>
    );
}

function BehavioralNlpDetail() {
    return (
        <div className="space-y-6">
            <DetailBlock title="Contexte">
                <p>
                    Ce projet a été mené en collaboration avec <strong>Skilit</strong> autour d&apos;un enjeu
                    RH concret : exploiter automatiquement le contenu de lettres de motivation pour faire
                    ressortir des signaux comportementaux utiles à l&apos;évaluation d&apos;un candidat.
                </p>
            </DetailBlock>

            <DetailBlock title="Objectif">
                <p>
                    Concevoir un prototype capable d&apos;analyser du texte en français afin d&apos;identifier
                    des axes comportementaux, avec un double objectif : faciliter le tri initial des
                    candidatures et mieux estimer l&apos;adéquation entre un profil, un poste et une culture
                    d&apos;entreprise.
                </p>
            </DetailBlock>

            <DetailBlock title="Approche technique">
                <p>
                    J&apos;ai développé une pipeline NLP en <strong>Python</strong> basée sur les modèles
                    pré-entraînés de <strong>Hugging Face</strong>, avec un focus sur{" "}
                    <strong>CamemBERT</strong> pour le traitement du français.
                </p>
                <ul className="mt-3 space-y-2">
                    <li>Prétraitement et structuration des données d&apos;entraînement, validation et test.</li>
                    <li>Tokenisation et alignement des annotations pour une tâche de type <strong>NER</strong>.</li>
                    <li>Fine-tuning du modèle avec la Trainer API.</li>
                    <li>Évaluation via matrices de confusion et rapports de classification.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="NER dans le NLP">
                <div className="space-y-5">
                    <div className="space-y-3">
                        <p>
                            Le <strong>NER</strong> sert à repérer dans une phrase les mots importants, puis à
                            leur attribuer une étiquette.
                        </p>
                        <p>
                            En NLP classique, on retrouve souvent des catégories comme <strong>PERSON</strong>,{" "}
                            <strong>ORG</strong>, <strong>DATE</strong> ou <strong>LOC</strong>.
                        </p>
                        <p>
                            Dans ce projet, j&apos;ai repris cette logique pour repérer dans les lettres de
                            motivation des expressions liées à des axes comportementaux.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5">
                        <div className="rounded-2xl bg-[#f3f0eb] p-4 text-[15px] leading-8 text-neutral-800">
                            <span>En </span>
                            <ExampleTag tone="date" label="2024" tag="DATE" />
                            <span>, </span>
                            <ExampleTag tone="person" label="Bilel" tag="PERSON" />
                            <span> a développé un prototype </span>
                            <ExampleTag tone="skill" label="Python" tag="SKILL" />
                            <span> avec </span>
                            <ExampleTag tone="org" label="Skilit" tag="ORG" />
                            <span> pour analyser des lettres de motivation et détecter des traits comportementaux.</span>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500 dark:text-white/60">
                            Exemple simple : le modèle découpe la phrase, isole les mots utiles, puis leur
                            associe une étiquette exploitable pour l&apos;analyse.
                        </p>
                    </div>
                </div>
            </DetailBlock>

            <DetailBlock title="Expérimentation">
                <p>
                    Une phase d&apos;augmentation de données a également été testée à partir des embeddings de
                    mots et de calculs de centroïdes par axe comportemental, afin de générer des exemples
                    proches des annotations existantes.
                </p>
                <p className="mt-3 text-sm text-neutral-400 dark:text-white/60">
                    Cette piste n&apos;a pas produit des résultats suffisamment satisfaisants pour être retenue
                    comme solution principale.
                </p>
            </DetailBlock>

            <DetailBlock title="Résultat" highlight>
                <p>
                    Le projet a permis de valider la faisabilité d&apos;une détection automatique de traits
                    comportementaux dans des textes en français, en montrant l&apos;intérêt d&apos;une approche
                    par fine-tuning de modèles Transformers sur un cas d&apos;usage métier appliqué aux RH.
                </p>
            </DetailBlock>

            <DetailBlock title="Contraintes">
                <p>
                    Le dataset utilisé n&apos;était pas public et provenait directement de l&apos;entreprise
                    partenaire, ce qui a renforcé l&apos;importance du prétraitement, de la qualité des
                    annotations et de l&apos;évaluation expérimentale.
                </p>
            </DetailBlock>
        </div>
    );
}

function GroundwaterLstmDetail() {
    return (
        <div className="space-y-6">
            <DetailBlock title="Contexte">
                <p>
                    Ce projet porte sur la prévision du niveau des nappes phréatiques en Australie à partir de
                    séries temporelles issues de plusieurs puits. Chaque série regroupe le niveau de nappe
                    observé ainsi que des variables environnementales comme les précipitations, la température,
                    l&apos;évapotranspiration et l&apos;indice de végétation.
                </p>
            </DetailBlock>

            <DetailBlock title="Objectif">
                <p>
                    L&apos;objectif était de construire des modèles capables d&apos;anticiper les variations du
                    niveau de la nappe, tout en tenant compte des différences locales entre régions et entre
                    puits. L&apos;enjeu principal était donc de comparer plusieurs stratégies de modélisation,
                    du modèle spécifique au puits jusqu&apos;au modèle général affiné.
                </p>
            </DetailBlock>

            <DetailBlock title="Exploration des données">
                <p>
                    Le travail a commencé par une analyse exploratoire des séries temporelles et de leur
                    couverture. Plusieurs jeux de données comportaient des valeurs manquantes, ce qui a imposé
                    une étape de préparation rigoureuse avant l&apos;entraînement.
                </p>
                <ul className="mt-3 space-y-2">
                    <li>Imputation par <strong>KNN</strong>.</li>
                    <li>Interpolation linéaire.</li>
                    <li>Combinaison KNN + interpolation linéaire, retenue comme meilleure option.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Stratégie de modélisation">
                <p>
                    Le cœur du projet repose sur des réseaux de neurones <strong>LSTM</strong>, adaptés aux
                    données séquentielles. Plusieurs niveaux de généralisation ont été comparés afin de mesurer
                    l&apos;effet du contexte local sur la qualité des prédictions.
                </p>
                <ul className="mt-3 space-y-2">
                    <li>Un modèle spécifique entraîné indépendamment pour chaque puits.</li>
                    <li>Un modèle général appris sur l&apos;ensemble des puits.</li>
                    <li>Un fine-tuning du modèle global par région, notamment pour Victoria et Queensland.</li>
                    <li>Un affinage final par puits pour capturer les spécificités locales.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Protocole d'évaluation">
                <p>
                    Pour chaque série, les 12 derniers mois ont été conservés pour le test, tandis que le reste
                    des observations servait à l&apos;entraînement. Ce découpage permettait d&apos;évaluer la
                    capacité du modèle à prédire l&apos;évolution future du niveau de nappe.
                </p>
            </DetailBlock>

            <DetailBlock title="Résultat" highlight>
                <p>
                    Le projet montre qu&apos;une approche purement globale n&apos;est pas toujours suffisante
                    pour ce type de données hydrologiques. Les résultats soulignent l&apos;importance
                    d&apos;adapter les modèles aux caractéristiques locales afin d&apos;améliorer la précision et
                    la fiabilité des prévisions.
                </p>
            </DetailBlock>

            <DetailBlock title="Perspectives">
                <p>
                    Des extensions naturelles du projet seraient d&apos;intégrer davantage de variables
                    environnementales, de tester des architectures séquentielles plus avancées et d&apos;étudier
                    des approches spatio-temporelles pour mieux relier les puits entre eux.
                </p>
            </DetailBlock>
        </div>
    );
}

function InformationRetrievalDetail() {
    return (
        <div className="space-y-6">
            <DetailBlock title="Contexte">
                <p>
                    Ce mémoire de licence porte sur la conception et la réalisation d&apos;un{" "}
                    <strong>système de recherche d&apos;information</strong>. L&apos;objectif était de
                    comprendre concrètement toute la chaîne de recherche, depuis l&apos;indexation des
                    documents jusqu&apos;à la restitution des résultats pertinents pour une requête utilisateur.
                </p>
            </DetailBlock>

            <DetailBlock title="Objectif">
                <p>
                    Le projet ne se limitait pas à créer une simple interface de recherche. Il visait surtout
                    à comparer plusieurs variantes d&apos;un SRI afin de mesurer l&apos;effet des
                    traitements linguistiques, des méthodes de pondération et des modèles d&apos;appariement sur
                    la qualité des résultats, puis à explorer des outils NLP plus avancés pour améliorer les
                    performances de recherche.
                </p>
            </DetailBlock>

            <DetailBlock title="Architecture technique">
                <p>
                    L&apos;application a été développée avec <strong>Java J2EE</strong> dans une architecture{" "}
                    <strong>MVC</strong>, avec <strong>Servlet</strong> pour la logique de contrôle,{" "}
                    <strong>JSP</strong> pour l&apos;interface et <strong>JDBC</strong> pour l&apos;accès aux
                    données. Le stockage des structures manipulées par le moteur de recherche reposait sur{" "}
                    <strong>MongoDB</strong>, et l&apos;application était déployée sur <strong>GlassFish</strong>.
                </p>
            </DetailBlock>

            <DetailBlock title="Chaîne de traitement">
                <p>
                    Le système suit les grandes étapes d&apos;un moteur de recherche :
                    segmentation des documents, normalisation des termes, pondération, indexation dans un
                    fichier inverse, puis appariement entre requête et documents.
                </p>
                <ul className="mt-3 space-y-2">
                    <li>Tokenisation des contenus textuels.</li>
                    <li>Normalisation par <strong>lemmatisation</strong> ou <strong>radicalisation Porter</strong>.</li>
                    <li>Construction des structures d&apos;indexation pour la recherche.</li>
                    <li>Calcul de scores de pertinence selon plusieurs modèles.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Modèles implémentés">
                <p>
                    Plusieurs variantes ont été développées pour comparer différentes façons de représenter
                    les documents et de calculer leur pertinence face à une requête.
                </p>
                <ul className="mt-3 space-y-2">
                    <li>Modèle vectoriel avec pondération <strong>TF-IDF</strong> et similarité cosinus.</li>
                    <li>Modèle probabiliste <strong>BM25</strong>.</li>
                    <li>Modèles de langue <strong>Unigram</strong>, <strong>Bigram</strong> et <strong>Trigram</strong>.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Évaluation">
                <p>
                    Les différentes versions du système ont été évaluées sur la collection de test{" "}
                    <strong>Cranfield</strong>, en suivant le protocole <strong>TREC</strong>. L&apos;analyse
                    repose sur plusieurs mesures de précision, notamment la précision à différents rangs, la{" "}
                    <strong>MAP</strong> et la <strong>R-précision</strong>.
                </p>
            </DetailBlock>

            <DetailBlock title="Résultats principaux" highlight>
                <ul className="space-y-2">
                    <li>La <strong>lemmatisation</strong> a donné de meilleurs résultats que la radicalisation Porter.</li>
                    <li><strong>BM25</strong> a dépassé le modèle vectoriel TF-IDF sur cette collection.</li>
                    <li>Parmi les modèles de langue, <strong>Unigram</strong> s&apos;est montré plus efficace que Bigram et Trigram.</li>
                    <li>L&apos;étude montre aussi l&apos;intérêt d&apos;outils NLP plus avancés, comme <strong>BERT</strong>, pour améliorer la pertinence des résultats.</li>
                </ul>
            </DetailBlock>

            <DetailBlock title="Limites et ouverture">
                <p>
                    Le mémoire met en évidence les limites des approches basées uniquement sur
                    les mots-clés : perte du contexte, ambiguïté lexicale, mismatch sémantique et faible
                    expressivité des requêtes courtes. La dernière partie ouvre donc vers des solutions plus
                    avancées comme l&apos;indexation sémantique, <strong>LSI</strong>, <strong>LDA</strong>,
                    Word2Vec et <strong>BERT</strong>, utilisés pour améliorer les performances de recherche
                    en prenant mieux en compte le contexte des termes.
                </p>
            </DetailBlock>

            <DetailBlock title="Ce que montre ce projet">
                <p>
                    Ce travail m&apos;a permis d&apos;implémenter un moteur de recherche de bout en bout, mais
                    surtout d&apos;adopter une vraie démarche expérimentale : comparer plusieurs modèles,
                    évaluer leurs performances et relier les résultats obtenus aux limites théoriques de la
                    recherche d&apos;information, tout en identifiant l&apos;apport d&apos;outils NLP modernes pour
                    améliorer les performances.
                </p>
            </DetailBlock>
        </div>
    );
}

function DetailBlock({ title, children, highlight }: { title: string; children: React.ReactNode; highlight?: boolean }) {
    return (
        <div className={`rounded-2xl border p-6 ${highlight
            ? 'border-[rgba(var(--accent),0.35)] bg-[rgba(var(--accent),0.07)] dark:bg-[rgba(var(--accent),0.1)]'
            : 'border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5'
            }`}>
            <h3 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${highlight
                ? 'text-[rgb(var(--accent-strong))]'
                : 'text-neutral-400 dark:text-white/50'
                }`}>
                {title}
            </h3>
            <div className="space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-white/75">{children}</div>
        </div>
    );
}

function ExampleTag({
    label,
    tag,
    tone,
}: {
    label: string;
    tag: string;
    tone: "person" | "org" | "date" | "skill" | "axis";
}) {
    const tones = {
        person: "bg-violet-200 text-violet-950",
        org: "bg-cyan-200 text-cyan-950",
        date: "bg-emerald-200 text-emerald-950",
        skill: "bg-amber-200 text-amber-950",
        axis: "bg-rose-200 text-rose-950",
    };

    return (
        <span className={`mx-1 inline-flex items-center gap-2 rounded-lg px-2.5 py-1 align-middle font-medium ${tones[tone]}`}>
            <span>{label}</span>
            <span className="text-[11px] font-bold uppercase tracking-wide opacity-75">{tag}</span>
        </span>
    );
}
