"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function CareersPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
    >
      <h2>Get in Touch</h2>
      <p>
        Interested in joining fazeZERO? Send your resume to{" "}
        <a
          href="mailto:careers@fazezero.com"
          className="text-indigo-400 hover:text-indigo-300"
        >
          careers@fazezero.com
        </a>
      </p>
    </ContentPage>
  );
}
