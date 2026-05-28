interface Props {
  value: number;
  showPlus?: boolean;
  className?: string;
  suffix?: string;
}

export function ChangePct({ value, showPlus = true, className = "", suffix = "%" }: Props) {
  const positive = value >= 0;
  const sign = positive ? (showPlus ? "+" : "") : "";
  return (
    <span
      className={`font-mono ${positive ? "text-bull" : "text-bear"} ${className}`}
    >
      {sign}
      {value.toFixed(2)}
      {suffix}
    </span>
  );
}
