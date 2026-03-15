import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "apply-ai",
    title: "ApplyAI : assistant IA local-first pour les candidatures",
    summary:
      "Application full stack en Python/FastAPI et Next.js pour centraliser l'analyse de CV, le matching avec une offre, la génération de lettres de motivation et la recherche d'annonces en direct avec scraping Playwright et support multi-LLM.",
    year: "2026",
    tags: ["Python", "FastAPI", "Next.js", "Playwright", "LangChain", "Ollama"],
    featured: true,
    image: "/projects/apply-ai/01-landing-screen.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bilel-ghoudelbourk/ApplyAI",
      },
      {
        label: "Démo Live",
        href: "https://apply-ai-demo.vercel.app/",
      },
    ],
  },
  {
    slug: "detection-comportementale-langage-naturel",
    title: "Détection automatique de traits comportementaux en langage naturel",
    summary:
      "Prototype NLP en Python développé avec Skilit pour analyser des lettres de motivation et identifier des axes comportementaux. Fine-tuning de CamemBERT via une approche NER, avec prétraitement, expérimentation d'augmentation de données et évaluation du modèle.",
    year: "2024",
    tags: ["Python", "NLP", "CamemBERT", "Hugging Face", "NER"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bilel-ghoudelbourk/Automatic-Detection-of-Behavioral-Characteristics-in-Written-French-Natural-Language",
      },
    ],
  },
  {
    slug: "prediction-niveaux-nappes-lstm",
    title: "Prédiction des niveaux de nappes phréatiques par réseaux LSTM",
    summary:
      "Projet de prévision des niveaux de nappes phréatiques en Australie à partir de séries temporelles environnementales. Comparaison de modèles LSTM par puits, globaux et fine-tunés par région, avec imputation des valeurs manquantes via KNN et interpolation linéaire.",
    year: "2024",
    tags: ["Python", "LSTM", "Séries temporelles", "KNN", "Fine-tuning"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bilel-ghoudelbourk/La-Prevision-du-Niveau-des-Nappes-Phreatiques-par-les-RN-LSTM-",
      },
    ],
  },
  {
    slug: "quixo-game",
    title: "Quixo : Implémentation en Python avec Interface Graphique et IA",
    summary:
      "Développement du jeu Quixo en Python avec interface Tkinter, mode multijoueur et IA (Minimax/Alpha-Beta). Architecture basée sur des design patterns (MVC, State, Prototype), tests avec 100% de couverture (Pytest) et pipeline CI/CD GitHub Actions.",
    year: "2024",
    tags: ["Python", "Tkinter", "Intelligence Artificielle", "Minimax", "Design Patterns", "CI/CD", "Pytest"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bilel-ghoudelbourk/Quixo-Game",
      },
    ],
  },
  {
    slug: "fusion-images-satellites-transformers",
    title: "Mémoire de Master : Fusion d'images satellites par Transformers",
    summary:
      "Pansharpening par deep learning : fusion d'images panchromatiques et multispectrales pour produire des images satellites haute résolution. Proposition d'une architecture originale basée sur NesT (Nested Vision Transformer) — PanNesT — surpassant les CNN de référence sur QuickBird et WorldView-3.",
    year: "2023",
    tags: ["Vision Transformer", "Pansharpening", "Télédétection", "PyTorch", "NesT"],
    featured: true,
  },
  {
    slug: "systeme-recherche-information",
    title: "Mémoire de Licence : Système de recherche d'information",
    summary:
      "Conception et réalisation d'un système de recherche d'information en Java/J2EE. Implémentation et comparaison de plusieurs modèles d'indexation et d'appariement, avec évaluation sur la collection Cranfield et ouverture vers des outils NLP comme BERT pour améliorer les performances de recherche.",
    year: "2021",
    tags: ["Java", "J2EE", "BM25", "Recherche d'information", "MongoDB"],
    featured: false,
  },
];
