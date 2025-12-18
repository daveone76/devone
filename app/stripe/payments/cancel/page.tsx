import React, { Suspense } from "react";
import CancelClient from "./CancelClient";
import styles from "../styles/payments.module.css";

export const metadata = {
  title: "Pago cancelado — DevOne",
  description: "No se procesó el pago. Puedes intentarlo nuevamente.",
};

export default function Page() {
  return (
    <main className={styles.root}>
      <Suspense
        fallback={
          <div className={styles.root}>
            <div className={styles.card}>Cargando…</div>
          </div>
        }
      >
        <CancelClient />
      </Suspense>
    </main>
  );
}
