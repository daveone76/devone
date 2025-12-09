import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "none" | "muted" | "panel";
};

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  children,
  className,
  background = "none",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24",
        background === "muted" && "bg-slate-900/50 border-y border-slate-800/70",
        background === "panel" && "bg-slate-900/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[110px]" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-[100px]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "mx-auto text-center max-w-3xl items-center"
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200 ring-1 ring-white/10 ring-offset-0",
            align === "center" ? "self-center" : "self-start"
          )}
        >
          <span className="h-1 w-1 rounded-full bg-cyan-300" />
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-slate-300 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

