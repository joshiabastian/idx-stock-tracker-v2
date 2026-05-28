import { Card } from "../../components/ui/Card";
import { ProgressBar } from "../../components/ui/ProgressBar";

interface IndicatorCardProps {
  label: string;
  value: string;
  note: string;
  tone: "accent" | "warn" | "info" | "purple" | "bear";
  progress: number;
  leftLabel: string;
  rightLabel: string;
}

const VALUE_COLORS: Record<IndicatorCardProps["tone"], string> = {
  accent: "text-accent",
  warn: "text-warn",
  info: "text-info",
  purple: "text-purple",
  bear: "text-bear",
};

function IndicatorCard({ label, value, note, tone, progress, leftLabel, rightLabel }: IndicatorCardProps) {
  return (
    <Card>
      <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider">
        {label}
      </div>
      <div className={`font-mono text-xl font-semibold mt-1 ${VALUE_COLORS[tone]}`}>
        {value}
      </div>
      <div className="text-[11px] text-text-muted mt-0.5 mb-2">{note}</div>
      <ProgressBar
        value={progress}
        tone={tone}
        leftLabel={leftLabel}
        rightLabel={rightLabel}
      />
    </Card>
  );
}

const CARDS: IndicatorCardProps[] = [
  { label: "RSI (14)", value: "67.2", note: "Approaching overbought", tone: "accent", progress: 67, leftLabel: "30", rightLabel: "70" },
  { label: "Anchored VWAP", value: "Rp 3.055", note: "Price 2.1% above", tone: "warn", progress: 60, leftLabel: "-3", rightLabel: "5" },
  { label: "ATR (14)", value: "Rp 70", note: "SL 3.050 · TP 3.260", tone: "info", progress: 35, leftLabel: "Tight", rightLabel: "Wide" },
  { label: "Volume MA20", value: "1.4×", note: "88.3M vs avg 63.1M", tone: "accent", progress: 70, leftLabel: "0.5×", rightLabel: "2×" },
  { label: "Ichimoku", value: "Above cloud", note: "TK cross conf. ✓", tone: "purple", progress: 80, leftLabel: "Below", rightLabel: "Above" },
  { label: "Candlestick", value: "Bullish Engulfing", note: "Pattern conf. 89%", tone: "accent", progress: 89, leftLabel: "0%", rightLabel: "100%" },
];

export function IndicatorCards() {
  return (
    <div className="grid grid-cols-3 gap-3 p-3 shrink-0">
      {CARDS.map((c) => (
        <IndicatorCard key={c.label} {...c} />
      ))}
    </div>
  );
}
