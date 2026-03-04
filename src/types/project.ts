export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  links?: ProjectLink[];
  image?: string; // ex: "/projects/rag.webp"
  featured?: boolean;
};
