import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Service Status | fazeZERO",
  description:
    "Check the current operational status of fazeZERO services. View uptime, performance metrics, and incident history.",
  openGraph: {
    title: "Service Status | fazeZERO",
    description: "Real-time status of all fazeZERO services.",
    url: "https://fazezero.com/developers/status",
  },
};

export const pageContent = {
  badge: "Service Status",
  badgeIcon: "Server" as IconName,
  title: "Service Status",
  description:
    "Monitor the real-time status of all fazeZERO services and infrastructure. View uptime metrics and incident history.",
  sections: [
    {
      title: "Current Status",
      description:
        "All systems operational. fazeZERO maintains 99.99% uptime with enterprise-grade reliability and redundancy.",
      icon: "Server" as IconName,
    },
    {
      title: "Services",
      description:
        "API Gateway: All endpoints operational. Wallet Services: All custody services operational. Payment Rails: All payment networks operational. Analytics: All data services operational.",
      icon: "Activity" as IconName,
    },
  ],
};
