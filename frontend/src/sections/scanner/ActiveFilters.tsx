import { activeFilters } from "../../lib/mockData";
import { Card } from "../../components/ui/Card";

export function ActiveFilters() {
  return (
    <Card padded={false}>
      <div className="px-4 py-3 border-b border-border">
        <span className="font-semibold text-xs tracking-wide">ACTIVE FILTERS</span>
      </div>
      <div className="p-3 space-y-2">
        {activeFilters.map((f) => (
          <div
            key={f.label}
            className="flex items-center justify-between px-2.5 py-1.5 border border-border rounded text-xs hover:border-border-strong"
          >
            <span className="text-text-muted">{f.label}</span>
            <span className="font-mono text-accent">{f.value}</span>
          </div>
        ))}
        <button className="w-full px-2.5 py-1.5 border border-dashed border-border rounded text-xs text-text-dim hover:text-text hover:border-border-strong">
          + Add criterion
        </button>
      </div>
    </Card>
  );
}
