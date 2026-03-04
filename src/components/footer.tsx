import { BrandIcon } from "@/components/brand-icon";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="section-divider text-muted border-t py-10 text-sm">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bilel Ghoudelbourk</p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/bilel-ghoudelbourk"
              target="_blank"
              rel="noreferrer"
              className="link-soft inline-flex items-center gap-2 transition-colors"
              aria-label="GitHub"
            >
              <BrandIcon name="github" size={16} monochrome className="shrink-0" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/bilel-ghoudelbourk"
              target="_blank"
              rel="noreferrer"
              className="link-soft inline-flex items-center gap-2 transition-colors"
              aria-label="LinkedIn"
            >
              <BrandIcon name="linkedin" size={16} monochrome className="shrink-0" />
              LinkedIn
            </a>
            <a
              href="mailto:ghoudelbourk.bilel@gmail.com"
              className="link-soft inline-flex items-center gap-2 transition-colors"
            >
              <BrandIcon name="gmail" size={16} monochrome className="shrink-0" />
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
