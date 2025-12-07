import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Supply Chain - Blockchain Traceability | HyperFabrics",
  description:
    "Blockchain platform for supply chain transparency and efficiency. Real-time tracking, fraud reduction, compliance automation, and trusted multi-party coordination. Ethereum and Hyperledger support with 500+ APIs.",
  keywords: [
    "supply chain blockchain",
    "blockchain traceability",
    "supply chain transparency",
    "logistics blockchain",
    "product tracking",
    "supply chain management",
  ],
  openGraph: {
    title: "BaaS for Supply Chain - HyperFabrics",
    description:
      "Blockchain platform for supply chain with real-time tracking, transparency, and multi-party trust.",
    url: "/solutions/supply-chain",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-supply-chain.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Supply Chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Supply Chain - HyperFabrics",
    description:
      "Blockchain platform for supply chain transparency and efficiency.",
  },
};

export const pageContent = {
  badge: "Supply Chain",
  badgeIcon: "Package" as IconName,
  title: "End-to-End Visibility, Total Trust",
  description:
    "BaaS for Supply Chain is HyperFabrics's blockchain platform designed to bring transparency, security, and operational efficiency to global supply chains. Built for industries that rely on complex logistics and multi-party coordination, the solution helps organizations track goods, verify transactions, and reduce risk with real-time visibility.",
  quickLinks: [
    {
      icon: "MapPin" as IconName,
      title: "Real-Time Tracking",
      description: "Monitor goods from origin to delivery with GPS and IoT",
      href: "#tracking",
    },
    {
      icon: "Eye" as IconName,
      title: "Full Transparency",
      description: "Every party shares access to a single source of truth",
      href: "#transparency",
    },
    {
      icon: "ShieldCheck" as IconName,
      title: "Fraud Prevention",
      description: "Immutable records eliminate counterfeit and tampering",
      href: "#fraud",
    },
    {
      icon: "FileCheck" as IconName,
      title: "Compliance",
      description: "Automated auditing and regulatory reporting",
      href: "#compliance",
    },
  ],
  sections: [
    {
      title: "Supply Chain Complexity Challenge",
      description:
        "Blockchain's popularity in supply chain management comes from its ability to provide transparency, security, and efficiency. By employing a decentralized and immutable ledger, it ensures that all parties in the supply chain have access to the same information, thereby reducing discrepancies and fraud while improving traceability and accountability.",
      icon: "AlertCircle" as IconName,
    },
    {
      title: "Real-Time Traceability",
      description:
        "Track products from raw materials through manufacturing, distribution, and retail to end consumers. Every transaction, transfer, and transformation is recorded in real-time with timestamps and location data. IoT sensors provide temperature, humidity, and condition monitoring for sensitive goods. Complete provenance history enables instant recall management and quality investigations.",
      icon: "Radio" as IconName,
    },
    {
      title: "Multi-Party Collaboration",
      description:
        "Connect manufacturers, suppliers, logistics providers, customs, retailers, and consumers on shared infrastructure. Each party updates the ledger with their activities — creating a single source of truth accessible to all authorized participants. This eliminates information silos, reduces disputes, and accelerates decision-making across the entire supply network.",
      icon: "Users" as IconName,
    },
    {
      title: "Counterfeit Prevention",
      description:
        "Authenticate products at every checkpoint using blockchain-verified digital twins. Consumers scan QR codes or NFC tags to verify authenticity before purchase. Luxury goods, pharmaceuticals, electronics, and food products gain protection against counterfeiting — preserving brand value while ensuring consumer safety. Immutable records make tampering evident immediately.",
      icon: "ShieldAlert" as IconName,
    },
    {
      title: "Automated Compliance & Auditing",
      description:
        "Maintain continuous compliance with regulatory requirements through automated documentation and verification. Smart contracts ensure certificates, permits, and inspections remain current throughout the supply journey. Customs clearance accelerates with pre-verified documentation. Auditors access complete, tamper-proof records reducing audit time and costs significantly.",
      icon: "ClipboardCheck" as IconName,
    },
    {
      title: "Operational Efficiency",
      description:
        "Reduce delays, manual errors, and disputes through real-time information sharing and automated workflows. Smart contracts trigger payments upon delivery verification, automate reordering when inventory drops, and escalate exceptions immediately. Analytics identify bottlenecks and optimization opportunities. Overall efficiency improvements reduce costs while improving service levels.",
      icon: "Zap" as IconName,
    },
  ],
};
