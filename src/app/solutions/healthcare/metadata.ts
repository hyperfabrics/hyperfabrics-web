import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "BaaS for Healthcare - Blockchain for Health Data | HyperFabrics",
  description:
    "Blockchain platform for healthcare organizations. Secure data sharing, interoperability, reduced fraud, and improved patient outcomes. ISO 27001 certified with HIPAA-ready infrastructure for hospitals, insurers, and healthtech.",
  keywords: [
    "healthcare blockchain",
    "health data blockchain",
    "medical records blockchain",
    "healthcare interoperability",
    "HIPAA blockchain",
    "healthtech platform",
  ],
  openGraph: {
    title: "BaaS for Healthcare - HyperFabrics",
    description:
      "Blockchain platform for healthcare with secure data sharing and interoperability across organizations.",
    url: "/solutions/healthcare",
    type: "website",
    images: [
      {
        url: "/og/og-solutions-healthcare.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics BaaS for Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaaS for Healthcare - HyperFabrics",
    description:
      "Blockchain platform for healthcare with secure, interoperable health data.",
  },
};

export const pageContent = {
  badge: "Healthcare",
  badgeIcon: "Activity" as IconName,
  title: "Better Data, Better Outcomes",
  description:
    "BaaS for Healthcare Sector is HyperFabrics's blockchain platform built to modernize how healthcare organizations manage data, streamline operations, and improve trust across the care ecosystem. Designed for hospitals, insurers, and healthtech providers, the solution offers secure, real-time data sharing across multiple systems and stakeholders.",
  quickLinks: [
    {
      icon: "FileText" as IconName,
      title: "Health Records",
      description: "Interoperable patient records across providers",
      href: "#records",
    },
    {
      icon: "Shield" as IconName,
      title: "HIPAA Ready",
      description: "Privacy-preserving infrastructure with compliance built-in",
      href: "#compliance",
    },
    {
      icon: "Users" as IconName,
      title: "Care Coordination",
      description: "Real-time data sharing improves patient outcomes",
      href: "#coordination",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Claims Processing",
      description: "Reduce fraud and accelerate insurance settlements",
      href: "#claims",
    },
  ],
  sections: [
    {
      title: "Healthcare Data Challenges",
      description:
        "Healthcare organizations struggle with fragmented data silos, interoperability barriers, and inefficient processes. Blockchain provides potential benefits including improved data exchange, enhanced collaboration, and increased trust. Tamper-evident records ensure accuracy while reducing costs associated with back-office systems, medical billing fraud, and administrative errors.",
      icon: "AlertCircle" as IconName,
    },
    {
      title: "Interoperable Health Records",
      description:
        "Enable secure exchange of electronic health records (EHRs) across hospitals, clinics, specialists, and laboratories. Patients maintain control over their data while providers access complete medical histories for informed treatment decisions. Blockchain eliminates data duplication and reconciliation delays while ensuring record integrity through cryptographic verification.",
      icon: "Database" as IconName,
    },
    {
      title: "Provider Credential Verification",
      description:
        "Maintain tamper-proof registry of healthcare provider licenses, certifications, training records, and malpractice history. Instantly verify credentials during hiring, credentialing, or patient referrals. Automated alerts notify administrators when licenses approach expiration or changes occur — ensuring compliance and patient safety.",
      icon: "Award" as IconName,
    },
    {
      title: "Claims & Payment Processing",
      description:
        "Streamline insurance claims with automated verification and settlement. Smart contracts validate eligibility, treatment authorization, and billing codes — reducing claim denials and accelerating reimbursement. Transparent audit trails minimize billing fraud while improving cash flow for providers. Real-time claims adjudication reduces administrative burden for all parties.",
      icon: "Receipt" as IconName,
    },
    {
      title: "Supply Chain & Drug Traceability",
      description:
        "Track pharmaceuticals from manufacturer to patient ensuring authenticity and preventing counterfeit drugs. Monitor cold chain compliance for temperature-sensitive medications and vaccines. Recall management becomes more efficient with precise lot tracking. Transparency throughout the supply chain reduces waste while improving patient safety.",
      icon: "Package" as IconName,
    },
    {
      title: "Clinical Trials & Research",
      description:
        "Improve clinical trial data integrity with immutable records of patient consent, protocol adherence, and outcome reporting. Enable secure data sharing between research institutions while maintaining patient privacy. Blockchain timestamps provide proof of discovery for intellectual property protection. Accelerate regulatory approval with transparent, auditable trial data.",
      icon: "Microscope" as IconName,
    },
  ],
};
