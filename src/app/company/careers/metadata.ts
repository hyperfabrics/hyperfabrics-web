import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Careers | fazeZERO",
  description:
    "Join the fazeZERO team and help build the future of digital assets. Explore open positions in engineering, product, sales, and more.",
  openGraph: {
    title: "Careers | fazeZERO",
    description: "Join our team and build the future of digital assets.",
    url: "https://fazezero.com/company/careers",
  },
};

export const pageContent = {
  badge: "Careers",
  badgeIcon: "Briefcase" as IconName,
  title: "Join Our Team",
  description:
    "Help us build the enterprise infrastructure powering the future of digital assets. We're looking for talented individuals passionate about blockchain, security, and innovation.",
  sections: [
    {
      title: "Why fazeZERO?",
      description:
        "Impact: Work on infrastructure used by leading global organizations. Innovation: Solve challenging problems at the forefront of blockchain. Growth: Continuous learning and career development opportunities. Culture: Collaborative, mission-driven team environment.",
      icon: "Users" as IconName,
    },
    {
      title: "Open Positions",
      description:
        "We're growing our team across engineering, product, sales, marketing, and operations. Check back soon for open positions or reach out to learn about upcoming opportunities.",
      icon: "Briefcase" as IconName,
    },
  ],
};
