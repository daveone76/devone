"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { fadeInUp, stagger } from "../ui/motion";

const contacts = [
  {
    label: "Correo",
    value: "daveone.upport.dev@gmail.com",
    href: "mailto:daveone.upport.dev@gmail.com",
  },
  {
    label: "Teléfono / WhatsApp",
    value: "+52 55 0000 0000",
    href: "https://wa.me/525500000000",
  },
  {
    label: "LinkedIn",
    value: "Próximo perfil público",
    href: "https://www.linkedin.com",
  },
];

export function FinalCTA() {
  return (
    <Section id="contacto" background="muted">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100 ring-1 ring-indigo-300/40"
            variants={fadeInUp}
          >
            CTA final
          </motion.p>
          <motion.div className="space-y-3" variants={fadeInUp}>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Lleva tu idea al siguiente nivel con Devone.
            </h2>
            <p className="text-lg text-slate-200">
              Agendemos una llamada para entender tu reto y definir un plan de
              acción. Sin compromiso, con total claridad.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 text-sm font-semibold text-slate-200"
          >
            <Button href="mailto:daveone.upport.dev@gmail.com">
              Enviar correo
            </Button>
            <Button href="#servicios" variant="ghost">
              Revisar servicios
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
        >
          <Card className="space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-indigo-200">
              Contacto directo
            </p>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-indigo-300/50"
                >
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.12em] text-indigo-200">
                      {contact.label}
                    </p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              Respuesta en menos de 24 horas. También podemos coordinar una
              reunión en video para revisar tu proyecto.
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

