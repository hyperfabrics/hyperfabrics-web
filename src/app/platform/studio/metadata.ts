import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Tokenization Studio - Design and Launch Digital Assets | fazezero",
  description:
    "No-code platform for designing, launching, and managing tokenized assets. Create security tokens, utility tokens, NFTs, and stablecoins with built-in compliance, governance, and lifecycle management.",
  keywords: [
    "tokenization platform",
    "security tokens",
    "asset tokenization",
    "token issuance",
    "NFT platform",
    "digital securities",
  ],
  openGraph: {
    title: "Tokenization Studio - fazezero",
    description:
      "No-code platform for designing, launching, and managing tokenized assets. Create tokens with built-in compliance and governance.",
    url: "/platform/studio",
    type: "website",
    images: [
      {
        url: "/og/og-platform-studio.png",
        width: 1200,
        height: 630,
        alt: "fazezero Tokenization Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokenization Studio - fazezero",
    description:
      "No-code platform for designing, launching, and managing tokenized assets.",
  },
};

export const pageContent = {
  badge: "Tokenization",
  badgeIcon: "Coins" as IconName,
  title: "Bring Any Asset On-Chain",
  description:
    "fazezero's Tokenization Studio empowers institutions to design, launch, and manage tokenized assets without writing code. From real estate and securities to art and commodities — create compliant digital representations with built-in governance, transfer restrictions, and lifecycle management. Our platform handles technical complexity while you focus on your tokenization strategy.",
  quickLinks: [
    {
      icon: "FileText" as IconName,
      title: "Security Tokens",
      description: "Tokenize equity, debt, and investment instruments",
      href: "#securities",
    },
    {
      icon: "Image" as IconName,
      title: "NFTs & Collectibles",
      description: "Create unique digital assets and collections",
      href: "#nfts",
    },
    {
      icon: "Coins" as IconName,
      title: "Utility Tokens",
      description: "Launch platform tokens and reward systems",
      href: "#utility",
    },
    {
      icon: "Building2" as IconName,
      title: "Real-World Assets",
      description: "Tokenize real estate, commodities, and physical goods",
      href: "#rwa",
    },
  ],
  sections: [
    {
      title: "No-Code Token Creation",
      description:
        "Intuitive visual interface for designing tokens without blockchain development expertise. Configure token properties including name, symbol, supply, decimals, and transfer rules through guided workflows. Choose from pre-audited smart contract templates for ERC-20, ERC-721, ERC-1400 (security tokens), and custom token standards. Preview and test tokens in sandbox before deploying to production networks.",
      icon: "Sparkles" as IconName,
    },
    {
      title: "Compliance & Regulatory Controls",
      description:
        "Built-in compliance frameworks for securities tokenization including investor accreditation checks, transfer restrictions, and jurisdictional controls. Whitelist management for KYC/AML verified holders. Lock-up periods, vesting schedules, and time-based transfer restrictions enforce regulatory requirements automatically. Integration with compliance providers ensures tokens remain compliant throughout their lifecycle.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Token Economics Design",
      description:
        "Model and simulate token economics before launch. Configure supply mechanisms including fixed supply, inflationary models, or deflationary burn mechanisms. Design distribution schedules for team allocations, investor tranches, and public sales. Scenario simulator tests various economic parameters to optimize for desired behaviors and long-term sustainability.",
      icon: "TrendingUp" as IconName,
    },
    {
      title: "Lifecycle Management",
      description:
        "Manage tokens post-issuance with tools for corporate actions, token swaps, and upgrades. Execute airdrops, dividends, and reward distributions to token holders. Implement governance mechanisms for on-chain voting and proposal systems. Handle stock splits, reverse splits, and recapitalizations through smart contract functions with full audit trail.",
      icon: "RefreshCw" as IconName,
    },
    {
      title: "Issuance & Distribution",
      description:
        "Streamlined token issuance workflows from minting to distribution. Support for multiple distribution methods including private sales, public offerings, airdrops, and vesting contracts. Automated KYC collection and investor onboarding with custodial or self-custody options. Integration with payment rails enables fiat-to-token conversions during primary issuance.",
      icon: "Send" as IconName,
    },
    {
      title: "Secondary Market Support",
      description:
        "Enable secondary trading through integration with digital asset exchanges and OTC desks. Transfer agent functionality tracks ownership, enforces transfer restrictions, and manages the cap table. Real-time market data provides transparency for token holders. Optional liquidity provision through automated market makers (AMMs) or order book-based exchanges.",
      icon: "BarChart" as IconName,
    },
  ],
};
