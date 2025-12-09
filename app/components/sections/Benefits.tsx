"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

const benefits = [
  { title: "Rapidez", description: "Iteraciones ágiles, demos frecuentes y entregas puntuales." },
  { title: "Calidad", description: "Código testeado, documentado y con estándares claros." },
  { title: "Comunicación", description: "Reportes semanales, canales abiertos y decisiones transparentes." },
  { title: "Escalabilidad", description: "Arquitecturas modulares listas para crecer sin fricción." },
  { title: "Seguridad", description: "Buenas prácticas, control de accesos y protección de datos." },
  { title: "Stack moderno", description: "Next.js, Flutter, Java/Spring, bases de datos SQL y NoSQL." },
];

export function Benefits() {
  return (
    <Section id="beneficios" background="panel">
      <SectionHeader
        eyebrow="Beneficios"
        title="Trabajar con Devone significa ir más rápido y con más certeza."
        description="Cada decisión está pensada para sostener el negocio a largo plazo sin sacrificar velocidad de salida."
        align="center"
      />

      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {benefits.map((benefit) => (
          <motion.div key={benefit.title} variants={fadeInUp as any}>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

