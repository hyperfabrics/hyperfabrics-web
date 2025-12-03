import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Changelog | fazeZERO",
  description:
    "Stay up-to-date with the latest platform updates, new features, bug fixes, and API changes to the fazeZERO platform.",
  openGraph: {
    title: "Changelog | fazeZERO",
    description: "Latest platform updates and release notes.",
    url: "https://fazezero.com/developers/changelog",
  },
};

export const pageContent = {
  badge: "Changelog",
  badgeIcon: "FileText" as IconName,
  title: "Changelog",
  description:
    "Stay informed about the latest updates, new features, and improvements to the fazeZERO platform.",
  sections: [
    {
      title: "Recent Updates",
      description:
        "Track all changes to the fazeZERO platform including new features, API updates, bug fixes, and performance improvements. Subscribe to receive notifications about important updates.",
      icon: "FileText" as IconName,
    },
  ],
};
