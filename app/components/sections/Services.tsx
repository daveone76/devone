"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";
import { JSX } from "react";

type Service = {
  title: string;
  description: string;
  tag: string;
  Icon: () => JSX.Element;
};

const iconClass =
  "h-6 w-6 text-indigo-200 stroke-[1.5] drop-shadow-[0_4px_18px_rgba(129,140,248,0.5)]";

const services: Service[] = [
  {
    title: "Sitios web de alto impacto",
    description:
      "Landing pages y sitios corporativos optimizados para conversión, SEO y velocidad con Next.js.",
    tag: "Web pages",
    Icon: GlobeIcon,
  },
  {
    title: "Aplicaciones web completas",
    description:
      "Dashboards, portales y herramientas internas con arquitectura modular, auth y analítica.",
    tag: "Web apps",
    Icon: WindowIcon,
  },
  {
    title: "Aplicaciones móviles",
    description:
      "Apps en Flutter listas para publicar con diseño nativo, notificaciones y analítica.",
    tag: "Apps móviles",
    Icon: MobileIcon,
  },
  {
    title: "Backend escalable",
    description:
      "APIs seguras con Java y Spring, integración con bases de datos, colas y servicios externos.",
    tag: "Backend (Java)",
    Icon: ServerIcon,
  },
  {
    title: "Consultoría y soporte",
    description:
      "Acompañamiento técnico, auditoría de código, performance y roadmap tecnológico.",
    tag: "Consultoría & soporte",
    Icon: CompassIcon,
  },
];

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeader
        eyebrow="Servicios"
        title="Una oferta completa para lanzar y escalar productos digitales."
        description="Desde la definición del producto hasta el soporte post-lanzamiento, Devone acompaña cada etapa con claridad y excelencia técnica."
        align="center"
      />

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeInUp}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-100 ring-1 ring-indigo-400/30">
                    <service.Icon />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">
                    {service.tag}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <path
        d="M3 12h18M12 3c-2.5 2.8-2.5 14.2 0 18m0 0c2.5-2.8 2.5-14.2 0-18"
        stroke="currentColor"
      />
    </svg>
  );
}

function WindowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" />
      <path d="M4 9h16" stroke="currentColor" />
      <circle cx="8" cy="7" r="0.8" fill="currentColor" />
      <circle cx="11" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <rect
        x="7"
        y="3"
        width="10"
        height="18"
        rx="2"
        stroke="currentColor"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <rect
        x="4"
        y="5"
        width="16"
        height="5"
        rx="1"
        stroke="currentColor"
      />
      <rect
        x="4"
        y="14"
        width="16"
        height="5"
        rx="1"
        stroke="currentColor"
      />
      <circle cx="8" cy="7.5" r="0.9" fill="currentColor" />
      <circle cx="8" cy="16.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <path d="M10 14l1-3 3-1-1 3-3 1z" fill="currentColor" />
    </svg>
  );
}

