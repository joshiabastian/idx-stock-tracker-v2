import { scanRows } from "../../lib/mockData";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { ChangePct } from "../../components/ui/ChangePct";

const PATTERN_COLOR: Record<string, string> = {
  Engulfing: "text-accent",
  Hammer: "text-info",
  "VWAP Reclaim": "text-warn",
  "Vol Surge": "text-purple",
  "TK Cross": "text-info",
};

export function ScanResults() {
  return (
    <Card padded={false} className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <div className="font-semibold">Bullish Setups</div>
          <div className="text-xs text-text-muted mt-0.5">
            <span className="text-accent font-mono">18 results</span>
            <span className="text-text-dim"> · scanned 825 tickers in 1.2s · ranked by composite score</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">↓ Export CSV</Button>
          <Button size="sm" variant="primary">+ Add all to watchlist</Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-[10px] text-text-dim font-mono uppercase tracking-wider sticky top-0 bg-surface">
            <tr className="border-b border-border">
              <th className="text-left px-5 py-2 font-medium">Rank</th>
              <th className="text-left px-3 py-2 font-medium">Ticker</th>
              <th className="text-right px-3 py-2 font-medium">Price</th>
              <th className="text-right px-3 py-2 font-medium">Chg%</th>
              <th className="text-right px-3 py-2 font-medium">Vol</th>
              <th className="text-right px-3 py-2 font-medium">RSI</th>
              <th className="text-right px-3 py-2 font-medium">VWAP Δ</th>
              <th className="text-left px-3 py-2 font-medium">Pattern</th>
              <th className="text-right px-3 py-2 font-medium">Sent</th>
              <th className="text-right px-5 py-2 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {scanRows.map((r) => (
              <tr
                key={r.code}
                className="border-b border-border/50 hover:bg-surface-2 cursor-pointer"
              >
                <td className="px-5 py-3 text-text-dim font-mono">{r.rank}</td>
                <td className="px-3 py-3">
                  <div className="font-mono font-semibold">{r.code}</div>
                  <div className="text-[11px] text-text-dim">{r.name}</div>
                </td>
                <td className="px-3 py-3 text-right font-mono">
                  {r.price.toLocaleString("id-ID")}
                </td>
                <td className="px-3 py-3 text-right">
                  <ChangePct value={r.changePct} />
                </td>
                <td className="px-3 py-3 text-right font-mono text-text-muted">{r.volume}</td>
                <td
                  className={`px-3 py-3 text-right font-mono ${
                    r.rsi > 70 ? "text-bear" : "text-text"
                  }`}
                >
                  {r.rsi}
                </td>
                <td className="px-3 py-3 text-right font-mono text-bull">
                  +{r.vwapDelta.toFixed(1)}%
                </td>
                <td className={`px-3 py-3 font-mono ${PATTERN_COLOR[r.pattern] ?? "text-text"}`}>
                  {r.pattern}
                </td>
                <td className="px-3 py-3 text-right font-mono text-bull">
                  +{r.sentiment.toFixed(2)}
                </td>
                <td className="px-5 py-3 text-right">
                  <span className="inline-flex items-center justify-center min-w-9 px-2 py-1 rounded bg-surface-2 font-mono font-semibold">
                    {r.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
