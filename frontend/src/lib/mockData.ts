import type { IndexQuote, LiveSignal, NewsItem, ScanRow, Ticker } from "./types";

export const indices: IndexQuote[] = [
  { label: "IHSG", value: "7.412,84", changePct: 0.42 },
  { label: "LQ45", value: "964,21", changePct: 0.61 },
  { label: "IDX30", value: "498,07", changePct: 0.55 },
  { label: "USD/IDR", value: "15.825", changePct: -0.18 },
  { label: "GOLD (RP/G)", value: "1.685.200", changePct: 0.93 },
];

const spark = (seed: number, trend: number) =>
  Array.from({ length: 24 }, (_, i) =>
    50 + Math.sin(i * 0.6 + seed) * 8 + i * trend + Math.cos(i * 1.3 + seed) * 4,
  );

export const watchlist: Ticker[] = [
  { code: "BBCA", name: "Bank Central Asia", price: 10825, changePct: 1.18, signal: "BUY", sparkline: spark(1, 0.4) },
  { code: "BBRI", name: "Bank Rakyat Indonesia", price: 4710, changePct: -0.42, signal: "HOLD", sparkline: spark(2, -0.2) },
  { code: "TLKM", name: "Telkom Indonesia", price: 3120, changePct: 2.63, signal: "BUY", sparkline: spark(3, 0.6) },
  { code: "ASII", name: "Astra International", price: 5275, changePct: 0.48, signal: "HOLD", sparkline: spark(4, -0.3) },
  { code: "GOTO", name: "GoTo Gojek Tokopedia", price: 92, changePct: 4.55, signal: "BUY", sparkline: spark(5, 0.8) },
  { code: "UNVR", name: "Unilever Indonesia", price: 2180, changePct: -1.36, signal: "SELL", sparkline: spark(6, -0.6) },
  { code: "INDF", name: "Indofood Sukses Makmur", price: 7650, changePct: 0.66, signal: "HOLD", sparkline: spark(7, 0.1) },
  { code: "MDKA", name: "Merdeka Copper Gold", price: 2920, changePct: 3.18, signal: "BUY", sparkline: spark(8, 0.5) },
  { code: "ANTM", name: "Aneka Tambang", price: 1825, changePct: -2.14, signal: "SELL", sparkline: spark(9, -0.7) },
  { code: "ICBP", name: "Indofood CBP", price: 11600, changePct: 0.22, signal: "HOLD", sparkline: spark(10, 0.2) },
];

export const liveSignals: LiveSignal[] = [
  { ticker: "TLKM", strength: "Strong", time: "09:15", timeframe: "1D", pattern: "Bullish Engulfing", rsi: 67, vwap: 2.1 },
  { ticker: "MDKA", strength: "Medium", time: "10:02", timeframe: "1D", pattern: "VWAP Reclaim", rsi: 64, vwap: 2.1 },
  { ticker: "GOTO", strength: "Strong", time: "11:40", timeframe: "1D", pattern: "Volume Surge 3.4×", rsi: 72, vwap: 4.5 },
  { ticker: "UNVR", strength: "Watch", time: "14:55", timeframe: "1D", pattern: "Hammer + Oversold", rsi: 38, vwap: -2.2 },
];

export const news: NewsItem[] = [
  { ticker: "TLKM", sentiment: 0.78, source: "Bisnis.com", time: "14:22", headline: "Telkom umumkan ekspansi data center hyperscale di Batam, capex Rp 8.2T" },
  { ticker: "BBCA", sentiment: 0.62, source: "CNBC Indonesia", time: "13:05", headline: "BCA bukukan laba kuartal I 2026 naik 9.4% YoY, NIM stabil di 5.8%" },
  { ticker: "UNVR", sentiment: -0.41, source: "Kontan", time: "12:41", headline: "Volume penjualan Unilever turun di segmen home care, margin tertekan" },
  { ticker: "GOTO", sentiment: 0.55, source: "Reuters", time: "11:18", headline: "GoTo finalisasi penjualan unit Tokopedia kepada konsorsium baru" },
  { ticker: "ANTM", sentiment: -0.28, source: "Bloomberg", time: "10:02", headline: "Harga nikel global turun 4.1% pasca data manufaktur China" },
];

export const scanRows: ScanRow[] = [
  { rank: 1, code: "BBCA", name: "Bank Central Asia", price: 10825, changePct: 1.18, volume: "41.20M", rsi: 58, vwapDelta: 1.1, pattern: "Engulfing", sentiment: 0.62, score: 60 },
  { rank: 2, code: "TLKM", name: "Telkom Indonesia", price: 3120, changePct: 2.63, volume: "88.30M", rsi: 67, vwapDelta: 2.1, pattern: "Hammer", sentiment: 0.71, score: 66 },
  { rank: 3, code: "GOTO", name: "GoTo Gojek Tokopedia", price: 92, changePct: 4.55, volume: "1.28B", rsi: 72, vwapDelta: 4.5, pattern: "VWAP Reclaim", sentiment: 0.55, score: 83 },
  { rank: 4, code: "MDKA", name: "Merdeka Copper Gold", price: 2920, changePct: 3.18, volume: "64.70M", rsi: 64, vwapDelta: 2.1, pattern: "Vol Surge", sentiment: 0.48, score: 81 },
  { rank: 5, code: "AMRT", name: "Sumber Alfaria Trijaya", price: 2840, changePct: 1.92, volume: "18.40M", rsi: 61, vwapDelta: 1.1, pattern: "TK Cross", sentiment: 0.42, score: 68 },
  { rank: 6, code: "PGAS", name: "Perusahaan Gas Negara", price: 1620, changePct: 2.21, volume: "76.30M", rsi: 63, vwapDelta: 1.9, pattern: "Engulfing", sentiment: 0.36, score: 66 },
  { rank: 7, code: "EMTK", name: "Elang Mahkota Teknologi", price: 540, changePct: 5.88, volume: "28.50M", rsi: 74, vwapDelta: 5.9, pattern: "Engulfing", sentiment: 0.61, score: 95 },
];

export const savedScans = [
  { name: "All Universe", count: 825, active: false },
  { name: "Bullish setups", count: 18, active: true },
  { name: "VWAP Reclaims", count: 7, active: false },
  { name: "RSI < 30", count: 4, active: false },
  { name: "Engulfing patterns", count: 11, active: false },
  { name: "Volume spikes 2×+", count: 9, active: false },
  { name: "AI sentiment > +0.5", count: 14, active: false },
  { name: "Sektor Banking", count: 47, active: false },
  { name: "Sektor Mining", count: 62, active: false },
];

export const activeFilters = [
  { label: "RSI(14)", value: "> 50" },
  { label: "Volume MA", value: "≥ 1.2×" },
  { label: "VWAP", value: "price > VWAP" },
  { label: "AI sentiment", value: "> +0.3" },
  { label: "Pattern", value: "engulf / hammer" },
];

export function genCandles(count = 60, start = 3050) {
  const candles: { o: number; h: number; l: number; c: number }[] = [];
  let last = start;
  for (let i = 0; i < count; i++) {
    const drift = (Math.sin(i * 0.3) + Math.cos(i * 0.15)) * 8;
    const o = last;
    const c = o + drift + (Math.random() - 0.5) * 20;
    const h = Math.max(o, c) + Math.random() * 12;
    const l = Math.min(o, c) - Math.random() * 12;
    candles.push({ o, h, l, c });
    last = c;
  }
  return candles;
}
