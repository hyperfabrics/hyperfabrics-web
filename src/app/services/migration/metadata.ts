import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blockchain Migration & Integration Services | HyperFabrics",
  description:
    "Seamless blockchain migration and integration services. Transition from legacy systems to blockchain infrastructure with phased roadmaps, minimal disruption, and expert guidance.",
  openGraph: {
    title: "Blockchain Migration & Integration Services | HyperFabrics",
    description:
      "Seamless blockchain migration and integration services. Expert guidance for legacy system transformation.",
    url: "/services/migration",
    type: "website",
  },
};

export const pageContent = {
  badge: "Migration & Integration",
  badgeIcon: "ArrowRightLeft" as IconName,
  title: "Blockchain Migration & Integration Roadmap",
  description:
    "HyperFabrics's Migration & Integration Services provide a structured path to transition from legacy systems to blockchain-based infrastructure without disrupting critical operations. We evaluate current workflows, systems, and data architecture to identify where blockchain delivers the most value.",
  quickLinks: [
    {
      icon: "FileText" as IconName,
      title: "Migration Assessment",
      description: "Comprehensive system evaluation and value identification",
      href: "#assessment",
    },
    {
      icon: "GitBranchPlus" as IconName,
      title: "Integration Strategy",
      description: "Connect blockchain networks to legacy systems",
      href: "#integration",
    },
    {
      icon: "Code" as IconName,
      title: "API Modernization",
      description: "Transform payment platforms with microservices",
      href: "#apis",
    },
    {
      icon: "Server" as IconName,
      title: "Data Mesh Architecture",
      description: "Domain-oriented real-time analytics infrastructure",
      href: "#data-mesh",
    },
  ],
  sections: [
    {
      title: "Comprehensive Migration Assessment",
      description:
        "Comprehensive evaluation of current workflows, systems, and data architecture identifies where blockchain can deliver the most value through automation, transparency, or decentralized data control. Phased approach includes detailed migration assessment, strategy development, and clear integration roadmap aligning with technical and business goals. Deep expertise in smart contracts, tokenization, DeFi infrastructure, and custom blockchain development ensures migrations are secure, efficient, and future-proof. Guide full process from connecting blockchain networks to legacy systems to building new applications with focus on compliance and scalability.",
      icon: "FileText" as IconName,
    },
    {
      title: "API & Microservices Modernization",
      description:
        "Transform traditional payment systems into modern, scalable, efficient solutions leveraging microservices-based architectures and open APIs. Enable financial institutions to handle increased transaction volumes with optimized performance through container-based deployment and event-driven models supporting various payment channels. Cloud-native approach enhances scalability, agility, and fault tolerance while significantly reducing operational costs. Support wide range of global clearing systems and payment types including domestic and cross-border transactions. Comprehensive system monitoring, business automation, and agile integration capabilities deliver higher efficiency while maintaining robust security standards.",
      icon: "Code" as IconName,
    },
    {
      title: "Legacy System Integration Strategy",
      description:
        "Structured integration approach connects blockchain infrastructure with existing enterprise systems without requiring full replacement. Build secure API bridges between legacy databases, ERP systems, and blockchain networks enabling data synchronization and transaction verification. Implement dual-write patterns ensuring data consistency across traditional and distributed systems. Gradual migration path allows organizations to validate blockchain benefits while maintaining operational continuity. Integration middleware handles protocol translation, data transformation, and authentication across heterogeneous systems. Minimize disruption to end users and business processes during technology transition with proven integration patterns.",
      icon: "GitBranchPlus" as IconName,
    },
    {
      title: "Data Mesh & Real-Time Analytics",
      description:
        "Move beyond bottlenecked data lakes with domain-oriented data mesh architecture featuring event-driven pipelines, self-service catalogs, and near-real-time dashboards for liquidity, risk, and customer insight. Finance-specific data product templates and dual-write blockchain pattern provide immutable audit history at processing cost under $0.25/GB. Decentralized data infrastructure empowers teams to access and analyze their data faster, securely, without waiting on centralized teams or tools. Streaming dashboards tailored for operational intelligence blend transparency with efficiency, meeting both compliance and performance goals.",
      icon: "Server" as IconName,
    },
    {
      title: "Smart Contract & DeFi Integration",
      description:
        "Seamlessly integrate smart contracts and decentralized finance protocols into existing financial systems. Develop custom smart contracts automating business logic, payment settlements, and asset transfers. Connect DeFi protocols for lending, staking, and liquidity management with traditional financial infrastructure. Tokenization services enable representation of real-world assets on blockchain networks. Security audits and formal verification ensure smart contract reliability before production deployment. Provide training and documentation enabling internal teams to maintain and extend smart contract functionality over time.",
      icon: "Wallet" as IconName,
    },
    {
      title: "Migration Success & Validation",
      description:
        "Structured validation process ensures successful migration with comprehensive testing, performance benchmarking, and user acceptance criteria. Parallel running periods allow side-by-side comparison of legacy and blockchain systems before full cutover. Detailed rollback procedures minimize risk during migration phases. Post-migration support includes performance monitoring, optimization recommendations, and issue resolution. Success metrics tied to business objectives including cost savings, transaction speed improvements, and operational efficiency gains. Regular reviews validate that blockchain implementation delivers promised value and meets stakeholder expectations.",
      icon: "Activity" as IconName,
    },
  ],
};
