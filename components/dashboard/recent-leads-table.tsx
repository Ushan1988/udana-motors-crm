import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { RECENT_LEADS } from "@/lib/constants";

const STATUS_STYLES: Record<string, string> = {
  New: "bg-blue-500/10 text-blue-400",
  Called: "bg-amber-500/10 text-amber-400",
  Interested: "bg-emerald-500/10 text-emerald-400",
  "Store Visit": "bg-purple-500/10 text-purple-400",
  Sold: "bg-primary/10 text-primary",
};

export function RecentLeadsTable() {
  return (
    <Card className="overflow-hidden">
      <CardHeader
        title="Recent Leads"
        subtitle="Latest incoming leads across all campaigns"
        action={
          <button
            type="button"
            className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all
          </button>
        }
      />
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-card-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-medium">Lead ID</th>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Source</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_LEADS.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-card-border/50 transition-colors last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">
                    {lead.id}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-foreground">
                    {lead.name}
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {lead.phone}
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {lead.source}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        STATUS_STYLES[lead.status] ?? "bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {lead.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
