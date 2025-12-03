"use client";
import { ContentPage } from "@/components/ui";
import { pageContent } from "./metadata";

export default function SDKsPage() {
  return (
    <ContentPage
      badge={pageContent.badge}
      badgeIcon={pageContent.badgeIcon}
      title={pageContent.title}
      description={pageContent.description}
    >
      <h2>Available SDKs</h2>
      <div className="not-prose space-y-4 my-8">
        {pageContent.sdks.map((sdk) => (
          <div
            key={sdk.name}
            className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{sdk.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  sdk.status === "Stable"
                    ? "bg-green-500/10 text-green-400 ring-1 ring-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20"
                }`}
              >
                {sdk.status}
              </span>
            </div>
            <p className="text-white/60 mb-4">{sdk.languages.join(", ")}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                Documentation →
              </a>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>

      {pageContent.sections?.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}

      <h2>Installation</h2>
      <p>
        Each SDK can be installed via standard package managers. Visit the
        documentation for specific installation instructions and quickstart
        guides for your language of choice.
      </p>
    </ContentPage>
  );
}
