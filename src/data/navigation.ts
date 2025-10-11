import { MegaMenuData } from "@/types/navigation";
import { solutionsMegaMenu } from "./solutions-mega-menu";

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
  developers: {
    categories: [
      {
        title: "TOOLS",
        items: [
          { label: "Documentation", href: "/developers/docs" },
          { label: "API Reference", href: "/developers/api" },
          { label: "SDKs & Libraries", href: "/developers/sdks" },
          { label: "Changelog", href: "/developers/changelog" },
        ],
      },
      {
        title: "RESOURCES",
        items: [
          { label: "Tutorials", href: "/developers/tutorials" },
          { label: "Integration Guides", href: "/developers/guides" },
          { label: "Sample Projects", href: "/developers/samples" },
          { label: "Postman Collection", href: "/developers/postman" },
        ],
      },
      {
        title: "COMMUNITY",
        items: [
          { label: "GitHub", href: "https://github.com/fazezero" },
          { label: "Discord", href: "/community/discord" },
          { label: "Forum", href: "/community/forum" },
          { label: "Events", href: "/community/events" },
        ],
      },
      {
        title: "SUPPORT",
        items: [
          { label: "Contact Support", href: "/support/contact" },
          { label: "API Status", href: "https://status.fazezero.com" },
          { label: "FAQ", href: "/developers/faq" },
          { label: "Stack Overflow", href: "/community/stackoverflow" },
        ],
      },
    ],
  },
  resources: {
    categories: [
      {
        title: "LEARN",
        items: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Research", href: "/resources/research" },
        ],
      },
      {
        title: "EVENTS",
        items: [
          { label: "Upcoming Webinars", href: "/events/webinars" },
          { label: "Conferences", href: "/events/conferences" },
          { label: "Meetups", href: "/events/meetups" },
          { label: "Past Events", href: "/events/archive" },
        ],
      },
      {
        title: "COMPANY",
        items: [
          { label: "About Us", href: "/company/about" },
          { label: "Careers", href: "/company/careers" },
          { label: "Press", href: "/company/press" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        title: "LEGAL",
        items: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Cookie Policy", href: "/legal/cookies" },
          { label: "DPA", href: "/legal/dpa" },
        ],
      },
    ],
  },
};
