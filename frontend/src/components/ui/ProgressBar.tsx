interface Props {
  value: number;
  min?: number;
  max?: number;
  tone?: "accent" | "warn" | "info" | "bear" | "purple";
  leftLabel?: string;
  rightLabel?: string;
}

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  accent: "bg-accent",
  warn: "bg-warn",
  info: "bg-info",
  bear: "bg-bear",
  purple: "bg-purple",
};

export function ProgressBar({
  value,
  min = 0,
  max = 100,
  tone = "accent",
  leftLabel,
  rightLabel,
}: Props) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div className="w-full">
      <div className="h-1 w-full bg-surface-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${toneClass[tone]} rounded-full`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {(leftLabel || rightLabel) && (
        <div className="flex justify-between text-[10px] text-text-dim mt-1 font-mono">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  );
}
