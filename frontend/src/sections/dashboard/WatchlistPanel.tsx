import { watchlist } from "../../lib/mockData";
import { SignalBadge } from "../../components/ui/Badge";
import { ChangePct } from "../../components/ui/ChangePct";
import { Sparkline } from "../../components/ui/Sparkline";

export function WatchlistPanel() {
  return (
    <aside className="w-72 border-r border-border bg-bg flex flex-col shrink-0">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between text-xs">
        <span className="font-semibold tracking-wide">
          WATCHLIST <span className="text-text-dim font-mono">· 10</span>
        </span>
        <div className="flex gap-3 text-text-muted">
          <button className="text-text">All</button>
          <button className="hover:text-text">Bull</button>
          <button className="hover:text-text">Bear</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {watchlist.map((t) => (
          <button
            key={t.code}
            className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-surface-2 border-b border-border/50 ${
              t.code === "TLKM" ? "bg-surface-2/70" : ""
            }`}
          >
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-sm">{t.code}</span>
                <SignalBadge signal={t.signal} />
              </div>
              <div className="text-[10px] text-text-dim mt-0.5">{t.name}</div>
            </div>
            <Sparkline data={t.sparkline} positive={t.changePct >= 0} width={60} height={20} />
            <div className="text-right">
              <div className="font-mono text-sm">
                {t.price.toLocaleString("id-ID")}
              </div>
              <ChangePct value={t.changePct} className="text-[10px]" />
            </div>
          </button>
        ))}
      </div>

      <div className="px-4 py-2.5 border-t border-border flex items-center justify-between text-xs text-text-dim">
        <button className="hover:text-text">+ Tambah ticker</button>
        <span className="font-mono">Σ 10</span>
      </div>
    </aside>
  );
}
