import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/projects", "/contact", "/alternance/developpeur-ia-quadient"].map((path) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified,
  }));
}
