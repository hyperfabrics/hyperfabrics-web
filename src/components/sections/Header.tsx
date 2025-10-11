"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavItem } from "@/components/ui/NavItem";
import Icon, { IconName } from "@/components/ui/Icon";
import { Menu, X, Search } from "lucide-react";
import { megaMenus } from "@/data/navigation";
import { MegaMenuData } from "@/types/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderPlatformMenu = () => (
    <div className="grid grid-cols-3 gap-x-12 animate-fade-in">
      {(megaMenus as MegaMenuData).platform.map((col, colIdx) => (
        <div
          key={colIdx}
          className={`
            ${
              colIdx < (megaMenus as MegaMenuData).platform.length - 1
                ? "border-r border-white/10 pr-8"
                : ""
            }
            ${colIdx > 0 ? "pl-4" : ""}
          `}
        >
          {col.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className={sectionIdx > 0 ? "mt-12" : ""}>
              <h3
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                {section.title}
              </h3>
              <ul className="flex flex-col">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ marginBottom: "24px" }}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-white/5"
                    >
                      <Icon
                        name={item.icon as IconName}
                        className="size-5 mt-1 flex-shrink-0"
                        style={{ color: "var(--accent)" }}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold flex items-center gap-2">
                          {item.label}
                          {item.isNew && (
                            <span className="text-xs font-bold text-white bg-[#375bd2] px-2 py-0.5 rounded-full">
                              NEW
                            </span>
                          )}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderDefaultMenu = (
    menuKey: "solutions" | "developers" | "resources"
  ) => {
    const menu = (megaMenus as MegaMenuData)[menuKey];
    if (!menu || !("categories" in menu)) return null;

    return (
      <div className="grid grid-cols-4 gap-16 animate-fade-in">
        {menu.categories.map((category, idx) => (
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
                    className="block font-medium transition-colors duration-200 hover:text-[#375bd2]"
                    style={{ color: "var(--text-primary)" }}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
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
        className="w-full grid lg:grid-cols-3 items-center"
        style={{
          height: "88px",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
          gap: "48px",
        }}
      >
        {/* Left Column: Logo */}
        <div className="flex justify-start">
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
        </div>

        {/* Center Column: Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-6 h-full">
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("platform")}
          >
            <NavItem
              label="Platform"
              isActive={activeDropdown === "platform"}
            />
          </div>
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            <NavItem
              label="Solutions"
              isActive={activeDropdown === "solutions"}
            />
          </div>
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("developers")}
          >
            <NavItem
              label="Developers"
              isActive={activeDropdown === "developers"}
            />
          </div>
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("resources")}
          >
            <NavItem
              label="Resources"
              isActive={activeDropdown === "resources"}
            />
          </div>
        </nav>

        {/* Right Column: Actions & Mobile Menu */}
        <div className="flex justify-end">
          {/* Desktop Right Side: Search Icon + CTA */}
          <div className="hidden lg:flex items-center gap-6">
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
          <div className="lg:hidden flex items-center gap-2 z-50">
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
      </div>

      {/* Mega Menu Dropdown Container */}
      <div
        className={`absolute top-full left-0 w-full transition-opacity duration-300 ${
          activeDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div
          className="w-full"
          style={{
            backgroundColor: "var(--background-translucent)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "0 12px 48px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="max-w-[1440px] mx-auto px-12 py-16"
            style={{
              paddingLeft: "48px",
              paddingRight: "48px",
              paddingTop: "32px",
              paddingBottom: "32px",
            }}
          >
            {activeDropdown === "platform" && renderPlatformMenu()}
            {activeDropdown === "solutions" && renderDefaultMenu("solutions")}
            {activeDropdown === "developers" && renderDefaultMenu("developers")}
            {activeDropdown === "resources" && renderDefaultMenu("resources")}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={handleNavClick}
            style={{ marginTop: "72px" }}
          />
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
                </Link>
              </div>
            </div>
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
