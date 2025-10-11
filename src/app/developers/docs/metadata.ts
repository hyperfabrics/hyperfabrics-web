import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Documentation | fazeZERO",
  description:
    "Comprehensive guides and API references to help you integrate fazeZERO platform into your applications. Access 500+ APIs, multi-chain support, and enterprise-grade security.",
  openGraph: {
    title: "Developer Documentation | fazeZERO",
    description:
      "Comprehensive guides and API references to help you integrate fazeZERO platform into your applications.",
    url: "https://fazezero.com/developers/docs",
  },
};

export const pageContent = {
  badge: "Documentation",
  title: "Developer Documentation",
  description:
    "Comprehensive guides and API references to help you integrate fazeZERO's platform into your applications.",
  quickLinks: [
    {
      icon: "Code",
      title: "Getting Started",
      description:
        "Learn the basics of integrating with fazeZERO's APIs and SDKs.",
      href: "#getting-started",
    },
    {
      icon: "Terminal",
      title: "API Reference",
      description: "Detailed documentation for all REST and GraphQL endpoints.",
      href: "/developers/api",
    },
    {
      icon: "Zap",
      title: "Quick Start",
      description: "Get up and running in minutes with our SDK libraries.",
      href: "/developers/sdks",
    },
    {
      icon: "BookOpen",
      title: "Tutorials",
      description: "Step-by-step guides for common use cases and integrations.",
      href: "/developers/tutorials",
    },
  ],
  sections: [
    {
      title: "Overview",
      content:
        "fazeZERO provides a comprehensive suite of APIs and tools to help you build secure, scalable digital asset applications. Our platform offers over 500 APIs supporting multiple blockchain protocols, with enterprise-grade security powered by Multi-Party Computation (MPC) and Intel SGX technology.",
    },
    {
      title: "Key Features",
      items: [
        {
          label: "Multi-Chain Support",
          description: "Connect to 100+ blockchains with a unified API",
        },
        {
          label: "Enterprise Security",
          description: "MPC and SGX-powered custody solutions",
        },
        {
          label: "Real-Time Analytics",
          description: "Monitor transactions and assets in real-time",
        },
        {
          label: "Compliance Ready",
          description: "Built-in KYC/AML and regulatory compliance tools",
        },
        {
          label: "Developer Sandbox",
          description: "Test your integrations in a secure environment",
        },
      ],
    },
  ],
};
