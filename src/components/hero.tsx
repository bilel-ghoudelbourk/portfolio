"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "@/components/container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const tags = ["IA", "Data Science", "Machine Learning", "LLMs", "RAG", "MLOps"];

const roles = [
  {
    label: "Le profil",
    value: "Travailler sur des sujets variés en IA appliquée, data science, machine learning et LLMs.",
  },
  {
    label: "Le builder",
    value: "Concevoir des solutions claires et utiles, avec une logique produit, terrain et ingénierie.",
  },
  {
    label: "Le pragmatique",
    value: "Aller du prototype à la mise en production avec des bases solides et des enjeux réels.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08] dark:opacity-20" />
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-a absolute -top-24 left-[-120px] h-[380px] w-[380px] rounded-full blur-3xl" />
        <div className="orb-b absolute -top-28 right-[-140px] h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="orb-c absolute bottom-[-180px] left-[20%] h-[420px] w-[420px] rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="eyebrow text-sm"
            >
              Ingénieur IA · Data science
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-none sm:text-7xl"
            >
              Bonjour, je suis
              <span className="mt-1 block text-muted">Bilel Ghoudelbourk.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-muted mt-6 max-w-2xl text-base sm:text-lg"
            >
              Ingénieur IA orienté data science et machine learning, j&apos;ai travaillé sur des
              problématiques variées en IA appliquée, LLMs, analyse de données et mise en
              production, avec des expériences en NLP, computer vision, RAG, MLOps et conception
              de solutions logicielles. Après mon alternance chez Quadient, je recherche un CDI en
              France et suis disponible immédiatement.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 flex flex-wrap gap-2"
            >
              {tags.map((t) => (
                <span key={t} className="chip rounded-full px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-col gap-4 lg:grid lg:grid-cols-3"
            >
              {roles.map((role) => (
                <div key={role.label} className="card card-hover flex min-h-[140px] flex-col justify-between p-5">
                  <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {role.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--foreground))]">{role.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="btn-primary rounded-full px-4 py-2 text-sm font-medium transition-all"
              >
                Voir les projets
              </Link>

              <Link
                href="/contact"
                className="btn-secondary rounded-full px-4 py-2 text-sm transition-colors"
              >
                Me contacter
              </Link>

              <a
                href="/CV.pdf"
                className="btn-secondary rounded-full px-4 py-2 text-sm transition-colors"
              >
                CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-12 grid max-w-xl grid-cols-3 gap-2 sm:gap-4 border-t border-soft pt-8"
            >
              <Stat k="Expérience" v="1 an+" />
              <Stat k="Projets" v="4 majeurs" />
              <Stat k="Domaines" v="IA · Data · ML" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-4 pt-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="card card-hover p-4 sm:p-5">
              <div className="surface-accent relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/me.webp"
                  alt="Bilel Ghoudelbourk"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Bilel Ghoudelbourk</p>
                  <p className="text-muted text-xs">Ingénieur IA · Data science</p>
                </div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="chip flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  Disponible
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45, ease: "easeOut" }}
              className="card p-5 shadow-sm"
              style={{
                background: "linear-gradient(135deg, rgba(var(--card-strong), 1), rgba(var(--card), 0.6))",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--accent-strong))] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--accent-strong))]"></span>
                </div>
                <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Expertise
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[rgb(var(--foreground))] opacity-90">
                IA, data science, machine learning, LLMs, RAG et MLOps, avec un vrai souci de
                clarté, d&apos;ingénierie et de mise en production.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="card card-hover flex flex-col justify-center p-4">
      <p className="text-muted text-xs">{k}</p>
      <p className="mt-1 text-sm font-semibold">{v}</p>
    </div>
  );
}
