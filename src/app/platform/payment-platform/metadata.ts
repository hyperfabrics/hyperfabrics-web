import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stablecoin Payment Rails - Real-Time Digital Asset Settlement | fazezero",
  description:
    "Enterprise-grade stablecoin payment infrastructure for instant cross-border settlement. Transactions settle in seconds at minimal cost across 100+ blockchains for remittances, payroll, ecommerce, and institutional payments.",
  keywords: [
    "stablecoin payments",
    "digital asset settlement",
    "blockchain payments",
    "cross-border payments",
    "instant settlement",
    "payment rails",
    "crypto payments",
  ],
  openGraph: {
    title: "Stablecoin Payment Rails - fazezero",
    description:
      "Enterprise-grade stablecoin payment infrastructure for instant cross-border settlement. Transactions settle in seconds at minimal cost.",
    url: "/platform/payments",
    type: "website",
    images: [
      {
        url: "/og/og-platform-payments.png",
        width: 1200,
        height: 630,
        alt: "fazezero Payment Rails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stablecoin Payment Rails - fazezero",
    description:
      "Enterprise-grade stablecoin payment infrastructure for instant cross-border settlement.",
  },
};

export const pageContent = {
  badge: "Payments",
  badgeIcon: "ArrowRightLeft",
  title: "Instant Settlement, Global Reach",
  description:
    "fazezero's Stablecoin Payment Platform delivers enterprise-grade infrastructure for moving, issuing, and storing digital assets at scale. Leveraging Intel SGX and Multi-Party Computation (MPC), our Payments Engine enables seamless settlement across multiple blockchains and regions — making it ideal for merchant services, institutional payments, and global money movement.",
  quickLinks: [
    {
      icon: "Zap",
      title: "Instant Settlement",
      description: "Transactions settle in seconds, not days",
      href: "#settlement",
    },
    {
      icon: "DollarSign",
      title: "Low-Cost Transfers",
      description: "Minimal fees for cross-border payments",
      href: "#cost",
    },
    {
      icon: "Globe",
      title: "Multi-Chain Support",
      description: "100+ blockchains and global payment networks",
      href: "#multichain",
    },
    {
      icon: "Building",
      title: "Institutional Grade",
      description: "Built for banks, exchanges, and enterprises",
      href: "#institutional",
    },
  ],
  sections: [
    {
      title: "Real-Time Digital Asset Settlement",
      description:
        "Our Payments Engine supports seamless digital asset settlement across multiple blockchains and geographies. Transactions clear and settle in seconds with cryptographic finality — eliminating multi-day delays and enabling 24/7 payment processing. Integration with blockchain-based cross-border providers like Borderless expands global reach while maintaining security and compliance at every step.",
      icon: "Clock",
    },
    {
      title: "Enterprise Payment Use Cases",
      description:
        "Support diverse payment flows including remittances, peer-to-peer transfers, account-to-account settlements, payroll processing, supplier invoice management, government disbursements, and ecommerce transactions. Each use case benefits from instant finality, transparent audit trails, and programmable payment logic through smart contracts — enabling automation and reducing operational overhead.",
      icon: "Briefcase",
    },
    {
      title: "Multi-Chain Infrastructure",
      description:
        "Deploy payment rails across 100+ supported blockchains including Ethereum, Polygon, Solana, Binance Smart Chain, and permissioned networks. Multi-chain support enables liquidity aggregation, network redundancy, and geographic optimization. Route payments through the most cost-effective and performant chains while maintaining unified custody and reporting across your entire payment infrastructure.",
      icon: "Link",
    },
    {
      title: "Merchant & POS Integration",
      description:
        "Embed digital asset payments into merchant systems, point-of-sale terminals, and ecommerce platforms. Support for dynamic QR codes, payment links, and API integrations makes acceptance simple. Real-time conversion from crypto to fiat or stablecoins enables merchants to choose their preferred settlement currency while customers pay with their digital assets of choice.",
      icon: "ShoppingCart",
    },
    {
      title: "Security & Compliance",
      description:
        "MPC and SGX technology protect every transaction from initiation to settlement. Built-in KYC/AML screening, sanctions checking, and transaction monitoring ensure regulatory compliance across jurisdictions. Immutable blockchain records provide complete audit trails for tax reporting, financial audits, and regulatory examinations. ISO 27001 and SOC 2 Type 2 certified infrastructure meets institutional security standards.",
      icon: "Shield",
    },
    {
      title: "Liquidity & Network Access",
      description:
        "Connect to a network of 1,800+ banks, exchanges, and liquidity providers for seamless on/off ramps and secondary market access. Automated liquidity routing finds the best execution across multiple venues. Support for atomic swaps, liquidity pools, and cross-chain bridges ensures efficient capital deployment and minimizes settlement risk for high-volume payment operations.",
      icon: "Waves",
    },
  ],
};
