import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Professional Services - Enterprise Blockchain Consulting | fazezero",
  description:
    "Expert blockchain consulting and implementation services. From feasibility analysis to architecture design, migration, PoC development, and regulatory compliance. Transform your business with fazezero's professional services team.",
  keywords: [
    "blockchain consulting",
    "blockchain implementation",
    "architecture design",
    "blockchain migration",
    "PoC development",
    "regulatory compliance",
    "professional services",
    "enterprise consulting",
  ],
  openGraph: {
    title:
      "Professional Services - Enterprise Blockchain Consulting | fazezero",
    description:
      "Expert blockchain consulting and implementation services. From feasibility analysis to architecture design, migration, and PoC development.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/og/og-services.png",
        width: 1200,
        height: 630,
        alt: "fazezero Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Services - Enterprise Blockchain Consulting | fazezero",
    description:
      "Expert blockchain consulting and implementation services. From feasibility analysis to architecture design, migration, and PoC development.",
  },
};

export const pageContent = {
  badge: "Professional Services",
  badgeIcon: "Briefcase" as IconName,
  title: "Transform Your Business with Expert Blockchain Consulting",
  description:
    "fazezero's Professional Services team delivers end-to-end support for blockchain adoption — from strategic planning and feasibility analysis to architecture design, implementation, and ongoing optimization. Our consultants combine deep technical expertise with industry knowledge to help enterprises, governments, and startups successfully navigate digital transformation.",
  quickLinks: [
    {
      icon: "FileText" as IconName,
      title: "Consulting & Strategy",
      description: "Strategic guidance and feasibility analysis",
      href: "/services/consulting",
    },
    {
      icon: "Server" as IconName,
      title: "Implementation & Architecture",
      description: "Custom blockchain design and deployment",
      href: "/services/implementation",
    },
    {
      icon: "ArrowRightLeft" as IconName,
      title: "Migration & Integration",
      description: "Legacy system transition and API modernization",
      href: "/services/migration",
    },
    {
      icon: "Beaker" as IconName,
      title: "PoC Development",
      description: "4-6 week rapid prototyping and validation",
      href: "/services/poc",
    },
    {
      icon: "Activity" as IconName,
      title: "Scalability & Performance",
      description: "Layer 2 optimization and 8x throughput gains",
      href: "/services/scalability",
    },
    {
      icon: "ShieldCheck" as IconName,
      title: "Security & Compliance",
      description: "Regulatory advisory and zero-trust architecture",
      href: "/services/security",
    },
  ],
  sections: [
    {
      title: "Blockchain Consulting & Strategy",
      description:
        "Strategic and technical guidance for businesses, governments, nonprofits, and startups seeking to harness blockchain technology. Our consulting practice helps clients design, build, and deploy tailored blockchain solutions — whether on public or private networks — aligned with business goals and compliance needs. From early discovery through go-to-market execution, we support every step: shaping viable use cases, defining governance models, and implementing secure, scalable architectures. Services include feasibility analysis with ROI assessment, protocol benchmarking, compliance gap analysis, and executive-ready scorecards delivered in two weeks.",
      icon: "Briefcase" as IconName,
    },
    {
      title: "Implementation & Architecture Design",
      description:
        "End-to-end support for blockchain adoption with comprehensive solutions from strategy to deployment. Deep assessment of business needs and technical environments identifies the right blockchain model, protocol, and architecture for specific use cases. Custom roadmaps guide development, integration, testing, and scaling while ensuring alignment with compliance, security, and performance standards. Proven frameworks drive transparency, data integrity, and operational efficiency. Services include future-state target architecture blueprinting, multi-cloud resiliency planning, and consortium blockchain formation with templated governance and 99.99% uptime SLA.",
      icon: "Server" as IconName,
    },
    {
      title: "Migration & Integration Services",
      description:
        "Structured path to transition from legacy systems to blockchain-based infrastructure without disrupting critical operations. Comprehensive evaluation of current workflows, systems, and data architecture identifies where blockchain delivers the most value. Phased approach includes detailed migration assessment, strategy development, and clear integration roadmap. Deep expertise in smart contracts, tokenization, DeFi infrastructure, and custom blockchain development ensures secure, efficient, future-proof migrations. Services include API & microservices modernization for payment platforms, data mesh architecture, and blockchain-legacy system integration.",
      icon: "ArrowRightLeft" as IconName,
    },
    {
      title: "Proof-of-Concept Development",
      description:
        "Rapid prototyping service that turns whiteboard concepts into functioning demos in 4-6 weeks. Leverage 500+ APIs, smart contract templates, and real-time event streaming to validate ideas before full-scale development. Build multi-chain PoCs across Ethereum, Hyperledger Fabric, Polygon, and Corda from a single codebase. Enterprise-grade platform with 99.99% uptime ensures demos run flawlessly during investor and board presentations. Deliverables include interactive demos, UI mockups, technical documentation, and validated business case for stakeholder engagement and funding decisions.",
      icon: "Beaker" as IconName,
    },
    {
      title: "Scalability & Performance Optimization",
      description:
        "Specialized service ensuring blockchain networks and software platforms grow without compromising speed, reliability, or user experience. Advanced performance strategies including Layer 2 rollups, state channels, and sharding, combined with backend techniques like load balancing, caching, and database tuning. 24/7 health monitoring and auto-scaling playbooks provide real-time visibility and adaptive performance control. Clients achieve up to 8x throughput improvements without code rewrites while maintaining enterprise-grade uptime. Services include IoT edge payments architecture for smart devices and multi-cloud disaster recovery planning.",
      icon: "Activity" as IconName,
    },
    {
      title: "Regulatory Compliance & Security",
      description:
        "Scalable consulting service helping navigate global regulatory frameworks with confidence. End-to-end support to build, enhance, or manage compliance programs aligning with evolving laws and risk standards across jurisdictions. Embedded compliance architecture features rule engines and API-level enforcement automating adherence to GDPR, SOC 2, ISO 27001, and DIFC Data Law. Global support through legal partner network provides tailored regulatory insights and jurisdiction-specific opinions. Services include zero-trust security architecture, digital identity solutions with W3C DID/VC standards, and KYC/AML compliance automation.",
      icon: "ShieldCheck" as IconName,
    },
  ],
};
