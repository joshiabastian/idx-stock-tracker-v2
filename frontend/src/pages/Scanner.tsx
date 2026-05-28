import { SavedScans } from "../sections/scanner/SavedScans";
import { ActiveFilters } from "../sections/scanner/ActiveFilters";
import { ScanResults } from "../sections/scanner/ScanResults";

export function Scanner() {
  return (
    <div className="flex flex-1 min-h-0 p-3 gap-3">
      <aside className="w-64 flex flex-col gap-3 shrink-0 overflow-auto">
        <SavedScans />
        <ActiveFilters />
      </aside>
      <ScanResults />
    </div>
  );
}
