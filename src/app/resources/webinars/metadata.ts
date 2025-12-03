import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Webinars | fazeZERO",
  description:
    "Watch on-demand webinars and virtual events featuring fazeZERO experts. Learn about platform features, industry trends, and best practices.",
  openGraph: {
    title: "Webinars | fazeZERO",
    description: "On-demand webinars and virtual events from fazeZERO.",
    url: "https://fazezero.com/resources/webinars",
  },
};

export const pageContent = {
  badge: "Webinars",
  badgeIcon: "PlaySquare" as IconName,
  title: "Webinars & Virtual Events",
  description:
    "Watch on-demand webinars featuring deep dives into platform features, customer stories, and industry trends with fazeZERO experts.",
  sections: [
    {
      title: "Featured Webinars",
      description:
        "Access our library of recorded webinars covering technical topics, product demonstrations, customer success stories, and regulatory insights.",
      icon: "PlaySquare" as IconName,
    },
    {
      title: "Webinar Topics",
      description:
        "Product Demos: Live demonstrations of platform capabilities. Technical Deep Dives: Architecture, security, and integration patterns. Customer Panels: Hear from organizations using fazeZERO. Industry Insights: Trends and regulatory updates.",
      icon: "PlaySquare" as IconName,
    },
  ],
};
