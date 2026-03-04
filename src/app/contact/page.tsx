"use client";

import { BrandIcon } from "@/components/brand-icon";
import { Section } from "@/components/section";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setFeedback("Le formulaire est temporairement indisponible. Vous pouvez me contacter directement par email.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...data }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFeedback("Merci. Je vous répondrai dans les plus brefs délais.");
        form.reset();
      } else {
        setStatus("error");
        setFeedback("L'envoi a échoué. Réessayez dans un instant ou contactez-moi par email.");
      }
    } catch {
      setStatus("error");
      setFeedback("L'envoi a échoué. Vérifiez votre connexion ou contactez-moi par email.");
    }
  }

  return (
    <Section
      title="Contact"
      subtitle="Disponible immédiatement pour un CDI en France — n'hésitez pas à me contacter."
    >
      <div className="grid gap-6 sm:grid-cols-[1fr_1.1fr] sm:items-start">

        <div className="card p-6 sm:p-8">
          <p className="eyebrow text-xs font-semibold uppercase tracking-widest mb-5">
            Me contacter
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:ghoudelbourk.bilel@gmail.com"
              className="flex items-center gap-3 rounded-xl p-3 surface-soft transition-colors hover:border-[rgba(var(--accent),0.3)]"
            >
              <BrandIcon name="gmail" size={18} monochrome className="shrink-0 text-accent" />
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-medium">ghoudelbourk.bilel@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/bilel-ghoudelbourk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl p-3 surface-soft transition-colors hover:border-[rgba(var(--accent),0.3)]"
            >
              <BrandIcon name="linkedin" size={18} monochrome className="shrink-0 text-accent" />
              <div>
                <p className="text-xs text-muted">LinkedIn</p>
                <p className="font-medium">bilel-ghoudelbourk</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl p-3 surface-soft">
              <span className="text-lg shrink-0">📍</span>
              <div>
                <p className="text-xs text-muted">Localisation</p>
                <p className="font-medium">France</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/CV.pdf"
              className="btn-secondary inline-flex rounded-full px-4 py-2 text-sm transition-colors"
            >
              Télécharger le CV ↓
            </a>
          </div>
        </div>

        {showForm ? (
          <div className="card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold">Envoyer un message</h3>
              <button
                onClick={() => { setShowForm(false); setStatus("idle"); setFeedback(null); }}
                className="text-sm text-muted transition-colors hover:text-[rgb(var(--foreground))]"
              >
                Fermer ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">Nom</label>
                <input
                  type="text" id="name" name="name" required
                  className="surface-soft border-soft w-full rounded-lg px-4 py-2.5 text-sm transition-colors focus:border-[rgb(var(--ring))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--ring))]"
                  placeholder="Votre nom"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email" id="email" name="email" required
                  className="surface-soft border-soft w-full rounded-lg px-4 py-2.5 text-sm transition-colors focus:border-[rgb(var(--ring))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--ring))]"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  className="surface-soft border-soft w-full resize-none rounded-lg px-4 py-2.5 text-sm transition-colors focus:border-[rgb(var(--ring))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--ring))]"
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary mt-1 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all disabled:opacity-70"
              >
                {status === "loading" ? "Envoi en cours…" : status === "success" ? "Message envoyé !" : "Envoyer le message"}
              </button>

              {feedback && (
                <p
                  aria-live="polite"
                  className={`text-center text-sm font-medium ${status === "success" ? "text-emerald-500 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>
        ) : (
          <div className="card flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="text-4xl">✉️</div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Une opportunité, une question, une collaboration ? Cliquez sur <strong className="text-[rgb(var(--foreground))]">M&apos;écrire</strong> pour m&apos;envoyer un message directement.
            </p>
            <button
              onClick={() => { setShowForm(true); setStatus("idle"); setFeedback(null); }}
              className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium transition-all"
            >
              M&apos;écrire →
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
