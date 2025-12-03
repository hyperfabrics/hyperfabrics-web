import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title:
    "BaaS for ESG - Blockchain for Environmental, Social & Governance | fazezero",
  description:
    "Blockchain platform for building, managing, and reporting ESG initiatives. Track climate disclosures, carbon footprints, supply chain practices with tamper-proof transparency aligned with TCFD and global standards.",
  keywords: [
    "ESG blockchain",
    "sustainability blockchain",
    "carbon tracking",
    "ESG reporting",
    "climate blockchain",
    "TCFD compliance",
  ],
  openGraph: {
    title: "BaaS for ESG - fazezero",
    description:
      "Blockchain platform for ESG programs. Track climate data, carbon footprints, and social commitments with tamper-proof transparency.",
    url: "/solutions/esg",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-esg.png",
        width: 1200,
        height: 630,
        alt: "fazezero BaaS for ESG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for ESG - fazezero",
    description:
      "Blockchain platform for ESG programs with tamper-proof transparency.",
  },
};

export const pageContent = {
  badge: "ESG & Sustainability",
  badgeIcon: "Leaf" as IconName,
  title: "Transparent, Trusted ESG Data",
  description:
    "BaaS for ESG is fazezero's blockchain platform designed to support organizations in building, managing, and reporting on Environmental, Social, and Governance (ESG) programs. As global standards evolve and stakeholders demand greater transparency, fazezero provides a trusted, tamper-proof foundation for ESG data and accountability.",
  quickLinks: [
    {
      icon: "FileCheck" as IconName,
      title: "TCFD Aligned",
      description:
        "Meet Task Force on Climate-related Financial Disclosures standards",
      href: "#tcfd",
    },
    {
      icon: "Cloud" as IconName,
      title: "Carbon Tracking",
      description: "Monitor emissions, offsets, and carbon credit portfolios",
      href: "#carbon",
    },
    {
      icon: "Package" as IconName,
      title: "Supply Chain",
      description: "Verify ethical sourcing and sustainable practices",
      href: "#supply",
    },
    {
      icon: "Users" as IconName,
      title: "Stakeholder Trust",
      description:
        "Auditable data builds credibility with investors and consumers",
      href: "#trust",
    },
  ],
  sections: [
    {
      title: "Beyond Crypto: Blockchain for the Planet",
      description:
        "While blockchain mining has faced criticism, the technology itself offers powerful solutions for environmental and social good. Distributed ledgers provide organizations with tools to build, manage, and report ESG initiatives with unprecedented transparency — helping meet demands from regulators, investors, and consumers for value-based business practices.",
      icon: "Globe" as IconName,
    },
    {
      title: "Climate & Environmental Tracking",
      description:
        "Track carbon footprints, emissions data, renewable energy usage, and offset purchases with tamper-proof records. Monitor environmental impact across operations, products, and supply chains. Real-time reporting aligned with TCFD framework helps businesses meet regulatory requirements and demonstrate progress toward sustainability goals to stakeholders.",
      icon: "Thermometer" as IconName,
    },
    {
      title: "Supply Chain Transparency",
      description:
        "Verify ethical sourcing, fair labor practices, and sustainable materials throughout global supply chains. Each product carries an immutable record of origin, certifications, and handling — enabling consumers to make informed purchasing decisions. Blockchain ensures claims about organic, fair-trade, or conflict-free products can be independently verified.",
      icon: "Link" as IconName,
    },
    {
      title: "Social Impact & Governance",
      description:
        "Document and verify social commitments including diversity initiatives, community investments, and corporate governance practices. Track charitable donations, employee programs, and stakeholder engagement with transparent records. Immutable documentation supports corporate social responsibility (CSR) reporting and demonstrates authentic commitment to social values.",
      icon: "Heart" as IconName,
    },
    {
      title: "Regulatory Compliance & Reporting",
      description:
        "Automated generation of ESG reports for regulatory filings, investor disclosures, and sustainability ratings. Support for emerging frameworks including TCFD, SASB, GRI, and EU Taxonomy. Tamper-evident data ensures audit integrity while reducing manual reporting overhead. Schedule automated report distribution to regulators, investors, and ESG rating agencies.",
      icon: "ClipboardList" as IconName,
    },
    {
      title: "Verified Data for All Stakeholders",
      description:
        "Provide consumers, investors, and partners access to verified ESG information through public dashboards and APIs. Blockchain cryptography ensures data authenticity without centralized gatekeepers. This transparency reinforces brand value, attracts ESG-focused investors, and empowers conscious consumers — driving mission-driven growth through trust and accountability.",
      icon: "Eye" as IconName,
    },
  ],
};
