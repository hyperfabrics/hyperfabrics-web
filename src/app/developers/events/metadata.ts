import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Events & Hackathons | HyperFabrics",
  description:
    "Join HyperFabrics at conferences, workshops, and hackathons. Learn about upcoming events and opportunities to connect with our team.",
  openGraph: {
    title: "Events & Hackathons | HyperFabrics",
    description: "Upcoming developer events, workshops, and hackathons.",
    url: "https://HyperFabrics.com/developers/events",
  },
};

export const pageContent = {
  badge: "Events & Hackathons",
  badgeIcon: "Calendar" as IconName,
  title: "Events & Hackathons",
  description:
    "Join us at conferences, workshops, and hackathons. Connect with the HyperFabrics team and other developers building the future of digital assets.",
  sections: [
    {
      title: "Upcoming Events",
      description:
        "Stay tuned for announcements about upcoming conferences, workshops, and hackathons where you can meet the HyperFabrics team and learn about our latest developments.",
      icon: "Calendar" as IconName,
    },
    {
      title: "Event Types",
      description:
        "Conferences: Meet us at major blockchain and fintech conferences. Workshops: Hands-on sessions to learn HyperFabrics development. Hackathons: Build projects and compete for prizes. Webinars: Virtual sessions on technical topics.",
      icon: "Calendar" as IconName,
    },
  ],
};
