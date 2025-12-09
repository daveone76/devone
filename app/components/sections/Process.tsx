"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

const steps = [
  {
    title: "Reunión y entendimiento",
    description:
      "Escuchamos objetivos, métricas y contexto del negocio para definir alcance y prioridades.",
  },
  {
    title: "Diseño y prototipado",
    description:
      "Wireframes y UI de alta fidelidad con enfoque en conversión, accesibilidad y marca.",
  },
  {
    title: "Desarrollo y QA",
    description:
      "Implementación ágil con revisiones semanales, ambientes de prueba y control de calidad.",
  },
  {
    title: "Entrega y soporte",
    description:
      "Despliegue, monitoreo y acompañamiento continuo para seguir evolucionando el producto.",
  },
];

export function Process() {
  return (
    <Section id="proceso" background="panel">
      <SectionHeader
        eyebrow="Proceso de trabajo"
        title="Un proceso claro, de principio a fin."
        description="Cada etapa está diseñada para que tengas visibilidad total del avance y un producto listo para crecer."
      />

      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {steps.map((step, index) => (
          <motion.div key={step.title} variants={fadeInUp as any}>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-base font-semibold text-white ring-1 ring-white/15">
                  {`0${index + 1}`}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

