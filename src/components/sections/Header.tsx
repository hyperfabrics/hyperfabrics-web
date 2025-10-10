"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button, Section } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaMenus = {
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
          title: "DEVELOPER TOOLS",
          items: [
            { label: "Documentation", href: "/developers/docs" },
            { label: "API Reference", href: "/developers/api" },
            { label: "SDKs & Libraries", href: "/developers/sdks" },
            { label: "Code Examples", href: "/developers/examples" },
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
            { label: "Guides", href: "/resources/guides" },
          ],
        },
        {
          title: "SUPPORT",
          items: [
            { label: "Help Center", href: "/support" },
            { label: "Community", href: "/community" },
            { label: "Contact Us", href: "/contact" },
            { label: "System Status", href: "/status" },
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
      className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
        backgroundColor: scrolled ? 'var(--background)' : 'rgba(var(--background-rgb), 0.8)',
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Section className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="grid size-9 place-items-center rounded-xl transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}>
            <span className="font-black text-white">Ø</span>
          </div>
          <span className="text-xl font-bold tracking-tight transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
            fazezero
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
              style={{ color: activeDropdown === 'solutions' ? '#6366f1' : 'var(--text-secondary)' }}
            >
              Solutions
              <ChevronDown className={`size-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('platform')}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
              style={{ color: activeDropdown === 'platform' ? '#6366f1' : 'var(--text-secondary)' }}
            >
              Platform
              <ChevronDown className={`size-4 transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Developers Link */}
          <Link
            href="/developers"
            className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:text-indigo-500"
            style={{ color: 'var(--text-secondary)' }}
          >
            Developers
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
              style={{ color: activeDropdown === 'resources' ? '#6366f1' : 'var(--text-secondary)' }}
            >
              Resources
              <ChevronDown className={`size-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button 
            href="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start building
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Mobile Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', borderWidth: '1px' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Section>

            {/* Mega Menu Dropdowns */}
      {activeDropdown && (
        <div 
          className="absolute left-0 right-0 top-full shadow-2xl animate-slide-down"
          style={{ 
            backgroundColor: 'var(--background)',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'var(--border)',
          }}
        >
          <div className="max-w-6xl mx-auto px-8 py-10">
            <div className="grid grid-cols-2 gap-16">
              {megaMenus[activeDropdown as keyof typeof megaMenus].categories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 
                    className="text-xs font-bold tracking-wider uppercase mb-4"
                    style={{ color: '#6366f1' }}
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
                            color: 'var(--text-primary)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                          <ArrowRight 
                            className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                            style={{ color: '#6366f1' }} 
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
        <div 
          className="lg:hidden fixed inset-0 top-[73px] backdrop-blur-xl z-40 animate-in fade-in duration-300"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col gap-2 p-6">
              <Link
                href="/solutions"
                onClick={handleNavClick}
                className="text-lg py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="flex items-center justify-between group-hover:text-indigo-400 transition-colors">
                  Solutions
                  <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </Link>
              
              <Link
                href="/platform"
                onClick={handleNavClick}
                className="text-lg py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="flex items-center justify-between group-hover:text-indigo-400 transition-colors">
                  Platform
                  <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </Link>
              
              <Link
                href="/developers"
                onClick={handleNavClick}
                className="text-lg py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="flex items-center justify-between group-hover:text-indigo-400 transition-colors">
                  Developers
                  <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </Link>
              
              <Link
                href="/resources"
                onClick={handleNavClick}
                className="text-lg py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="flex items-center justify-between group-hover:text-indigo-400 transition-colors">
                  Resources
                  <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto p-6" style={{ borderTopColor: 'var(--border)', borderTopWidth: '1px' }}>
              <Button
                href="/contact"
                className="w-full justify-center group bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0"
                onClick={handleNavClick}
              >
                Start building
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
