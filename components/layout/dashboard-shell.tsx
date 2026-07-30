"use client";

import { useState } from "react";
import { CloseIcon } from "@/components/icons";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

type DashboardShellProps = {
  title: string;
  children: React.ReactNode;
};

export function DashboardShell({ title, children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="relative z-50 flex h-full w-64 flex-col shadow-2xl">
            <Sidebar onNavigate={() => setSidebarOpen(false)} />
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="absolute right-3 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
