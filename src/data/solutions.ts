import { SolutionTab } from "@/types";

export const SOLUTION_TABS: SolutionTab[] = [
  {
    key: "tokenization",
    title: "Tokenization & RWAs",
    blurb:
      "Empower your organization with compliance-first rails to issue, manage, and distribute real-world assets. Our platform provides audit-grade reporting and policy-aware transfers, enabling you to scale your digital asset operations with confidence while maintaining rigorous security standards.",
    services: [
      {
        title: "Studio (Issuer Console)",
        summary:
          "Onboard SPVs/assets, design classes, e‑sign docs, allocate, and go live with distribution statements and tax packs.",
        tag: "Platform",
      },
      {
        title: "Rail (Transfer Rules Engine)",
        summary:
          "Jurisdiction + investor‑class aware token with whitelist/blacklist, lockups, and automated cash‑flow distributions.",
      },
      {
        title: "Verify (KYC/AML & Accreditation)",
        summary:
          "Wallet binding, sanctions screening, and eligibility checks embedded at the API layer.",
      },
      {
        title: "Digital Assets Platform (Institutions)",
        summary:
          "MPC + SGX custody, hot/warm/cold wallet policy controls, and connectivity to 100+ chains.",
      },
    ],
  },
  {
    key: "payments",
    title: "Payments & Treasury",
    blurb:
      "Leverage our enterprise-grade stablecoin rails that seamlessly blend traditional banking with on-chain flows. We enable 24/7 global payouts, automated reconciliation, and minimal transaction fees, supporting a diverse range of use cases from remittances to e-commerce.",
    services: [
      {
        title: "Stablecoin Payment Rail",
        summary:
          "Fast, low‑cost settlement across chains and regions; ideal for remittance, A2A, payroll, suppliers, and gov disbursements.",
      },
      {
        title: "Treasury (Policy‑Driven Ops)",
        summary:
          "Signer policies, spend limits, segregation of duties, and complete audit trails for digital asset finance.",
      },
      {
        title: "API & Microservices Modernization",
        summary:
          "Re‑platform legacy payment stacks to event‑driven, cloud‑native microservices with real‑time observability.",
      },
    ],
  },
  {
    key: "consulting",
    title: "Consulting & Architecture",
    blurb:
      "Navigate your journey from discovery to production with our expert guidance. We provide strategic blueprints, rapid proof-of-concept development, and enterprise-grade SLAs to help you build and ship regulated blockchain systems with speed and confidence.",
    services: [
      {
        title: "Use‑Case Identification & Prioritization",
        summary:
          "Protocol‑agnostic workshops + quantitative scoring matrix to pick the highest‑ROI initiatives first.",
      },
      {
        title: "Blockchain Feasibility Analysis",
        summary:
          "Two‑week executive scorecard: ROI, TCO, compliance gaps, and a 7‑protocol benchmark for a go/no‑go decision.",
      },
      {
        title: "Implementation & Architecture",
        summary:
          "End‑to‑end builds on public/private chains with security reviews, runbooks, and production SLAs.",
      },
      {
        title: "PoC Development",
        summary:
          "4–6 week multi‑chain prototypes using 500+ APIs, templates, and event streaming—demo‑ready, not slideware.",
      },
      {
        title: "Strategic Roadmap & Implementation",
        summary:
          "Living roadmap tied to OKRs and funding gates; pre‑integrations with ERP/IAM/data‑lakes to de‑risk delivery.",
      },
    ],
  },
  {
    key: "data",
    title: "Data, Identity & Security",
    blurb:
      "Implement privacy-first data and identity solutions using decentralized technologies. Our platform offers zero-trust controls, verifiable audit trails, and W3C-compliant identity standards to ensure your digital interactions are secure, private, and user-centric.",
    services: [
      {
        title: "Digital Identity (DID + VC)",
        summary:
          "W3C‑compliant decentralized identity with ZK proofs—frictionless KYC and selective disclosure.",
      },
      {
        title: "Data‑Mesh & Real‑Time Analytics",
        summary:
          "Domain‑oriented mesh, streaming pipelines, and dashboards; dual‑write blockchain for immutable audit.",
      },
      {
        title: "Zero‑Trust Security & Blockchain Ref Arch",
        summary:
          "Assume‑breach posture, least privilege, and auditable interactions across apps and partners.",
      },
      {
        title: "Smart‑Contract Consulting",
        summary:
          "Architecture, gas optimization, static analysis & fuzzing; third‑party audit handoff optional.",
      },
    ],
  },
  {
    key: "resilience",
    title: "Resilience & Ops",
    blurb:
      "Enterprise‑grade availability, performance, and disaster recovery for mission‑critical Web3.",
    services: [
      {
        title: "Scalability & Performance Optimization",
        summary:
          "Layer‑2 rollups, sharding, state channels; load‑balancing, caching, and DB tuning—up to 8× throughput lifts.",
      },
      {
        title: "Multi‑Cloud Resiliency & DR",
        summary:
          "Cross‑cloud failover, automated runbooks, RTO/RPO alignment, and hybrid on‑prem integrations.",
      },
      {
        title: "Consortium & Private Blockchain Formation",
        summary:
          "Governance design, legal bylaws templates, and automated member onboarding on Fabric/Quorum/Besu/Corda.",
      },
    ],
  },
];
