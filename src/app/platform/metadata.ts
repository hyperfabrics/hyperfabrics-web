import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Platform - Enterprise Blockchain Infrastructure",
  description:
    "Explore fazezero's enterprise blockchain platform. Secure, scalable, and compliant infrastructure for tokenization, payments, and digital asset management.",
  keywords: [
    "blockchain platform",
    "enterprise infrastructure",
    "tokenization platform",
    "blockchain API",
    "digital asset infrastructure",
  ],
  openGraph: {
    title: "Platform - fazezero",
    description:
      "Explore fazezero's enterprise blockchain platform. Secure, scalable, and compliant infrastructure for tokenization, payments, and digital asset management.",
    url: "/platform",
    type: "website",
    images: [
      {
        url: "/og/og-platform.png",
        width: 1200,
        height: 630,
        alt: "fazezero Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform - fazezero",
    description:
      "Explore fazezero's enterprise blockchain platform. Secure, scalable, and compliant infrastructure for tokenization, payments, and digital asset management.",
  },
};

export const pageContent = {
  badge: "Enterprise Platform",
  badgeIcon: "Layers" as IconName,
  title: "Secure, Scalable Infrastructure for Digital Assets",
  description:
    "fazezero delivers an ISO 27001 & SOC 2 Type 2-certified Web3 platform that empowers enterprises to launch secure, multi-cloud blockchain networks. With 500+ ready-to-use APIs, support for Ethereum, Hyperledger Fabric, Corda, Polygon, and more, we provide the complete infrastructure for digital asset custody, tokenization, and payments.",
  quickLinks: [
    {
      icon: "Shield" as IconName,
      title: "MPC Security",
      description:
        "Multi-Party Computation and SGX technology for unbreakable key protection",
      href: "/platform/mpc",
    },
    {
      icon: "Database" as IconName,
      title: "Digital Asset Custody",
      description:
        "Hot, warm, and cold wallets with governance policies across 100+ blockchains",
      href: "/platform/dashboard",
    },
    {
      icon: "Zap" as IconName,
      title: "Payment Rails",
      description:
        "Stablecoin settlement in seconds with low-cost cross-border capabilities",
      href: "/platform/payments",
    },
    {
      icon: "Code" as IconName,
      title: "500+ APIs",
      description:
        "Comprehensive API suite for building, deploying, and managing blockchain apps",
      href: "/platform/api",
    },
  ],
  sections: [
    {
      title: "Digital Assets Platform",
      description:
        "Enterprise-grade infrastructure for moving, storing, and issuing digital assets. Utilizing breakthrough Multi-Party Computation (MPC) and patent-pending Software Guard Extensions (SGX), fazezero delivers industry-leading protection for private keys and API credentials. Support for direct custody with hot, warm, and cold wallets, governance policies, exchange connectivity, and access to DeFi applications across 100+ blockchains. Trusted by leading financial institutions, exchanges, and custodians worldwide.",
      icon: "Wallet" as IconName,
    },
    {
      title: "Blockchain as a Service",
      description:
        "Launch secure, multi-cloud blockchain networks in minutes. Deploy across Ethereum, Hyperledger Fabric, Corda, Polygon, and leading protocols with enterprise-grade security, 99.99% uptime, and seamless integration into existing systems. Purpose-built for central banks (CBDCs), financial services, gaming, government agencies, healthcare, insurance, media, and supply chain. ISO 27001 and SOC 2 Type 2 certified with built-in compliance tools.",
      icon: "Cloud" as IconName,
    },
    {
      title: "Stablecoin Payment Rails",
      description:
        "Real-time digital asset settlement across multiple blockchains and geographies. Our Payments Engine enables seamless merchant services, cross-border payments, remittances, payroll processing, and ecommerce transactions — all settling in seconds at minimal cost. Integration with blockchain-based payment providers ensures global reach, while MPC and SGX security protect every transaction end-to-end.",
      icon: "ArrowRightLeft" as IconName,
    },
    {
      title: "Developer Studio",
      description:
        "Build faster with 500+ APIs, smart contract templates, event streaming, and real-time monitoring. Our developer platform includes multi-chain support, identity management, automated testing pipelines, and seamless integration with popular dev tools. Pre-built connectors for ERP, IAM, and data systems slash time-to-market. ISO-certified infrastructure ensures your apps run with 99.99% uptime — even on pitch day.",
      icon: "Terminal" as IconName,
    },
    {
      title: "Analytics & Monitoring",
      description:
        "Gain complete visibility into blockchain operations with real-time dashboards, transaction monitoring, compliance reporting, and performance analytics. Track liquidity, risk, customer insights, and on-chain activity across all networks. Built-in audit trails provide immutable records for regulatory reporting, while customizable alerts keep teams informed of critical events 24/7.",
      icon: "BarChart3" as IconName,
    },
    {
      title: "Sandbox Environment",
      description:
        "Test and validate blockchain applications in a safe, production-like environment before deployment. Our sandbox supports multi-chain testing, smart contract debugging, API validation, and integration testing — all without risking real assets or production systems. Accelerate development cycles and reduce deployment risk with comprehensive pre-production capabilities.",
      icon: "TestTube" as IconName,
    },
  ],
};
