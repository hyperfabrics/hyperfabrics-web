import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Asset Dashboard - Unified Custody Management | fazezero",
  description:
    "Centralized dashboard for managing digital asset custody across 100+ blockchains. Monitor wallets, approve transactions, view portfolio analytics, and enforce governance policies in real-time.",
  keywords: [
    "digital asset dashboard",
    "custody management",
    "crypto portfolio",
    "wallet management",
    "blockchain dashboard",
    "asset monitoring",
  ],
  openGraph: {
    title: "Digital Asset Dashboard - fazezero",
    description:
      "Centralized dashboard for managing digital asset custody across 100+ blockchains. Real-time monitoring and governance.",
    url: "/platform/dashboard",
    type: "website",
    images: [
      {
        url: "/og/og-platform-dashboard.png",
        width: 1200,
        height: 630,
        alt: "fazezero Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Asset Dashboard - fazezero",
    description:
      "Centralized dashboard for managing digital asset custody across 100+ blockchains.",
  },
};

export const pageContent = {
  badge: "Management",
  badgeIcon: "LayoutDashboard",
  title: "Complete Visibility and Control",
  description:
    "fazezero's Digital Asset Dashboard provides institutions with a unified interface for managing custody operations across 100+ blockchains. Monitor wallets, approve transactions, configure governance policies, and access real-time portfolio analytics — all from a single, secure command center built for enterprises, exchanges, and financial institutions.",
  quickLinks: [
    {
      icon: "Wallet",
      title: "Multi-Wallet Management",
      description:
        "Hot, warm, and cold wallet configurations across all chains",
      href: "#wallets",
    },
    {
      icon: "CheckCircle",
      title: "Transaction Approval",
      description:
        "Multi-signature workflows and customizable approval policies",
      href: "#approvals",
    },
    {
      icon: "PieChart",
      title: "Portfolio Analytics",
      description: "Real-time valuation, performance tracking, and reporting",
      href: "#analytics",
    },
    {
      icon: "Settings",
      title: "Governance Policies",
      description: "Configure spending limits, whitelists, and access controls",
      href: "#governance",
    },
  ],
  sections: [
    {
      title: "Unified Wallet Management",
      description:
        "Manage hot, warm, and cold wallets from a single interface. Support for direct custody across Ethereum, Bitcoin, Hyperledger, Corda, Polygon, Solana, and 100+ additional blockchains. Create new wallets, import existing keys, configure multi-signature schemes, and organize assets by business unit, strategy, or client. Seamless switching between custody models based on security requirements and operational needs.",
      icon: "Folder",
    },
    {
      title: "Transaction Workflow & Approvals",
      description:
        "Define multi-signature approval workflows that align with your organization's risk management framework. Set role-based permissions for transaction initiation, approval, and execution. Configure sequential or parallel approval chains with customizable thresholds. Real-time notifications alert approvers via email, SMS, or API webhooks. Complete audit trail captures every action, from request to settlement.",
      icon: "GitPullRequest",
    },
    {
      title: "Real-Time Portfolio Visibility",
      description:
        "Consolidated view of all digital asset holdings with real-time pricing from multiple oracle sources. Portfolio analytics include asset allocation, performance attribution, unrealized gains/losses, and risk metrics. Historical charts track value over time. Support for custom groupings by entity, fund, strategy, or counterparty. Export capabilities for accounting and regulatory reporting.",
      icon: "TrendingUp",
    },
    {
      title: "Governance & Compliance Controls",
      description:
        "Enforce organizational policies at the platform level. Configure spending limits, transaction velocity checks, and destination address whitelists. Implement time-based controls like weekend freezes or market-hour restrictions. Role-based access control (RBAC) ensures separation of duties. Two-factor authentication (2FA), biometric verification, and IP whitelisting add additional security layers.",
      icon: "Shield",
    },
    {
      title: "Exchange & DeFi Integration",
      description:
        "Connect to 1,800+ exchanges, OTC desks, and liquidity providers for seamless trading and settlement. Monitor exchange balances, execute trades, and withdraw funds without leaving the dashboard. Access DeFi protocols for staking, lending, and liquidity provision. Real-time risk monitoring tracks exposure, concentration limits, and counterparty risk across all connected venues.",
      icon: "Repeat",
    },
    {
      title: "Audit Trail & Reporting",
      description:
        "Immutable audit logs capture every system action, transaction, and configuration change with timestamp, user identity, and IP address. Generate compliance reports for internal audits, regulatory examinations, and tax filings. Customizable report templates support GAAP, IFRS, and jurisdiction-specific accounting standards. Schedule automated report generation and distribution to stakeholders.",
      icon: "FileText",
    },
  ],
};
