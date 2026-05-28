import { liveSignals } from "../../lib/mockData";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export function LiveSignals() {
  return (
    <Card padded={false}>
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <span className="font-semibold text-sm tracking-wide">HIT / FAIL</span>
        <span className="text-[10px] text-text-dim font-mono">auto · 5m</span>
      </div>
      <div>
        {liveSignals.map((s, i) => (
          <div
            key={i}
            className="px-4 py-3 border-b border-border/50 last:border-0 hover:bg-surface-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono font-semibold text-sm">{s.ticker}</span>
              <Badge
                tone={s.strength === "Strong" ? "bull" : s.strength === "Medium" ? "warn" : "info"}
              >
                {s.strength}
              </Badge>
              <span className="ml-auto text-[10px] text-text-dim font-mono">
                {s.time} · {s.timeframe}
              </span>
            </div>
            <div className="text-xs mt-1.5">{s.pattern}</div>
            <div className="text-[10px] text-text-dim font-mono mt-1">
              RSI {s.rsi} · VWAP {s.vwap > 0 ? "+" : ""}
              {s.vwap.toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
