import { Card } from "../../components/ui/Card";
import { ScoreRing } from "../../components/ui/ScoreRing";

export function QuantamentalScore() {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <ScoreRing value={78} size={76} />
        <div>
          <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider">
            Quantamental Score
          </div>
          <div className="text-lg font-semibold mt-0.5">Strong Buy</div>
          <div className="text-xs text-text-muted font-mono mt-1">
            Technical: 72 · Sentiment: 84
          </div>
        </div>
      </div>
    </Card>
  );
}
