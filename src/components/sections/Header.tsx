"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavItem } from "@/components/ui/NavItem";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const megaMenus = {
    platform: {
      categories: [
        {
          title: "INFRASTRUCTURE",
          items: [
            { label: "Tokenization Studio", href: "/platform/studio" },
            { label: "Compliance Engine", href: "/platform/compliance" },
            { label: "Payment Rails", href: "/platform/payments" },
            { label: "API Gateway", href: "/platform/api" },
          ],
        },
        {
          title: "SECURITY",
          items: [
            { label: "Multi-Party Computation", href: "/platform/mpc" },
            { label: "Hardware Security", href: "/platform/hsm" },
            { label: "Audit & Monitoring", href: "/platform/audit" },
            { label: "Compliance Controls", href: "/platform/controls" },
          ],
        },
      ],
    },
    solutions: {
      categories: [
        {
          title: "USE CASES",
          items: [
            { label: "Tokenized Assets", href: "/solutions/tokenization" },
            { label: "Stablecoins", href: "/solutions/stablecoins" },
            { label: "Payments & Settlement", href: "/solutions/payments" },
            { label: "Banking & Capital Markets", href: "/solutions/banking" },
          ],
        },
        {
          title: "BY INDUSTRY",
          items: [
            { label: "Financial Services", href: "/industries/financial" },
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "Supply Chain", href: "/industries/supply-chain" },
            { label: "Gaming & Entertainment", href: "/industries/gaming" },
          ],
        },
      ],
    },
    developers: {
      categories: [
        {
          title: "TOOLS",
          items: [
            { label: "Documentation", href: "/developers/docs" },
            { label: "API Reference", href: "/developers/api" },
            { label: "SDKs & Libraries", href: "/developers/sdks" },
            { label: "Changelog", href: "/developers/changelog" },
          ],
        },
        {
          title: "RESOURCES",
          items: [
            { label: "Tutorials", href: "/developers/tutorials" },
            { label: "Integration Guides", href: "/developers/guides" },
            { label: "Sample Projects", href: "/developers/samples" },
            { label: "Postman Collection", href: "/developers/postman" },
          ],
        },
        {
          title: "COMMUNITY",
          items: [
            { label: "GitHub", href: "https://github.com/fazezero" },
            { label: "Discord", href: "/community/discord" },
            { label: "Forum", href: "/community/forum" },
            { label: "Events", href: "/community/events" },
          ],
        },
        {
          title: "SUPPORT",
          items: [
            { label: "Contact Support", href: "/support/contact" },
            { label: "API Status", href: "https://status.fazezero.com" },
            { label: "FAQ", href: "/developers/faq" },
            { label: "Stack Overflow", href: "/community/stackoverflow" },
          ],
        },
      ],
    },
    resources: {
      categories: [
        {
          title: "LEARN",
          items: [
            { label: "Blog", href: "/resources/blog" },
            { label: "Case Studies", href: "/resources/case-studies" },
            { label: "Whitepapers", href: "/resources/whitepapers" },
            { label: "Research", href: "/resources/research" },
          ],
        },
        {
          title: "EVENTS",
          items: [
            { label: "Upcoming Webinars", href: "/events/webinars" },
            { label: "Conferences", href: "/events/conferences" },
            { label: "Meetups", href: "/events/meetups" },
            { label: "Past Events", href: "/events/archive" },
          ],
        },
        {
          title: "COMPANY",
          items: [
            { label: "About Us", href: "/company/about" },
            { label: "Careers", href: "/company/careers" },
            { label: "Press", href: "/company/press" },
            { label: "Contact Us", href: "/contact" },
          ],
        },
        {
          title: "LEGAL",
          items: [
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Cookie Policy", href: "/legal/cookies" },
            { label: "DPA", href: "/legal/dpa" },
          ],
        },
      ],
    },
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl transition-all duration-300`}
      style={{
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "var(--border)",
        backgroundColor: "var(--header-bg)",
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div
        className="w-full flex items-center"
        style={{
          height: "88px",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
          gap: "48px",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 z-50 flex-shrink-0">
          <div className="relative size-10 transition-all duration-300 hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="fazezero"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight transition-all duration-300 hover:text-[#375bd2]"
            style={{ color: "var(--text-primary)" }}
          >
            fazeZERO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 flex-1">
          {/* Platform Dropdown */}
          <div
            className="relative h-full"
            onMouseEnter={() => setActiveDropdown("platform")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavItem
              label="Platform"
              isActive={activeDropdown === "platform"}
            />

            {/* Platform Dropdown Menu */}
            {activeDropdown === "platform" && (
              <div
                className="absolute top-full left-0 mt-8 w-[95vw] max-w-[1400px] animate-slide-down z-50"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow: "0 12px 48px rgba(15, 23, 42, 0.15)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="p-16">
                  <div className="grid grid-cols-4 gap-16">
                    {megaMenus.platform.categories.map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <h3
                          className="text-sm font-bold tracking-widest uppercase mb-8"
                          style={{
                            color: "var(--accent)",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {category.title}
                        </h3>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Additional Platform Features Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        FEATURES
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/platform/analytics"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Real-time Analytics
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/platform/webhooks"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Webhooks & Events
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/platform/dashboard"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Management Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/platform/integrations"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Third-party Integrations
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Getting Started Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        GET STARTED
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/platform/quickstart"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Quick Start Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/platform/demo"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Live Demo
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/platform/sandbox"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Developer Sandbox
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Contact Sales
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative h-full"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavItem
              label="Solutions"
              isActive={activeDropdown === "solutions"}
            />

            {/* Solutions Dropdown Menu */}
            {activeDropdown === "solutions" && (
              <div
                className="absolute top-full left-0 mt-8 w-[95vw] max-w-[1400px] animate-slide-down z-50"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow: "0 12px 48px rgba(15, 23, 42, 0.15)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="p-16">
                  <div className="grid grid-cols-4 gap-16">
                    {megaMenus.solutions.categories.map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <h3
                          className="text-sm font-bold tracking-widest uppercase mb-8"
                          style={{
                            color: "var(--accent)",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {category.title}
                        </h3>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Benefits Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        BENEFITS
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/solutions/cost-reduction"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Cost Reduction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/efficiency"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Operational Efficiency
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/scalability"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Global Scalability
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/security"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Enhanced Security
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        RESOURCES
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/solutions/case-studies"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Success Stories
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/roi-calculator"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            ROI Calculator
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/implementation"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Implementation Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/consultation"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Free Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Developers Dropdown */}
          <div
            className="relative h-full"
            onMouseEnter={() => setActiveDropdown("developers")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavItem
              label="Developers"
              isActive={activeDropdown === "developers"}
            />

            {/* Developers Dropdown Menu */}
            {activeDropdown === "developers" && (
              <div
                className="absolute top-full left-0 mt-8 w-[95vw] max-w-[1400px] animate-slide-down z-50"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow: "0 12px 48px rgba(15, 23, 42, 0.15)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="p-16">
                  <div className="grid grid-cols-4 gap-16">
                    {megaMenus.developers.categories.map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <h3
                          className="text-sm font-bold tracking-widest uppercase mb-8"
                          style={{
                            color: "var(--accent)",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {category.title}
                        </h3>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Languages & SDKs Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        LANGUAGES
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/developers/javascript"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            JavaScript SDK
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/python"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Python SDK
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/java"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Java SDK
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/go"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Go SDK
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Support Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        SUPPORT
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/developers/slack"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Developer Slack
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/github"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            GitHub Repository
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/stackoverflow"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Stack Overflow
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/developers/office-hours"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Office Hours
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative h-full"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavItem
              label="Resources"
              isActive={activeDropdown === "resources"}
            />

            {/* Resources Dropdown Menu */}
            {activeDropdown === "resources" && (
              <div
                className="absolute top-full left-0 mt-8 w-[95vw] max-w-[1400px] animate-slide-down z-50"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow: "0 12px 48px rgba(15, 23, 42, 0.15)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="p-16">
                  <div className="grid grid-cols-4 gap-16">
                    {megaMenus.resources.categories.map((category, idx) => (
                      <div key={idx} className="space-y-6">
                        <h3
                          className="text-sm font-bold tracking-widest uppercase mb-8"
                          style={{
                            color: "var(--accent)",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {category.title}
                        </h3>
                        <ul className="space-y-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Events & Training Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        EVENTS
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/resources/webinars"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Upcoming Webinars
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/conferences"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Industry Conferences
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/training"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Training Programs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/resources/certification"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Certification Courses
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-6">
                      <h3
                        className="text-sm font-bold tracking-widest uppercase mb-8"
                        style={{
                          color: "var(--accent)",
                          letterSpacing: "0.15em",
                        }}
                      >
                        COMPANY
                      </h3>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/about"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/careers"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/press"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Press & Media
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/partners"
                            onClick={handleNavClick}
                            className="block py-3 px-4 text-base rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Partner Program
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Right Side: Search Icon + CTA */}
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <button
            className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Search"
          >
            <Search
              className="size-5"
              style={{ color: "var(--text-primary)" }}
            />
          </button>

          <ThemeToggle />

          <Link
            href="/contact"
            className="text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 border-2 hover:scale-105"
            style={{
              borderColor: "#375bd2",
              color: "#375bd2",
              backgroundColor: "transparent",
            }}
          >
            Start building
          </Link>
        </div>

        {/* Mobile Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-2 z-50 relative">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
              borderWidth: "1px",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={handleNavClick}
            style={{ marginTop: "72px" }}
          />

          {/* Menu Content */}
          <div
            className="lg:hidden fixed z-50 animate-in slide-in-from-right duration-300 flex flex-col"
            style={{
              backgroundColor: "var(--background)",
              paddingTop: "72px",
              height: "100vh",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end px-8 py-4">
              <button
                onClick={handleNavClick}
                className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
                style={{ color: "var(--text-primary)" }}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Nav Links - scrollable */}
            <div className="flex-1 overflow-y-auto pb-40 px-6">
              <div className="flex flex-col py-4">
                <Link
                  href="/platform"
                  onClick={handleNavClick}
                  className="flex items-center justify-between py-6 px-4 text-base font-medium transition-colors border-b"
                  style={{
                    color: "var(--text-primary)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  Platform
                  <ChevronDown
                    className="size-5 -rotate-90"
                    style={{ color: "var(--text-muted)" }}
                  />
                </Link>

                <Link
                  href="/solutions"
                  onClick={handleNavClick}
                  className="flex items-center justify-between py-6 px-4 text-base font-medium transition-colors border-b"
                  style={{
                    color: "var(--text-primary)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  Solutions
                  <ChevronDown
                    className="size-5 -rotate-90"
                    style={{ color: "var(--text-muted)" }}
                  />
                </Link>

                <Link
                  href="/developers"
                  onClick={handleNavClick}
                  className="flex items-center justify-between py-6 px-4 text-base font-medium transition-colors border-b"
                  style={{
                    color: "var(--text-primary)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  Developers
                  <ChevronDown
                    className="size-5 -rotate-90"
                    style={{ color: "var(--text-muted)" }}
                  />
                </Link>

                <Link
                  href="/resources"
                  onClick={handleNavClick}
                  className="flex items-center justify-between py-6 px-4 text-base font-medium transition-colors border-b"
                  style={{
                    color: "var(--text-primary)",
                    borderBottomColor: "var(--border)",
                  }}
                >
                  Resources
                  <ChevronDown
                    className="size-5 -rotate-90"
                    style={{ color: "var(--text-muted)" }}
                  />
                </Link>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div
              className="flex gap-0 border-t"
              style={{
                backgroundColor: "var(--background)",
                borderTopColor: "var(--border)",
              }}
            >
              <Link
                href="/experts"
                onClick={handleNavClick}
                className="flex-1 flex items-center justify-center text-base font-semibold py-5 transition-colors border-r"
                style={{
                  backgroundColor: "#375bd2",
                  color: "#ffffff",
                  borderRightColor: "var(--border)",
                }}
              >
                Talk to an expert
              </Link>

              <Link
                href="/contact"
                onClick={handleNavClick}
                className="flex-1 flex items-center justify-center text-base font-semibold py-5 transition-colors"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "var(--background)",
                }}
              >
                Start building
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
