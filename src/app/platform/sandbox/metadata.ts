import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Developer Sandbox - Safe Testing Environment | HyperFabrics",
  description:
    "Test and validate blockchain applications in a production-like environment. Multi-chain testing, smart contract debugging, API validation, and integration testing without risking real assets.",
  keywords: [
    "blockchain sandbox",
    "testing environment",
    "smart contract testing",
    "blockchain development",
    "test network",
    "developer tools",
  ],
  openGraph: {
    title: "Developer Sandbox - HyperFabrics",
    description:
      "Test and validate blockchain applications safely. Multi-chain testing without risking real assets.",
    url: "/platform/sandbox",
    type: "website",
    images: [
      {
        url: "/og/og-platform-sandbox.png",
        width: 1200,
        height: 630,
        alt: "HyperFabrics Sandbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Sandbox - HyperFabrics",
    description:
      "Test and validate blockchain applications safely in a production-like environment.",
  },
};

export const pageContent = {
  badge: "Development",
  badgeIcon: "TestTube" as IconName,
  title: "Build and Test with Confidence",
  description:
    "HyperFabrics's Developer Sandbox provides a safe, isolated environment for testing blockchain applications before production deployment. Validate smart contracts, test integrations, debug transactions, and run load tests — all in a production-like setting that mirrors mainnet conditions without risking real assets or incurring actual blockchain fees.",
  quickLinks: [
    {
      icon: "Network" as IconName,
      title: "Multi-Chain Testing",
      description:
        "Test across Ethereum, Polygon, Hyperledger, and 100+ chains",
      href: "#multichain",
    },
    {
      icon: "Bug" as IconName,
      title: "Smart Contract Debug",
      description: "Step-through debugging with transaction replay",
      href: "#debug",
    },
    {
      icon: "Gauge" as IconName,
      title: "Load Testing",
      description:
        "Stress test applications with simulated high-volume scenarios",
      href: "#load",
    },
    {
      icon: "Plug" as IconName,
      title: "API Validation",
      description: "Test all API endpoints and integration flows",
      href: "#api",
    },
  ],
  sections: [
    {
      title: "Production-Like Test Networks",
      description:
        "Sandbox environments mirror production configurations including network topology, consensus mechanisms, and API behaviors. Test applications behave identically to production deployments, reducing surprises during go-live. Isolated networks prevent test transactions from affecting mainnet while maintaining realistic latency, throughput, and state management characteristics.",
      icon: "Server" as IconName,
    },
    {
      title: "Smart Contract Testing Suite",
      description:
        "Comprehensive toolkit for smart contract development and testing. Deploy contracts to test networks, execute transactions, and validate behavior. Step-through debugger with transaction replay enables root-cause analysis of failed transactions. Automated testing frameworks support unit tests, integration tests, and property-based testing. Gas profiling identifies optimization opportunities before mainnet deployment.",
      icon: "Code" as IconName,
    },
    {
      title: "Faucet & Test Assets",
      description:
        "Instant access to test tokens and cryptocurrencies for development purposes. Faucets provide unlimited test assets for all supported blockchains — enabling developers to test payment flows, custody operations, and DeFi interactions without acquiring real assets. Test tokens mirror mainnet token standards (ERC-20, ERC-721, etc.) for realistic scenario testing.",
      icon: "Droplet" as IconName,
    },
    {
      title: "Integration Testing",
      description:
        "Validate end-to-end integration with wallets, exchanges, oracles, and external services. Test webhook delivery, API authentication, error handling, and retry logic in a controlled environment. Mock external dependencies or connect to actual staging endpoints. Simulate network failures, delayed confirmations, and edge cases that are difficult to reproduce in production.",
      icon: "GitMerge" as IconName,
    },
    {
      title: "Performance & Load Testing",
      description:
        "Stress test applications under realistic and extreme load conditions. Generate thousands of concurrent transactions to identify bottlenecks and capacity limits. Monitor response times, error rates, and resource utilization under load. Automated load testing scripts can be scheduled or triggered by CI/CD pipelines to catch performance regressions before deployment.",
      icon: "Activity" as IconName,
    },
    {
      title: "Sandbox-to-Production Migration",
      description:
        "Seamless transition from sandbox testing to production deployment. Configuration management tools ensure consistency between environments. One-click deployment promotes tested code to production networks with minimal manual intervention. Rollback capabilities enable quick recovery if issues are discovered post-deployment. Blue-green deployment strategies minimize downtime during updates.",
      icon: "ArrowRight" as IconName,
    },
  ],
};
