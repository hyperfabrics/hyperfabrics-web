import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Digital Assets Platform - Enterprise Custody & Trading | HyperFabrics",
  description:
    "Enterprise-grade platform for moving, storing, and issuing digital assets. MPC and SGX security, multi-chain custody, DeFi access, and connectivity to 1,800+ exchanges. Trusted by leading financial institutions worldwide.",
  keywords: [
    "digital asset custody",
    "crypto custody platform",
    "institutional custody",
    "digital asset management",
    "MPC custody",
    "multi-chain wallet",
  ],
  openGraph: {
    title: "Digital Assets Platform - HyperFabrics",
    description:
      "Enterprise-grade platform for digital asset custody, trading, and issuance. MPC security across 100+ blockchains.",
    url: "/platform/digital-assets",
    type: "website",
    images: [
      {
        url: "/og/og-platform-digital-assets.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics Digital Assets Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Assets Platform - HyperFabrics",
    description:
      "Enterprise-grade platform for digital asset custody, trading, and issuance.",
  },
};

export const pageContent = {
  badge: "Digital Assets",
  badgeIcon: "Wallet" as IconName,
  title: "Institutional-Grade Digital Asset Infrastructure",
  description:
    "HyperFabrics is an enterprise-grade platform designed to provide secure infrastructure for moving, storing, and issuing digital assets. It enables financial institutions such as exchanges, custodians, banks, trading desks, and hedge funds to securely scale their digital asset operations with breakthrough MPC and patent-pending SGX technology.",
  quickLinks: [
    {
      icon: "Building2" as IconName,
      title: "Financial Institutions",
      description: "Banks, custodians, and institutional investors",
      href: "#financial",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Exchanges & Fintechs",
      description: "Trusted by leading fintechs and global exchanges",
      href: "#exchanges",
    },
    {
      icon: "Rocket" as IconName,
      title: "Startups",
      description: "Easy-to-use platform for emerging companies",
      href: "#startups",
    },
    {
      icon: "Blocks" as IconName,
      title: "Web3 Companies",
      description: "NFTs, DeFi, and decentralized operations",
      href: "#web3",
    },
  ],
  sections: [
    {
      title: "Digital Assets for Financial Services",
      description:
        "Secure infrastructure for banks, custodians, exchanges, trading desks, and hedge funds to scale digital asset operations. Direct custody with hot, warm, and cold wallets, governance policies, and exchange connectivity. Automated custody, trading, and issuance processes reduce operational risk while accelerating innovation in digital currencies, stablecoins, and tokenized securities. Support for 100+ blockchains with MPC and SGX protection for private keys and API credentials.",
      icon: "Landmark" as IconName,
    },
    {
      title: "Digital Assets for Fintechs & Exchanges",
      description:
        "Comprehensive solution trusted by leading fintechs and global exchanges featuring battle-tested hot, warm, and cold wallets with robust governance policies and extensive API support. Real-time settlement, automated workflows, and connectivity to 1,800+ banks, exchanges, and liquidity providers enable seamless secondary market integration. Multi-layered security including MPC and secure transfer network safeguards against cyber threats, internal fraud, and human errors throughout the digital asset lifecycle.",
      icon: "Repeat" as IconName,
    },
    {
      title: "Digital Assets for Startups",
      description:
        "Easy-to-use platform designed for new and small businesses to secure digital assets and manage day-to-day treasury operations. Self-service tools offer streamlined treasury management, wallet creation, and network access with battle-tested security and easy-to-implement technology. Empowers startups to quickly bring innovative digital asset solutions to market without deep technical expertise while focusing on innovation instead of infrastructure challenges.",
      icon: "Zap" as IconName,
    },
    {
      title: "Digital Assets for Web3 Companies",
      description:
        "Secure platform for managing digital assets, smart contracts, and decentralized operations. Built to support NFTs, DeFi protocols, and emerging Web3 use cases with robust infrastructure for secure transactions and custody. Advanced SGX and MPC technology delivers industry-leading protection enabling Web3 companies to scale efficiently. Whether launching NFT marketplaces, decentralized finance applications, or other Web3 solutions, HyperFabrics provides secure, scalable infrastructure to accelerate growth.",
      icon: "Sparkles" as IconName,
    },
    {
      title: "MPC & SGX Security",
      description:
        "Breakthrough Multi-Party Computation (MPC) and patent-pending Software Guard Extensions (SGX) technology ensure the highest level of security for private keys and API credentials. Distributed key generation eliminates single points of failure while hardware-based isolation protects cryptographic operations at the processor level. This dual-layer approach protects assets from theft, cyber threats, and unauthorized access — even from insiders.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Multi-Chain & DeFi Access",
      description:
        "Support for 100+ blockchains including Ethereum, Bitcoin, Hyperledger, Polygon, Solana, Binance Smart Chain, and emerging networks. Access DeFi applications for staking, lending, and liquidity provision. Seamless integration with major exchanges and OTC desks for trading and settlement. Unified custody and reporting across all chains simplifies portfolio management while enabling diversification and yield optimization strategies.",
      icon: "Network" as IconName,
    },
  ],
};
