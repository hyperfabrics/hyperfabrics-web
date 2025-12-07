import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blog | HyperFabrics",
  description:
    "Read the latest insights, industry trends, and product updates from HyperFabrics. Learn about blockchain technology, digital assets, and financial innovation.",
  openGraph: {
    title: "Blog | HyperFabrics",
    description: "Insights and updates from the HyperFabrics team.",
    url: "https://HyperFabrics.com/resources/blog",
  },
};

export const pageContent = {
  badge: "Blog",
  badgeIcon: "Rss" as IconName,
  title: "HyperFabrics Blog",
  description:
    "Insights, industry trends, and updates from the HyperFabrics team. Stay informed about the latest developments in blockchain and digital assets.",
  sections: [
    {
      title: "Latest Articles",
      description:
        "Explore our latest articles on blockchain technology, digital asset innovation, regulatory developments, and how organizations are transforming with HyperFabrics.",
      icon: "Rss" as IconName,
    },
  ],
};
