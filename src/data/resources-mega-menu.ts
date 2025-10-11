import { MegaMenuColumn } from "@/types/navigation";

export const resourcesMegaMenu: MegaMenuColumn[] = [
  {
    sections: [
      {
        title: "LEARN",
        items: [
          {
            label: "Blog",
            href: "/resources/blog",
            description: "Read the latest articles from our team.",
            icon: "Rss",
          },
          {
            label: "Case Studies",
            href: "/resources/case-studies",
            description: "See how our customers are succeeding.",
            icon: "FileText",
          },
          {
            label: "Whitepapers",
            href: "/resources/whitepapers",
            description: "In-depth reports on industry trends.",
            icon: "File",
          },
          {
            label: "Webinars",
            href: "/resources/webinars",
            description: "Watch on-demand webinars and tutorials.",
            icon: "Youtube",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "COMPANY",
        items: [
          {
            label: "About Us",
            href: "/company/about",
            description: "Learn more about our mission and team.",
            icon: "Info",
          },
          {
            label: "Careers",
            href: "/company/careers",
            description: "Join our team and help build the future.",
            icon: "Briefcase",
          },
          {
            label: "Press",
            href: "/company/press",
            description: "Read our latest news and announcements.",
            icon: "Newspaper",
          },
          {
            label: "Contact Us",
            href: "/contact",
            description: "Get in touch with our team.",
            icon: "Phone",
          },
        ],
      },
    ],
  },
];
