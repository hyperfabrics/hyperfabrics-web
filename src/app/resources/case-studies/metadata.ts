import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | fazeZERO",
  description:
    "Discover how leading organizations use fazeZERO to transform their digital asset operations. Read real-world success stories and implementation results.",
  openGraph: {
    title: "Case Studies | fazeZERO",
    description: "Real-world success stories from fazeZERO customers.",
    url: "https://fazezero.com/resources/case-studies",
  },
};

export const pageContent = {
  badge: "Case Studies",
  badgeIcon: "FileText",
  title: "Customer Success Stories",
  description:
    "See how leading organizations across industries are leveraging fazeZERO to transform their digital asset strategies and operations.",
  sections: [
    {
      title: "Featured Case Studies",
      content:
        "Explore detailed case studies showcasing how banks, fintechs, governments, and enterprises use fazeZERO to issue digital currencies, tokenize assets, and modernize payment infrastructure.",
    },
    {
      title: "Industries",
      items: [
        {
          label: "Financial Services",
          description: "Banks and fintechs scaling digital asset operations",
        },
        {
          label: "Central Banking",
          description: "CBDC pilots and production deployments",
        },
        {
          label: "Government",
          description: "Public sector transparency and efficiency",
        },
        {
          label: "Enterprise",
          description: "Supply chain and tokenization use cases",
        },
      ],
    },
  ],
};
