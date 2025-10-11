export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "fazezero",
    url: "https://fazezero.com",
    logo: "https://fazezero.com/images/logo_blue.png",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions. From tokenization and payments to identity and compliance.",
    sameAs: [
      "https://twitter.com/fazezero",
      "https://linkedin.com/company/fazezero",
      "https://github.com/fazezero",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      url: "https://fazezero.com/contact",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "fazezero",
    url: "https://fazezero.com",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions.",
    publisher: {
      "@type": "Organization",
      name: "fazezero",
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
    name: "fazezero Platform",
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
