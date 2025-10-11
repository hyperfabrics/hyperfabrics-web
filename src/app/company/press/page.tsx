"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function PressPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
    >
      <h2>Media Inquiries</h2>
      <p>
        For press inquiries, please contact{" "}
        <a
          href="mailto:press@fazezero.com"
          className="text-indigo-400 hover:text-indigo-300"
        >
          press@fazezero.com
        </a>
      </p>
    </ContentPage>
  );
}
