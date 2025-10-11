"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function TutorialsPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      quickLinks={pageContent.quickLinks}
      sections={pageContent.sections}
    />
  );
}
