import { Section } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm text-white/60">
          © {new Date().getFullYear()} fazezero. All rights reserved.
        </span>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="/compliance" className="hover:text-white transition-colors">
            Security
          </a>
          <a href="/company/privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/developers/status" className="hover:text-white transition-colors">
            Status
          </a>
        </div>
      </Section>
    </footer>
  );
}
