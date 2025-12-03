import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title:
    "Developers - Build on Enterprise Blockchain Infrastructure | fazezero",
  description:
    "Access 500+ APIs, comprehensive SDKs, and enterprise-grade developer tools to build blockchain applications. Multi-chain support for Ethereum, Hyperledger, and 100+ protocols. Get started with fazezero's developer platform today.",
  keywords: [
    "blockchain API",
    "blockchain SDK",
    "Web3 development",
    "blockchain developer tools",
    "enterprise blockchain API",
    "tokenization API",
    "500+ APIs",
    "multi-chain development",
  ],
  openGraph: {
    title: "Developers - Build on Enterprise Blockchain | fazezero",
    description:
      "Access 500+ APIs, comprehensive SDKs, and enterprise-grade developer tools. Multi-chain support for Ethereum, Hyperledger, and 100+ protocols.",
    url: "/developers",
    type: "website",
    images: [
      {
        url: "/og/og-developers.png",
        width: 1200,
        height: 630,
        alt: "fazezero Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developers - Build on Enterprise Blockchain | fazezero",
    description:
      "Access 500+ APIs, comprehensive SDKs, and enterprise-grade developer tools. Multi-chain support for Ethereum, Hyperledger, and 100+ protocols.",
  },
};

export const pageContent = {
  badge: "Developers",
  badgeIcon: "Code" as IconName,
  title: "Build the Future with Enterprise-Grade Blockchain Tools",
  description:
    "fazezero provides developers with everything needed to build, test, and deploy blockchain applications at scale. Access 500+ APIs, comprehensive SDKs, and production-ready infrastructure supporting 100+ blockchains including Ethereum, Hyperledger Fabric, Polygon, Solana, and emerging protocols.",
  quickLinks: [
    {
      icon: "BookOpen" as IconName,
      title: "Documentation",
      description: "Comprehensive guides, tutorials, and API references",
      href: "/developers/docs",
    },
    {
      icon: "Code" as IconName,
      title: "API Reference",
      description: "Complete API documentation with code examples",
      href: "/developers/api",
    },
    {
      icon: "Package" as IconName,
      title: "SDKs & Libraries",
      description: "Official SDKs for JavaScript, Python, Java, and Go",
      href: "/developers/sdks",
    },
    {
      icon: "Beaker" as IconName,
      title: "Developer Sandbox",
      description: "Test your applications in a production-like environment",
      href: "/platform/sandbox",
    },
  ],
  sections: [
    {
      title: "500+ Production-Ready APIs",
      description:
        "Access a comprehensive suite of REST and WebSocket APIs covering digital asset custody, tokenization, payments, identity management, and blockchain operations. All APIs feature consistent authentication, detailed error handling, rate limiting, and webhook support. Built for high-frequency trading and mission-critical applications with 99.99% uptime SLA. Extensive documentation includes code examples in multiple languages, interactive API explorer, and Postman collections for rapid prototyping.",
      icon: "Code" as IconName,
    },
    {
      title: "Multi-Chain Development Platform",
      description:
        "Build applications that work across 100+ blockchains without managing infrastructure complexity. Unified API abstracts chain-specific differences while providing access to native features when needed. Supports Ethereum, Hyperledger Fabric, Polygon, Solana, Binance Smart Chain, Avalanche, and emerging protocols. Switch between mainnet, testnet, and private networks with a single configuration change. Real-time event streaming and transaction monitoring across all supported chains.",
      icon: "Server" as IconName,
    },
    {
      title: "Enterprise SDKs & Libraries",
      description:
        "Official SDKs available for JavaScript/TypeScript, Python, Java, Go, and .NET with consistent interfaces across languages. Type-safe implementations with full IntelliSense support in modern IDEs. Includes built-in retry logic, connection pooling, and automatic failover. All SDKs are open-source, actively maintained, and include comprehensive test coverage. Package managers: npm, pip, Maven, Go modules. Examples and starter templates available for common use cases including wallet integration, tokenization workflows, and payment processing.",
      icon: "Package" as IconName,
    },
    {
      title: "Developer Sandbox Environment",
      description:
        "Production-like testing environment with pre-funded test wallets, sample smart contracts, and mock services. No cost for development and testing—only pay when you deploy to production. Includes monitoring tools, debugger, transaction explorer, and performance profiler. Reset and clone environments instantly. Collaborate with team members using shared sandbox instances. Seamless promotion from sandbox to staging to production with configuration management and environment variables.",
      icon: "Beaker" as IconName,
    },
    {
      title: "Real-Time Events & Webhooks",
      description:
        "Subscribe to blockchain events, transaction confirmations, and system notifications via webhooks. Guaranteed delivery with automatic retries and exponential backoff. Filter events by contract address, transaction type, or custom business logic. WebSocket connections for real-time data streaming with sub-second latency. Event history and replay capabilities for debugging and recovery. Secure webhook verification with HMAC signatures. Monitor webhook health and delivery statistics through developer dashboard.",
      icon: "Activity" as IconName,
    },
    {
      title: "Community & Support",
      description:
        "Join thousands of developers building on fazezero. Access community forums, Discord channel, and GitHub discussions for peer support. Regular office hours, webinars, and workshops with engineering team. Comprehensive knowledge base with troubleshooting guides, best practices, and architecture patterns. Priority support available for enterprise customers with dedicated Slack channels and direct access to solution architects. Contribute to open-source projects and earn community recognition. Bug bounty program for security researchers.",
      icon: "Users" as IconName,
    },
  ],
};
