import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Blog | fazeZERO",
  description:
    "Technical articles, tutorials, and updates from the fazeZERO engineering team. Learn about new features, best practices, and platform updates.",
  openGraph: {
    title: "Developer Blog | fazeZERO",
    description: "Technical articles and updates from our engineering team.",
    url: "https://fazezero.com/developers/blog",
  },
};

export const pageContent = {
  badge: "Developer Blog",
  badgeIcon: "Rss",
  title: "Developer Blog",
  description:
    "Technical articles, tutorials, and platform updates from the fazeZERO engineering team.",
  sections: [
    {
      title: "Latest from Our Team",
      content:
        "Read in-depth technical articles, learn about new features and updates, and discover best practices from the engineers building fazeZERO.",
    },
  ],
};
