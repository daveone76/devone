"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "../styles/payments.module.css";

type Props = {
  planName?: string;
  mainMessage?: string;
  ctaLabel?: string;
};

export default function CancelClient({ planName = "Pro", mainMessage = "No se realizó ningún cargo", ctaLabel = "Volver al inicio" }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      router.replace("/");
    }
  }, [searchParams, router]);

  return (
    <div className={`${styles.card} ${styles.fadeInUp}`}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Pago cancelado</div>
        <h1 className={styles.title}>{mainMessage}</h1>
        <p className={styles.subtitle}>No se ha procesado ningún cargo para <strong>{planName}</strong>. Puedes reintentar la compra cuando lo desees o explorar alternativas.</p>
        <div className={styles.meta}>
          <div className={styles.small}>Tu carrito o plan no fue modificado. Si necesitas ayuda, contacta soporte.</div>
        </div>
      </div>

      <div className={`${styles.visual} ${styles.cancelTone} ${styles.subtlePulse}`} aria-hidden>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="12" fill="#F59E0B" fillOpacity="0.12"/>
          <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="700">Pago</text>
        </svg>
      </div>
    </div>
  );
}
