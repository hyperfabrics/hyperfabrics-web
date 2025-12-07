import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Service Status | HyperFabrics",
  description:
    "Check the current operational status of HyperFabrics services. View uptime, performance metrics, and incident history.",
  openGraph: {
    title: "Service Status | HyperFabrics",
    description: "Real-time status of all HyperFabrics services.",
    url: "https://HyperFabrics.com/developers/status",
  },
};

export const pageContent = {
  badge: "Service Status",
  badgeIcon: "Server" as IconName,
  title: "Service Status",
  description:
    "Monitor the real-time status of all HyperFabrics services and infrastructure. View uptime metrics and incident history.",
  sections: [
    {
      title: "Current Status",
      description:
        "All systems operational. HyperFabrics maintains 99.99% uptime with enterprise-grade reliability and redundancy.",
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
