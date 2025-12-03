import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Privacy Policy | fazeZERO",
  description:
    "fazeZERO's Privacy Policy outlines how we collect, use, protect, and handle your personal information. Learn about our commitment to data privacy and security.",
  openGraph: {
    title: "Privacy Policy | fazeZERO",
    description: "Learn about fazeZERO's commitment to data privacy and security.",
    url: "https://fazezero.com/company/privacy",
  },
};

export const pageContent = {
  badge: "Privacy Policy",
  badgeIcon: "ShieldCheck" as IconName,
  title: "Privacy Policy",
  description:
    "Last Updated: December 3, 2024. At fazeZERO, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with GDPR, CCPA, and other applicable data protection laws.",
  sections: [
    {
      title: "Introduction and Scope",
      description:
        "fazeZERO provides enterprise-grade blockchain infrastructure and digital asset custody services to financial institutions, governments, and enterprises worldwide. This Privacy Policy applies to all personal information we collect through our website (fazezero.com), platform services, APIs, developer tools, and any other interactions with fazeZERO. By using our services, you agree to the collection and use of information in accordance with this policy. We are certified with ISO 27001 and SOC 2 Type 2, demonstrating our commitment to information security and data protection.",
      icon: "Info" as IconName,
    },
    {
      title: "Information We Collect",
      description:
        "We collect several types of information: (1) Account Information: Name, email, company name, job title, phone number, billing address, payment information, and account credentials. (2) Identity Verification Data: For KYC/AML compliance, we collect government-issued ID, proof of address, business registration documents, and beneficial ownership information as required by financial regulations. (3) Blockchain Data: Wallet addresses, transaction hashes, blockchain network identifiers, smart contract addresses, and on-chain activity data necessary for custody and transaction services. (4) Technical Data: IP addresses, device identifiers, browser type, operating system, API usage logs, performance metrics, error logs, and security event data. (5) Usage Data: Service usage patterns, feature interactions, support ticket history, and communication records. (6) Marketing Data: Newsletter subscriptions, event registrations, and marketing preferences.",
      icon: "FileText" as IconName,
    },
    {
      title: "Legal Basis for Processing (GDPR)",
      description:
        "For users in the European Economic Area (EEA), we process personal data based on: (1) Contract Performance: To fulfill our service agreements and provide blockchain infrastructure services. (2) Legal Obligation: To comply with KYC/AML regulations, financial services laws, and other regulatory requirements applicable to digital asset custody. (3) Legitimate Interests: For fraud prevention, security monitoring, service improvement, and business operations. (4) Consent: For marketing communications and optional features. You have the right to withdraw consent at any time. (5) Vital Interests: To protect the security and integrity of our platform and prevent harm to users.",
      icon: "Scale" as IconName,
    },
    {
      title: "How We Use Your Information",
      description:
        "We use collected information to: (1) Provide Services: Operate our blockchain infrastructure platform, process transactions, manage digital asset custody, execute smart contracts, and deliver API services. (2) Compliance: Conduct KYC/AML checks, sanctions screening, regulatory reporting, and comply with financial services regulations across jurisdictions. (3) Security: Detect and prevent fraud, unauthorized access, money laundering, and other illegal activities. Monitor for security threats and implement protective measures. (4) Communication: Send service notifications, security alerts, technical updates, support responses, and account-related communications. (5) Improvement: Analyze usage patterns, optimize platform performance, develop new features, and enhance user experience. (6) Legal: Comply with legal obligations, respond to law enforcement requests, enforce our terms of service, and protect our legal rights. We do not sell your personal information to third parties for marketing purposes.",
      icon: "Activity" as IconName,
    },
    {
      title: "Data Sharing and Disclosure",
      description:
        "We may share your information with: (1) Service Providers: Trusted third-party vendors who assist in operations, including cloud hosting (AWS), payment processors, KYC/AML providers (Chainalysis, Elliptic, TRM Labs), analytics services, and customer support tools. All service providers are contractually obligated to protect your data. (2) Regulatory Authorities: When required by law, we may disclose information to financial regulators, law enforcement, courts, or government agencies to comply with legal obligations, respond to subpoenas, or prevent illegal activities. (3) Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections. (4) With Your Consent: We may share information with your explicit consent or at your direction. (5) Blockchain Networks: Transaction data and wallet addresses are inherently public on blockchain networks. We cannot control information once it is recorded on a public blockchain.",
      icon: "Server" as IconName,
    },
    {
      title: "Data Security and Certifications",
      description:
        "We implement comprehensive security measures: (1) Encryption: All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. Private keys are protected using Multi-Party Computation (MPC) and Intel SGX hardware security modules. (2) Access Controls: Role-based access controls, multi-factor authentication, least-privilege principles, and regular access reviews. (3) Certifications: ISO 27001 certified for information security management. SOC 2 Type 2 certified for security, availability, processing integrity, confidentiality, and privacy controls. Regular third-party security audits and penetration testing. (4) Infrastructure: Secure data centers, redundant systems, 99.99% uptime SLA, and disaster recovery procedures. (5) Monitoring: 24/7 security monitoring, intrusion detection, anomaly detection, and automated threat response. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Data Retention and Deletion",
      description:
        "We retain personal information for different periods based on purpose and legal requirements: (1) Active Accounts: Retained while your account is active and for a reasonable period thereafter. (2) Legal Requirements: Financial records and KYC/AML data are retained for 5-7 years as required by financial services regulations and anti-money laundering laws. (3) Transaction Records: Blockchain transaction data is retained indefinitely as it is immutably recorded on blockchain networks. (4) Marketing Data: Retained until you unsubscribe or request deletion. (5) Deletion: Upon account closure or data deletion request, we securely delete or anonymize personal information within 30 days, except where retention is required by law. Some data may remain in backup systems for up to 90 days. Blockchain data cannot be deleted due to the immutable nature of blockchain technology.",
      icon: "File" as IconName,
    },
    {
      title: "Your Privacy Rights (GDPR, CCPA, and Other Regulations)",
      description:
        "Depending on your location, you may have the following rights: (1) Right of Access: Request copies of your personal data and information about how it is processed. (2) Right to Rectification: Correct inaccurate or incomplete personal data. (3) Right to Erasure: Request deletion of your personal data, subject to legal retention requirements. (4) Right to Restrict Processing: Limit how we use your data in certain circumstances. (5) Right to Data Portability: Receive your data in a structured, machine-readable format. (6) Right to Object: Object to processing based on legitimate interests or for direct marketing. (7) Right to Withdraw Consent: Withdraw consent for processing based on consent. (8) CCPA Rights: California residents have additional rights including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of sale (we do not sell personal information). To exercise these rights, contact privacy@fazezero.com. We will respond within 30 days (or as required by applicable law).",
      icon: "Users" as IconName,
    },
    {
      title: "Cookies and Tracking Technologies",
      description:
        "We use cookies and similar technologies: (1) Essential Cookies: Required for website functionality, authentication, and security. These cannot be disabled. (2) Analytics Cookies: Help us understand how visitors use our website (Google Analytics, etc.). We use anonymized data where possible. (3) Functional Cookies: Remember your preferences, language settings, and improve user experience. (4) Marketing Cookies: Track effectiveness of marketing campaigns (only with consent). You can control cookies through your browser settings. Disabling cookies may affect website functionality. We do not use cookies to track you across third-party websites. Our website respects Do Not Track signals.",
      icon: "Eye" as IconName,
    },
    {
      title: "Blockchain-Specific Privacy Considerations",
      description:
        "Blockchain technology has unique privacy characteristics: (1) Public Blockchains: Transactions on public blockchains (Ethereum, Bitcoin, etc.) are publicly visible and permanent. Wallet addresses and transaction amounts are recorded immutably. (2) Pseudonymity: While wallet addresses don't directly identify individuals, sophisticated analysis can potentially link addresses to identities. (3) Private Keys: We never have access to your private keys. They are managed through MPC technology, ensuring we cannot access your digital assets without authorization. (4) Compliance: We implement privacy-preserving techniques where possible while maintaining regulatory compliance. (5) Data Minimization: We only collect blockchain data necessary for service provision and compliance. (6) Zero-Knowledge Proofs: Where applicable, we use zero-knowledge proofs to enable verification without revealing underlying data.",
      icon: "Wallet" as IconName,
    },
    {
      title: "International Data Transfers and Data Residency",
      description:
        "Your information may be transferred globally: (1) Transfers: Data may be transferred to and processed in the United States, European Union, and other countries where we operate or use service providers. (2) Safeguards: We use Standard Contractual Clauses (SCCs), adequacy decisions, and other approved mechanisms to ensure adequate protection. (3) Data Residency: Enterprise customers may request data residency in specific regions. We offer multi-region deployment options to meet data sovereignty requirements. (4) Compliance: We comply with GDPR for EEA data, CCPA for California residents, and other applicable regional data protection laws. (5) Cross-Border Transfers: When transferring data across borders, we ensure appropriate legal safeguards are in place. For questions about data transfers, contact privacy@fazezero.com.",
      icon: "Globe" as IconName,
    },
    {
      title: "Third-Party Services and Integrations",
      description:
        "We integrate with third-party services: (1) KYC/AML Providers: Chainalysis, Elliptic, TRM Labs for compliance screening and transaction monitoring. (2) Cloud Infrastructure: AWS for hosting and infrastructure services, subject to AWS's data processing agreements. (3) Analytics: Google Analytics (with IP anonymization), Mixpanel for product analytics, and other tools to improve our services. (4) Payment Processors: Stripe, payment gateways for processing payments and subscriptions. (5) Customer Support: Zendesk, Intercom, and similar tools for customer communication. (6) Developer Tools: GitHub, CI/CD services for code management and deployment. All third-party providers are vetted for security and privacy compliance. They are contractually required to protect your data and use it only for specified purposes. We do not authorize third parties to use your data for their own purposes.",
      icon: "Server" as IconName,
    },
    {
      title: "Children's Privacy and Age Restrictions",
      description:
        "Our services are strictly for business use: (1) Age Requirement: Our services are intended for businesses and individuals 18 years or older. We do not knowingly collect personal information from children under 18. (2) Business Services: fazeZERO provides enterprise blockchain infrastructure services. Our platform is designed for institutional use, not consumer applications. (3) Account Creation: All accounts require business verification and KYC/AML checks, which inherently exclude minors. (4) Reporting: If you believe we have inadvertently collected information from a minor, contact us immediately at privacy@fazezero.com, and we will promptly delete such information. (5) Parental Rights: Parents or guardians who believe their child's information has been collected should contact us for immediate removal.",
      icon: "Shield" as IconName,
    },
    {
      title: "Marketing Communications and Opt-Out",
      description:
        "Marketing communications: (1) Consent: We only send marketing emails to users who have opted in or have an existing business relationship. (2) Types: Marketing communications may include product updates, industry insights, event invitations, and promotional offers. (3) Opt-Out: You can unsubscribe at any time by clicking the unsubscribe link in emails or contacting us at privacy@fazezero.com. (4) Service Communications: You cannot opt out of essential service communications such as security alerts, account notifications, and legal notices. (5) Preferences: Manage your communication preferences in your account settings or by contacting us. (6) Do Not Sell: We do not sell personal information. California residents can confirm this by contacting privacy@fazezero.com.",
      icon: "Mail" as IconName,
    },
    {
      title: "Changes to This Privacy Policy",
      description:
        "We may update this policy periodically: (1) Updates: We may modify this Privacy Policy to reflect changes in our practices, services, legal requirements, or technology. (2) Notification: Material changes will be communicated via email to registered users and by posting a prominent notice on our website. The 'Last Updated' date at the top indicates when changes were made. (3) Review: We encourage you to review this policy periodically to stay informed about how we protect your information. (4) Continued Use: Your continued use of our services after changes constitutes acceptance of the updated policy. (5) Objection: If you object to material changes, you may close your account. (6) Version History: Previous versions of this policy are available upon request.",
      icon: "FileText" as IconName,
    },
    {
      title: "Contact Information and Data Protection Officer",
      description:
        "For privacy inquiries and requests: (1) Email: privacy@fazezero.com for all privacy-related questions, data subject requests, and concerns. (2) Data Protection Officer: For GDPR-related inquiries, contact our Data Protection Officer at dpo@fazezero.com. (3) Postal Address: fazeZERO, Attn: Privacy Team, [Your Business Address]. (4) Response Time: We respond to privacy requests within 30 days (or as required by applicable law). For complex requests, we may extend this period with notification. (5) Verification: We may require identity verification before processing certain requests to protect your privacy and security. (6) Complaints: If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority (e.g., your country's supervisory authority for GDPR, California Attorney General for CCPA).",
      icon: "Mail" as IconName,
    },
  ],
};
