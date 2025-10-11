import { Metadata } from "next";

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
  badgeIcon: "Code",
  title: "API Reference",
  description:
    "Detailed reference for REST and GraphQL APIs. Build powerful integrations with our comprehensive API suite.",
  quickLinks: [
    {
      icon: "Zap",
      title: "500+ API Endpoints",
      description:
        "Access a comprehensive suite of APIs covering wallet management, asset tokenization, payment processing, compliance checks, and blockchain interactions.",
      href: "#endpoints",
    },
    {
      icon: "Globe",
      title: "Multi-Chain Support",
      description:
        "Connect to over 100 blockchains including Ethereum, Hyperledger Fabric, Polygon, Binance Smart Chain, and more through a unified API interface.",
      href: "#chains",
    },
    {
      icon: "Lock",
      title: "Enterprise Security",
      description:
        "All API calls are secured with OAuth 2.0, TLS encryption, and optional IP whitelisting. Credentials are protected with MPC and Intel SGX technology.",
      href: "#security",
    },
  ],
  sections: [
    {
      title: "API Categories",
      content:
        "Our APIs are organized into logical categories to help you find what you need quickly.",
    },
    {
      title: "Wallet & Custody APIs",
      content:
        "Manage digital asset wallets with hot, warm, and cold storage options. Create wallets, sign transactions, and implement governance policies.",
    },
    {
      title: "Tokenization APIs",
      content:
        "Issue, manage, and distribute tokenized real-world assets with compliance controls and automated distributions.",
    },
    {
      title: "Payment APIs",
      content:
        "Process stablecoin payments, handle cross-border settlements, and integrate with global payment networks.",
    },
    {
      title: "Compliance APIs",
      content:
        "Perform KYC/AML checks, sanctions screening, wallet verification, and accreditation validation.",
    },
    {
      title: "Analytics APIs",
      content:
        "Access real-time data on transactions, asset balances, network activity, and custom reporting.",
    },
  ],
};
