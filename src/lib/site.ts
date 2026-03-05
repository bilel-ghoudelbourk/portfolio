const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

const siteUrl = rawSiteUrl
  ? rawSiteUrl.startsWith("http")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`
  : "http://localhost:3000";

export const siteConfig = {
  name: "Bilel Ghoudelbourk",
  role: "Ingénieur IA, data science, machine learning et LLMs",
  description:
    "Portfolio de projets en IA appliquée, data science, machine learning, LLMs, RAG, ingénierie et mise en production.",
  url: siteUrl,
  ogImage: "/og-image.png",
};
