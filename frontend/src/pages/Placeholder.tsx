interface Props {
  title: string;
}

export function Placeholder({ title }: Props) {
  return (
    <div className="flex-1 flex items-center justify-center text-text-dim">
      <div className="text-center">
        <div className="text-2xl font-semibold mb-2">{title}</div>
        <div className="text-sm font-mono">— coming soon —</div>
      </div>
    </div>
  );
}
