import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "API Reference | fazeZERO",
  description:
    "Detailed API reference for REST and GraphQL endpoints. Access 500+ APIs covering wallet management, tokenization, payments, compliance, and blockchain interactions across 100+ chains.",
  openGraph: {
    title: "API Reference | fazeZERO",
    description:
      "Detailed API reference for REST and GraphQL endpoints. Build powerful digital asset integrations.",
    url: "https://fazezero.com/developers/api",
  },
};

export const pageContent = {
  badge: "API Reference",
  badgeIcon: "Code" as IconName,
  title: "API Reference",
  description:
    "Detailed reference for REST and GraphQL APIs. Build powerful integrations with our comprehensive API suite.",
  quickLinks: [
    {
      icon: "Zap" as IconName,
      title: "500+ API Endpoints",
      description:
        "Access a comprehensive suite of APIs covering wallet management, asset tokenization, payment processing, compliance checks, and blockchain interactions.",
      href: "#endpoints",
    },
    {
      icon: "Globe" as IconName,
      title: "Multi-Chain Support",
      description:
        "Connect to over 100 blockchains including Ethereum, Hyperledger Fabric, Polygon, Binance Smart Chain, and more through a unified API interface.",
      href: "#chains",
    },
    {
      icon: "Lock" as IconName,
      title: "Enterprise Security",
      description:
        "All API calls are secured with OAuth 2.0, TLS encryption, and optional IP whitelisting. Credentials are protected with MPC and Intel SGX technology.",
      href: "#security",
    },
  ],
  sections: [
    {
      title: "API Categories",
      description:
        "Our APIs are organized into logical categories to help you find what you need quickly.",
      icon: "Code" as IconName,
    },
    {
      title: "Wallet & Custody APIs",
      description:
        "Manage digital asset wallets with hot, warm, and cold storage options. Create wallets, sign transactions, and implement governance policies.",
      icon: "Wallet" as IconName,
    },
    {
      title: "Tokenization APIs",
      description:
        "Issue, manage, and distribute tokenized real-world assets with compliance controls and automated distributions.",
      icon: "Package" as IconName,
    },
    {
      title: "Payment APIs",
      description:
        "Process stablecoin payments, handle cross-border settlements, and integrate with global payment networks.",
      icon: "ArrowRightLeft" as IconName,
    },
    {
      title: "Compliance APIs",
      description:
        "Perform KYC/AML checks, sanctions screening, wallet verification, and accreditation validation.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Analytics APIs",
      description:
        "Access real-time data on transactions, asset balances, network activity, and custom reporting.",
      icon: "BarChart" as IconName,
    },
  ],
};
