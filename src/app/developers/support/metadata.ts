import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Support | fazeZERO",
  description:
    "Get expert help from our developer support team. Access documentation, submit tickets, and get answers to your technical questions.",
  openGraph: {
    title: "Developer Support | fazeZERO",
    description: "Expert technical support for developers.",
    url: "https://fazezero.com/developers/support",
  },
};

export const pageContent = {
  badge: "Developer Support",
  badgeIcon: "LifeBuoy",
  title: "Developer Support",
  description:
    "Get expert help from our technical support team. We're here to help you succeed with fazeZERO.",
  quickLinks: [
    {
      icon: "BookOpen",
      title: "Documentation",
      description: "Search our comprehensive documentation and guides.",
      href: "/developers/docs",
    },
    {
      icon: "MessagesSquare",
      title: "Community Forum",
      description: "Ask questions and get help from the community.",
      href: "/developers/forum",
    },
    {
      icon: "MessageCircle",
      title: "Discord Chat",
      description: "Join our Discord for real-time support.",
      href: "/developers/discord",
    },
  ],
  sections: [
    {
      title: "Support Options",
      items: [
        {
          label: "Documentation",
          description: "Comprehensive guides and API references",
        },
        {
          label: "Community Forum",
          description: "Get help from other developers",
        },
        { label: "Discord", description: "Real-time chat with our team" },
        {
          label: "Email Support",
          description: "Submit a ticket for technical issues",
        },
      ],
    },
  ],
};
