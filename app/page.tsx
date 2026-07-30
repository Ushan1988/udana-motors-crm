import { ChartPlaceholder } from "@/components/dashboard/chart-placeholder";
import { KpiGrid } from "@/components/dashboard/kpi-grid";
import { RecentLeadsTable } from "@/components/dashboard/recent-leads-table";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard">
      <div className="space-y-6">
        <KpiGrid />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartPlaceholder
            title="Lead Status Chart"
            subtitle="Distribution of leads by status"
            variant="donut"
            height="h-52"
          />
          <ChartPlaceholder
            title="Campaign Performance"
            subtitle="Leads generated per campaign this month"
            variant="bar"
            height="h-52"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ChartPlaceholder
              title="Sales Funnel"
              subtitle="Conversion stages overview"
              variant="funnel"
              height="h-64"
            />
          </div>
          <div className="lg:col-span-2">
            <RecentLeadsTable />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
