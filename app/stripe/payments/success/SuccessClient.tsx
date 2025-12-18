"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "../styles/payments.module.css";

type Props = {
  planName?: string;
  mainMessage?: string;
  ctaLabel?: string;
};

export default function SuccessClient({ planName = "Pro", mainMessage = "Gracias por ser parte de Pro", ctaLabel = "Volver al inicio" }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      router.replace("/");
    }
    // Could fetch order details server-side using sessionId via fetch to an API route
  }, [searchParams, router]);

  return (
    <div className={`${styles.card} ${styles.fadeInUp}`}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Transacción completada</div>
        <h1 className={styles.title}>{mainMessage}</h1>
        <p className={styles.subtitle}>Tu acceso a <strong>{planName}</strong> está activo. Revisa tu correo para los detalles y empieza a usar las funciones avanzadas.</p>
        <div className={styles.meta}>
          <div className={styles.small}>Si necesitas asistencia, contáctanos desde tu panel o responde el correo de confirmación.</div>
        </div>
      </div>

      <div className={`${styles.visual} ${styles.successTone} ${styles.subtlePulse}`} aria-hidden>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="12" fill="#10B981" fillOpacity="0.12"/>
          <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#065f46" fontSize="20" fontWeight="700">PRO</text>
        </svg>
      </div>
    </div>
  );
}
