import { news } from "../../lib/mockData";
import { Card } from "../../components/ui/Card";

export function NewsSentiment() {
  return (
    <Card padded={false}>
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <span className="font-semibold text-sm tracking-wide">NEWS</span>
        <span className="text-[10px] text-text-dim font-mono">7d</span>
      </div>
      <div>
        {news.map((n, i) => {
          const positive = n.sentiment >= 0;
          return (
            <div
              key={i}
              className="px-4 py-3 border-b border-border/50 last:border-0 hover:bg-surface-2 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono font-semibold">{n.ticker}</span>
                <span
                  className={`font-mono ${positive ? "text-bull" : "text-bear"}`}
                >
                  {positive ? "+" : ""}
                  {n.sentiment.toFixed(2)}
                </span>
                <span className="ml-auto text-[10px] text-text-dim font-mono">
                  {n.source} · {n.time}
                </span>
              </div>
              <div className="text-xs text-text-muted mt-1 leading-snug">
                {n.headline}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
