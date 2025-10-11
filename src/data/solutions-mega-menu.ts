import { MegaMenuColumn } from "@/types/navigation";

export const solutionsMegaMenu: MegaMenuColumn[] = [
  {
    sections: [
      {
        title: "Tokenization & RWAs",
        items: [
          {
            label: "Studio (Issuer Console)",
            href: "/solutions#tokenization",
            description:
              "Onboard SPVs/assets, design classes, e-sign docs, and go live.",
            icon: "LayoutGrid",
          },
          {
            label: "Rail (Transfer Rules Engine)",
            href: "/solutions#tokenization",
            description:
              "Jurisdiction + investor-class aware token with automated distributions.",
            icon: "GitBranch",
          },
          {
            label: "Verify (KYC/AML & Accreditation)",
            href: "/solutions#tokenization",
            description:
              "Wallet binding, sanctions screening, and eligibility checks at the API layer.",
            icon: "ShieldCheck",
          },
          {
            label: "Digital Assets Platform",
            href: "/solutions#tokenization",
            description:
              "MPC + SGX custody with policy controls and connectivity to 100+ chains.",
            icon: "Building",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Payments & Treasury",
        items: [
          {
            label: "Stablecoin Payment Rail",
            href: "/solutions#payments",
            description:
              "Fast, low-cost settlement across chains for global payouts.",
            icon: "ArrowRightLeft",
          },
          {
            label: "Treasury (Policy-Driven Ops)",
            href: "/solutions#payments",
            description:
              "Signer policies, spend limits, and complete audit trails for digital assets.",
            icon: "Landmark",
          },
          {
            label: "API & Microservices Modernization",
            href: "/solutions#payments",
            description:
              "Re-platform legacy payment stacks to cloud-native microservices.",
            icon: "Code",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Consulting & Data",
        items: [
          {
            label: "Consulting & Architecture",
            href: "/solutions#consulting",
            description:
              "Blueprints, PoCs, and SLAs to ship regulated blockchain systems fast.",
            icon: "DraftingCompass",
          },
          {
            label: "Data, Identity & Security",
            href: "/solutions#data",
            description:
              "Privacy-first data and identity patterns with zero-trust controls.",
            icon: "Fingerprint",
          },
          {
            label: "PoC Development",
            href: "/solutions#consulting",
            description:
              "4-6 week multi-chain prototypes using 500+ APIs and templates.",
            icon: "FlaskConical",
          },
        ],
      },
    ],
  },
];
