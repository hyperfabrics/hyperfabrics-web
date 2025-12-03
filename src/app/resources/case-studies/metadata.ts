import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

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
  badgeIcon: "FileText" as IconName,
  title: "Customer Success Stories",
  description:
    "See how leading organizations across industries are leveraging fazeZERO to transform their digital asset strategies and operations.",
  sections: [
    {
      title: "Featured Case Studies",
      description:
        "Explore detailed case studies showcasing how banks, fintechs, governments, and enterprises use fazeZERO to issue digital currencies, tokenize assets, and modernize payment infrastructure.",
      icon: "FileText" as IconName,
    },
    {
      title: "Industries",
      description:
        "Financial Services: Banks and fintechs scaling digital asset operations. Central Banking: CBDC pilots and production deployments. Government: Public sector transparency and efficiency. Enterprise: Supply chain and tokenization use cases.",
      icon: "Briefcase" as IconName,
    },
  ],
};
