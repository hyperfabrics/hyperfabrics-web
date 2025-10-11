"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function WebinarsPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
    />
  );
}
