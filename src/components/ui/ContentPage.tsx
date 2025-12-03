"use client";
import { Header, CTA, Footer } from "@/components/sections";
import { Section, Button, Breadcrumbs } from "@/components/ui";
import Icon, { IconName } from "./Icon";
import Link from "next/link";
import { ReactNode } from "react";

interface QuickLink {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

interface ContentSection {
  title: string;
  description: string;
  icon: IconName;
}

interface StrategicCTA {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

interface ContentPageProps {
  badge: string;
  badgeIcon?: IconName;
  title: string;
  description: string;
  quickLinks?: QuickLink[];
  sections?: ContentSection[];
  strategicCTA?: StrategicCTA;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children?: ReactNode;
}

export function ContentPage({
  badge,
  badgeIcon = "BookOpen",
  title,
  description,
  quickLinks,
  sections,
  strategicCTA,
  breadcrumbs,
  children,
}: ContentPageProps) {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Animated background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(ellipse at top, var(--gradient-from), var(--gradient-to))`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] blur-3xl opacity-50 dark:opacity-100 transition-opacity animate-pulse-slow"
        style={{
          background: `linear-gradient(to bottom, var(--gradient-from), transparent)`,
        }}
      />

      <Header />

      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} />
          )}

          {/* Hero Section with Badge */}
          <div className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 ring-1 ring-indigo-500/20 mb-6 animate-fade-in-up backdrop-blur-sm hover:ring-indigo-500/40 transition-all duration-300">
              <Icon
                name={badgeIcon}
                className="w-4 h-4 text-indigo-400 animate-pulse-subtle"
              />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                {badge}
              </span>
            </div>

            {/* Title with gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-100 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed animate-fade-in-up animation-delay-200">
              {description}
            </p>
          </div>

          {/* Quick Links - Clean Cards Grid */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/5 hover:ring-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative mb-3 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon
                      name={link.icon}
                      className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-base font-semibold mb-1.5 group-hover:text-indigo-300 transition-colors">
                    {link.title}
                  </h3>
                  <p className="relative text-sm text-white/50 leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* Feature Sections - Clean Cards */}
          {sections && sections.length > 0 && (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="group relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/5 hover:ring-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon
                      name={section.icon}
                      className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm text-white/60 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Custom children content */}
          {children && (
            <div className="mt-12 prose prose-invert prose-lg max-w-none animate-fade-in-up animation-delay-700">
              {children}
            </div>
          )}

          {/* Strategic CTA Section - Request Demo / Contact Sales */}
          {strategicCTA && (
            <div className="mt-20 sm:mt-24 lg:mt-32">
              <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" />

                {/* Content */}
                <div className="relative text-center max-w-3xl mx-auto space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    {strategicCTA.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                    {strategicCTA.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                      href={strategicCTA.primaryButton.href}
                      variant="primary"
                      size="lg"
                    >
                      {strategicCTA.primaryButton.text}
                    </Button>
                    {strategicCTA.secondaryButton && (
                      <Button
                        href={strategicCTA.secondaryButton.href}
                        variant="secondary"
                        size="lg"
                      >
                        {strategicCTA.secondaryButton.text}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      <CTA />
      <Footer />
    </div>
  );
}
