import { useState } from "react";
import { TickerHeader } from "../sections/watchlist/TickerHeader";
import { ChartArea } from "../sections/watchlist/ChartArea";
import { QuantamentalScore } from "../sections/watchlist/QuantamentalScore";
import { AIAnalysis } from "../sections/watchlist/AIAnalysis";
import { IndicatorCards } from "../sections/watchlist/IndicatorCards";
import { watchlist } from "../lib/mockData";
import { SignalBadge } from "../components/ui/Badge";
import { ChangePct } from "../components/ui/ChangePct";
import { Sparkline } from "../components/ui/Sparkline";

export function Watchlist() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const selected = watchlist.find((t) => t.code === selectedCode);

  if (!selected) {
    return (
      <div className="flex flex-col flex-1 min-h-0">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="text-xs font-semibold tracking-wide">
            WATCHLIST <span className="text-text-dim font-mono">· {watchlist.length}</span>
          </div>
          <div className="flex gap-3 text-xs text-text-muted">
            <button className="text-text">All</button>
            <button className="hover:text-text">Bull</button>
            <button className="hover:text-text">Bear</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {watchlist.map((t) => (
            <button
              key={t.code}
              onClick={() => setSelectedCode(t.code)}
              className="w-full px-4 py-3 flex items-center gap-4 hover:bg-surface-2 border-b border-border/50"
            >
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold">{t.code}</span>
                  <SignalBadge signal={t.signal} />
                </div>
                <div className="text-xs text-text-dim mt-0.5">{t.name}</div>
              </div>
              <Sparkline
                data={t.sparkline}
                positive={t.changePct >= 0}
                width={80}
                height={28}
              />
              <div className="text-right w-24">
                <div className="font-mono text-sm">
                  {t.price.toLocaleString("id-ID")}
                </div>
                <ChangePct value={t.changePct} className="text-xs" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <TickerHeader ticker={selected} onBack={() => setSelectedCode(null)} />
      <div className="flex flex-1 min-h-0">
        <div className="flex-1 flex flex-col min-h-0">
          <ChartArea />
          <IndicatorCards />
        </div>
        <aside className="w-96 border-l border-border p-3 flex flex-col gap-3 overflow-auto shrink-0">
          <QuantamentalScore />
          <AIAnalysis />
        </aside>
      </div>
    </div>
  );
}
