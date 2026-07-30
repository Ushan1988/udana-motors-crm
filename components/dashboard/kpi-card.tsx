import { KpiIconComponent, TrendDownIcon, TrendUpIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import type { KpiIcon } from "@/lib/constants";

type KpiCardProps = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: KpiIcon;
};

export function KpiCard({ label, value, change, trend, icon }: KpiCardProps) {
  const isUp = trend === "up";

  return (
    <Card className="p-5 transition-colors hover:border-primary/20">
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <KpiIconComponent name={icon} />
        </div>
        <div
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            isUp
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {isUp ? <TrendUpIcon /> : <TrendDownIcon />}
          {change}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold tracking-tight text-foreground">
          {value}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      </div>
    </Card>
  );
}
