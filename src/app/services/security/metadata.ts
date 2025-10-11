import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blockchain Security & Compliance Services | fazezero",
  description:
    "Comprehensive blockchain security and regulatory compliance services. Navigate GDPR, SOC 2, ISO 27001, and DIFC regulations with embedded compliance architecture and zero-trust security.",
  openGraph: {
    title: "Blockchain Security & Compliance Services | fazezero",
    description:
      "Comprehensive blockchain security and regulatory compliance services. Expert guidance for global regulatory frameworks.",
    url: "/services/security",
    type: "website",
  },
};

export const pageContent = {
  badge: "Security & Compliance",
  badgeIcon: "ShieldCheck" as IconName,
  title: "Regulatory Compliance & Security Services",
  description:
    "fazezero's Security & Compliance Services help organizations navigate global regulatory frameworks with confidence through end-to-end support for building, enhancing, or managing compliance programs aligned with evolving laws and risk standards.",
  quickLinks: [
    {
      icon: "ShieldCheck" as IconName,
      title: "Regulatory Advisory",
      description: "GDPR, SOC 2, ISO 27001, and DIFC compliance",
      href: "#regulatory",
    },
    {
      icon: "FileText" as IconName,
      title: "Compliance Architecture",
      description: "Embedded rule engines and API-level enforcement",
      href: "#architecture",
    },
    {
      icon: "Users" as IconName,
      title: "Digital Identity",
      description: "W3C DID/VC standards and zero-knowledge proofs",
      href: "#identity",
    },
    {
      icon: "Code" as IconName,
      title: "Zero-Trust Security",
      description: "Advanced security architecture and threat protection",
      href: "#zero-trust",
    },
  ],
  sections: [
    {
      title: "Global Regulatory Compliance Advisory",
      description:
        "Scalable consulting service helping navigate global regulatory frameworks including GDPR, SOC 2, ISO 27001, and DIFC Data Law with confidence. End-to-end support to build, enhance, or manage compliance programs aligning with evolving laws and risk standards across jurisdictions. Global support through legal partner network provides tailored regulatory insights and jurisdiction-specific opinions. Identify regulatory blockers, data residency constraints, and privacy requirements across multiple regions. Built-in assessment for global KYC/AML requirements ensuring financial compliance. Reduce risk of fines, project shutdowns, and regulatory non-compliance through proactive strategy.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Embedded Compliance Architecture",
      description:
        "Embedded compliance architecture features rule engines and API-level enforcement automating adherence to regional regulations and industry standards. Policy engines enforce data residency requirements, transaction limits, and participant eligibility at infrastructure layer. Automated KYC/AML compliance workflows streamline onboarding while maintaining regulatory standards. Real-time monitoring and reporting systems track compliance metrics and audit trails. Configurable compliance rules adapt to changing regulations without code deployments. Separation of compliance logic from business logic enables independent auditing and certification of regulatory controls.",
      icon: "Code" as IconName,
    },
    {
      title: "Digital Identity & Self-Sovereign Identity",
      description:
        "Deliver self-sovereign identity (SSI) on any chain, compliant with W3C DID & VC standards replacing outdated, siloed systems with modern, decentralized approach. Native DID registry and verifiable-credential issuance engine empowers individuals to curate and manage their identities while maintaining full control over data sharing. Zero-knowledge proof (ZKP) toolkit enables sharing proof-of-eligibility, citizenship, employment, or certifications without accessing raw personal data. Plug-and-play mobile wallet SDK provides frictionless user adoption. Issuers can instantly verify credentials, streamline KYC onboarding processes, and meet rising regulatory demands for stronger data privacy.",
      icon: "Users" as IconName,
    },
    {
      title: "Zero-Trust Security Architecture",
      description:
        "Comprehensive zero-trust security framework assuming no implicit trust regardless of network location. Multi-factor authentication and continuous verification for all users and devices accessing blockchain infrastructure. Micro-segmentation limits lateral movement and contains potential security breaches. Principle of least privilege ensures users and services only access required resources. End-to-end encryption protects data in transit and at rest. Security information and event management (SIEM) systems aggregate logs for threat detection and incident response. Regular penetration testing and vulnerability assessments validate security controls.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Smart Contract Security & Auditing",
      description:
        "Rigorous smart contract security audits identify vulnerabilities before production deployment including reentrancy attacks, integer overflows, and access control issues. Formal verification techniques mathematically prove contract correctness against specifications. Automated static analysis tools scan code for common security patterns and anti-patterns. Manual code review by security experts examines business logic and edge cases. Bug bounty programs incentivize external security researchers to discover vulnerabilities. Post-audit monitoring tracks deployed contracts for suspicious activity. Emergency response procedures enable rapid response to discovered vulnerabilities including contract upgrades and circuit breakers.",
      icon: "FileText" as IconName,
    },
    {
      title: "Continuous Compliance & Security Monitoring",
      description:
        "24/7 security monitoring and compliance tracking systems provide real-time visibility into security posture and regulatory status. Automated compliance reporting generates audit-ready documentation for regulatory submissions. Security metrics dashboards track key indicators including failed authentication attempts, unusual transaction patterns, and policy violations. Regular compliance assessments validate ongoing adherence to regulatory requirements as laws evolve. Security incident response team provides rapid investigation and remediation of security events. Continuous improvement process incorporates lessons learned from security incidents and regulatory changes into enhanced controls.",
      icon: "Activity" as IconName,
    },
  ],
};
