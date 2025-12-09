"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

const testimonials = [
  {
    name: "Cliente confidencial",
    role: "Ecommerce · CDMX",
    quote:
      "“Próximamente. Reservamos este espacio para casos de éxito detallados con métricas y resultados medibles.”",
  },
  {
    name: "Cliente confidencial",
    role: "Startup B2B · LATAM",
    quote:
      "“Próximamente. Historias de cómo Devone acompañó la estrategia tecnológica de punta a punta.”",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonios">
      <SectionHeader
        eyebrow="Testimonios"
        title="Experiencias de clientes, pronto con casos detallados."
        description="Mientras preparamos el portafolio público, mantenemos este espacio listo para publicar resultados y aprendizajes concretos."
        align="center"
      />

      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.name} variants={fadeInUp as any}>
            <Card className="h-full space-y-4 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-white ring-1 ring-indigo-300/40">
                  ✦
                </span>
                <div>
                  <p className="text-base font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-200">{testimonial.quote}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

