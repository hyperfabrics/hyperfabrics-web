import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/utils/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://fazezero.com"
  ),
  title: {
    default: "fazezero - Enterprise Blockchain Infrastructure",
    template: "%s | fazezero",
  },
  description:
    "Enterprise-grade blockchain infrastructure for regulated institutions. From tokenization and payments to identity and compliance.",
  keywords: [
    "blockchain infrastructure",
    "enterprise blockchain",
    "tokenization",
    "digital assets",
    "blockchain payments",
    "institutional DeFi",
    "compliance blockchain",
    "regulated blockchain",
    "Web3 infrastructure",
    "institutional Web3",
  ],
  authors: [{ name: "fazezero" }],
  creator: "fazezero",
  publisher: "fazezero",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "fazezero - Enterprise Blockchain Infrastructure",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions. From tokenization and payments to identity and compliance.",
    siteName: "fazezero",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "fazezero - Enterprise Blockchain Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "fazezero - Enterprise Blockchain Infrastructure",
    description:
      "Enterprise-grade blockchain infrastructure for regulated institutions. From tokenization and payments to identity and compliance.",
    images: ["/og/og-home.png"],
    creator: "@fazezero",
  },
  robots: {
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
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
