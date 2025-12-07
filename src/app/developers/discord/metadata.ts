import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Discord Community | HyperFabrics",
  description:
    "Join our Discord server for real-time chat with the HyperFabrics team and community. Get instant help and stay updated on the latest developments.",
  openGraph: {
    title: "Discord Community | HyperFabrics",
    description: "Join our Discord for real-time developer chat and support.",
    url: "https://HyperFabrics.com/developers/discord",
  },
};

export const pageContent = {
  badge: "Discord Community",
  badgeIcon: "MessageCircle" as IconName,
  title: "Join Us on Discord",
  description:
    "Connect with the HyperFabrics team and developer community in real-time. Get instant answers, share ideas, and stay updated.",
  sections: [
    {
      title: "Why Join Our Discord?",
      description:
        "Real-time Support: Get quick answers from our team and community. Direct Access: Chat with HyperFabrics engineers and product managers. Early Access: Be the first to know about new features and updates. Networking: Connect with other developers building on HyperFabrics.",
      icon: "MessageCircle" as IconName,
    },
  ],
};
