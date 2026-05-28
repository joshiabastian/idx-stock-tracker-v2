import { Card } from "../../components/ui/Card";

export function AIAnalysis() {
  return (
    <Card className="text-[13px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-text-dim font-mono uppercase tracking-wider">
          AI Analysis
        </span>
        <span className="text-[10px] text-text-dim font-mono">GPT-4o-Mini</span>
      </div>

      <div className="space-y-3 leading-relaxed">
        <p>
          <span className="text-accent font-semibold">Tesis utama:</span> TLKM
          menunjukkan setup bullish multi-faktor yang langka — convergence antara pattern
          price action, reclaim VWAP institusional, dan katalis fundamental berupa
          ekspansi data center hyperscale Batam (capex Rp 8.2T).
        </p>
        <p>
          <span className="font-semibold">Technical.</span> Bullish engulfing terbentuk
          di area konfluen — tepat di Anchored VWAP (Rp 3.055) yang juga zona Kijun-sen
          Ichimoku. Volume 1.4× MA20 mengkonfirmasi partisipasi institusional. RSI 67.2
          belum overbought ekstrem; masih ada ruang ke 75–80 sebelum divergence.
        </p>
        <p>
          <span className="font-semibold">Sentiment.</span> 7-day rolling sentiment +0.62
          (top quartile sektor telco). Berita data center Batam menggeser narasi TLKM
          dari "telco mature" ke "AI-infrastructure proxy" — re-rating opportunity.
        </p>
        <p>
          <span className="font-semibold">Risk.</span> Stop loss 1× ATR di Rp 3.050
          (−2.2%). Target 1: Rp 3.220 (3.2% upside, sebelumnya supply). Target 2: Rp
          3.380 (8.3%, top range Q4 2025). R/R ≈ 1:3.7.
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border flex items-start gap-2">
        <span className="text-warn text-xs">⚠</span>
        <div>
          <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-warn">
            Disclaimer
          </div>
          <div className="text-[11px] text-text-muted mt-0.5">
            Analisis ini dihasilkan AI berdasarkan data publik. Bukan rekomendasi
            investasi. DYOR.
          </div>
        </div>
      </div>
    </Card>
  );
}
