import { Metadata } from "next";
import { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "SDKs & Libraries | fazeZERO",
  description:
    "Official SDKs and libraries for JavaScript, Python, Java, Go, and Ruby. Integrate fazeZERO into your applications with type-safe interfaces and comprehensive documentation.",
  openGraph: {
    title: "SDKs & Libraries | fazeZERO",
    description:
      "Official SDKs for your favorite programming language. Build with type-safe interfaces and full IDE support.",
    url: "https://fazezero.com/developers/sdks",
  },
};

export const pageContent = {
  badge: "SDKs & Libraries",
  badgeIcon: "Package" as IconName,
  title: "SDKs & Libraries",
  description:
    "Official SDKs and libraries to integrate fazeZERO into your applications in your favorite programming language.",
  sdks: [
    {
      name: "JavaScript/TypeScript SDK",
      languages: ["Node.js", "Browser"],
      status: "Stable",
    },
    { name: "Python SDK", languages: ["Python 3.8+"], status: "Stable" },
    { name: "Java SDK", languages: ["Java 11+"], status: "Stable" },
    { name: "Go SDK", languages: ["Go 1.19+"], status: "Beta" },
    { name: "Ruby SDK", languages: ["Ruby 2.7+"], status: "Beta" },
  ],
  sections: [
    {
      title: "Features",
      description:
        "Type-safe interfaces: Full IDE support and autocompletion. Automatic retry logic: Built-in error handling and resilience. Authentication: Integrated key management and OAuth 2.0. Test coverage: Comprehensive test suites for reliability. Regular updates: Security patches and new features.",
      icon: "Package" as IconName,
    },
  ],
};
