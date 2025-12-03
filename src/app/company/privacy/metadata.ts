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
    "At fazeZERO, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, disclose, and safeguard your data.",
  sections: [
    {
      title: "Information We Collect",
      description:
        "We collect information that you provide directly to us, such as when you create an account, use our services, contact us, or subscribe to our communications. This may include name, email address, company information, payment details, and other information necessary to provide our services. We also collect technical information automatically, including IP addresses, browser type, device information, and usage data through cookies and similar technologies.",
      icon: "FileText" as IconName,
    },
    {
      title: "How We Use Your Information",
      description:
        "We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, send technical notices and support messages, respond to your inquiries, detect and prevent fraud, comply with legal obligations, and protect our rights and the rights of our users. We do not sell your personal information to third parties.",
      icon: "Activity" as IconName,
    },
    {
      title: "Data Security",
      description:
        "We implement industry-standard security measures to protect your personal information, including encryption, access controls, secure data centers, and regular security audits. Our platform is certified with ISO 27001 and SOC 2 Type 2, ensuring the highest standards of information security. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Data Retention",
      description:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies and applicable laws.",
      icon: "File" as IconName,
    },
    {
      title: "Your Rights",
      description:
        "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data, the right to data portability, and the right to object to processing. You may also have the right to withdraw consent where processing is based on consent. To exercise these rights, please contact us using the information provided below.",
      icon: "Users" as IconName,
    },
    {
      title: "Cookies and Tracking",
      description:
        "We use cookies and similar tracking technologies to collect and use information about your interactions with our website and services. This helps us improve user experience, analyze usage patterns, and deliver personalized content. You can control cookies through your browser settings, though this may affect website functionality.",
      icon: "Eye" as IconName,
    },
    {
      title: "Third-Party Services",
      description:
        "We may use third-party service providers to help us operate our business and administer activities on our behalf, such as payment processing, analytics, customer support, and cloud hosting. These providers have access to your information only to perform these tasks and are obligated not to disclose or use it for any other purpose.",
      icon: "Server" as IconName,
    },
    {
      title: "International Data Transfers",
      description:
        "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this policy and applicable data protection laws, including GDPR, CCPA, and other regional regulations.",
      icon: "Globe" as IconName,
    },
    {
      title: "Children's Privacy",
      description:
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.",
      icon: "Shield" as IconName,
    },
    {
      title: "Changes to This Policy",
      description:
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of our services after such changes constitutes acceptance of the updated policy.",
      icon: "FileText" as IconName,
    },
    {
      title: "Contact Us",
      description:
        "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@fazezero.com or through our contact page. We will respond to your inquiry within a reasonable timeframe and in accordance with applicable data protection laws.",
      icon: "Mail" as IconName,
    },
  ],
};

