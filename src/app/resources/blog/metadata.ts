import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blog | fazeZERO",
  description:
    "Read the latest insights, industry trends, and product updates from fazeZERO. Learn about blockchain technology, digital assets, and financial innovation.",
  openGraph: {
    title: "Blog | fazeZERO",
    description: "Insights and updates from the fazeZERO team.",
    url: "https://fazezero.com/resources/blog",
  },
};

export const pageContent = {
  badge: "Blog",
  badgeIcon: "Rss" as IconName,
  title: "fazeZERO Blog",
  description:
    "Insights, industry trends, and updates from the fazeZERO team. Stay informed about the latest developments in blockchain and digital assets.",
  sections: [
    {
      title: "Latest Articles",
      description:
        "Explore our latest articles on blockchain technology, digital asset innovation, regulatory developments, and how organizations are transforming with fazeZERO.",
      icon: "Rss" as IconName,
    },
  ],
};
