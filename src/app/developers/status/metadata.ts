import { Metadata } from "next";

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
  badgeIcon: "Server",
  title: "Service Status",
  description:
    "Monitor the real-time status of all fazeZERO services and infrastructure. View uptime metrics and incident history.",
  sections: [
    {
      title: "Current Status",
      content:
        "All systems operational. fazeZERO maintains 99.99% uptime with enterprise-grade reliability and redundancy.",
    },
    {
      title: "Services",
      items: [
        { label: "API Gateway", description: "All endpoints operational" },
        {
          label: "Wallet Services",
          description: "All custody services operational",
        },
        {
          label: "Payment Rails",
          description: "All payment networks operational",
        },
        { label: "Analytics", description: "All data services operational" },
      ],
    },
  ],
};
