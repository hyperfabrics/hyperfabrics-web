export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  canonical?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.png",
  ogType = "website",
  noindex = false,
  canonical,
}: SEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hyperfabrics.com";

  return {
    title,
    description,
    keywords,
    ...(canonical && { alternates: { canonical } }),
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      type: ogType,
      url: canonical || baseUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "HyperFabrics",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@hyperfabrics",
    },
  };
}
