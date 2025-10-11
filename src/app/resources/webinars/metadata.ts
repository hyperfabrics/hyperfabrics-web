import { Metadata } from "next";

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
  badgeIcon: "PlaySquare",
  title: "Webinars & Virtual Events",
  description:
    "Watch on-demand webinars featuring deep dives into platform features, customer stories, and industry trends with fazeZERO experts.",
  sections: [
    {
      title: "Featured Webinars",
      content:
        "Access our library of recorded webinars covering technical topics, product demonstrations, customer success stories, and regulatory insights.",
    },
    {
      title: "Webinar Topics",
      items: [
        {
          label: "Product Demos",
          description: "Live demonstrations of platform capabilities",
        },
        {
          label: "Technical Deep Dives",
          description: "Architecture, security, and integration patterns",
        },
        {
          label: "Customer Panels",
          description: "Hear from organizations using fazeZERO",
        },
        {
          label: "Industry Insights",
          description: "Trends and regulatory updates",
        },
      ],
    },
  ],
};
