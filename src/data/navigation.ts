import { MegaMenuData } from "@/types/navigation";
import { solutionsMegaMenu } from "./solutions-mega-menu";
import { developersMegaMenu } from "./developers-mega-menu";
import { resourcesMegaMenu } from "./resources-mega-menu";

export const megaMenus: MegaMenuData = {
  platform: [
    {
      sections: [
        {
          title: "CORE INFRASTRUCTURE",
          items: [
            {
              label: "Tokenization Studio",
              href: "/platform/studio",
              description: "Design, launch, and manage tokenized assets.",
              icon: "Box",
              isNew: true,
            },
            {
              label: "Compliance Engine",
              href: "/platform/compliance",
              description: "Automate regulatory and compliance workflows.",
              icon: "ShieldCheck",
            },
          ],
        },
        {
          title: "PAYMENTS",
          items: [
            {
              label: "Payment Rails",
              href: "/platform/payments",
              description:
                "Integrate with global payment and settlement networks.",
              icon: "ArrowRightLeft",
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "DATA & INTEGRATION",
          items: [
            {
              label: "API Gateway",
              href: "/platform/api",
              description: "Access all platform features via a unified API.",
              icon: "GitBranchPlus",
            },
            {
              label: "Real-time Analytics",
              href: "/platform/analytics",
              description: "Gain insights from on-chain and off-chain data.",
              icon: "BarChart",
            },
            {
              label: "Management Dashboard",
              href: "/platform/dashboard",
              description: "Monitor and manage your digital asset operations.",
              icon: "LayoutDashboard",
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "SECURITY",
          items: [
            {
              label: "Multi-Party Computation",
              href: "/platform/mpc",
              description: "Secure private keys and digital assets.",
              icon: "Users",
            },
            {
              label: "Audit & Monitoring",
              href: "/platform/audit",
              description: "Track all platform activity with immutable logs.",
              icon: "Activity",
            },
          ],
        },
        {
          title: "GET STARTED",
          items: [
            {
              label: "Developer Sandbox",
              href: "/platform/sandbox",
              description: "Build and test in a secure, isolated environment.",
              icon: "Beaker",
            },
            {
              label: "Contact Sales",
              href: "/contact",
              description: "Talk to our experts about your needs.",
              icon: "Phone",
            },
          ],
        },
      ],
    },
  ],
  solutions: solutionsMegaMenu,
  developers: developersMegaMenu,
  resources: resourcesMegaMenu,
};
