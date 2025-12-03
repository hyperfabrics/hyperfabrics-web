"use client";
import { ContentPage } from "@/components/ui";
import { ContactForm } from "@/components/ui/ContactForm";
import { pageContent } from "./metadata";

export default function ContactPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
      sections={pageContent.sections}
      breadcrumbs={[{ label: "Contact" }]}
    >
      <div className="mt-12">
        <ContactForm />
      </div>
    </ContentPage>
  );
}
