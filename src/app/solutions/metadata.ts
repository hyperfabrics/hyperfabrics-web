import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Blockchain Use Cases for Enterprises",
  description:
    "Discover blockchain solutions for tokenization, payments, identity management, and compliance. Enterprise-grade Web3 infrastructure for regulated institutions.",
  keywords: [
    "blockchain solutions",
    "tokenization solutions",
    "blockchain payments",
    "digital identity",
    "compliance automation",
    "institutional Web3",
  ],
  openGraph: {
    title: "Solutions - fazezero",
    description:
      "Discover blockchain solutions for tokenization, payments, identity management, and compliance. Enterprise-grade Web3 infrastructure for regulated institutions.",
    url: "/solutions",
    type: "website",
    images: [
      {
        url: "/og/og-solutions.png",
        width: 1200,
        height: 630,
        alt: "fazezero Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions - fazezero",
    description:
      "Discover blockchain solutions for tokenization, payments, identity management, and compliance. Enterprise-grade Web3 infrastructure for regulated institutions.",
  },
};

export const pageContent = {
  badge: "Solutions",
  badgeIcon: "Lightbulb",
  title: "Industry-Specific Blockchain Infrastructure",
  description:
    "fazezero delivers specialized Blockchain as a Service (BaaS) solutions tailored to the unique needs of different industries. From central banks issuing digital currencies to enterprises modernizing supply chains — our platform provides the security, compliance, and scalability required for production deployments.",
  quickLinks: [
    {
      icon: "Landmark",
      title: "Central Banks",
      description:
        "CBDC infrastructure for 100+ countries modernizing payments",
      href: "/solutions/central-banks",
    },
    {
      icon: "Building2",
      title: "Financial Services",
      description:
        "Enterprise blockchain for banks, fintechs, and institutions",
      href: "/solutions/financial-services",
    },
    {
      icon: "Leaf",
      title: "ESG & Sustainability",
      description: "Transparent tracking for climate and social initiatives",
      href: "/solutions/esg",
    },
    {
      icon: "Gamepad2",
      title: "Gaming & Metaverse",
      description: "Web3 gaming with player ownership and NFT economies",
      href: "/solutions/gaming",
    },
    {
      icon: "Building",
      title: "Government",
      description:
        "Transparent governance and digital identity for public sector",
      href: "/solutions/government",
    },
    {
      icon: "Activity",
      title: "Healthcare",
      description: "Interoperable health data and secure patient records",
      href: "/solutions/healthcare",
    },
    {
      icon: "Shield",
      title: "Insurance",
      description: "Automated claims and fraud prevention for insurers",
      href: "/solutions/insurance",
    },
    {
      icon: "Film",
      title: "Media & Entertainment",
      description: "Creator economy with NFTs and smart royalties",
      href: "/solutions/media",
    },
    {
      icon: "Package",
      title: "Supply Chain",
      description: "End-to-end traceability and multi-party collaboration",
      href: "/solutions/supply-chain",
    },
  ],
  sections: [
    {
      title: "Blockchain as a Service (BaaS)",
      description:
        "Deploy secure, compliant blockchain networks in minutes across Ethereum, Hyperledger Fabric, Corda, Polygon, and leading protocols. Our BaaS platform provides 99.99% uptime, ISO 27001 and SOC 2 Type 2 certification, and seamless integration with existing systems. Purpose-built for regulated industries with enterprise-grade security and built-in compliance tools.",
      icon: "Cloud",
    },
    {
      title: "Digital Assets Platform",
      description:
        "Enterprise-grade custody, tokenization, and trading infrastructure for financial institutions. Multi-Party Computation (MPC) and SGX technology protect private keys while supporting hot, warm, and cold wallets across 100+ blockchains. Enable asset tokenization, DeFi access, and exchange connectivity with governance policies that align with institutional requirements.",
      icon: "Wallet",
    },
    {
      title: "Stablecoin Payment Rails",
      description:
        "Real-time digital asset settlement for remittances, payroll, merchant payments, and cross-border transactions. Transactions settle in seconds at minimal cost with cryptographic finality. Integration with 1,800+ banks, exchanges, and liquidity providers ensures global reach while MPC security protects every transaction end-to-end.",
      icon: "ArrowRightLeft",
    },
    {
      title: "Professional Services",
      description:
        "End-to-end consulting from feasibility analysis to production deployment. Our experts guide blockchain strategy, architecture design, proof-of-concept development, and system integration. Services include regulatory compliance advisory, token economics design, smart contract development, and ongoing managed services — accelerating your blockchain journey from concept to reality.",
      icon: "Briefcase",
    },
  ],
};
