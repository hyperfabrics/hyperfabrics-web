import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

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
  badgeIcon: "Newspaper" as IconName,
  title: "Press & Media",
  description:
    "The latest news, announcements, and media resources from fazeZERO. For press inquiries, contact our media relations team.",
  sections: [
    {
      title: "Recent News",
      description:
        "Stay updated on fazeZERO's latest partnerships, product launches, customer successes, and company milestones.",
      icon: "Rss" as IconName,
    },
    {
      title: "Media Resources",
      description:
        "Press Kit: Download logos, brand assets, and company information. Executive Bios: Leadership team backgrounds and photos. Product Images: Screenshots and platform visuals.",
      icon: "FileText" as IconName,
    },
  ],
};
