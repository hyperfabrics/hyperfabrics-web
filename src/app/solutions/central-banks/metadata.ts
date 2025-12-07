import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Central Banks - CBDC Infrastructure | HyperFabrics",
  description:
    "Specialized blockchain infrastructure for Central Bank Digital Currencies (CBDCs). Support 100+ countries building digital currencies with scalable, compliant, policy-driven systems for tokenization, identity, and cross-border settlement.",
  keywords: [
    "CBDC platform",
    "central bank blockchain",
    "digital currency infrastructure",
    "central bank technology",
    "CBDC issuance",
    "blockchain for central banks",
  ],
  openGraph: {
    title: "BaaS for Central Banks - HyperFabrics",
    description:
      "Specialized blockchain infrastructure for Central Bank Digital Currencies (CBDCs). Scalable, compliant, policy-driven CBDC systems.",
    url: "/solutions/central-banks",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-central-banks.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Central Banks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Central Banks - HyperFabrics",
    description:
      "Specialized blockchain infrastructure for Central Bank Digital Currencies (CBDCs).",
  },
};

export const pageContent = {
  badge: "Central Banks",
  badgeIcon: "Landmark" as IconName,
  title: "Leading the CBDC Revolution",
  description:
    "BaaS for Central Banks is HyperFabrics's specialized blockchain solution designed to support the development and deployment of Central Bank Digital Currencies (CBDCs). As more than 100 countries explore or pilot CBDCs to modernize payments, increase financial inclusion, and drive digital economic growth, HyperFabrics provides the infrastructure to move securely and confidently.",
  quickLinks: [
    {
      icon: "Globe" as IconName,
      title: "100+ Countries",
      description: "Join nations worldwide building and testing CBDCs",
      href: "#global",
    },
    {
      icon: "Shield" as IconName,
      title: "ISO 27001 Certified",
      description: "Enterprise security with 99.99% uptime SLA",
      href: "#security",
    },
    {
      icon: "GitBranch" as IconName,
      title: "Policy-Driven",
      description: "Centralized policy enforcement and governance controls",
      href: "#policy",
    },
    {
      icon: "Network" as IconName,
      title: "Cross-Border Ready",
      description: "Real-time international settlement and interoperability",
      href: "#settlement",
    },
  ],
  sections: [
    {
      title: "Why Central Banks Choose Blockchain",
      description:
        "The Bank of International Settlements recognizes that CBDCs offer significant advantages for central banks by enabling faster cross-border payment settlement and expanding financial inclusion for underbanked populations. Blockchain technology facilitates digital payments, promotes economic digitization, and provides central banks with enhanced monetary policy tools and real-time economic visibility.",
      icon: "TrendingUp" as IconName,
    },
    {
      title: "Scalable CBDC Infrastructure",
      description:
        "Build production-ready CBDC systems with integrated tokenization, identity management, and policy enforcement. Our platform supports both pilot testing and full-scale deployment with complete operational control. From early exploration to live issuance, HyperFabrics handles transaction volumes at national scale while maintaining security, compliance, and performance under all conditions.",
      icon: "Layers" as IconName,
    },
    {
      title: "Legacy System Integration",
      description:
        "Seamless integration with existing core banking systems, payment rails, and clearing infrastructure. Our platform reduces implementation friction by connecting blockchain networks to SWIFT, RTGS, and domestic payment systems. APIs and middleware ensure smooth data exchange while maintaining security boundaries between traditional and distributed systems.",
      icon: "Plug" as IconName,
    },
    {
      title: "Policy Enforcement & Governance",
      description:
        "Centralized policy controls enable monetary authorities to enforce regulations at the protocol level. Configure spending limits, geographic restrictions, merchant category controls, and identity requirements. Implement programmable monetary policy including interest rates, expiration dates, and targeted stimulus distribution. Complete visibility and control over digital currency circulation.",
      icon: "Settings" as IconName,
    },
    {
      title: "International Interoperability",
      description:
        "Support for cross-border CBDC transactions and multi-CBDC arrangements (mCBDC). Our platform enables interoperability with other central bank systems through standardized protocols and message formats. Real-time foreign exchange, atomic settlement, and compliance checks ensure secure international payments while reducing correspondent banking costs and settlement risk.",
      icon: "Globe2" as IconName,
    },
    {
      title: "Security & Compliance",
      description:
        "ISO 27001 and SOC 2 Type 2 certified infrastructure with 99.99% uptime guarantee. Multi-region deployment with national-level disaster recovery ensures continuous availability. Built-in compliance tools support KYC/AML requirements, sanctions screening, and regulatory reporting. Hardware security modules (HSMs) and MPC technology protect cryptographic keys at the highest security standards.",
      icon: "ShieldCheck" as IconName,
    },
  ],
};
