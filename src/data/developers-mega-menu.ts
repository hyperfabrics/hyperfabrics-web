import { MegaMenuColumn } from "@/types/navigation";

export const developersMegaMenu: MegaMenuColumn[] = [
  {
    sections: [
      {
        title: "GET STARTED",
        items: [
          {
            label: "Documentation",
            href: "/developers/docs",
            description: "Explore our comprehensive developer documentation.",
            icon: "BookOpen",
          },
          {
            label: "API Reference",
            href: "/developers/api",
            description: "Detailed reference for our REST and GraphQL APIs.",
            icon: "Code",
          },
          {
            label: "SDKs & Libraries",
            href: "/developers/sdks",
            description:
              "Integrate our official SDKs for your favorite language.",
            icon: "Package",
          },
          {
            label: "Tutorials & Guides",
            href: "/developers/tutorials",
            description:
              "Follow step-by-step tutorials to build with fazeZERO.",
            icon: "PlaySquare",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "COMMUNITY",
        items: [
          {
            label: "Community Forum",
            href: "/developers/forum",
            description:
              "Ask questions and share knowledge with the community.",
            icon: "MessagesSquare",
          },
          {
            label: "Discord Server",
            href: "/developers/discord",
            description: "Join our live community chat on Discord.",
            icon: "MessageCircle",
          },
          {
            label: "Events & Hackathons",
            href: "/developers/events",
            description: "Find out about upcoming hackathons, and webinars.",
            icon: "Calendar",
          },
          {
            label: "Developer Blog",
            href: "/developers/blog",
            description:
              "Read the latest technical articles from our engineering team.",
            icon: "Rss",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "SUPPORT & TOOLS",
        items: [
          {
            label: "Contact Support",
            href: "/developers/support",
            description: "Get help from our expert support team.",
            icon: "LifeBuoy",
          },
          {
            label: "Service Status",
            href: "/developers/status",
            description: "Check the current status of all our services.",
            icon: "Server",
          },
          {
            label: "Changelog",
            href: "/developers/changelog",
            description: "Stay up-to-date with the latest platform updates.",
            icon: "FileText",
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
        ],
      },
    ],
  },
];
