"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-slate-900 shadow-[0_10px_40px_-12px_rgba(129,140,248,0.7)]"
      : "bg-slate-900/40 text-slate-100 border border-slate-800 hover:border-slate-700";

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
          styles,
          className
        )}
      >
        {children}
        <span className="flex items-center justify-center rounded-full bg-white/20 px-2 py-1 text-xs text-white transition group-hover:translate-x-0.5">
          {icon ?? "→"}
        </span>
      </Link>
    </motion.div>
  );
}

