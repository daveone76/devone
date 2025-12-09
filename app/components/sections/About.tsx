"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

const highlights = [
  "Más de 5 años de experiencia en el desarrollo de software",
  "Especialista Aplicaciones web y móviles, desarrollo backend, consultoría tecnológica y soporte técnico",
  "Procesos claros: descubrimiento, diseño, desarrollo y soporte",
];

const focus = [
  "Velocidad y performance con arquitecturas modernas",
  "Diseño centrado en la conversión y experiencia",
  "Calidad de código, pruebas y documentación",
];

export function About() {
  return (
    <Section id="sobre-devone" background="muted">
      <SectionHeader
        eyebrow="Sobre Devone"
        title="Nuestro objetivo es idear y desarrollar cada proyecto con precisión y estrategia."
        description="Nos involucramos de principio a fin: definición de la idea, diseño, desarrollo y acompañamiento. Entregamos productos listos para crecer."
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div
            className="space-y-4 text-slate-200"
            variants={fadeInUp as any}
          >
            <p className="text-lg">
              Combino estrategia, diseño y código para lanzar soluciones que se
              sienten rápidas y confiables. Trabajo con equipos de negocio y
              marketing para asegurar que la tecnología responda a objetivos
              claros.
            </p>
            <div className="grid gap-3 text-sm sm:text-base">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 text-slate-200 ring-1 ring-white/10"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp as any}>
            <Button href="#contacto">Agendar una reunión</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp as any}>
        
          <Card className="h-full space-y-6 p-7">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/owner-portrait.svg"
                  alt="Onesimo David Viveros, fundador de Devone"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-indigo-200">
                  Founder · Tech Lead
                </p>
                <p className="text-lg font-semibold text-white">
                  Onesimo David Viveros
                </p>
                <p className="text-sm text-slate-400">
                  Desarrollo end-to-end · Consultoría
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/5">
              <p className="text-slate-200">
                “Cada entrega debe sentirse premium. Eso significa código limpio,
                decisiones claras y un diseño que guíe a la acción.”
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-200">
              {focus.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

