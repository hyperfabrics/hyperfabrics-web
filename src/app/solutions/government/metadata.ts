import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BaaS for Government - Blockchain for Public Sector | fazezero",
  description:
    "Blockchain platform for government agencies and nonprofits. Increase transparency, reduce fraud, secure records, and improve citizen services. ISO certified with built-in compliance for identity verification and public funding.",
  keywords: [
    "government blockchain",
    "public sector blockchain",
    "e-government",
    "digital identity",
    "blockchain voting",
    "civic blockchain",
  ],
  openGraph: {
    title: "BaaS for Government - fazezero",
    description:
      "Blockchain platform for government agencies. Increase transparency, accountability, and efficiency in public services.",
    url: "/solutions/government",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-government.png",
        width: 1200,
        height: 630,
        alt: "fazezero BaaS for Government",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Government - fazezero",
    description:
      "Blockchain platform for government agencies with transparency and accountability.",
  },
};

export const pageContent = {
  badge: "Government",
  badgeIcon: "Building",
  title: "Transparent, Accountable Governance",
  description:
    "BaaS for Government Agencies is fazezero's blockchain platform tailored to help public institutions increase transparency, accountability, and operational efficiency. Designed for the unique needs of government bodies, the solution provides secure, scalable infrastructure for managing records, transactions, and citizen services.",
  quickLinks: [
    {
      icon: "Vote",
      title: "Digital Voting",
      description: "Secure, verifiable elections and civic participation",
      href: "#voting",
    },
    {
      icon: "UserCheck",
      title: "Identity Services",
      description: "National digital identity and credential verification",
      href: "#identity",
    },
    {
      icon: "Eye",
      title: "Transparent Records",
      description: "Immutable government records accessible to citizens",
      href: "#records",
    },
    {
      icon: "DollarSign",
      title: "Fund Tracking",
      description: "Public funding allocation with complete transparency",
      href: "#funding",
    },
  ],
  sections: [
    {
      title: "Reducing Waste & Eliminating Fraud",
      description:
        "Blockchain offers governments accountability, stability, and secure record-keeping — aligning with goals of reducing waste, eliminating fraud, and increasing transparency. Distributed ledgers create tamper-proof records of transactions, approvals, and government activities. This technology helps restore citizen trust while improving operational efficiency across departments.",
      icon: "ShieldCheck",
    },
    {
      title: "Secure Record Management",
      description:
        "Manage property titles, business licenses, permits, certificates, and vital records on immutable blockchain infrastructure. Eliminate data silos between departments with shared, real-time access to authoritative records. Cryptographic security prevents unauthorized modifications while maintaining privacy through permissioned access controls. Citizens can independently verify documents without intermediaries.",
      icon: "FileStack",
    },
    {
      title: "Identity & Credential Verification",
      description:
        "Issue and verify national digital identities, driver's licenses, passports, and professional credentials. Self-sovereign identity architecture gives citizens control over personal data while enabling instant verification for government services, border control, and benefits eligibility. Integration with biometric systems and zero-knowledge proofs enhances security without compromising privacy.",
      icon: "Fingerprint",
    },
    {
      title: "Public Funding Transparency",
      description:
        "Track allocation and disbursement of tax revenue, grants, and public contracts with complete transparency. Citizens can audit government spending in real-time through public dashboards. Smart contracts automate fund release based on milestone completion and performance metrics. This transparency reduces corruption while improving accountability to taxpayers.",
      icon: "PieChart",
    },
    {
      title: "Digital Voting & Civic Engagement",
      description:
        "Secure digital voting infrastructure for elections, referendums, and civic participation. Blockchain ensures vote immutability and auditability while maintaining voter anonymity. Enable remote voting to increase participation while reducing costs. Cryptographic verification allows independent audit of election results without compromising ballot secrecy.",
      icon: "CheckSquare",
    },
    {
      title: "Nonprofit & NGO Support",
      description:
        "Support nonprofit organizations with blockchain tools for secure fundraising, transparent fund distribution, and impact reporting. Donors track contribution usage with real-time visibility. Smart contracts ensure funds reach intended beneficiaries based on predefined conditions. Reduce administrative overhead while building donor confidence through provable transparency and accountability.",
      icon: "Heart",
    },
  ],
};
