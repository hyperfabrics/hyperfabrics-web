"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function DocsPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon="BookOpen"
      title={pageContent.title}
      description={pageContent.description}
      quickLinks={pageContent.quickLinks}
      sections={pageContent.sections}
    >
      <h2>Support</h2>
      <p>
        Need help? Our support team is here to assist you. Visit our{" "}
        <a
          href="/developers/support"
          className="text-indigo-400 hover:text-indigo-300"
        >
          support page
        </a>{" "}
        or join our{" "}
        <a
          href="/developers/discord"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Discord community
        </a>
        .
      </p>
    </ContentPage>
  );
}
