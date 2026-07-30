import { KPI_DATA } from "@/lib/constants";
import { KpiCard } from "@/components/dashboard/kpi-card";

export function KpiGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {KPI_DATA.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  );
}
