import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] backdrop-blur transition hover:-translate-y-1 hover:border-slate-700/80",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col gap-3">{children}</div>
    </div>
  );
}

