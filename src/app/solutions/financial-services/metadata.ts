import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BaaS for Financial Services - Enterprise Blockchain for Banks | fazezero",
  description:
    "Enterprise blockchain platform for banking and finance. Streamline processes, reduce costs, and innovate with asset tokenization, automated transactions, and real-time data exchange. ISO 27001 certified with 99.99% uptime.",
  keywords: [
    "blockchain for banks",
    "financial services blockchain",
    "banking blockchain platform",
    "fintech blockchain",
    "asset tokenization",
    "digital banking",
  ],
  openGraph: {
    title: "BaaS for Financial Services - fazezero",
    description:
      "Enterprise blockchain platform for banking and finance. Secure, compliant, scalable infrastructure for digital transformation.",
    url: "/solutions/financial-services",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-financial.png",
        width: 1200,
        height: 630,
        alt: "fazezero BaaS for Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Financial Services - fazezero",
    description:
      "Enterprise blockchain platform for banking and finance with 99.99% uptime.",
  },
};

export const pageContent = {
  badge: "Financial Services",
  badgeIcon: "Building2",
  title: "Modernize Financial Operations",
  description:
    "BaaS for Financial Services is fazezero's enterprise blockchain platform built specifically for the banking and finance industry. It addresses the sector's need for secure, compliant, and scalable infrastructure to support modernization, digital transformation, and operational efficiency while navigating regulatory complexity.",
  quickLinks: [
    {
      icon: "Coins",
      title: "Asset Tokenization",
      description:
        "Digitize securities, commodities, and financial instruments",
      href: "#tokenization",
    },
    {
      icon: "Zap",
      title: "Real-Time Settlement",
      description: "Accelerate transactions from days to seconds",
      href: "#settlement",
    },
    {
      icon: "ShieldCheck",
      title: "ISO 27001 Certified",
      description: "Enterprise security with regulatory compliance built-in",
      href: "#compliance",
    },
    {
      icon: "Network",
      title: "Multi-Protocol",
      description: "Deploy on Ethereum, Hyperledger, Corda, and more",
      href: "#protocols",
    },
  ],
  sections: [
    {
      title: "Balancing Innovation & Regulation",
      description:
        "The banking and finance sector faces unique pressures—balancing security, regulatory compliance, and operational efficiency while navigating digital transformation. fazezero provides solutions that address these challenges with enterprise-grade infrastructure designed for mission-critical financial environments operating under strict regulatory oversight.",
      icon: "Scale",
    },
    {
      title: "Asset Tokenization & Digital Securities",
      description:
        "Transform traditional financial instruments into programmable digital assets. Tokenize equities, bonds, derivatives, real estate, and alternative investments to unlock 24/7 trading, fractional ownership, and automated compliance. Smart contracts enforce transfer restrictions, accreditation requirements, and corporate actions — reducing operational overhead while expanding market access.",
      icon: "FileText",
    },
    {
      title: "Interbank & Cross-Border Payments",
      description:
        "Modernize payment infrastructure with blockchain-based settlement that reduces costs, accelerates finality, and improves transparency. Real-time gross settlement (RTGS) across correspondent banking networks eliminates delays and reduces counterparty risk. Support for multiple currencies and instant foreign exchange enables efficient cross-border transactions.",
      icon: "ArrowLeftRight",
    },
    {
      title: "Trade Finance & Supply Chain",
      description:
        "Digitize letters of credit, bills of lading, and trade documentation to reduce fraud and accelerate transactions. Multi-party workflows connect importers, exporters, banks, and logistics providers on shared infrastructure. Smart contracts automatically trigger payments upon shipment verification or delivery confirmation — improving working capital efficiency.",
      icon: "Package",
    },
    {
      title: "Regulatory Compliance & Reporting",
      description:
        "Built-in compliance frameworks support KYC/AML requirements, transaction monitoring, and regulatory reporting. ISO 27001 and SOC 2 Type 2 certifications meet institutional security standards. Immutable audit trails provide regulators with complete transaction history for examinations. Integration with existing compliance systems maintains consistency across operations.",
      icon: "ClipboardCheck",
    },
    {
      title: "Seamless System Integration",
      description:
        "Connect blockchain networks to core banking systems, payment processors, and market data providers through pre-built connectors and APIs. Maintain existing workflows while adding blockchain capabilities incrementally. Support for hybrid architectures enables gradual migration without disrupting critical operations. Whether upgrading interbank processes or launching digital asset platforms, fazezero provides the tools to move quickly and securely.",
      icon: "Plug",
    },
  ],
};
