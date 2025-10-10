import { Section } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm text-white/60">
          © {new Date().getFullYear()} fazezero. All rights reserved.
        </span>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="#" className="hover:text-white">
            Security
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Status
          </a>
        </div>
      </Section>
    </footer>
  );
}
