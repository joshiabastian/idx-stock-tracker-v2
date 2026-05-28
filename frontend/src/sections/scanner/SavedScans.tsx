import { savedScans } from "../../lib/mockData";
import { Card } from "../../components/ui/Card";

export function SavedScans() {
  return (
    <Card padded={false}>
      <div className="px-4 py-3 border-b border-border">
        <span className="font-semibold text-xs tracking-wide">SAVED SCANS</span>
      </div>
      <div className="py-1">
        {savedScans.map((scan) => (
          <button
            key={scan.name}
            className={`w-full px-4 py-2 flex items-center justify-between text-sm hover:bg-surface-2 ${
              scan.active ? "bg-surface-2 border-l-2 border-accent" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {scan.active && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
              <span className={scan.active ? "text-text" : "text-text-muted"}>
                {scan.name}
              </span>
            </div>
            <span className="text-text-dim font-mono text-xs">{scan.count}</span>
          </button>
        ))}
      </div>
      <button className="w-full px-4 py-2.5 border-t border-border text-xs text-text-dim hover:text-text text-left">
        + New scan
      </button>
    </Card>
  );
}
