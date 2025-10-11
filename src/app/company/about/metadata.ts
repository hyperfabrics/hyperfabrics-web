import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | fazeZERO",
  description:
    "Learn about fazeZERO's mission to provide enterprise-grade blockchain infrastructure for digital assets. Discover our story, values, and commitment to innovation.",
  openGraph: {
    title: "About Us | fazeZERO",
    description: "Building the future of digital asset infrastructure.",
    url: "https://fazezero.com/company/about",
  },
};

export const pageContent = {
  badge: "About Us",
  badgeIcon: "Info",
  title: "About fazeZERO",
  description:
    "We're building the enterprise-grade infrastructure that powers the future of digital assets, enabling organizations to innovate with confidence.",
  sections: [
    {
      title: "Our Mission",
      content:
        "fazeZERO provides secure, scalable, and compliant blockchain infrastructure that empowers financial institutions, governments, and enterprises to build the next generation of digital asset solutions. From CBDCs to tokenized securities, we deliver the tools and expertise needed to transform traditional systems into modern, efficient, and transparent operations.",
    },
    {
      title: "Our Platform",
      content:
        "Built on breakthrough Multi-Party Computation (MPC) and Intel SGX technology, fazeZERO offers enterprise-grade security with 99.99% uptime. Our platform supports over 100 blockchains, provides 500+ APIs, and is trusted by leading organizations worldwide to custody billions in digital assets.",
    },
    {
      title: "Our Values",
      items: [
        {
          label: "Security First",
          description:
            "Protecting digital assets with industry-leading technology",
        },
        {
          label: "Innovation",
          description: "Continuously advancing blockchain infrastructure",
        },
        {
          label: "Transparency",
          description: "Building trust through openness and accountability",
        },
        {
          label: "Customer Success",
          description: "Your success is our success",
        },
      ],
    },
    {
      title: "Compliance & Certifications",
      content:
        "fazeZERO is certified with ISO 27001 and SOC 2 Type 2, ensuring the highest standards of information security and operational controls. We maintain comprehensive compliance frameworks aligned with global KYC/AML regulations and data privacy laws.",
    },
  ],
};
