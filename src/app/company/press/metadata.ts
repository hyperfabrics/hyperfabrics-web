import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media | fazeZERO",
  description:
    "Latest news, press releases, and media resources from fazeZERO. Download logos, access press kits, and contact our media team.",
  openGraph: {
    title: "Press & Media | fazeZERO",
    description: "Latest news and press releases from fazeZERO.",
    url: "https://fazezero.com/company/press",
  },
};

export const pageContent = {
  badge: "Press & Media",
  badgeIcon: "Newspaper",
  title: "Press & Media",
  description:
    "The latest news, announcements, and media resources from fazeZERO. For press inquiries, contact our media relations team.",
  sections: [
    {
      title: "Recent News",
      content:
        "Stay updated on fazeZERO's latest partnerships, product launches, customer successes, and company milestones.",
    },
    {
      title: "Media Resources",
      items: [
        {
          label: "Press Kit",
          description: "Download logos, brand assets, and company information",
        },
        {
          label: "Executive Bios",
          description: "Leadership team backgrounds and photos",
        },
        {
          label: "Product Images",
          description: "Screenshots and platform visuals",
        },
      ],
    },
  ],
};
