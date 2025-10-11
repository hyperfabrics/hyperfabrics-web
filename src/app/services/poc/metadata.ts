import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title:
    "Proof-of-Concept Development - Rapid Blockchain Prototyping | fazezero",
  description:
    "Validate blockchain ideas in 4-6 weeks with multi-chain PoC development. Leverage 500+ APIs and smart contract templates. Turn concepts into working demos with 99.99% uptime infrastructure.",
  openGraph: {
    title: "Proof-of-Concept Development | fazezero",
    description:
      "Validate blockchain ideas in 4-6 weeks with multi-chain PoC development. Turn concepts into working demos with enterprise-grade infrastructure.",
    url: "/services/poc",
    type: "website",
  },
};

export const pageContent = {
  badge: "PoC Development",
  badgeIcon: "Beaker" as IconName,
  title: "Rapid Blockchain Proof-of-Concept Development",
  description:
    "fazezero's Proof-of-Concept Development Package is a rapid prototyping service that helps organizations validate blockchain or digital asset ideas before committing to full-scale development. In just 4-6 weeks, we turn whiteboard concepts into functioning demos — allowing stakeholders to see real results, not just presentations.",
  quickLinks: [
    {
      icon: "Beaker" as IconName,
      title: "4-6 Week Sprints",
      description: "Rapid development cutting typical PoC timelines in half",
      href: "#sprint",
    },
    {
      icon: "Code" as IconName,
      title: "Multi-Chain Support",
      description: "Ethereum, Fabric, Corda, Polygon from single codebase",
      href: "#multi-chain",
    },
    {
      icon: "Server" as IconName,
      title: "500+ APIs",
      description: "Leverage enterprise platform and smart contract templates",
      href: "#apis",
    },
    {
      icon: "Activity" as IconName,
      title: "Live Demos",
      description: "99.99% uptime infrastructure for pitch-ready presentations",
      href: "#demos",
    },
  ],
  sections: [
    {
      title: "Rapid 4-6 Week Development Cycle",
      description:
        "Purpose-built sprint model accelerates technical validation while keeping core development teams focused on production priorities. Structured approach includes discovery, design, development, and demo phases with clear milestones and deliverables. Weekly standups ensure alignment with business objectives and technical requirements. Compressed timeline reduces costs and accelerates decision-making without sacrificing quality. Agile methodology allows for rapid iteration based on stakeholder feedback. Final delivery includes working prototype, technical documentation, and clear recommendations for production roadmap if validation succeeds.",
      icon: "Activity" as IconName,
    },
    {
      title: "Multi-Chain PoC Development",
      description:
        "Build proofs-of-concept across Ethereum, Hyperledger Fabric, Polygon, and Corda — all from a single codebase. Unified development approach reduces complexity and accelerates delivery. Compare protocol performance, features, and ecosystem fit within same PoC timeframe. Demonstrate flexibility and future-proof architecture to stakeholders. Smart contract templates and chain-agnostic APIs enable rapid cross-chain development. Showcase interoperability capabilities and multi-network deployments. Single codebase strategy reduces technical debt and simplifies future migration decisions.",
      icon: "Server" as IconName,
    },
    {
      title: "Enterprise Platform & 500+ APIs",
      description:
        "Leverage fazezero's enterprise-grade platform including 500+ APIs, pre-built smart contract templates, and real-time event streaming infrastructure. Access production-ready components for identity management, digital asset custody, tokenization, and payment processing. Reusable modules accelerate development and demonstrate enterprise capabilities. ISO-certified infrastructure with 99.99% uptime ensures stability during critical investor or board presentations. Built-in security, compliance, and monitoring tools showcase production-readiness. Prototype runs on same stack used by enterprise customers, demonstrating scalability from day one.",
      icon: "Code" as IconName,
    },
    {
      title: "Interactive Demos & Presentations",
      description:
        "Tangible outputs include interactive web demos, mobile mockups, UI prototypes, and documented technical findings. Demos designed for non-technical stakeholders with clear value proposition and use case demonstration. Live, functional prototypes enable hands-on exploration during investor pitches and board meetings. Visual dashboards show real-time blockchain transactions, smart contract execution, and data flows. Presentation materials include architecture diagrams, technical specifications, and business case documentation. Demo environments remain available post-engagement for continued stakeholder engagement and fundraising activities.",
      icon: "PlaySquare" as IconName,
    },
    {
      title: "Technical Validation & Documentation",
      description:
        "Comprehensive technical assessment validates feasibility, performance, and integration requirements. Load testing, security analysis, and scalability evaluation provide concrete data for production planning. Detailed technical documentation covers architecture decisions, API integrations, smart contract logic, and deployment requirements. Risk assessment identifies potential blockers, technical constraints, and mitigation strategies. Cost analysis estimates infrastructure, development, and operational expenses for production rollout. Clear recommendations on technology stack, protocol selection, and implementation approach based on PoC findings.",
      icon: "FileText" as IconName,
    },
    {
      title: "Business Value & ROI Analysis",
      description:
        "Beyond technical validation, PoC engagement includes business case development and ROI projection. Quantify operational efficiencies, cost reductions, and revenue opportunities enabled by blockchain solution. Competitive analysis positions solution against market alternatives and traditional approaches. Stakeholder feedback collection during demo phase validates product-market fit. Go-to-market strategy development includes positioning, target audience identification, and partnership opportunities. Investment-ready business plan supports funding decisions, board approvals, and executive buy-in with data-driven projections and validated assumptions.",
      icon: "BarChart" as IconName,
    },
  ],
};
