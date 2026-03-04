import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ZoomableImage } from "@/components/zoomable-image";

export const metadata: Metadata = {
  title: "Développeur IA en alternance · Quadient",
  description:
    "Détail des missions réalisées en alternance chez Quadient : application web, computer vision, géospatial, RAG multilingue et agent conversationnel.",
};

export default function QuadientAlternancePage() {
  return (
    <Section
      title="Développeur IA en alternance · Quadient"
      subtitle="Alternance menée à Avignon entre septembre 2024 et août 2025, au sein de l'équipe Data/AI, sur des sujets mêlant développement logiciel, vision par ordinateur, géomatique, RAG et agents conversationnels."
    >
      <div className="space-y-8">
        <div className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="chip rounded-full px-3 py-1">Quadient</span>
            <span className="chip rounded-full px-3 py-1">Avignon, France</span>
            <span className="chip rounded-full px-3 py-1">Sept. 2024 - Août 2025</span>
          </div>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-white/75">
              <p>
                Chez Quadient, j&apos;ai travaillé sur plusieurs briques complémentaires autour des
                smart lockers : collecte de données terrain, vision par ordinateur, enrichissement
                géospatial, assistance support par RAG et POC d&apos;agent conversationnel.
              </p>
              <p>
                Ces missions abordaient divers horizons afin de cartographier la concurrence,
                d&apos;identifier automatiquement les installations et les boîtes sur le terrain,
                d&apos;estimer le meilleur emplacement de pose et de fluidifier le support des résidents
                et des utilisateurs par l&apos;intelligence artificielle (générative et structurée).
              </p>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/60">
                Ce que j&apos;ai livré
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-white/75">
                <li>Application web interactive pour collecter des données terrain.</li>
                <li>Modèles de détection (Mask-RCNN, Faster-RCNN) des casiers et des boîtes.</li>
                <li>Processus d&apos;annotation massif sur Label Studio (1 505 images).</li>
                <li>Pipeline ETL d&apos;analyse spatiale (GHSL, Rasterio, R-tree).</li>
                <li>Système RAG de support technique (ChromaDB, LangChain, Nova Lite).</li>
                <li>Agent conversationnel « ParcelBot » (Strands Agents, Bedrock).</li>
              </ul>
              <div className="mt-5">
                <a
                  href="/lettre-recommandation-bilel.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-black/5 hover:text-neutral-950 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  Voir la lettre de recommandation ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <DetailBlock
          title="1. Application web de collecte terrain"
          imageSrc="/alternance/application-web-carte.webp"
          imageAlt="Carte interactive"
          imageCaption="Carte interactive permettant de visualiser les lockers existants."
        >
          <p>
            Dans le but de collecter des photos des casiers intelligents (smart lockers) concurrents
            et d&apos;en évaluer la densité de présence sur le territoire, nous avons conçu une
            application complète pour le terrain.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Côté utilisateur :</strong> visualisation des lockers avec carte Leaflet,
              ajout de nouveaux emplacements via la saisie d&apos;informations (nombre de boîtes, dimensions, etc.),
              et ajout de photos terrain depuis mobile.
            </li>
            <li>
              <strong>Mes contributions :</strong> développement de l&apos;historique complet (<em>My History</em>),
              de la gestion des comptes utilisateurs (<em>My Account</em>) et interfaçage avec les API Node.js/MySQL en React.
            </li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="2. Détection d'images et segmentation (Mask-RCNN)"
          imageSrc="/alternance/mask-rcnn-result.jpg"
          imageAlt="Résultat de segmentation Mask-RCNN"
          imageCaption="Segmentation visuelle des lockers et des starters via Mask-RCNN avec score de confiance."
        >
          <p>
            Cette brique s&apos;appuie sur un modèle de deep learning Mask-RCNN destiné à
            extraire les formes globales (instances) des lockers et de leurs composants annexes (starters).
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              Entraînement sur un jeu de données de 291 images, en calculant l&apos;IoU (Intersection
              over Union) et le coefficient de Dice, complété d&apos;un vaste réentraînement sur 1505 images
              annotées, appliquant diverses transformations aléatoires en augmentation de données.
            </li>
            <li>Stack technique : Python, PyTorch et suivi d&apos;expériences sur Jupyter et visualisations Matplotlib.</li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="3. Annotation de données avec Label Studio"
          imageSrc="/alternance/pipeline-annotation-cv.png"
          imageAlt="Diagramme de flux CI/CD de l'annotation"
          imageCaption="Schéma du pipeline d'annotation et d'entraînement en vision par ordinateur."
        >
          <p>
            Afin de soutenir l&apos;entraînement robuste du modèle mentionné précédemment, Label Studio
            a joué un rôle clé pour la création d&apos;annotations de qualité.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              Création d&apos;un pipeline automatisé pour charger et attribuer les URL vers les données massives.
            </li>
            <li>
              Conception d&apos;un cycle continu d&apos;annotation hybride : injection des premières prédictions du
              modèle comme base, puis alignement manuel soigné par polygones par l&apos;équipe sur 1 505 cibles distinctes,
              résolvant le défi des formes irrégulières et obliques sur la voie publique.
            </li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="4. Annotation et détection des boîtes dans les lockers"
          imageSrc="/alternance/faster-rcnn-boxes.jpg"
          imageAlt="Détection des compartiments"
          imageCaption="Détection massive des boîtes d&apos;un casier via Faster-RCNN, illustrant les boîtes encadrées avec leur probabilité."
        >
          <p>
            Au-delà du coffre général, le défi était de compter précisément les emplacements internes (boîtes).
            Aucune approche algorithmique classique (clustering, OpenCV), ni aucun modèle de fondation
            (par exemple Segment Anything), ne permettait d&apos;atteindre le niveau de certitude voulu.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Chaîne de redressement :</strong> réalisation d&apos;une homographie pour redresser géométriquement l&apos;inclinaison liée à l&apos;angle de prise de vue.
            </li>
            <li>
              Production d&apos;un fichier conséquent : 36 000 boîtes annotées manuellement avec grande minutie.
            </li>
            <li>
              <strong>Modélisation finale :</strong> utilisation de l&apos;architecture Faster-RCNN ResNet-50. Résultats probants avec un score F1 atteignant 95,48% pour les compartiments.
            </li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="5. Analyse de rentabilité des emplacements de lockers"
          imageSrc="/alternance/ghsl-pipeline.png"
          imageAlt="Pipeline GHSL Loader"
          imageCaption="Architecture d'extraction cartographique (GHSL Loader) vers des cubes de données Parquet via un index R-tree."
        >
          <p>
            Comment justifier de déposer un casier à un endroit ou un autre ? En exploitant des données massives.
            L&apos;objectif de ce projet ETL a été de joindre les emplacements cartographiques à la matrice de population
            Global Human Settlement Layer (GHSL).
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              Développement d&apos;un moteur (<em>GHSL Loader</em>) en Python lisant les rasters lourds avec <strong>Rasterio</strong>, tout
              en utilisant un <strong>index spatial R-tree</strong> et les Shapefiles pour ne manipuler en RAM que les portions utiles d&apos;Europe.
            </li>
            <li>
              Extraction de la typologie d&apos;urbanisation (SMOD), population (POP), nature des bâtis (BUILT)
              et distances aux zones de chaleur (OpenStreetMap) réunis dans des cubes Parquet formatés, prêts
              pour la prédiction de rentabilité et corrélés au chiffre d&apos;affaires espéré d&apos;une installation.
            </li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="6. Support technique multilingue par RAG"
          imageSrc="/alternance/rag-architecture.png"
          imageAlt="Schéma d'architecture RAG"
          imageCaption="Système exploitant ChromaDB, LangChain et Amazon Bedrock."
        >
          <p>
            Simplifier la vie des agents de support en retrouvant presque instantanément des similarités dans
            les anciens appels d&apos;intervention clients : c&apos;est le rôle de l&apos;architecture RAG construite via LangChain.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              Nettoyage des archives d&apos;incident avec découpage par jeton, suppression du surplus de code et remise en forme.
            </li>
            <li>
              Recherche dans l&apos;espace vectoriel (ChromaDB) d&apos;historiques utilisant Sentence-Transformers
              (encodage de 768 dimensions), incluant le support natif pour le japonais, le français et l&apos;anglais.
            </li>
            <li>
              Injection dans Amazon Bedrock (Nova Lite) pour générer des synthèses prêtes à être transmises aux clients
              lorsqu&apos;un rapprochement au-dessus d&apos;un certain seuil de certitude est validé.
            </li>
          </ul>
        </DetailBlock>

        <DetailBlock
          title="7. Preuve de concept : chatbot agentique « ParcelBot »"
          images={[
            {
              src: "/alternance/parcelbot-architecture.png",
              alt: "Schéma d'architecture Strands de ParcelBot",
              caption: "Architecture de fonctionnement avec Strands : Entrée, Synthèse (LLM), Outil, Action et Réponse."
            },
            {
              src: "/alternance/parcelbot-chat.png",
              alt: "Extrait interface ParcelBot",
              caption: "Interaction autonome avec ParcelBot en environnement POC."
            }
          ]}
        >
          <p>
            Plutôt que des arbres de décisions, j&apos;ai été chargé de travailler sur un chatbot d&apos;un genre différent.
            Le POC « ParcelBot » est basé sur la bibliothèque open-source Strands Agents, qui s&apos;appuie
            sur un cycle « Thought, Act, Observe ».
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              Déploiement en agent autonome utilisant Bedrock Nova Pro, intégrant les notions de mémoire et d&apos;état persistant au format JSON.
            </li>
            <li>
              Accès aux outils : FAQ, suivi des trackers de colis, création d&apos;un retour de litige, mode vacances pour stopper les pénalités temporaires... L&apos;agent planifie en toute autonomie quand et comment chaîner l&apos;usage de ces API à l&apos;échelle.
            </li>
          </ul>
        </DetailBlock>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/" className="link-accent text-sm font-medium transition-colors">
            ← Retour à l&apos;accueil
          </Link>
          <Link href="/projects" className="link-accent text-sm font-medium transition-colors">
            Voir aussi les projets
          </Link>
        </div>
      </div>
    </Section>
  );
}

type DetailImage = {
  src: string;
  alt: string;
  caption: string;
};

function DetailBlock({
  title,
  imageSrc,
  imageAlt,
  imageCaption,
  images,
  children,
}: {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  images?: DetailImage[];
  children: React.ReactNode;
}) {
  const displayImages = images || (imageSrc ? [{ src: imageSrc, alt: imageAlt || "", caption: imageCaption || "" }] : []);

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className={`grid gap-8 ${displayImages.length > 0 ? 'lg:grid-cols-[1fr_0.85fr]' : ''} items-start`}>
        <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-white/75">
          {children}
        </div>

        {displayImages.length > 0 && (
          <div className="space-y-6">
            {displayImages.map((img, idx) => (
              <figure key={idx} className="group overflow-hidden rounded-2xl border border-black/10 bg-neutral-50/50 dark:border-white/10 dark:bg-white/5">
                <div className="p-3">
                  <ZoomableImage
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="h-auto w-full rounded-xl object-contain shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                {img.caption && (
                  <figcaption className="border-t border-black/5 bg-white px-4 py-3 text-[13px] leading-relaxed text-neutral-500 dark:border-white/5 dark:bg-white/5 dark:text-white/60">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
