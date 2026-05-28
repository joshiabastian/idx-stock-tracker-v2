export type Signal = "BUY" | "SELL" | "HOLD" | "WATCH";
export type SignalStrength = "Strong" | "Medium" | "Watch";

export interface Ticker {
  code: string;
  name: string;
  price: number;
  changePct: number;
  signal: Signal;
  sparkline: number[];
}

export interface IndexQuote {
  label: string;
  value: string;
  changePct: number;
}

export interface LiveSignal {
  ticker: string;
  strength: SignalStrength;
  time: string;
  timeframe: string;
  pattern: string;
  rsi: number;
  vwap: number;
}

export interface NewsItem {
  ticker: string;
  sentiment: number;
  source: string;
  time: string;
  headline: string;
}

export interface ScanRow {
  rank: number;
  code: string;
  name: string;
  price: number;
  changePct: number;
  volume: string;
  rsi: number;
  vwapDelta: number;
  pattern: string;
  sentiment: number;
  score: number;
}
