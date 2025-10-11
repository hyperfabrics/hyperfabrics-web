import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials & Guides | fazeZERO",
  description:
    "Step-by-step tutorials and guides to help you build with fazeZERO. Learn how to integrate wallets, tokenize assets, process payments, and more.",
  openGraph: {
    title: "Tutorials & Guides | fazeZERO",
    description: "Step-by-step tutorials for building with fazeZERO platform.",
    url: "https://fazezero.com/developers/tutorials",
  },
};

export const pageContent = {
  badge: "Tutorials & Guides",
  badgeIcon: "PlaySquare",
  title: "Tutorials & Guides",
  description:
    "Step-by-step tutorials to help you integrate fazeZERO into your applications and build powerful digital asset solutions.",
  quickLinks: [
    {
      icon: "Code",
      title: "Getting Started",
      description:
        "Set up your development environment and make your first API call.",
      href: "#getting-started",
    },
    {
      icon: "Lock",
      title: "Wallet Integration",
      description: "Learn how to create and manage digital asset wallets.",
      href: "#wallet-integration",
    },
    {
      icon: "Zap",
      title: "Tokenization",
      description: "Issue and manage tokenized real-world assets.",
      href: "#tokenization",
    },
    {
      icon: "Globe",
      title: "Payment Processing",
      description:
        "Integrate stablecoin payments and cross-border settlements.",
      href: "#payments",
    },
  ],
  sections: [
    {
      title: "Popular Tutorials",
      content:
        "Explore our most popular tutorials covering common use cases and integration patterns. Each tutorial includes complete code examples and detailed explanations.",
    },
  ],
};
