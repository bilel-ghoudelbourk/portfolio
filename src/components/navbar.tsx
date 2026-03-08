"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/alternance/developpeur-ia-quadient", label: "Expérience" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function scrollHomeToTop() {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="nav-shell sticky top-0 z-50 backdrop-blur-xl">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href="/"
            onClick={scrollHomeToTop}
            className="font-display min-w-0 font-semibold tracking-tight"
          >
            <span className="truncate">
              Bilel <span className="hidden text-muted sm:inline">Ghoudelbourk</span>
            </span>
          </Link>

          <nav className="link-soft hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] sm:flex sm:text-xs">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === "/" ? scrollHomeToTop : undefined}
                className={`transition-colors hover:text-[rgb(var(--accent-strong))] ${isActive(item.href) ? "text-[rgb(var(--accent-strong))]" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/CV.pdf"
              className="btn-secondary rounded-full px-3 py-1 transition-colors"
            >
              CV
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="/CV.pdf"
              className="btn-secondary rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              CV
            </a>
            <ThemeToggle />
            <details ref={detailsRef} className="relative shrink-0">
              <summary className="btn-secondary cursor-pointer list-none rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <div className="nav-shell card absolute right-0 top-full z-50 mt-2 w-max origin-top-right bg-[rgba(var(--card-strong),0.92)] p-2 backdrop-blur-xl">
                <nav className="flex flex-col items-stretch">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={item.href === "/" ? scrollHomeToTop : undefined}
                      className={`block rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-[rgba(var(--accent),0.08)] hover:text-[rgb(var(--accent-strong))] ${isActive(item.href)
                        ? "text-[rgb(var(--accent-strong))]"
                        : "text-[rgb(var(--foreground))]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
