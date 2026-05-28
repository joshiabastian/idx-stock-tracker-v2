import { CandleChart } from "../../components/ui/CandleChart";

const TIMEFRAMES = ["1D", "1W", "1M", "3M", "6M", "1Y", "ALL"];
const INDICATORS = [
  { label: "VWAP", color: "bg-warn", active: true },
  { label: "Ichimoku", color: "bg-purple", active: true },
  { label: "BB", color: "bg-info", active: false },
  { label: "EMA", color: "bg-bull", active: false },
];

export function ChartArea() {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-b border-border">
      <div className="flex items-center gap-3 px-4 py-2 border-b border-border text-xs">
        <div className="flex items-center gap-1">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              className={`px-2 py-1 font-mono rounded ${
                tf === "1M" ? "bg-surface-2 text-text" : "text-text-muted hover:text-text"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        <div className="w-px h-4 bg-border" />
        <div className="flex items-center gap-3">
          {INDICATORS.map((ind) => (
            <button
              key={ind.label}
              className={`flex items-center gap-1.5 font-mono ${
                ind.active ? "text-text" : "text-text-dim hover:text-text"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${ind.active ? ind.color : "border border-text-dim"}`}
              />
              {ind.label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3 font-mono text-text-muted">
          <span>O <span className="text-text">3.040</span></span>
          <span>H <span className="text-text">3.140</span></span>
          <span>L <span className="text-text">3.020</span></span>
          <span>C <span className="text-text">3.120</span></span>
        </div>
      </div>
      <div className="flex-1 min-h-0 px-2">
        <CandleChart height={380} showVolume />
      </div>
    </div>
  );
}
