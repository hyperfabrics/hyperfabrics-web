import { Header, CTA, Footer } from "@/components/sections";
import { Section } from "@/components/ui";
import {
  BookOpen,
  Code,
  Terminal,
  Zap,
  Package,
  PlaySquare,
  MessagesSquare,
  MessageCircle,
  Calendar,
  Rss,
  LifeBuoy,
  Server,
  FileText,
  Check,
  Lock,
  Globe,
} from "lucide-react";
import { ReactNode } from "react";

const iconMap = {
  BookOpen,
  Code,
  Terminal,
  Zap,
  Package,
  PlaySquare,
  MessagesSquare,
  MessageCircle,
  Calendar,
  Rss,
  LifeBuoy,
  Server,
  FileText,
  Check,
  Lock,
  Globe,
};

interface QuickLink {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface ContentSection {
  title: string;
  content?: string;
  items?: Array<{
    label: string;
    description: string;
  }>;
}

interface ContentPageProps {
  badge: string;
  badgeIcon?: string;
  title: string;
  description: string;
  quickLinks?: QuickLink[];
  sections?: ContentSection[];
  children?: ReactNode;
}

export function ContentPage({
  badge,
  badgeIcon = "BookOpen",
  title,
  description,
  quickLinks,
  sections,
  children,
}: ContentPageProps) {
  const BadgeIcon = iconMap[badgeIcon as keyof typeof iconMap] || BookOpen;

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100"
        style={{
          background: `radial-gradient(ellipse at top, var(--gradient-from), var(--gradient-to))`,
        }}
      />

      <Header />
      <Section className="py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20 mb-6">
              <BadgeIcon className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                {badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/60">{description}</p>
          </div>

          {quickLinks && quickLinks.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {quickLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Code;
                return (
                  <div
                    key={link.title}
                    className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.07] transition-colors"
                  >
                    <Icon className="w-8 h-8 text-indigo-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                    <p className="text-white/60 mb-4">{link.description}</p>
                    <a
                      href={link.href}
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      Learn more →
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {sections && sections.length > 0 && (
            <div className="prose prose-invert max-w-none">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  {section.content && <p>{section.content}</p>}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <strong>{item.label}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {children && (
            <div className="prose prose-invert max-w-none">{children}</div>
          )}
        </div>
      </Section>
      <CTA />
      <Footer />
    </div>
  );
}
