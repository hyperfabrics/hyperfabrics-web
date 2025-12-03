import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

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
  badgeIcon: "Info" as IconName,
  title: "About fazeZERO",
  description:
    "We're building the enterprise-grade infrastructure that powers the future of digital assets, enabling organizations to innovate with confidence.",
  sections: [
    {
      title: "Our Mission",
      description:
        "fazeZERO provides secure, scalable, and compliant blockchain infrastructure that empowers financial institutions, governments, and enterprises to build the next generation of digital asset solutions. From CBDCs to tokenized securities, we deliver the tools and expertise needed to transform traditional systems into modern, efficient, and transparent operations.",
      icon: "Box" as IconName,
    },
    {
      title: "Our Platform",
      description:
        "Built on breakthrough Multi-Party Computation (MPC) and Intel SGX technology, fazeZERO offers enterprise-grade security with 99.99% uptime. Our platform supports over 100 blockchains, provides 500+ APIs, and is trusted by leading organizations worldwide to custody billions in digital assets.",
      icon: "Server" as IconName,
    },
    {
      title: "Our Values",
      description:
        "Security First: Protecting digital assets with industry-leading technology. Innovation: Continuously advancing blockchain infrastructure. Transparency: Building trust through openness and accountability. Customer Success: Your success is our success.",
      icon: "Users" as IconName,
    },
    {
      title: "Compliance & Certifications",
      description:
        "fazeZERO is certified with ISO 27001 and SOC 2 Type 2, ensuring the highest standards of information security and operational controls. We maintain comprehensive compliance frameworks aligned with global KYC/AML regulations and data privacy laws.",
      icon: "ShieldCheck" as IconName,
    },
  ],
};
