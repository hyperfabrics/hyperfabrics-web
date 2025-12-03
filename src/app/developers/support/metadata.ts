import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

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
  badgeIcon: "LifeBuoy" as IconName,
  title: "Developer Support",
  description:
    "Get expert help from our technical support team. We're here to help you succeed with fazeZERO.",
  quickLinks: [
    {
      icon: "BookOpen" as IconName,
      title: "Documentation",
      description: "Search our comprehensive documentation and guides.",
      href: "/developers/docs",
    },
    {
      icon: "MessagesSquare" as IconName,
      title: "Community Forum",
      description: "Ask questions and get help from the community.",
      href: "/developers/forum",
    },
    {
      icon: "MessageCircle" as IconName,
      title: "Discord Chat",
      description: "Join our Discord for real-time support.",
      href: "/developers/discord",
    },
  ],
  sections: [
    {
      title: "Support Options",
      description:
        "Documentation: Comprehensive guides and API references. Community Forum: Get help from other developers. Discord: Real-time chat with our team. Email Support: Submit a ticket for technical issues.",
      icon: "LifeBuoy" as IconName,
    },
  ],
};
