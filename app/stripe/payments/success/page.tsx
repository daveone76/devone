// ================================
// app/(stripe)/payments/success/page.tsx
// ================================


'use client';


import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function PaymentSuccessPage() {
const searchParams = useSearchParams();
const router = useRouter();


const sessionId = searchParams.get('session_id');
const plan = searchParams.get('plan') ?? 'Pro';
const redirectUrl = searchParams.get('redirect') ?? '/dashboard';


useEffect(() => {
if (!sessionId) {
router.replace('/');
}
}, [sessionId, router]);


if (!sessionId) return null;


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
Bienvenido a {plan}
</motion.h1>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.35 }}
className="text-gray-300 mb-6"
>
Tu suscripción se activó correctamente. A partir de ahora tienes
acceso a todas las funciones premium diseñadas para ayudarte a crecer
y trabajar con mayor control.
</motion.p>


<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
className="bg-gray-800 rounded-xl p-4 text-sm text-gray-400 mb-6"
>
Puedes cerrar esta ventana con tranquilidad. Tu cuenta ya fue
actualizada.
</motion.div>


<motion.button
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
onClick={() => router.push(redirectUrl)}
className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
>
Ir al panel
</motion.button>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.7 }}
className="text-xs text-gray-500 mt-6"
>
Gracias por confiar en nosotros.
</motion.p>
</motion.div>
</main>
);
}