import { Card } from "../../components/ui/Card";
import { CandleChart } from "../../components/ui/CandleChart";
import { Badge } from "../../components/ui/Badge";
import { ChangePct } from "../../components/ui/ChangePct";

const TIMEFRAMES = ["1D", "1W", "1M", "3M", "1Y", "ALL"];
const INDICATORS = [
  { label: "VWAP", color: "bg-warn" },
  { label: "Ichi", color: "bg-purple" },
  { label: "RSI", color: "bg-info" },
];

export function ChartPanel() {
  return (
    <Card padded={false} className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <span className="font-mono font-semibold">TLKM</span>
        <span className="text-text-muted text-xs">Telkom Indonesia</span>
        <Badge tone="bull">BUY</Badge>
        <div className="ml-2 flex items-baseline gap-2">
          <span className="font-mono text-xl font-semibold">3.120</span>
          <ChangePct value={2.63} />
          <span className="text-text-dim text-xs font-mono">+80 today</span>
        </div>

        <div className="ml-auto flex items-center gap-1">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              className={`px-2 py-1 text-xs font-mono rounded ${
                tf === "1M"
                  ? "bg-surface-2 text-text"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {tf}
            </button>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          {INDICATORS.map((ind) => (
            <button
              key={ind.label}
              className="px-2 py-1 text-xs font-mono text-text-muted hover:text-text flex items-center gap-1"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${ind.color}`} />
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-2 py-2 min-h-0">
        <CandleChart height={300} />
      </div>
    </Card>
  );
}
