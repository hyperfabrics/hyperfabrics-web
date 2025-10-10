"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
            { label: "Code Examples", href: "/developers/examples" },
          ],
        },
        {
          title: "RESOURCES",
          items: [
            { label: "Tutorials", href: "/developers/tutorials" },
            { label: "Integration Guides", href: "/developers/guides" },
            { label: "Sample Projects", href: "/developers/samples" },
            { label: "Community", href: "/developers/community" },
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
          title: "SUPPORT",
          items: [
            { label: "Help Center", href: "/support" },
            { label: "Contact Us", href: "/contact" },
            { label: "System Status", href: "/status" },
            { label: "FAQ", href: "/faq" },
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
        className="w-full flex items-center justify-between"
        style={{
          height: "72px",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 z-50 group flex-shrink-0"
        >
          <div
            className="grid size-8 place-items-center rounded-lg transition-all duration-300 group-hover:scale-105"
            style={{ backgroundColor: "#375bd2" }}
          >
            <span className="font-black text-white text-sm">Ø</span>
          </div>
          <span
            className="text-lg font-bold tracking-tight transition-all duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            fazezero
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 flex-1 ml-12">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("platform")}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
              style={{
                color:
                  activeDropdown === "platform"
                    ? "#375bd2"
                    : "var(--text-primary)",
              }}
            >
              Platform
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  activeDropdown === "platform" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
              style={{
                color:
                  activeDropdown === "solutions"
                    ? "#375bd2"
                    : "var(--text-primary)",
              }}
            >
              Solutions
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Developers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("developers")}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
              style={{
                color:
                  activeDropdown === "developers"
                    ? "#375bd2"
                    : "var(--text-primary)",
              }}
            >
              Developers
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  activeDropdown === "developers" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
              style={{
                color:
                  activeDropdown === "resources"
                    ? "#375bd2"
                    : "var(--text-primary)",
              }}
            >
              Resources
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  activeDropdown === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Desktop Right Side: Search Icon + CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <button
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
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
            className="text-sm font-medium px-5 py-2 rounded-md transition-colors border"
            style={{
              borderColor: "var(--text-primary)",
              color: "var(--text-primary)",
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

      {/* Mega Menu Dropdowns */}
      {activeDropdown && !isMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full shadow-2xl animate-slide-down"
          style={{
            backgroundColor: "var(--background)",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "var(--border)",
          }}
        >
          <div className="max-w-6xl mx-auto px-8 py-10">
            <div className="grid grid-cols-2 gap-16">
              {megaMenus[
                activeDropdown as keyof typeof megaMenus
              ].categories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3
                    className="text-xs font-bold tracking-wider uppercase mb-4"
                    style={{ color: "#6366f1" }}
                  >
                    {category.title}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          onClick={handleNavClick}
                          className="group flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-200"
                          style={{
                            color: "var(--text-primary)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--card-bg)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                          <ArrowRight
                            className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            style={{ color: "#6366f1" }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
