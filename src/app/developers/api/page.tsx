"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function APIPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      quickLinks={pageContent.quickLinks}
      sections={pageContent.sections}
    >
      <h2>Getting Started</h2>
      <p>
        To start using our APIs, you will need to create an account and generate
        API keys from your dashboard. Visit our{" "}
        <a
          href="/developers/docs"
          className="text-indigo-400 hover:text-indigo-300"
        >
          documentation
        </a>{" "}
        for setup instructions.
      </p>
    </ContentPage>
  );
}
