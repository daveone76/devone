// ================================
// app/(stripe)/payments/cancel/page.tsx
// ================================


'use client';


import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function PaymentCancelPage() {
const searchParams = useSearchParams();
const router = useRouter();


const redirectUrl = searchParams.get('redirect') ?? '/pricing';


useEffect(() => {
// Permite acceso solo si Stripe redirige
// Si quieres bloquear totalmente, agrega session_id también
}, []);


return (
<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
className="max-w-md w-full rounded-2xl bg-gray-900/80 backdrop-blur shadow-xl p-8 text-center"
>
<motion.h1
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2 }}
className="text-2xl font-semibold mb-3"
>
Pago no completado
</motion.h1>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.35 }}
className="text-gray-300 mb-6"
>
No se realizó ningún cargo. Puedes intentarlo nuevamente o continuar
usando la versión gratuita sin problema.
</motion.p>


<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
className="bg-gray-800 rounded-xl p-4 text-sm text-gray-400 mb-6"
>
Si viste algún error durante el pago, normalmente se resuelve
intentando otra vez.
</motion.div>


<motion.button
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
onClick={() => router.push(redirectUrl)}
className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition font-medium"
>
Volver
</motion.button>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.7 }}
className="text-xs text-gray-500 mt-6"
>
Si el problema persiste, contáctanos.
</motion.p>
</motion.div>
</main>
);
}