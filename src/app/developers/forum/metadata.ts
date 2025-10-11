import { Metadata } from "next";

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
  badgeIcon: "MessagesSquare",
  title: "Community Forum",
  description:
    "Connect with other developers, ask questions, and share your knowledge in the fazeZERO community.",
  sections: [
    {
      title: "Join the Conversation",
      content:
        "Our community forum is the place to ask questions, share insights, and learn from other developers building on fazeZERO. Whether you're just getting started or you're a seasoned expert, everyone is welcome.",
    },
    {
      title: "Forum Categories",
      items: [
        {
          label: "General Discussion",
          description: "Chat about anything related to fazeZERO",
        },
        {
          label: "Technical Support",
          description: "Get help with integrations and troubleshooting",
        },
        {
          label: "Feature Requests",
          description: "Suggest new features and improvements",
        },
        {
          label: "Show & Tell",
          description: "Share what you're building with the community",
        },
      ],
    },
  ],
};
