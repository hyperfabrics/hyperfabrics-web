import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

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
      icon: "Code" as IconName,
      title: "Getting Started",
      description:
        "Learn the basics of integrating with fazeZERO's APIs and SDKs.",
      href: "#getting-started",
    },
    {
      icon: "Code" as IconName,
      title: "API Reference",
      description: "Detailed documentation for all REST and GraphQL endpoints.",
      href: "/developers/api",
    },
    {
      icon: "Zap" as IconName,
      title: "Quick Start",
      description: "Get up and running in minutes with our SDK libraries.",
      href: "/developers/sdks",
    },
    {
      icon: "BookOpen" as IconName,
      title: "Tutorials",
      description: "Step-by-step guides for common use cases and integrations.",
      href: "/developers/tutorials",
    },
  ],
  sections: [
    {
      title: "Overview",
      description:
        "fazeZERO provides a comprehensive suite of APIs and tools to help you build secure, scalable digital asset applications. Our platform offers over 500 APIs supporting multiple blockchain protocols, with enterprise-grade security powered by Multi-Party Computation (MPC) and Intel SGX technology.",
      icon: "BookOpen" as IconName,
    },
    {
      title: "Key Features",
      description:
        "Multi-Chain Support: Connect to 100+ blockchains with a unified API. Enterprise Security: MPC and SGX-powered custody solutions. Real-Time Analytics: Monitor transactions and assets in real-time. Compliance Ready: Built-in KYC/AML and regulatory compliance tools. Developer Sandbox: Test your integrations in a secure environment.",
      icon: "Code" as IconName,
    },
  ],
};
