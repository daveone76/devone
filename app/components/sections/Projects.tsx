"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Plataforma B2B para distribuidores",
    description:
      "Portal web con catálogo dinámico, roles y dashboards de rendimiento. Integración con APIs de inventario.",
    image: "/project-1.svg",
    tags: ["Next.js", "Java", "PostgreSQL"],
  },
  {
    title: "App móvil para logística",
    description:
      "Aplicación Flutter con tracking en tiempo real, notificaciones y panel administrativo web.",
    image: "/project-2.svg",
    tags: ["Flutter", "Maps", "Push"],
  },
  {
    title: "Landing + CRM ligero",
    description:
      "Sitio de lanzamiento orientado a conversión con formularios conectados a CRM y automatizaciones.",
    image: "/project-3.svg",
    tags: ["SEO", "Automations", "Analytics"],
  },
];

export function Projects() {
  return (
    <Section id="proyectos">
      <SectionHeader
        eyebrow="Portafolio"
        title="Proyectos que demuestran precisión, diseño y performance."
        description="Espacio listo para mostrar el portafolio completo. Aquí algunos ejemplos de cómo abordamos distintos retos."
        align="center"
      />

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeInUp as any}>
            <Card className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={420}
                  height={260}
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-indigo-100 ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

