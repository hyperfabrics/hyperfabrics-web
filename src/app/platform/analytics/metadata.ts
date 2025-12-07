import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Real-Time Analytics - Blockchain Intelligence & Insights | HyperFabrics",
  description:
    "Comprehensive blockchain analytics with real-time dashboards for liquidity, risk, compliance, and customer insights. Track on-chain activity, monitor performance, and generate custom reports across all networks.",
  keywords: [
    "blockchain analytics",
    "on-chain analytics",
    "crypto intelligence",
    "transaction monitoring",
    "blockchain insights",
    "digital asset reporting",
  ],
  openGraph: {
    title: "Real-Time Analytics - HyperFabrics",
    description:
      "Comprehensive blockchain analytics with real-time dashboards for liquidity, risk, compliance, and customer insights.",
    url: "/platform/analytics",
    type: "website",
    images: [
      {
        url: "/og/og-platform-analytics.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Analytics - HyperFabrics",
    description:
      "Comprehensive blockchain analytics with real-time dashboards for liquidity, risk, and compliance.",
  },
};

export const pageContent = {
  badge: "Analytics",
  badgeIcon: "BarChart3" as IconName,
  title: "Data-Driven Decision Making",
  description:
    "HyperFabrics's Analytics Platform transforms blockchain data into actionable business intelligence. Track liquidity, monitor risk exposure, analyze customer behavior, and ensure compliance — all through real-time dashboards and customizable reports. Built on event-driven pipelines with domain-oriented data mesh architecture for near-instant insights across all networks.",
  quickLinks: [
    {
      icon: "Activity" as IconName,
      title: "Real-Time Dashboards",
      description:
        "Live monitoring of transactions, balances, and network activity",
      href: "#dashboards",
    },
    {
      icon: "AlertTriangle" as IconName,
      title: "Risk Monitoring",
      description:
        "Track exposure, concentration limits, and counterparty risk",
      href: "#risk",
    },
    {
      icon: "Users" as IconName,
      title: "Customer Insights",
      description: "Behavioral analytics and transaction pattern recognition",
      href: "#insights",
    },
    {
      icon: "FileCheck" as IconName,
      title: "Compliance Reports",
      description: "Automated regulatory reporting and audit trail generation",
      href: "#compliance",
    },
  ],
  sections: [
    {
      title: "Real-Time Operational Dashboards",
      description:
        "Monitor blockchain operations with live dashboards showing transaction throughput, confirmation times, network fees, and wallet balances. Track daily active users, transaction volumes, and revenue metrics. Customizable widgets enable teams to create role-specific views — from treasury operations to compliance oversight. Alert thresholds trigger notifications when metrics exceed defined boundaries.",
      icon: "Monitor" as IconName,
    },
    {
      title: "Liquidity & Treasury Analytics",
      description:
        "Comprehensive liquidity tracking across exchanges, wallets, and DeFi protocols. Monitor available capital, utilization rates, and funding efficiency. Analyze cash flow patterns, rebalancing needs, and yield optimization opportunities. Integration with market data feeds provides real-time asset valuations and portfolio performance metrics essential for treasury management.",
      icon: "DollarSign" as IconName,
    },
    {
      title: "Risk & Exposure Management",
      description:
        "Track concentration risk, counterparty exposure, and market risk across all digital asset holdings. Real-time stress testing and scenario analysis help quantify potential losses under adverse conditions. Monitor margin requirements, liquidation thresholds, and collateral sufficiency. Automated alerts notify risk teams when exposures approach policy limits or market conditions deteriorate.",
      icon: "ShieldAlert" as IconName,
    },
    {
      title: "Transaction Intelligence",
      description:
        "Deep analysis of on-chain activity including transaction patterns, address clustering, fund flows, and behavioral signals. Identify suspicious activity, detect wash trading, monitor large transfers, and track known bad actors. Integration with leading blockchain intelligence providers like Chainalysis and Elliptic enhances detection capabilities for AML and fraud prevention.",
      icon: "Search" as IconName,
    },
    {
      title: "Customer Behavior Analytics",
      description:
        "Understand user engagement, retention, and lifetime value through comprehensive behavioral analytics. Track onboarding completion rates, feature adoption, transaction frequency, and churn indicators. Segment customers by activity level, asset preferences, and risk profiles. These insights inform product development, marketing strategies, and customer success initiatives.",
      icon: "Users" as IconName,
    },
    {
      title: "Compliance & Regulatory Reporting",
      description:
        "Automated generation of compliance reports for internal audits, regulatory examinations, and tax filings. Pre-built templates support FINRA, SEC, FCA, and international regulatory frameworks. Immutable audit trails with blockchain-timestamped records provide tamper-proof evidence for investigations. Schedule report distribution to auditors, regulators, and stakeholders with configurable frequency and formats.",
      icon: "ClipboardCheck" as IconName,
    },
  ],
};
