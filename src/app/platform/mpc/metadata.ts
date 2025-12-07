import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "MPC Security - Multi-Party Computation for Digital Assets | HyperFabrics",
  description:
    "Breakthrough Multi-Party Computation (MPC) and patent-pending SGX technology for unbreakable private key protection. Enterprise-grade security for digital asset custody trusted by leading financial institutions.",
  keywords: [
    "multi-party computation",
    "MPC security",
    "SGX technology",
    "private key protection",
    "digital asset security",
    "cryptographic security",
    "secure custody",
  ],
  openGraph: {
    title: "MPC Security - HyperFabrics",
    description:
      "Breakthrough Multi-Party Computation (MPC) and patent-pending SGX technology for unbreakable private key protection. Enterprise-grade security for digital asset custody.",
    url: "/platform/mpc",
    type: "website",
    images: [
      {
        url: "/og/og-platform-mpc.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics MPC Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MPC Security - HyperFabrics",
    description:
      "Breakthrough Multi-Party Computation (MPC) and patent-pending SGX technology for unbreakable private key protection.",
  },
};

export const pageContent = {
  badge: "Security",
  badgeIcon: "ShieldCheck" as IconName,
  title: "Unbreakable Protection for Digital Assets",
  description:
    "HyperFabrics utilizes breakthrough Multi-Party Computation (MPC) and patent-pending Software Guard Extensions (SGX) technology to deliver industry-leading protection for private keys and API credentials. This dual-layer cryptographic security ensures that sensitive assets are safeguarded against theft, cyber threats, and unauthorized access — even from insiders.",
  quickLinks: [
    {
      icon: "Lock" as IconName,
      title: "MPC Technology",
      description:
        "Distributed key generation eliminates single points of failure",
      href: "#mpc",
    },
    {
      icon: "Cpu" as IconName,
      title: "SGX Enclaves",
      description: "Hardware-based isolation for cryptographic operations",
      href: "#sgx",
    },
    {
      icon: "Users" as IconName,
      title: "Multi-Signature Control",
      description: "Configurable approval workflows and governance policies",
      href: "#multisig",
    },
    {
      icon: "FileCheck" as IconName,
      title: "Certified Security",
      description: "ISO 27001 and SOC 2 Type 2 certified infrastructure",
      href: "#compliance",
    },
  ],
  sections: [
    {
      title: "Multi-Party Computation (MPC)",
      description:
        "MPC technology distributes private key generation and signing operations across multiple parties, ensuring that no single entity ever holds the complete key. This cryptographic approach eliminates single points of failure and protects against both external attacks and insider threats. Keys are generated, stored, and used in a distributed manner — making theft mathematically infeasible even if individual nodes are compromised.",
      icon: "Network" as IconName,
    },
    {
      title: "Software Guard Extensions (SGX)",
      description:
        "Our patent-pending SGX implementation leverages Intel's hardware-based secure enclaves to isolate cryptographic operations at the processor level. This ensures that even if the operating system or application layer is compromised, private keys and sensitive credentials remain protected within trusted execution environments. SGX provides an additional layer of defense against advanced persistent threats and zero-day exploits.",
      icon: "Cpu" as IconName,
    },
    {
      title: "Enterprise Governance Policies",
      description:
        "Configure multi-signature workflows, approval hierarchies, and transaction policies that align with your organization's risk management framework. Define spending limits, whitelisted addresses, and time-based controls. Our platform supports role-based access control (RBAC), audit logging, and real-time alerts — giving institutions complete visibility and control over digital asset operations.",
      icon: "Settings" as IconName,
    },
    {
      title: "Threat Protection",
      description:
        "Comprehensive protection against cyber threats including phishing, malware, insider attacks, and key extraction attempts. Our security architecture includes encrypted key shards, secure communication channels, tamper detection, and automated threat response. Regular penetration testing and third-party security audits validate our defense posture against evolving attack vectors.",
      icon: "Shield" as IconName,
    },
    {
      title: "Compliance & Certifications",
      description:
        "ISO 27001 and SOC 2 Type 2 certified security controls ensure adherence to international standards for information security management. Our platform meets regulatory requirements for financial institutions including FINRA, SEC, and FCA guidelines. Immutable audit trails, encryption at rest and in transit, and comprehensive logging support regulatory reporting and forensic investigations.",
      icon: "Award" as IconName,
    },
    {
      title: "High Availability & Recovery",
      description:
        "Distributed key management ensures business continuity even during node failures or infrastructure disruptions. Multi-region deployment with automated failover provides 99.99% uptime SLA. Disaster recovery procedures include secure key backup and restoration processes — enabling institutions to maintain operations and recover assets under any circumstance without compromising security.",
      icon: "RefreshCw" as IconName,
    },
  ],
};
