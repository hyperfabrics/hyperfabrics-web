import { Metadata } from "next";

export const metadata: Metadata = {
  title: "500+ APIs - Comprehensive Blockchain API Suite | fazezero",
  description:
    "Access fazezero's complete blockchain infrastructure through 500+ ready-to-use APIs. Multi-chain support, smart contracts, custody, payments, identity management, and real-time event streaming for rapid Web3 development.",
  keywords: [
    "blockchain API",
    "Web3 API",
    "multi-chain API",
    "smart contract API",
    "custody API",
    "digital asset API",
    "developer platform",
  ],
  openGraph: {
    title: "500+ APIs - fazezero",
    description:
      "Access fazezero's complete blockchain infrastructure through 500+ ready-to-use APIs. Multi-chain support for rapid Web3 development.",
    url: "/platform/api",
    type: "website",
    images: [
      {
        url: "/og/og-platform-api.png",
        width: 1200,
        height: 630,
        alt: "fazezero API Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "500+ APIs - fazezero",
    description:
      "Access fazezero's complete blockchain infrastructure through 500+ ready-to-use APIs.",
  },
};

export const pageContent = {
  badge: "Developer Platform",
  badgeIcon: "Code",
  title: "Build Faster with 500+ Ready-to-Use APIs",
  description:
    "fazezero provides a comprehensive API suite that gives developers programmatic access to enterprise-grade blockchain infrastructure. From smart contract deployment to digital asset custody, payments, and identity management — our APIs abstract away complexity while maintaining full control and security.",
  quickLinks: [
    {
      icon: "Layers",
      title: "Multi-Chain Support",
      description:
        "Ethereum, Hyperledger, Corda, Polygon, Solana, and 100+ chains",
      href: "#multichain",
    },
    {
      icon: "FileCode",
      title: "Smart Contracts",
      description: "Deploy, test, and manage contracts across protocols",
      href: "#contracts",
    },
    {
      icon: "Wallet",
      title: "Custody APIs",
      description: "Wallet management, keys, signatures, and governance",
      href: "#custody",
    },
    {
      icon: "Zap",
      title: "Event Streaming",
      description: "Real-time blockchain events and webhooks",
      href: "#events",
    },
  ],
  sections: [
    {
      title: "Unified Multi-Chain Access",
      description:
        "Single API interface for deploying and managing applications across Ethereum, Hyperledger Fabric, Corda, Polygon, Solana, Binance Smart Chain, and 100+ additional blockchains. Developers write code once and deploy anywhere — eliminating protocol-specific learning curves and reducing time-to-market. Cross-chain capabilities enable liquidity aggregation, data synchronization, and unified custody across heterogeneous networks.",
      icon: "Globe",
    },
    {
      title: "Smart Contract Lifecycle",
      description:
        "Complete toolkit for smart contract development including compilation, deployment, testing, upgrading, and monitoring. Support for Solidity, Vyper, DAML, and Chaincode with built-in static analysis, automated testing pipelines, and gas optimization tools. Template libraries accelerate development for common patterns like ERC-20, ERC-721, and governance contracts. Seamless integration with Hardhat, Truffle, and Remix.",
      icon: "FileCode",
    },
    {
      title: "Digital Asset Custody",
      description:
        "Programmatic wallet creation, key management, transaction signing, and asset transfers secured by MPC and SGX technology. APIs support hot, warm, and cold wallet configurations with customizable governance policies, multi-signature workflows, and spending limits. Real-time balance queries, transaction history, and portfolio analytics across all supported chains and tokens.",
      icon: "Lock",
    },
    {
      title: "Identity & Access Management",
      description:
        "W3C-compliant Decentralized Identifier (DID) APIs and Verifiable Credential issuance for building self-sovereign identity solutions. Support for zero-knowledge proofs, biometric authentication, and OAuth 2.0 integration. Role-based access control (RBAC) APIs enable fine-grained permissions for organizational accounts, developer teams, and end-users with comprehensive audit logging.",
      icon: "UserCheck",
    },
    {
      title: "Payment & Settlement APIs",
      description:
        "Initiate stablecoin and digital asset payments with instant settlement finality. APIs for merchant payment processing, invoice generation, recurring billing, and batch payouts. Integration with on/off-ramp providers enables fiat conversion. Support for atomic swaps, liquidity routing, and cross-border settlement with real-time exchange rates and fee estimation.",
      icon: "CreditCard",
    },
    {
      title: "Real-Time Event Streams",
      description:
        "Subscribe to blockchain events, smart contract emissions, and transaction confirmations via WebSocket and webhook integrations. Filter and route events based on custom logic. Real-time monitoring for security alerts, compliance triggers, and operational anomalies. Event replay capabilities for debugging and analytics with guaranteed delivery and ordering semantics.",
      icon: "Activity",
    },
  ],
};
