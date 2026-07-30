import { DashboardShell } from "@/components/layout/dashboard-shell";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <DashboardShell title={title}>
      <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-xl border border-dashed border-card-border bg-card/50 p-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <span className="text-2xl text-primary">+</span>
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </DashboardShell>
  );
}
