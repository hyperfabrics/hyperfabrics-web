import { Metadata } from "next";

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
  badgeIcon: "Mail",
  title: "Get Started with Enterprise Blockchain",
  description:
    "Ready to transform your institution with blockchain technology? Our team is here to help you navigate digital asset custody, tokenization, and Web3 integration. Whether you're a financial institution, enterprise, or developer, we'll guide you through every step.",
  quickLinks: [
    {
      icon: "Calendar",
      title: "Schedule a Demo",
      description:
        "See fazezero in action with a personalized demo tailored to your needs",
      href: "#demo",
    },
    {
      icon: "MessageSquare",
      title: "Sales Inquiry",
      description:
        "Speak with our sales team about enterprise solutions and pricing",
      href: "#sales",
    },
    {
      icon: "Headphones",
      title: "Technical Support",
      description:
        "Get help with implementation, integration, and technical questions",
      href: "#support",
    },
    {
      icon: "Users",
      title: "Partner With Us",
      description:
        "Explore partnership opportunities and collaborative solutions",
      href: "#partner",
    },
  ],
  sections: [
    {
      title: "Enterprise & Institutional",
      description:
        "Connect with our enterprise team to discuss custom solutions, regulatory requirements, and integration support for financial institutions and large organizations.",
      icon: "Building2",
    },
    {
      title: "Developer Relations",
      description:
        "Join our developer community, get technical documentation, SDK support, and access to our engineering team. Discord, forums, and GitHub are available 24/7.",
      icon: "Code",
    },
    {
      title: "Media & Press",
      description:
        "For press inquiries, partnership announcements, or media kits, reach out to our communications team. We're always happy to share our story and insights.",
      icon: "Newspaper",
    },
    {
      title: "Global Offices",
      description:
        "We operate in key financial and technology hubs worldwide. Contact us to find your nearest office or schedule an in-person meeting with our regional teams.",
      icon: "Globe",
    },
  ],
};
