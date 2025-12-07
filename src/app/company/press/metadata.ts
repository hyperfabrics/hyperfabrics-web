import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Press & Media | HyperFabrics",
  description:
    "Latest news, press releases, and media resources from HyperFabrics. Download logos, access press kits, and contact our media team.",
  openGraph: {
    title: "Press & Media | HyperFabrics",
    description: "Latest news and press releases from HyperFabrics.",
    url: "https://HyperFabrics.com/company/press",
  },
};

export const pageContent = {
  badge: "Press & Media",
  badgeIcon: "Newspaper" as IconName,
  title: "Press & Media",
  description:
    "The latest news, announcements, and media resources from HyperFabrics. For press inquiries, contact our media relations team.",
  sections: [
    {
      title: "Recent News",
      description:
        "Stay updated on HyperFabrics's latest partnerships, product launches, customer successes, and company milestones.",
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
