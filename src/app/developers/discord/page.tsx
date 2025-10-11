"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function DiscordPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
    >
      <div className="not-prose my-8">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
        >
          Join Discord Server →
        </a>
      </div>
    </ContentPage>
  );
}
