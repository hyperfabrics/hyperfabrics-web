import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blockchain Consulting Services - Strategic Advisory | fazezero",
  description:
    "Strategic blockchain consulting from feasibility analysis to implementation roadmap. Expert guidance for enterprises, governments, and startups. Get ROI clarity, protocol benchmarking, and compliance analysis in 2 weeks.",
  openGraph: {
    title: "Blockchain Consulting Services | fazezero",
    description:
      "Strategic blockchain consulting from feasibility analysis to implementation roadmap. Expert guidance for enterprises, governments, and startups.",
    url: "/services/consulting",
    type: "website",
  },
};

export const pageContent = {
  badge: "Consulting & Strategy",
  badgeIcon: "Briefcase" as IconName,
  title: "Strategic Blockchain Consulting & Advisory Services",
  description:
    "fazezero's Blockchain Consulting Services provide strategic and technical guidance to businesses, governments, nonprofits, and startups seeking to harness the full potential of blockchain technology. Our consulting practice helps clients design, build, and deploy tailored solutions aligned with business goals and compliance needs.",
  quickLinks: [
    {
      icon: "FileText" as IconName,
      title: "Feasibility Analysis",
      description: "ROI assessment and go/no-go decision in 2 weeks",
      href: "#feasibility",
    },
    {
      icon: "BarChart" as IconName,
      title: "Use Case Development",
      description: "Identify high-value blockchain opportunities",
      href: "#use-cases",
    },
    {
      icon: "Server" as IconName,
      title: "Protocol Selection",
      description: "Compare 7+ blockchain protocols for your needs",
      href: "#protocols",
    },
    {
      icon: "ShieldCheck" as IconName,
      title: "Compliance Analysis",
      description: "Gap analysis for KYC/AML and data privacy",
      href: "#compliance",
    },
  ],
  sections: [
    {
      title: "Blockchain Feasibility Analysis",
      description:
        "Strategic assessment service determining if blockchain is the right fit before any code is written. Tailored for C-suite stakeholders and innovation teams, delivering clear, data-driven evaluation of whether blockchain technology aligns with business objectives, regulatory environment, and technical requirements. Deep analysis identifies real-world benefits, risks, and limitations. Assess ROI potential, total cost of ownership, and technical viability. Receive benchmark comparison of seven leading blockchain protocols (both public and permissioned), compliance gap analysis aligned with KYC/AML and global data privacy laws, and two-week turnaround with go/no-go scorecard to support funding decisions.",
      icon: "FileText" as IconName,
    },
    {
      title: "Strategic Use Case Identification",
      description:
        "From early discovery phase to go-to-market execution, our team supports every step of the journey. Help clients shape viable use cases that deliver measurable business value. Define governance models ensuring stakeholder alignment and operational clarity. Identify where blockchain adds the most value through automation, transparency, or decentralized data control. Detailed strategies include go-to-market roadmaps, partnership connections, and innovative revenue stream exploration. Focus on use cases that enhance transparency, security, and operational efficiency while ensuring market fit and competitive viability.",
      icon: "BarChart" as IconName,
    },
    {
      title: "Protocol & Architecture Selection",
      description:
        "Expert guidance on choosing the right blockchain model, protocol, and architecture for specific use cases. Side-by-side benchmark of leading protocols including Ethereum, Hyperledger Fabric, Corda, Polygon, Quorum, and Besu. Evaluate performance, scalability, governance, and ecosystem maturity. Consider public vs private, permissioned vs permissionless based on regulatory requirements and business needs. Assessment covers transaction throughput, consensus mechanisms, smart contract capabilities, and integration complexity. Recommendations grounded in real-world deployments and industry best practices.",
      icon: "Server" as IconName,
    },
    {
      title: "Compliance & Regulatory Roadmap",
      description:
        "Navigate global regulatory frameworks with confidence through comprehensive compliance gap analysis. Built-in assessment for global KYC/AML requirements, GDPR, DIFC Data Law, SOC 2, and ISO 27001 standards. Identify regulatory blockers, data residency constraints, and privacy requirements across jurisdictions. Partnership network with leading law firms provides country-specific legal opinions. Embedded compliance architecture with rule engines enforcing regional policies at API layer. Reduce risk of fines, project shutdowns, and regulatory non-compliance before development begins.",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Implementation Roadmap Planning",
      description:
        "Custom roadmaps guide organizations through development, integration, testing, and scaling with clear milestones and success criteria. Roadmaps tied to concrete OKRs, cost estimates, and funding gates equip CIOs and transformation leaders with credible, board-ready plans. Detailed strategies cover secure, scalable architectures supporting decentralized storage, high-speed transactions, and digital asset workflows. Include phased rollout timelines, resource requirements, technology stack recommendations, and change management approaches. Ensure alignment with compliance, security, and performance standards throughout implementation journey.",
      icon: "Code" as IconName,
    },
    {
      title: "Ongoing Advisory & Support",
      description:
        "Long-term partnership beyond initial consulting engagement. Regular office hours, strategic reviews, and architecture guidance as projects evolve. Access to technical experts for troubleshooting, optimization recommendations, and emerging technology evaluation. Stay ahead of industry trends, regulatory changes, and protocol updates. Quarterly business reviews assess progress against objectives and adjust strategies. Connect with industry partners, technology vendors, and peer networks. Priority support channels including dedicated Slack access and solution architect availability ensure continuous success and adaptation.",
      icon: "Users" as IconName,
    },
  ],
};
