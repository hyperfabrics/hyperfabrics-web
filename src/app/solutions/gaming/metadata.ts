import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Gaming - Web3 Gaming Infrastructure | HyperFabrics",
  description:
    "Build next-level gaming experiences with Web3. Blockchain platform for tokenized assets, NFT characters, player-owned economies, and decentralized marketplaces. 500+ APIs with enterprise security and 99.99% uptime.",
  keywords: [
    "Web3 gaming",
    "blockchain gaming platform",
    "NFT gaming",
    "play-to-earn",
    "gaming blockchain",
    "metaverse infrastructure",
  ],
  openGraph: {
    title: "BaaS for Gaming - HyperFabrics",
    description:
      "Build Web3 gaming experiences with tokenized assets, NFT characters, and player-owned economies.",
    url: "/solutions/gaming",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-gaming.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Gaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Gaming - HyperFabrics",
    description:
      "Build Web3 gaming experiences with blockchain-powered player ownership.",
  },
};

export const pageContent = {
  badge: "Gaming",
  badgeIcon: "Gamepad2" as IconName,
  title: "Unleash Web3 Gaming Potential",
  description:
    "BaaS for Gaming is HyperFabrics's blockchain platform built for game studios, developers, and publishers who want to deliver next-level gaming experiences powered by Web3. As digital ownership and player engagement evolve, our solution offers the tools to create secure, immersive, and monetizable gaming ecosystems.",
  quickLinks: [
    {
      icon: "Image" as IconName,
      title: "NFT Assets",
      description: "Characters, items, and skins with true player ownership",
      href: "#nfts",
    },
    {
      icon: "Store" as IconName,
      title: "Marketplace",
      description: "Decentralized trading and player-to-player economies",
      href: "#marketplace",
    },
    {
      icon: "Coins" as IconName,
      title: "In-Game Economy",
      description: "Tokenized currencies with transparent reward systems",
      href: "#economy",
    },
    {
      icon: "Layers" as IconName,
      title: "Multi-Chain",
      description: "Deploy across Ethereum, Polygon, Solana, and more",
      href: "#chains",
    },
  ],
  sections: [
    {
      title: "True Digital Ownership",
      description:
        "Enable players to truly own in-game assets through blockchain-based NFTs. Characters, weapons, skins, and virtual real estate become tradeable digital property that exists beyond any single game. Players can buy, sell, and transfer assets freely — creating secondary markets and real-world value. This ownership model increases player investment and engagement.",
      icon: "Award" as IconName,
    },
    {
      title: "Decentralized Marketplaces",
      description:
        "Built-in marketplace infrastructure enables peer-to-peer trading without centralized intermediaries. Players trade items directly with transparent pricing and instant settlement. Royalty mechanisms ensure creators earn from secondary sales. Integration with external NFT marketplaces like OpenSea expands liquidity and player reach beyond your game ecosystem.",
      icon: "ShoppingBag" as IconName,
    },
    {
      title: "Play-to-Earn Economies",
      description:
        "Smart contracts power transparent, automated reward systems that compensate players for achievements, participation, and contributions. Tokenized currencies enable cross-game economies and real-world earning potential. Configurable tokenomics balance supply, demand, and player incentives to create sustainable economic models that drive long-term engagement.",
      icon: "TrendingUp" as IconName,
    },
    {
      title: "Cross-Game Interoperability",
      description:
        "Assets and achievements travel with players across multiple games and platforms. Shared blockchain infrastructure enables cross-game item compatibility, unified player identities, and persistent progression. Build gaming universes where player investments appreciate across titles — increasing lifetime value and reducing acquisition costs.",
      icon: "Repeat" as IconName,
    },
    {
      title: "Developer-Friendly Infrastructure",
      description:
        "Remove Web3 complexity with 500+ ready-to-use APIs, SDKs for Unity and Unreal Engine, and comprehensive documentation. Real-time event tracking, identity management, and wallet integration accelerate development. Enterprise-grade security with 99.99% uptime ensures players never lose access to their assets. Pre-built smart contract templates for common gaming patterns reduce development time.",
      icon: "Code" as IconName,
    },
    {
      title: "Scale to Millions of Players",
      description:
        "Infrastructure built for AAA gaming with support for millions of concurrent users and transactions. Multi-chain architecture enables cost optimization by routing transactions to the most efficient network. Layer 2 solutions reduce gas fees while maintaining security. Whether building blockchain-native games or adding Web3 layers to existing titles, HyperFabrics provides everything needed to scale player-driven experiences.",
      icon: "Users" as IconName,
    },
  ],
};
