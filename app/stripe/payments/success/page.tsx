import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/payments.module.css";

const SuccessClient = dynamic(() => import("./SuccessClient"), { ssr: false });

export const metadata = {
  title: "Pago exitoso — DevOne",
  description: "Gracias por tu compra. Tu acceso está activo.",
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
        {/* SuccessClient es componente client que usa useSearchParams */}
        <SuccessClient />
      </Suspense>
    </main>
  );
}