import { MegaMenuColumn } from "@/types/navigation";

export const solutionsMegaMenu: MegaMenuColumn[] = [
  {
    sections: [
      {
        title: "FINANCIAL SERVICES",
        items: [
          {
            label: "Central Banks",
            href: "/solutions/central-banks",
            description:
              "CBDC infrastructure for 100+ countries with policy enforcement.",
            icon: "Briefcase",
          },
          {
            label: "Financial Services",
            href: "/solutions/financial-services",
            description:
              "Enterprise blockchain for banks with asset tokenization.",
            icon: "BarChart",
          },
          {
            label: "Insurance",
            href: "/solutions/insurance",
            description:
              "Automated claims, fraud detection, smart contract payouts.",
            icon: "ShieldCheck",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "TECHNOLOGY & INNOVATION",
        items: [
          {
            label: "Gaming",
            href: "/solutions/gaming",
            description:
              "Web3 gaming with NFTs, player ownership, decentralized marketplaces.",
            icon: "PlaySquare",
          },
          {
            label: "Media & Entertainment",
            href: "/solutions/media",
            description:
              "NFT marketplaces, smart royalties, creator economy.",
            icon: "Youtube",
          },
          {
            label: "Supply Chain",
            href: "/solutions/supply-chain",
            description:
              "End-to-end traceability, multi-party collaboration, IoT integration.",
            icon: "Package",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "PUBLIC SECTOR & IMPACT",
        items: [
          {
            label: "Government",
            href: "/solutions/government",
            description:
              "Digital identity, voting, transparent public funding.",
            icon: "FileText",
          },
          {
            label: "Healthcare",
            href: "/solutions/healthcare",
            description:
              "Interoperable health records, claims processing, HIPAA-ready.",
            icon: "Activity",
          },
          {
            label: "ESG & Sustainability",
            href: "/solutions/esg",
            description:
              "ESG tracking aligned with TCFD standards, carbon footprint monitoring.",
            icon: "Server",
          },
        ],
      },
    ],
  },
];
