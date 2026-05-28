const INDICATORS = [
  { label: "RSI(14)", value: "67.2", note: "Overbought zone", tone: "text-warn" },
  { label: "VOL MA20", value: "1.4×", note: "Above average", tone: "text-bull" },
  { label: "VWAP", value: "Rp 3.055", note: "Price > VWAP", tone: "text-warn" },
  { label: "ATR(14)", value: "Rp 70", note: "SL: 3.050", tone: "text-info" },
  { label: "ICHIMOKU", value: "Above cloud", note: "TK cross ✓", tone: "text-purple" },
  { label: "PATTERN", value: "Engulfing", note: "Conf. 89%", tone: "text-accent" },
];

export function IndicatorStrip() {
  return (
    <div className="grid grid-cols-6 border-t border-border bg-surface shrink-0">
      {INDICATORS.map((ind, i) => (
        <div
          key={ind.label}
          className={`px-3 py-2.5 ${i > 0 ? "border-l border-border" : ""}`}
        >
          <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider">
            {ind.label}
          </div>
          <div className={`font-mono text-sm font-semibold mt-0.5 ${ind.tone}`}>
            {ind.value}
          </div>
          <div className="text-[10px] text-text-muted">{ind.note}</div>
        </div>
      ))}
    </div>
  );
}
