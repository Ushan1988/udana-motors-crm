import { Card, CardBody, CardHeader } from "@/components/ui/card";

type ChartPlaceholderProps = {
  title: string;
  subtitle?: string;
  height?: string;
  variant?: "bar" | "line" | "funnel" | "donut";
};

function PlaceholderVisual({
  variant,
  height,
}: {
  variant: ChartPlaceholderProps["variant"];
  height: string;
}) {
  if (variant === "funnel") {
    return (
      <div className={`flex ${height} flex-col items-center justify-center gap-2 px-8`}>
        {[100, 75, 50, 30].map((width, i) => (
          <div
            key={i}
            className="h-8 rounded bg-gradient-to-r from-primary/30 to-primary/10"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "donut") {
    return (
      <div className={`flex ${height} items-center justify-center gap-8`}>
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full border-[12px] border-card-border" />
          <div className="absolute inset-0 rounded-full border-[12px] border-primary border-r-transparent border-b-transparent rotate-45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-foreground">68%</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "New", color: "bg-primary" },
            { label: "Called", color: "bg-primary/70" },
            { label: "Interested", color: "bg-primary/40" },
            { label: "Sold", color: "bg-primary/20" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs">
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className={`relative ${height} px-2`}>
        <svg viewBox="0 0 400 120" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D60000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D60000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 L50,70 L100,75 L150,45 L200,55 L250,30 L300,40 L350,20 L400,25 L400,120 L0,120 Z"
            fill="url(#lineGrad)"
          />
          <path
            d="M0,90 L50,70 L100,75 L150,45 L200,55 L250,30 L300,40 L350,20 L400,25"
            fill="none"
            stroke="#D60000"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex ${height} items-end justify-around gap-2 px-4 pb-2`}>
      {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75, 48, 90].map((h, i) => (
        <div
          key={i}
          className="w-full max-w-[24px] rounded-t bg-gradient-to-t from-primary/20 to-primary/60"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function ChartPlaceholder({
  title,
  subtitle,
  height = "h-48",
  variant = "bar",
}: ChartPlaceholderProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader title={title} subtitle={subtitle} />
      <CardBody className="pt-2">
        <PlaceholderVisual variant={variant} height={height} />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Chart visualization coming soon
        </p>
      </CardBody>
    </Card>
  );
}
