import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Industries - Blockchain Solutions for Every Sector | fazezero",
  description:
    "fazezero serves 9 key industries with enterprise-grade blockchain infrastructure: Central Banks, Financial Services, Government, Healthcare, Insurance, Supply Chain, Gaming, Media, and ESG. Compliant, scalable, and secure.",
  keywords: [
    "blockchain for finance",
    "blockchain banking",
    "CBDC infrastructure",
    "healthcare blockchain",
    "supply chain blockchain",
    "institutional blockchain",
    "gaming web3",
    "ESG blockchain",
  ],
  openGraph: {
    title: "Industries - Blockchain Solutions for Every Sector | fazezero",
    description:
      "Enterprise blockchain infrastructure for Central Banks, Financial Services, Government, Healthcare, Insurance, Supply Chain, Gaming, Media, and ESG.",
    url: "/industries",
    type: "website",
    images: [
      {
        url: "/og/og-industries.png",
        width: 1200,
        height: 630,
        alt: "fazezero Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries - Blockchain Solutions for Every Sector | fazezero",
    description:
      "Enterprise blockchain infrastructure for Central Banks, Financial Services, Government, Healthcare, Insurance, Supply Chain, Gaming, Media, and ESG.",
  },
};

export const pageContent = {
  badge: "Industries",
  badgeIcon: "Briefcase" as IconName,
  title: "Blockchain Solutions Built for Regulated Sectors",
  description:
    "fazezero delivers enterprise-grade blockchain infrastructure designed specifically for industries that demand security, compliance, and operational excellence. From central banks deploying CBDCs to healthcare organizations managing patient records, our platform provides the production-ready foundation for digital transformation across 9 key sectors worldwide.",
  quickLinks: [
    {
      icon: "Briefcase" as IconName,
      title: "Financial Services",
      description: "Banks, exchanges, custodians, and fintechs",
      href: "/solutions/financial-services",
    },
    {
      icon: "Activity" as IconName,
      title: "Healthcare & Insurance",
      description: "Secure health data and automated claims",
      href: "/solutions/healthcare",
    },
    {
      icon: "Package" as IconName,
      title: "Supply Chain & Logistics",
      description: "End-to-end traceability and transparency",
      href: "/solutions/supply-chain",
    },
    {
      icon: "FileText" as IconName,
      title: "Public Sector",
      description: "Government agencies and central banks",
      href: "/solutions/government",
    },
  ],
  sections: [
    {
      title: "Financial Services & Banking",
      description:
        "Financial institutions require flexible, scalable solutions to meet market demands while maintaining security and regulatory compliance. fazezero enables banks, exchanges, custodians, trading desks, and hedge funds to deploy blockchain networks across Ethereum, Hyperledger Fabric, and other leading protocols. Support for asset tokenization, automated transactions, real-time settlement, and secure custody helps institutions reduce costs, maintain compliance, and unlock new revenue streams. With 99.99% uptime, ISO 27001 and SOC 2 Type 2 certifications, and seamless integration with existing core banking systems, financial organizations can modernize infrastructure without disrupting operations.",
      icon: "BarChart" as IconName,
    },
    {
      title: "Central Banks & Government",
      description:
        "More than 100 countries are building or testing CBDCs to modernize payments, increase financial inclusion, and drive digital economic growth. fazezero provides central banks with scalable, policy-driven CBDC infrastructure supporting both pilot testing and production deployment with full operational control. Government agencies leverage blockchain to increase transparency, accountability, and operational efficiency through tamper-proof ledgers that reduce fraud, eliminate data silos, and ensure information integrity across departments. Whether for digital identity verification, asset tracking, public funding allocation, or secure voting, fazezero delivers the secure, compliant foundation needed for public sector modernization.",
      icon: "FileText" as IconName,
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Healthcare organizations face unique challenges managing sensitive patient data while ensuring interoperability and regulatory compliance. fazezero enables secure, decentralized health record management with blockchain-based systems that give patients control over their medical information while maintaining HIPAA compliance. Healthcare providers can share verified records across institutions without compromising privacy, streamline insurance claims processing, combat prescription fraud, and improve clinical trial data integrity. The platform's immutable audit trails ensure transparency while advanced encryption and MPC technology protect sensitive health information at every stage.",
      icon: "Activity" as IconName,
    },
    {
      title: "Insurance & Risk Management",
      description:
        "Insurance companies struggle with manual claims processing, fraud detection, and policy management inefficiencies. fazezero's blockchain infrastructure enables automated claims processing through smart contracts, reducing settlement times from weeks to hours. Immutable policy records eliminate disputes while real-time data sharing across insurers helps identify fraudulent patterns instantly. Parametric insurance triggers automatic payouts based on verified data feeds, improving customer experience and operational efficiency. Whether for health insurance, property coverage, or specialty markets, fazezero provides the secure infrastructure to modernize insurance operations end-to-end.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Supply Chain & Logistics",
      description:
        "Global supply chains require transparency, security, and real-time visibility across multiple parties. fazezero's blockchain platform provides end-to-end traceability from origin to delivery by leveraging decentralized, immutable ledgers that create a single source of truth for manufacturers, distributors, and retailers. Real-time event recording enables full accountability while reducing data discrepancies, fraud, and disputes. IoT integration allows automated tracking of goods with smart contracts triggering actions based on shipment conditions. With support for leading protocols and 500+ APIs, organizations can optimize supply chain management, streamline compliance, and build trust between global partners.",
      icon: "Package" as IconName,
    },
    {
      title: "Gaming, Media & Entertainment",
      description:
        "The gaming and media industries are embracing Web3 technologies to empower creators and players with true digital ownership. fazezero enables game studios to integrate tokenized assets, NFT-based characters, and decentralized marketplaces that give players ownership and trading capabilities beyond single games. Content creators leverage blockchain for NFT marketplaces, smart contract-based royalties that ensure compensation from future resales, and fan engagement models with exclusive experiences. By recording every transaction on decentralized ledgers, the platform ensures authenticity, traceability, and fair value exchange while combating piracy and rights disputes. Enterprise-grade security with 99.99% uptime helps organizations move from concept to market with speed and confidence.",
      icon: "PlaySquare" as IconName,
    },
  ],
};
