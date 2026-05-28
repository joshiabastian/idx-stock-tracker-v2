import { indices } from "../../lib/mockData";
import { ChangePct } from "../../components/ui/ChangePct";

export function MarketTicker() {
  return (
    <div className="h-11 border-b border-border bg-bg flex items-center px-4 gap-6 text-xs shrink-0 overflow-x-auto">
      {indices.map((idx) => (
        <div key={idx.label} className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-text-muted font-mono">{idx.label}</span>
          <span className="font-mono font-medium">{idx.value}</span>
          <ChangePct value={idx.changePct} className="text-[11px]" />
        </div>
      ))}
      <div className="ml-auto flex items-center gap-2 whitespace-nowrap">
        <span className="text-text-muted font-mono">Sentiment Index:</span>
        <span className="font-mono text-bull">+0.34</span>
        <div className="w-20 h-1 bg-surface-2 rounded-full overflow-hidden">
          <div className="h-full bg-bull rounded-full" style={{ width: "67%" }} />
        </div>
      </div>
    </div>
  );
}
