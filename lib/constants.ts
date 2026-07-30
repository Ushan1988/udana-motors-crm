export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "dashboard" as const },
  { label: "Campaigns", href: "/campaigns", icon: "campaigns" as const },
  { label: "Leads", href: "/leads", icon: "leads" as const },
  { label: "Follow Ups", href: "/follow-ups", icon: "followUps" as const },
  { label: "Reports", href: "/reports", icon: "reports" as const },
  { label: "Settings", href: "/settings", icon: "settings" as const },
] as const;

export const KPI_DATA = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    trend: "up" as const,
    icon: "users" as const,
  },
  {
    label: "Called",
    value: "1,923",
    change: "+8.2%",
    trend: "up" as const,
    icon: "phone" as const,
  },
  {
    label: "Interested",
    value: "684",
    change: "+15.3%",
    trend: "up" as const,
    icon: "star" as const,
  },
  {
    label: "Pending Follow Ups",
    value: "156",
    change: "-4.1%",
    trend: "down" as const,
    icon: "clock" as const,
  },
  {
    label: "Store Visits",
    value: "312",
    change: "+22.8%",
    trend: "up" as const,
    icon: "store" as const,
  },
  {
    label: "Sales",
    value: "89",
    change: "+6.7%",
    trend: "up" as const,
    icon: "sales" as const,
  },
] as const;

export const RECENT_LEADS = [
  {
    id: "LD-2847",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    source: "Facebook Ads",
    status: "Interested",
    date: "Jul 30, 2026",
  },
  {
    id: "LD-2846",
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    source: "Google Ads",
    status: "Called",
    date: "Jul 30, 2026",
  },
  {
    id: "LD-2845",
    name: "Amit Patel",
    phone: "+91 76543 21098",
    source: "Walk-in",
    status: "Store Visit",
    date: "Jul 29, 2026",
  },
  {
    id: "LD-2844",
    name: "Sneha Reddy",
    phone: "+91 65432 10987",
    source: "Instagram",
    status: "New",
    date: "Jul 29, 2026",
  },
  {
    id: "LD-2843",
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    source: "Referral",
    status: "Sold",
    date: "Jul 28, 2026",
  },
] as const;

export type NavIcon = (typeof NAV_ITEMS)[number]["icon"];
export type KpiIcon = (typeof KPI_DATA)[number]["icon"];
