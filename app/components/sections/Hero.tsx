"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { fadeInUp, stagger } from "../ui/motion";

const stats = [
  { label: "Proyectos entregados", value: "35+" },
  { label: "Tecnologías dominadas", value: "10+" },
  { label: "Tiempo promedio de entrega", value: "3-6 semanas" },
];

export function Hero() {
  return (
    <Section id="inicio" className="pt-10 sm:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Devone · Onesimo David Viveros
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-slate-800">
              Diseño y desarrollo de productos digitales
            </span>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Construimos experiencias digitales que inspiran confianza y
              resultados.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Sitios web, aplicaciones y backend robusto. Trabajo cercano,
              entregas puntuales y calidad de código que soporta el crecimiento
              de tu negocio.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#contacto">Trabajemos juntos</Button>
            <Button href="#servicios" variant="ghost">
              Ver servicios
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 top-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/20 p-4 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_28%)]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/hero-visual.svg"
                alt="Ilustración de productos digitales Devone"
                width={720}
                height={640}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 backdrop-blur"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              Roadmap claro y acompañamiento técnico continuo.
            </motion.div>

            <motion.div
              className="absolute -right-6 bottom-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/30 to-cyan-400/30 px-5 py-3 text-right text-sm font-semibold text-white shadow-lg backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
            >
              <p>Experiencias web modernas</p>
              <p className="text-xs text-indigo-100/80">
                UI/UX · Performance · Seguridad
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

