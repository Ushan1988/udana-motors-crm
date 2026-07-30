import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-card-border bg-card ${className}`}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-card-border px-5 py-4">
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
