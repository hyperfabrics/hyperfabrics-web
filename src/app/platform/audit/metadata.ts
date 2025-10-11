import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & Compliance - Immutable Audit Trails | fazezero",
  description:
    "Complete audit trails for all blockchain transactions and system actions. Immutable blockchain records, automated regulatory reporting, real-time monitoring, and compliance dashboards for internal and external auditors.",
  keywords: [
    "blockchain audit",
    "audit trail",
    "compliance monitoring",
    "immutable records",
    "regulatory reporting",
    "transaction monitoring",
  ],
  openGraph: {
    title: "Audit & Compliance - fazezero",
    description:
      "Complete audit trails with immutable blockchain records, automated regulatory reporting, and real-time compliance monitoring.",
    url: "/platform/audit",
    type: "website",
    images: [
      {
        url: "/og/og-platform-audit.png",
        width: 1200,
        height: 630,
        alt: "fazezero Audit Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit & Compliance - fazezero",
    description:
      "Complete audit trails with immutable blockchain records and automated regulatory reporting.",
  },
};

export const pageContent = {
  badge: "Compliance",
  badgeIcon: "ClipboardCheck",
  title: "Transparent, Tamper-Proof Records",
  description:
    "fazezero's Audit Platform provides comprehensive, immutable audit trails for every transaction, system action, and configuration change. Built on blockchain's inherent transparency, our solution ensures complete accountability with automated compliance reporting, real-time monitoring, and customizable dashboards designed for internal auditors, external examiners, and regulatory bodies.",
  quickLinks: [
    {
      icon: "FileText",
      title: "Immutable Records",
      description:
        "Blockchain-timestamped logs that cannot be altered or deleted",
      href: "#records",
    },
    {
      icon: "Eye",
      title: "Real-Time Monitoring",
      description:
        "Live transaction monitoring and suspicious activity detection",
      href: "#monitoring",
    },
    {
      icon: "FileCheck",
      title: "Regulatory Reports",
      description: "Automated generation of compliance and regulatory filings",
      href: "#reports",
    },
    {
      icon: "Search",
      title: "Forensic Analysis",
      description: "Advanced search and investigation tools for audit teams",
      href: "#forensics",
    },
  ],
  sections: [
    {
      title: "Immutable Blockchain Records",
      description:
        "Every transaction, approval, configuration change, and system event is recorded on an immutable blockchain ledger with cryptographic timestamps. These records cannot be altered, deleted, or backdated — providing auditors with tamper-proof evidence of all platform activity. Each entry includes user identity, IP address, timestamp, and full transaction details, creating a complete chain of custody for digital assets.",
      icon: "Lock",
    },
    {
      title: "Real-Time Transaction Monitoring",
      description:
        "Continuous monitoring of all blockchain activity with automated alerts for suspicious patterns, policy violations, and compliance triggers. Rule-based detection identifies large transfers, unusual transaction patterns, sanctioned addresses, and potential fraud. Integration with Chainalysis, Elliptic, and TRM Labs enhances monitoring with threat intelligence and risk scoring across all supported blockchains.",
      icon: "Radar",
    },
    {
      title: "Automated Regulatory Reporting",
      description:
        "Pre-built report templates for FINRA, SEC, FCA, MAS, and other regulatory frameworks worldwide. Automated generation and filing of SARs (Suspicious Activity Reports), CTRs (Currency Transaction Reports), and periodic compliance filings. Customizable templates support jurisdiction-specific requirements while maintaining consistent data quality and formatting standards.",
      icon: "FileOutput",
    },
    {
      title: "Compliance Dashboard",
      description:
        "Centralized view of compliance status across all operations. Monitor KYC/AML verification rates, transaction screening results, policy exceptions, and regulatory filing deadlines. Role-based dashboards provide relevant metrics to compliance officers, risk managers, and executive leadership. Real-time alerts notify teams of items requiring attention before they become violations.",
      icon: "LayoutDashboard",
    },
    {
      title: "Forensic Investigation Tools",
      description:
        "Advanced search and analysis capabilities for internal investigations and audit inquiries. Query transactions by address, user, amount, time range, or custom criteria. Visualize fund flows, address relationships, and transaction patterns. Export capabilities support evidence collection for legal proceedings, regulatory examinations, and internal investigations with chain-of-custody documentation.",
      icon: "SearchCode",
    },
    {
      title: "Access Control & Audit Trail",
      description:
        "Comprehensive logging of all system access, permission changes, and administrative actions. Track who accessed what data, when, and from where. Role-based access control (RBAC) with separation of duties ensures no single individual can both execute and approve high-risk actions. Biometric authentication and session recording provide additional accountability layers for sensitive operations.",
      icon: "UserCheck",
    },
  ],
};
