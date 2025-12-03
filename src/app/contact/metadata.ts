import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact Us - Get Started with Enterprise Blockchain",
  description:
    "Contact fazezero to discuss your enterprise blockchain needs. Schedule a demo, speak with our team, or learn how we can help transform your institution with blockchain technology.",
  keywords: [
    "blockchain contact",
    "enterprise blockchain demo",
    "blockchain consultation",
    "tokenization consultation",
  ],
  openGraph: {
    title: "Contact Us - fazezero",
    description:
      "Contact fazezero to discuss your enterprise blockchain needs. Schedule a demo, speak with our team, or learn how we can help transform your institution with blockchain technology.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact fazezero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - fazezero",
    description:
      "Contact fazezero to discuss your enterprise blockchain needs. Schedule a demo, speak with our team, or learn how we can help transform your institution with blockchain technology.",
  },
};

export const pageContent = {
  badge: "Contact Us",
  badgeIcon: "Mail" as IconName,
  title: "Get Started with Enterprise Blockchain",
  description:
    "Transform your institution with blockchain technology. We'll guide you through digital asset custody, tokenization, and Web3 integration.",
  quickLinks: [
    {
      icon: "Calendar" as IconName,
      title: "Schedule a Demo",
      description: "See fazezero in action",
      href: "mailto:sales@fazezero.com",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Sales Inquiry",
      description: "Enterprise solutions & pricing",
      href: "mailto:sales@fazezero.com",
    },
    {
      icon: "Headphones" as IconName,
      title: "Technical Support",
      description: "Implementation & integration help",
      href: "mailto:support@fazezero.com",
    },
    {
      icon: "Users" as IconName,
      title: "Partnerships",
      description: "Explore collaboration opportunities",
      href: "mailto:partners@fazezero.com",
    },
  ],
  sections: [
    {
      title: "Enterprise & Institutional",
      description:
        "Custom solutions and regulatory support for financial institutions.",
      icon: "Building2" as IconName,
    },
    {
      title: "Developer Relations",
      description:
        "Technical docs, SDKs, and 24/7 engineering support.",
      icon: "Code" as IconName,
    },
    {
      title: "Media & Press",
      description:
        "Press inquiries, partnerships, and media resources.",
      icon: "Newspaper" as IconName,
    },
    {
      title: "Global Offices",
      description:
        "Worldwide presence in key financial and tech hubs.",
      icon: "Globe" as IconName,
    },
  ],
};
