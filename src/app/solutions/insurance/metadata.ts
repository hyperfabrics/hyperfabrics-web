import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Insurance - Blockchain for Claims & Policies | HyperFabrics",
  description:
    "Blockchain solution for insurance companies to simplify claims, reduce fraud, and increase transparency. Automated payouts, reduced paperwork, and improved customer experience through smart contracts and immutable records.",
  keywords: [
    "insurance blockchain",
    "insurtech platform",
    "smart contracts insurance",
    "claims automation",
    "insurance fraud prevention",
    "blockchain policies",
  ],
  openGraph: {
    title: "BaaS for Insurance - HyperFabrics",
    description:
      "Blockchain solution for insurance with automated claims, reduced fraud, and transparent policy management.",
    url: "/solutions/insurance",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-insurance.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Insurance - HyperFabrics",
    description:
      "Blockchain solution for insurance with automated claims and fraud reduction.",
  },
};

export const pageContent = {
  badge: "Insurance",
  badgeIcon: "Shield" as IconName,
  title: "Smarter, Faster Insurance",
  description:
    "BaaS for Insurance Companies is HyperFabrics's blockchain solution tailored to simplify claims management, reduce fraud, and increase transparency across the insurance lifecycle. Built for insurers, brokers, and insurtech providers, it enables faster, more accurate policy and claims processing using secure, shared infrastructure.",
  quickLinks: [
    {
      icon: "Zap" as IconName,
      title: "Automated Claims",
      description: "Smart contracts trigger instant payouts on verified events",
      href: "#claims",
    },
    {
      icon: "FileCheck" as IconName,
      title: "Immutable Records",
      description: "Tamper-proof policy and claims history",
      href: "#records",
    },
    {
      icon: "ShieldAlert" as IconName,
      title: "Fraud Detection",
      description: "Cross-insurer data sharing identifies suspicious patterns",
      href: "#fraud",
    },
    {
      icon: "Users" as IconName,
      title: "Better Experience",
      description: "Faster processing and transparent status updates",
      href: "#experience",
    },
  ],
  sections: [
    {
      title: "The Future of Insurance Processing",
      description:
        "Imagine a database where every driver's policy information is immutable. When an accident occurs, a police report updates this database, repair estimates follow, and payments are automated. This reduces paperwork and simplifies processes—a future within reach for insurance through blockchain technology that connects insurers, service providers, and regulators on unified infrastructure.",
      icon: "Sparkles" as IconName,
    },
    {
      title: "Automated Claims Processing",
      description:
        "Smart contracts automatically trigger claims processing when predefined conditions are met. IoT sensors, police reports, weather data, and repair estimates flow directly into the system — eliminating manual data entry and reducing processing time from weeks to minutes. Policyholders receive transparent status updates at each step while insurers reduce operational costs.",
      icon: "PlayCircle" as IconName,
    },
    {
      title: "Fraud Prevention & Detection",
      description:
        "Blockchain's immutable ledger creates tamper-proof records of policies, claims, and payment history. Cross-insurer data sharing identifies duplicate claims, false identities, and suspicious patterns without compromising customer privacy. Automated flagging of anomalies enables investigators to focus resources on high-risk cases — significantly reducing fraud losses.",
      icon: "AlertTriangle" as IconName,
    },
    {
      title: "Unified Policy Management",
      description:
        "Single source of truth for policy information accessible to insurers, reinsurers, brokers, and regulators. Real-time updates ensure all parties work with current coverage details, endorsements, and exclusions. This eliminates discrepancies during claims while simplifying compliance reporting and audit processes.",
      icon: "FileText" as IconName,
    },
    {
      title: "Reinsurance & Risk Transfer",
      description:
        "Streamline reinsurance agreements with smart contracts that automatically calculate premiums, track exposure, and settle claims based on predefined triggers. Parametric insurance products pay out immediately when measurable events occur — such as natural disasters or flight delays — without traditional claims investigation. This improves capital efficiency and reduces settlement delays.",
      icon: "Repeat" as IconName,
    },
    {
      title: "Customer Experience",
      description:
        "Blockchain enables instant policy issuance, real-time premium calculations, and transparent claims tracking. Customers access their complete insurance history through mobile apps with cryptographic proof of coverage. Automated payouts and reduced paperwork dramatically improve satisfaction while lowering customer acquisition costs through positive word-of-mouth and retention.",
      icon: "Smile" as IconName,
    },
  ],
};
