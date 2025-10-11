import { Metadata } from "next";

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
  badgeIcon: "File",
  title: "Whitepapers & Research",
  description:
    "Download comprehensive whitepapers and research reports on blockchain technology, digital asset infrastructure, and industry trends.",
  sections: [
    {
      title: "Latest Research",
      content:
        "Access in-depth analysis and technical documentation covering topics like CBDC architecture, tokenization frameworks, compliance models, and enterprise blockchain adoption.",
    },
    {
      title: "Topics",
      items: [
        {
          label: "CBDC Infrastructure",
          description: "Design patterns for central bank digital currencies",
        },
        {
          label: "Asset Tokenization",
          description: "Technical and regulatory frameworks for RWAs",
        },
        {
          label: "Enterprise Security",
          description: "MPC, SGX, and custody best practices",
        },
        {
          label: "Regulatory Compliance",
          description: "KYC/AML and data privacy in blockchain",
        },
      ],
    },
  ],
};
