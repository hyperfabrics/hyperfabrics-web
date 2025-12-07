import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Media & Entertainment - Blockchain for Creators | HyperFabrics",
  description:
    "Blockchain platform for media creators, publishers, and platforms. NFT marketplaces, smart contract royalties, fan engagement, and IP protection. Empower creators with ownership, transparency, and new revenue streams.",
  keywords: [
    "media blockchain",
    "entertainment blockchain",
    "NFT marketplace",
    "creator economy",
    "digital rights management",
    "content blockchain",
  ],
  openGraph: {
    title: "BaaS for Media & Entertainment - HyperFabrics",
    description:
      "Blockchain platform for media creators with NFTs, smart royalties, and fan engagement tools.",
    url: "/solutions/media",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-media.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Media & Entertainment - HyperFabrics",
    description:
      "Blockchain platform empowering creators with ownership and new revenue streams.",
  },
};

export const pageContent = {
  badge: "Media & Entertainment",
  badgeIcon: "Film" as IconName,
  title: "Empower Creators, Engage Fans",
  description:
    "BaaS for Media and Entertainment is HyperFabrics's blockchain platform built to empower creators, publishers, and platforms in the digital age. As the industry faces ongoing challenges around ownership, monetization, and content control, our solution offers the infrastructure to bring transparency, security, and creative freedom to the forefront.",
  quickLinks: [
    {
      icon: "Image" as IconName,
      title: "NFT Marketplaces",
      description: "Launch platforms for digital art, music, and collectibles",
      href: "#nfts",
    },
    {
      icon: "Percent" as IconName,
      title: "Smart Royalties",
      description: "Automated payouts from secondary sales and streaming",
      href: "#royalties",
    },
    {
      icon: "Users" as IconName,
      title: "Fan Engagement",
      description: "Exclusive access, memberships, and community rewards",
      href: "#fans",
    },
    {
      icon: "Copyright" as IconName,
      title: "IP Protection",
      description: "Immutable proof of creation and ownership",
      href: "#ip",
    },
  ],
  sections: [
    {
      title: "The Digital Revolution Challenge",
      description:
        "The media business is on the front lines of the digital revolution. Controlling ownership and distribution are difficult on the internet. Web3 applications empower creators to better monetize their art through blockchain technology that provides transparency, authenticity, and direct creator-to-fan relationships without traditional intermediaries.",
      icon: "Globe" as IconName,
    },
    {
      title: "NFT Marketplaces & Digital Collectibles",
      description:
        "Launch branded NFT marketplaces for digital art, music, videos, virtual goods, and exclusive content. Artists mint unique tokens representing ownership of digital or physical works. Smart contracts encode provenance, authenticity, and scarcity — creating verifiable collectibles that appreciate in value. Integration with major marketplaces expands reach while maintaining creator control.",
      icon: "Palette" as IconName,
    },
    {
      title: "Automated Royalty Distribution",
      description:
        "Smart contracts automatically distribute royalties from secondary sales, streaming, licensing, and syndication. Creators set royalty percentages that execute perpetually — earning from future resales without intermediaries. Real-time payments eliminate payment delays while transparent on-chain records ensure accurate accounting. This fundamentally transforms creator economics.",
      icon: "Coins" as IconName,
    },
    {
      title: "Fan Engagement & Membership",
      description:
        "Tokenize fan relationships through membership NFTs, exclusive access passes, and community governance tokens. Early supporters gain special privileges, backstage experiences, or voting rights on creative decisions. Reward loyal fans with airdrops and limited edition content. Blockchain creates verifiable scarcity and authentic connection between creators and audiences.",
      icon: "Heart" as IconName,
    },
    {
      title: "Rights Management & Anti-Piracy",
      description:
        "Record every content transaction and interaction on decentralized ledgers ensuring authenticity and traceability. Cryptographic fingerprinting detects unauthorized copies and tracks content usage across platforms. Smart licensing agreements automatically enforce usage rights, geographic restrictions, and payment terms — reducing piracy while streamlining rights clearance.",
      icon: "Lock" as IconName,
    },
    {
      title: "New Revenue Streams",
      description:
        "Unlock innovative monetization models including fractional ownership of IP, tokenized crowdfunding for projects, and social tokens for creator brands. Fans invest early in careers or projects, sharing in success through appreciating token value. Direct fan funding reduces dependence on labels, studios, and platforms — giving creators independence while building sustainable businesses.",
      icon: "TrendingUp" as IconName,
    },
  ],
};
