"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { NavIconComponent } from "@/components/icons";

type SidebarProps = {
  onNavigate?: () => void;
};

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-card-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-card-border px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-white">U</span>
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-foreground">
            Udana Motors
          </p>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            CRM
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <NavIconComponent
                name={item.icon}
                className={`h-5 w-5 ${isActive ? "text-primary" : ""}`}
              />
              {item.label}
              {isActive && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-card-border p-4">
        <div className="rounded-lg bg-primary/5 px-3 py-3">
          <p className="text-xs font-medium text-foreground">Premium Plan</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Manage your dealership leads efficiently
          </p>
        </div>
      </div>
    </aside>
  );
}
