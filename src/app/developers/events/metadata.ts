import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Hackathons | fazeZERO",
  description:
    "Join fazeZERO at conferences, workshops, and hackathons. Learn about upcoming events and opportunities to connect with our team.",
  openGraph: {
    title: "Events & Hackathons | fazeZERO",
    description: "Upcoming developer events, workshops, and hackathons.",
    url: "https://fazezero.com/developers/events",
  },
};

export const pageContent = {
  badge: "Events & Hackathons",
  badgeIcon: "Calendar",
  title: "Events & Hackathons",
  description:
    "Join us at conferences, workshops, and hackathons. Connect with the fazeZERO team and other developers building the future of digital assets.",
  sections: [
    {
      title: "Upcoming Events",
      content:
        "Stay tuned for announcements about upcoming conferences, workshops, and hackathons where you can meet the fazeZERO team and learn about our latest developments.",
    },
    {
      title: "Event Types",
      items: [
        {
          label: "Conferences",
          description: "Meet us at major blockchain and fintech conferences",
        },
        {
          label: "Workshops",
          description: "Hands-on sessions to learn fazeZERO development",
        },
        {
          label: "Hackathons",
          description: "Build projects and compete for prizes",
        },
        {
          label: "Webinars",
          description: "Virtual sessions on technical topics",
        },
      ],
    },
  ],
};
