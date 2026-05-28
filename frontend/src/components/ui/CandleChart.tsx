import { useMemo } from "react";
import { genCandles } from "../../lib/mockData";

interface Props {
  count?: number;
  height?: number;
  showVolume?: boolean;
  yLabels?: boolean;
}

export function CandleChart({ count = 60, height = 320, showVolume = false, yLabels = true }: Props) {
  const data = useMemo(() => genCandles(count, 3050), [count]);
  const candleAreaH = showVolume ? height * 0.75 : height;
  const volAreaH = showVolume ? height * 0.25 : 0;
  const padding = { l: yLabels ? 0 : 0, r: yLabels ? 48 : 16, t: 12, b: 8 };

  const all = data.flatMap((d) => [d.h, d.l]);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const range = max - min || 1;

  return (
    <svg viewBox={`0 0 800 ${height}`} className="w-full" preserveAspectRatio="none">
      {/* horizontal grid */}
      {[0.2, 0.4, 0.6, 0.8].map((p) => {
        const y = padding.t + (candleAreaH - padding.t - padding.b) * p;
        const price = max - (max - min) * p;
        return (
          <g key={p}>
            <line
              x1={0}
              x2={800 - padding.r}
              y1={y}
              y2={y}
              stroke="var(--color-border)"
              strokeDasharray="2 4"
              opacity={0.4}
            />
            {yLabels && (
              <text
                x={800 - padding.r + 6}
                y={y + 3}
                fill="var(--color-text-dim)"
                fontSize={10}
                fontFamily="JetBrains Mono"
              >
                {price.toFixed(0)}
              </text>
            )}
          </g>
        );
      })}

      {/* candles */}
      {data.map((d, i) => {
        const cw = (800 - padding.r) / data.length;
        const x = i * cw + cw * 0.15;
        const w = cw * 0.7;
        const cx = x + w / 2;
        const toY = (v: number) =>
          padding.t + ((max - v) / range) * (candleAreaH - padding.t - padding.b);
        const bull = d.c >= d.o;
        const color = bull ? "var(--color-bull)" : "var(--color-bear)";
        return (
          <g key={i}>
            <line x1={cx} x2={cx} y1={toY(d.h)} y2={toY(d.l)} stroke={color} strokeWidth={1} />
            <rect
              x={x}
              y={toY(Math.max(d.o, d.c))}
              width={w}
              height={Math.max(1, Math.abs(toY(d.o) - toY(d.c)))}
              fill={color}
            />
          </g>
        );
      })}

      {/* VWAP (dashed orange) */}
      <path
        d={data
          .map((_, i) => {
            const cw = (800 - padding.r) / data.length;
            const x = i * cw + cw / 2;
            const y =
              padding.t +
              ((max - (data[i].c + 30 - i * 1.2)) / range) *
                (candleAreaH - padding.t - padding.b);
            return `${i === 0 ? "M" : "L"} ${x} ${y}`;
          })
          .join(" ")}
        stroke="var(--color-warn)"
        strokeWidth={1.25}
        strokeDasharray="4 3"
        fill="none"
      />

      {/* Ichimoku cloud */}
      <path
        d={
          data
            .map((_, i) => {
              const cw = (800 - padding.r) / data.length;
              const x = i * cw + cw / 2;
              const y =
                padding.t +
                ((max - (data[i].c + 15 + Math.sin(i * 0.2) * 6)) / range) *
                  (candleAreaH - padding.t - padding.b);
              return `${i === 0 ? "M" : "L"} ${x} ${y}`;
            })
            .join(" ") +
          " " +
          data
            .map((_, i) => {
              const ri = data.length - 1 - i;
              const cw = (800 - padding.r) / data.length;
              const x = ri * cw + cw / 2;
              const y =
                padding.t +
                ((max - (data[ri].c - 15 + Math.cos(ri * 0.2) * 6)) / range) *
                  (candleAreaH - padding.t - padding.b);
              return `L ${x} ${y}`;
            })
            .join(" ") +
          " Z"
        }
        fill="var(--color-purple)"
        opacity={0.12}
      />

      {/* volume bars */}
      {showVolume &&
        data.map((d, i) => {
          const cw = (800 - padding.r) / data.length;
          const x = i * cw + cw * 0.15;
          const w = cw * 0.7;
          const h = (Math.abs(d.c - d.o) + 4) * 1.4;
          const bull = d.c >= d.o;
          return (
            <rect
              key={i}
              x={x}
              y={candleAreaH + volAreaH - h}
              width={w}
              height={h}
              fill={bull ? "var(--color-bull)" : "var(--color-bear)"}
              opacity={0.7}
            />
          );
        })}
    </svg>
  );
}
