import { Badge, SignalBadge } from "../../components/ui/Badge";
import { ChangePct } from "../../components/ui/ChangePct";
import type { Ticker } from "../../lib/types";

const sectors: Record<string, string> = {
  BBCA: "Banking",
  BBRI: "Banking",
  TLKM: "Telco",
  ASII: "Otomotif",
  GOTO: "Tech",
  UNVR: "Consumer",
  INDF: "Consumer",
  MDKA: "Mining",
  ANTM: "Mining",
  ICBP: "Consumer",
};

const fullNames: Record<string, string> = {
  BBCA: "PT Bank Central Asia Tbk",
  BBRI: "PT Bank Rakyat Indonesia (Persero) Tbk",
  TLKM: "PT Telekomunikasi Indonesia (Persero) Tbk",
  ASII: "PT Astra International Tbk",
  GOTO: "PT GoTo Gojek Tokopedia Tbk",
  UNVR: "PT Unilever Indonesia Tbk",
  INDF: "PT Indofood Sukses Makmur Tbk",
  MDKA: "PT Merdeka Copper Gold Tbk",
  ANTM: "PT Aneka Tambang Tbk",
  ICBP: "PT Indofood CBP Sukses Makmur Tbk",
};

interface Props {
  ticker: Ticker;
  onBack?: () => void;
}

export function TickerHeader({ ticker, onBack }: Props) {
  const todayChange = Math.round((ticker.price * ticker.changePct) / 100);
  const sector = sectors[ticker.code] ?? "—";
  const fullName = fullNames[ticker.code] ?? ticker.name;

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
      <div className="text-xs text-text-dim font-mono">
        <button
          onClick={onBack}
          className="hover:text-text transition-colors"
        >
          Watchlist
        </button>
        <span className="mx-1">›</span>
        <span className="text-text">{ticker.code}</span>
      </div>
      <div className="flex items-center gap-2 ml-2">
        <span className="font-mono text-lg font-semibold">{ticker.code}</span>
        <span className="text-text-muted text-xs">{fullName}</span>
        <Badge tone="info">{sector}</Badge>
        <SignalBadge signal={ticker.signal} />
      </div>
      <div className="ml-auto flex items-baseline gap-2">
        <span className="font-mono text-2xl font-semibold">
          {ticker.price.toLocaleString("id-ID")}
        </span>
        <span className="text-text-dim text-xs font-mono">IDR</span>
        <ChangePct value={ticker.changePct} className="text-sm" />
        <span className="text-text-dim text-xs font-mono">
          {todayChange >= 0 ? "+" : ""}
          {todayChange} today
        </span>
      </div>
    </div>
  );
}
