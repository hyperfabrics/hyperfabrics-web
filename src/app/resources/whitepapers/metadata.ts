import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Whitepapers | fazeZERO",
  description:
    "Download in-depth whitepapers on blockchain technology, digital assets, CBDCs, and financial innovation. Research and insights from fazeZERO experts.",
  openGraph: {
    title: "Whitepapers | fazeZERO",
    description:
      "In-depth research and analysis on blockchain and digital assets.",
    url: "https://fazezero.com/resources/whitepapers",
  },
};

export const pageContent = {
  badge: "Whitepapers",
  badgeIcon: "File" as IconName,
  title: "Whitepapers & Research",
  description:
    "Download comprehensive whitepapers and research reports on blockchain technology, digital asset infrastructure, and industry trends.",
  sections: [
    {
      title: "Latest Research",
      description:
        "Access in-depth analysis and technical documentation covering topics like CBDC architecture, tokenization frameworks, compliance models, and enterprise blockchain adoption.",
      icon: "File" as IconName,
    },
    {
      title: "Topics",
      description:
        "CBDC Infrastructure: Design patterns for central bank digital currencies. Asset Tokenization: Technical and regulatory frameworks for RWAs. Enterprise Security: MPC, SGX, and custody best practices. Regulatory Compliance: KYC/AML and data privacy in blockchain.",
      icon: "FileText" as IconName,
    },
  ],
};
