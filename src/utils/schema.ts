export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HyperFabrics",
    url: "https://hyperfabrics.com",
    logo: "https://hyperfabrics.com/images/logo.png",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions. From tokenization and payments to identity and compliance.",
    sameAs: [
      "https://twitter.com/hyperfabrics",
      "https://linkedin.com/company/hyperfabrics",
      "https://github.com/hyperfabrics",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      url: "https://hyperfabrics.com/contact",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HyperFabrics",
    url: "https://hyperfabrics.com",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions.",
    publisher: {
      "@type": "Organization",
      name: "HyperFabrics",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateSoftwareProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HyperFabrics Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Enterprise blockchain infrastructure platform for tokenization, payments, identity, and compliance.",
  };
}
