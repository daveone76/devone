import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devone.site"),
  title: "Devone | Diseño y desarrollo web por Onesimo David Viveros",
  description:
    "Devone crea sitios web, aplicaciones y soluciones backend con un enfoque moderno, seguro y escalable. Trabajo directo con Onesimo David Viveros.",
  keywords: [
    "Devone",
    "Onesimo David Viveros",
    "desarrollo web",
    "Next.js",
    "Flutter",
    "Java backend",
    "consultoría tecnológica",
  ],
  authors: [{ name: "Onesimo David Viveros", url: "https://devone.site" }],
  openGraph: {
    title: "Devone | Desarrollo web y apps a medida",
    description:
      "Diseño y desarrollo de sitios web, aplicaciones móviles y backend robusto. Acompañamiento técnico completo con Devone.",
    url: "https://devone.site",
    siteName: "Devone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devone | Desarrollo web y apps a medida",
    description:
      "Diseño y desarrollo de sitios web, apps y backend moderno con Devone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
