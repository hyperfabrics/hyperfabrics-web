import { Metadata } from "next";

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
  badgeIcon: "Briefcase",
  title: "Join Our Team",
  description:
    "Help us build the enterprise infrastructure powering the future of digital assets. We're looking for talented individuals passionate about blockchain, security, and innovation.",
  sections: [
    {
      title: "Why fazeZERO?",
      items: [
        {
          label: "Impact",
          description:
            "Work on infrastructure used by leading global organizations",
        },
        {
          label: "Innovation",
          description:
            "Solve challenging problems at the forefront of blockchain",
        },
        {
          label: "Growth",
          description:
            "Continuous learning and career development opportunities",
        },
        {
          label: "Culture",
          description: "Collaborative, mission-driven team environment",
        },
      ],
    },
    {
      title: "Open Positions",
      content:
        "We're growing our team across engineering, product, sales, marketing, and operations. Check back soon for open positions or reach out to learn about upcoming opportunities.",
    },
  ],
};
