import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Compliance - Regulatory-Ready Blockchain Infrastructure",
  description:
    "HyperFabrics provides compliance-ready blockchain infrastructure with built-in KYC/AML, regulatory reporting, audit trails, and data privacy controls for regulated institutions.",
  keywords: [
    "blockchain compliance",
    "regulatory blockchain",
    "KYC blockchain",
    "AML compliance",
    "compliant tokenization",
    "blockchain audit trail",
    "GDPR blockchain",
  ],
  openGraph: {
    title: "Compliance - HyperFabrics",
    description:
      "HyperFabrics provides compliance-ready blockchain infrastructure with built-in KYC/AML, regulatory reporting, audit trails, and data privacy controls for regulated institutions.",
    url: "/compliance",
    type: "website",
    images: [
      {
        url: "/og/og-compliance.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance - HyperFabrics",
    description:
      "HyperFabrics provides compliance-ready blockchain infrastructure with built-in KYC/AML, regulatory reporting, audit trails, and data privacy controls for regulated institutions.",
  },
};

export const pageContent = {
  badge: "Compliance & Security",
  badgeIcon: "Shield" as IconName,
  title: "Built for Regulated Institutions",
  description:
    "HyperFabrics delivers enterprise-grade compliance infrastructure that meets the stringent requirements of financial institutions, regulated enterprises, and government organizations. Our platform is designed with regulatory frameworks, security certifications, and audit capabilities at its core.",
  quickLinks: [
    {
      icon: "FileCheck" as IconName,
      title: "SOC 2 Type II Certified",
      description:
        "Independently audited security controls and operational excellence",
      href: "#soc2",
    },
    {
      icon: "Lock" as IconName,
      title: "ISO 27001 Compliant",
      description:
        "Information security management aligned with international standards",
      href: "#iso",
    },
    {
      icon: "Users" as IconName,
      title: "KYC/AML Built-In",
      description:
        "Integrated identity verification and anti-money laundering checks",
      href: "#kyc",
    },
    {
      icon: "FileText" as IconName,
      title: "GDPR Ready",
      description:
        "Data privacy controls and right-to-be-forgotten capabilities",
      href: "#gdpr",
    },
  ],
  sections: [
    {
      title: "Regulatory Frameworks",
      description:
        "Our platform supports compliance with MiCA (EU), SEC regulations (US), FCA requirements (UK), MAS guidelines (Singapore), and other global regulatory frameworks. We provide built-in tools for regulatory reporting, transaction monitoring, and audit trail generation.",
      icon: "Scale" as IconName,
    },
    {
      title: "Security Certifications",
      description:
        "SOC 2 Type II, ISO 27001, and PCI DSS certified infrastructure ensures your data and digital assets are protected with industry-leading security controls. Regular penetration testing and third-party audits validate our security posture.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Privacy Controls",
      description:
        "GDPR, CCPA, and global privacy regulation compliance with granular data access controls, encryption at rest and in transit, data residency options, and comprehensive privacy management tools for user consent and data handling.",
      icon: "Eye" as IconName,
    },
    {
      title: "Audit & Reporting",
      description:
        "Complete audit trails for all transactions, immutable blockchain records, automated regulatory reporting, real-time transaction monitoring, and customizable compliance dashboards for internal and external auditors.",
      icon: "ClipboardCheck" as IconName,
    },
    {
      title: "KYC/AML Integration",
      description:
        "Built-in identity verification workflows, sanctions screening, PEP checks, ongoing transaction monitoring, suspicious activity reporting (SAR), and integration with leading KYC/AML providers like Chainalysis, Elliptic, and TRM Labs.",
      icon: "UserCheck" as IconName,
    },
    {
      title: "Data Sovereignty",
      description:
        "Deploy in your preferred region with data residency guarantees, private cloud options, on-premises deployment support, and multi-region redundancy while maintaining full control over your data location and compliance requirements.",
      icon: "Globe2" as IconName,
    },
  ],
};
