"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
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
          paddingLeft: "32px",
          paddingRight: "32px",
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
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
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
            
            {/* Platform Dropdown Menu */}
            {activeDropdown === "platform" && (
              <div
                className="absolute top-full left-0 mt-1 w-96 animate-slide-down z-50"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
                }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {megaMenus.platform.categories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-2 px-3 text-sm rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {item.label}
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
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
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
            
            {/* Solutions Dropdown Menu */}
            {activeDropdown === "solutions" && (
              <div
                className="absolute top-full left-0 mt-1 w-96 animate-slide-down z-50"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
                }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {megaMenus.solutions.categories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-2 px-3 text-sm rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {item.label}
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
          </div>

          {/* Developers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("developers")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
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
            
            {/* Developers Dropdown Menu */}
            {activeDropdown === "developers" && (
              <div
                className="absolute top-full left-0 mt-1 w-96 animate-slide-down z-50"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
                }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {megaMenus.developers.categories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-2 px-3 text-sm rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {item.label}
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
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
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
            
            {/* Resources Dropdown Menu */}
            {activeDropdown === "resources" && (
              <div
                className="absolute top-full left-0 mt-1 w-96 animate-slide-down z-50"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
                }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {megaMenus.resources.categories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className="block py-2 px-3 text-sm rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {item.label}
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
