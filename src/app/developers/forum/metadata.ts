import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Community Forum | fazeZERO",
  description:
    "Join the fazeZERO developer community. Ask questions, share knowledge, and connect with other developers building on our platform.",
  openGraph: {
    title: "Community Forum | fazeZERO",
    description: "Join our developer community and get help from experts.",
    url: "https://fazezero.com/developers/forum",
  },
};

export const pageContent = {
  badge: "Community Forum",
  badgeIcon: "MessagesSquare" as IconName,
  title: "Community Forum",
  description:
    "Connect with other developers, ask questions, and share your knowledge in the fazeZERO community.",
  sections: [
    {
      title: "Join the Conversation",
      description:
        "Our community forum is the place to ask questions, share insights, and learn from other developers building on fazeZERO. Whether you're just getting started or you're a seasoned expert, everyone is welcome.",
      icon: "MessagesSquare" as IconName,
    },
    {
      title: "Forum Categories",
      description:
        "General Discussion: Chat about anything related to fazeZERO. Technical Support: Get help with integrations and troubleshooting. Feature Requests: Suggest new features and improvements. Show & Tell: Share what you're building with the community.",
      icon: "MessagesSquare" as IconName,
    },
  ],
};
