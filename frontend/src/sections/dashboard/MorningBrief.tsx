import { Card } from "../../components/ui/Card";

export function MorningBrief() {
  return (
    <Card className="text-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-accent/10 text-accent flex items-center justify-center text-[10px] font-bold">
          AI
        </div>
        <span className="font-semibold">Morning Brief</span>
        <span className="text-text-dim text-xs">· Kamis · 21 Mei 2026 · 09:00 WIB</span>
        <span className="ml-auto text-[10px] text-text-dim font-mono">
          GPT-4o-Mini · 1.2k tok
        </span>
      </div>
      <p className="text-text leading-relaxed text-[13px]">
        IHSG dibuka <span className="text-bull">menguat 0.42%</span> didorong sektor banking
        pasca laporan kuartal I BCA (NIM stabil di 5.8%). Highlight di watchlist lo:{" "}
        <span className="text-accent font-semibold">TLKM</span> mencetak bullish engulfing
        dengan volume 1.4× MA20 setelah pengumuman data center hyperscale di Batam —
        sentiment AI <span className="text-bull">+0.71</span>. Sektor mining mixed:{" "}
        <span className="text-accent font-semibold">MDKA</span> reclaim VWAP (+3.18%),{" "}
        <span className="text-accent font-semibold">ANTM</span> tertekan pelemahan nikel
        global (−2.14%).
      </p>
      <div className="flex items-center gap-3 mt-3 text-xs">
        <span className="text-bull font-mono">5 bullish</span>
        <span className="text-bear font-mono">2 bearish</span>
        <span className="text-warn font-mono">3 watch</span>
        <button className="ml-auto text-text-dim hover:text-text font-mono">
          ↻ Refresh · 14:38
        </button>
      </div>
    </Card>
  );
}
