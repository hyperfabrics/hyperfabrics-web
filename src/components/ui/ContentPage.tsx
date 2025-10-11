"use client";
import { Header, CTA, Footer } from "@/components/sections";
import { Section } from "@/components/ui";
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

interface ContentPageProps {
  badge: string;
  badgeIcon?: IconName;
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

          {/* Quick Links - Glassmorphism Cards Grid */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16 sm:mb-20">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md ring-1 ring-white/10 hover:ring-indigo-500/50 hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                  {/* Icon with animation */}
                  <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon
                      name={link.icon}
                      className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                    {link.title}
                  </h3>
                  <p className="relative text-sm text-white/60 leading-relaxed mb-4">
                    {link.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="relative flex items-center text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Learn more
                    </span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Feature Sections - Large Cards */}
          {sections && sections.length > 0 && (
            <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="group relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/10 hover:ring-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                  {/* Large icon */}
                  <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Icon
                      name={section.icon}
                      className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl sm:text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-white/70 leading-relaxed">
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
        </div>
      </Section>

      <CTA />
      <Footer />
    </div>
  );
}
