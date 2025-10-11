import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blockchain Implementation & Architecture Services | fazezero",
  description:
    "End-to-end blockchain implementation and architecture design services. From protocol selection to deployment, we guide enterprises through secure, scalable blockchain adoption with proven frameworks.",
  openGraph: {
    title: "Blockchain Implementation & Architecture Services | fazezero",
    description:
      "End-to-end blockchain implementation and architecture design services. Expert guidance from strategy to deployment.",
    url: "/services/implementation",
    type: "website",
  },
};

export const pageContent = {
  badge: "Implementation & Architecture",
  badgeIcon: "Server" as IconName,
  title: "Blockchain Implementation & Architecture Design",
  description:
    "fazezero's Implementation & Architecture Services deliver end-to-end support for blockchain adoption with comprehensive solutions from strategy to deployment. We assess your business needs and technical environment to identify the right blockchain model, protocol, and architecture for your specific use case.",
  quickLinks: [
    {
      icon: "Server" as IconName,
      title: "Architecture Design",
      description: "Custom blockchain model and protocol selection",
      href: "#architecture",
    },
    {
      icon: "Code" as IconName,
      title: "Implementation Roadmap",
      description: "Phased deployment with clear milestones",
      href: "#roadmap",
    },
    {
      icon: "ShieldCheck" as IconName,
      title: "Security & Compliance",
      description: "Built-in security and regulatory alignment",
      href: "#security",
    },
    {
      icon: "Activity" as IconName,
      title: "Scalability Planning",
      description: "Future-proof architecture for growth",
      href: "#scalability",
    },
  ],
  sections: [
    {
      title: "Custom Architecture & Protocol Selection",
      description:
        "Deep assessment of business needs and technical environments identifies the right blockchain model, protocol, and architecture for specific use cases. Expert guidance on choosing between Ethereum, Hyperledger Fabric, Corda, Polygon, Quorum, and Besu based on performance, scalability, governance, and ecosystem maturity. Evaluation covers transaction throughput, consensus mechanisms, smart contract capabilities, and integration complexity. Consider public vs private, permissioned vs permissionless based on regulatory requirements and business needs. Recommendations grounded in real-world deployments and industry best practices ensure optimal technology stack selection.",
      icon: "Server" as IconName,
    },
    {
      title: "Implementation Roadmap & Deployment",
      description:
        "Custom roadmaps guide development, integration, testing, and scaling with clear milestones and success criteria. Roadmaps tied to concrete OKRs, cost estimates, and funding gates equip CIOs and transformation leaders with credible, board-ready plans. Detailed strategies cover secure, scalable architectures supporting decentralized storage, high-speed transactions, and digital asset workflows. Phased rollout timelines include resource requirements, technology stack recommendations, and change management approaches. Ensure alignment with compliance, security, and performance standards throughout implementation journey with proven frameworks driving transparency and data integrity.",
      icon: "Code" as IconName,
    },
    {
      title: "Future-State Target Architecture",
      description:
        "In just four weeks, benchmark core systems, data flows, and regulatory constraints, then deliver single-page north-star blueprint showing exactly how to re-platform legacy monoliths into modular, cloud-ready, blockchain-aware stack. Roadmap tied to concrete OKRs and funding gates gives CIOs clear 18-month migration plan trimming tech debt, unlocking partner APIs, and securing board-level buy-in. Concise, executive-level vision maps evolution from monolithic legacy cores to cloud-native, blockchain-aware digital environment. Incorporate key modernization goals like API enablement, composability, and real-time data agility aligned with measurable business outcomes.",
      icon: "LayoutDashboard" as IconName,
    },
    {
      title: "Multi-Cloud Resiliency & Disaster Recovery",
      description:
        "Enterprise-grade infrastructure designed for 99.99% uptime with multi-cloud, multi-region high availability. Automated failover mechanisms and disaster recovery protocols ensure business continuity during outages or emergencies. Comprehensive backup strategies protect critical data and smart contract states. Load balancing across regions optimizes performance while maintaining redundancy. Regular disaster recovery drills validate recovery time objectives (RTO) and recovery point objectives (RPO). Monitoring and alerting systems provide real-time visibility into infrastructure health and performance metrics across cloud providers.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Consortium & Private Network Formation",
      description:
        "Rapidly launch shared-governance networks on Fabric, Quorum, Besu, or Corda with comprehensive support for multi-party blockchain networks. One-click consortium builder with templated bylaws and onboarding flows reduces time and cost. Design effective governance structures, define member onboarding, and set up technical backbone with vendor-agnostic, multi-cloud approach. Integrated notarization and zero-knowledge modules enable selective data disclosure without compromising trust. Multi-cloud, multi-region HA with 99.99% uptime SLA ensures resilient, scalable networks aligned with privacy and compliance needs of all participating members.",
      icon: "Users" as IconName,
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "Long-term partnership beyond initial implementation with regular architecture reviews and performance optimization. Access to technical experts for troubleshooting, scaling recommendations, and technology stack upgrades. Stay ahead of protocol updates, security patches, and emerging blockchain technologies. Quarterly performance reviews assess system health against SLAs and business objectives. Priority support channels including dedicated technical account management ensure continuous success. Regular training sessions and documentation updates keep internal teams informed and empowered to manage blockchain infrastructure effectively.",
      icon: "Activity" as IconName,
    },
  ],
};
