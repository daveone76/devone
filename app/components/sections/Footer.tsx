import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui/section";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", value: "Próximamente" },
  { label: "GitHub", href: "https://github.com", value: "Repositorios seleccionados" },
  {
    label: "Behance/Dribbble",
    href: "https://www.behance.net",
    value: "Portafolio UI en preparación",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <Section className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/logo-devone.svg"
                  alt="Devone logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-white">Devone</p>
                <p className="text-xs uppercase tracking-[0.16em] text-indigo-200">
                  Onesimo David Viveros
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Diseño y desarrollo de páginas web, aplicaciones web y móviles,
              backend en Java y consultoría tecnológica. Creamos experiencias
              digitales listas para crecer.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.16em] text-indigo-200">
                Contacto
              </p>
              <Link
                href="mailto:daveone.upport.dev@gmail.com"
                className="text-sm font-semibold text-white transition hover:text-indigo-200"
              >
                daveone.upport.dev@gmail.com
              </Link>
              <p className="text-sm text-slate-300">CDMX · LATAM · Remoto</p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.16em] text-indigo-200">
                Redes
              </p>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-between rounded-lg px-2 py-1 transition hover:text-indigo-100"
                  >
                    <span>{social.label}</span>
                    <span className="text-xs text-slate-400">{social.value}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} Devone. Todos los derechos reservados.
        </div>
      </Section>
    </footer>
  );
}

