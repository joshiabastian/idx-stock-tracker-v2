import { MarketTicker } from "../sections/dashboard/MarketTicker";
import { WatchlistPanel } from "../sections/dashboard/WatchlistPanel";
import { MorningBrief } from "../sections/dashboard/MorningBrief";
import { ChartPanel } from "../sections/dashboard/ChartPanel";
import { IndicatorStrip } from "../sections/dashboard/IndicatorStrip";
import { LiveSignals } from "../sections/dashboard/LiveSignals";
import { NewsSentiment } from "../sections/dashboard/NewsSentiment";

export function Dashboard() {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <MarketTicker />
      <div className="flex flex-1 min-h-0">
        <WatchlistPanel />
        <main className="flex-1 flex flex-col min-h-0 p-3 gap-3 overflow-auto">
          <MorningBrief />
          <ChartPanel />
          <IndicatorStrip />
        </main>
        <aside className="w-80 border-l border-border p-3 flex flex-col gap-3 overflow-auto shrink-0">
          <LiveSignals />
          <NewsSentiment />
        </aside>
      </div>
    </div>
  );
}
