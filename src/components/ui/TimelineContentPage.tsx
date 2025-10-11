"use client";
import { Header, CTA, Footer } from "@/components/sections";
import { Section, Button } from "@/components/ui";
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

interface TimelineContentPageProps {
  badge: string;
  badgeIcon?: IconName;
  title: string;
  description: string;
  quickLinks?: QuickLink[];
  sections?: ContentSection[];
  strategicCTA?: StrategicCTA;
  children?: ReactNode;
}

export function TimelineContentPage({
  badge,
  badgeIcon = "BookOpen",
  title,
  description,
  quickLinks,
  sections,
  strategicCTA,
  children,
}: TimelineContentPageProps) {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Animated background with flowing gradient */}
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
          {/* Hero Section */}
          <div className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto">
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

          {/* Quick Links - Horizontal Scroll on Mobile */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="mb-20 sm:mb-24">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Quick Access
              </h2>
              <div className="relative">
                {/* Horizontal scrollable container */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="group relative flex-shrink-0 w-[280px] sm:w-auto p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md ring-1 ring-white/10 hover:ring-indigo-500/50 hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02] snap-start animate-fade-in-up"
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Icon
                          name={link.icon}
                          className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                        />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Timeline Flow Sections */}
          {sections && sections.length > 0 && (
            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Timeline Line (hidden on mobile) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50 transform -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                {sections.map((section, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={section.title}
                      className={`relative flex flex-col lg:flex-row items-center gap-8 animate-fade-in-up`}
                      style={{ animationDelay: `${500 + index * 150}ms` }}
                    >
                      {/* Left Content (Desktop) */}
                      {isEven ? (
                        <>
                          {/* Content on Left */}
                          <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                            <div className="group p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/10 hover:ring-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500">
                              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                                {section.title}
                              </h3>
                              <p className="text-white/70 leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                          </div>

                          {/* Center Icon Node */}
                          <div className="flex-shrink-0 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-4 ring-indigo-500/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 backdrop-blur-sm">
                              <Icon
                                name={section.icon}
                                className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                              />
                            </div>
                            {/* Connecting Dot Pulse */}
                            <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 animate-ping opacity-75" />
                          </div>

                          {/* Right Space (Desktop) */}
                          <div className="hidden lg:block lg:w-1/2" />
                        </>
                      ) : (
                        <>
                          {/* Left Space (Desktop) */}
                          <div className="hidden lg:block lg:w-1/2" />

                          {/* Center Icon Node */}
                          <div className="flex-shrink-0 relative z-10 lg:order-first">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-4 ring-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm">
                              <Icon
                                name={section.icon}
                                className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors"
                              />
                            </div>
                            {/* Connecting Dot Pulse */}
                            <div className="absolute inset-0 rounded-2xl bg-purple-500/20 animate-ping opacity-75" />
                          </div>

                          {/* Content on Right */}
                          <div className="lg:w-1/2 lg:pl-12">
                            <div className="group p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/10 hover:ring-purple-500/30 hover:bg-white/[0.04] transition-all duration-500">
                              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                                {section.title}
                              </h3>
                              <p className="text-white/70 leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* End Timeline Marker */}
              <div className="mt-16 flex justify-center animate-fade-in-up animation-delay-700">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 ring-4 ring-white/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 animate-pulse-subtle" />
                </div>
              </div>
            </div>
          )}

          {/* Custom children content */}
          {children && (
            <div className="mt-16 prose prose-invert prose-lg max-w-none animate-fade-in-up animation-delay-700">
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
