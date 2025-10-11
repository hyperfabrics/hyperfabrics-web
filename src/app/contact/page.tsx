"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function ContactPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
    >
      <h2>Schedule a Demo</h2>
      <p>
        Ready to see fazeZERO in action? Book a personalized demo with our team
        to learn how our platform can transform your digital asset operations.
      </p>
      <div className="not-prose my-8">
        <a
          href="mailto:sales@fazezero.com"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
        >
          Request a Demo →
        </a>
      </div>
    </ContentPage>
  );
}
