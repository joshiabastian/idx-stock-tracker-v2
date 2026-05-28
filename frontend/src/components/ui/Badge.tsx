import type { ReactNode } from "react";

type Tone = "bull" | "bear" | "neutral" | "warn" | "info" | "accent" | "purple";

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

const tones: Record<Tone, string> = {
  bull: "text-bull bg-bull/10",
  bear: "text-bear bg-bear/10",
  neutral: "text-text-muted bg-surface-2",
  warn: "text-warn bg-warn/10",
  info: "text-info bg-info/10",
  accent: "text-accent bg-accent/10",
  purple: "text-purple bg-purple/10",
};

export function Badge({ tone = "neutral", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SignalBadge({ signal }: { signal: "BUY" | "SELL" | "HOLD" | "WATCH" }) {
  const tone: Tone = signal === "BUY" ? "bull" : signal === "SELL" ? "bear" : "neutral";
  return <Badge tone={tone}>{signal}</Badge>;
}
