"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function SupportPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      quickLinks={pageContent.quickLinks}
      sections={pageContent.sections}
    >
      <h2>Contact Support</h2>
      <p>
        For urgent technical issues, email us at{" "}
        <a
          href="mailto:support@hyperfabrics.com"
          className="text-indigo-400 hover:text-indigo-300"
        >
          support@hyperfabrics.com
        </a>
      </p>
    </ContentPage>
  );
}
