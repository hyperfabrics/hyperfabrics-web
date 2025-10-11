"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { megaMenus } from "@/data/navigation";
import Icon, { IconName } from "@/components/ui/Icon";

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleNavClick: () => void;
}

export function MobileMenu({ isMenuOpen, handleNavClick }: MobileMenuProps) {
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const handleMobileMenuToggle = (menu: string) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  if (!isMenuOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 cursor-pointer"
        onClick={handleNavClick}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="lg:hidden fixed z-50 animate-in slide-in-from-right duration-300 flex flex-col shadow-2xl"
        style={{
          backgroundColor: "var(--background)",
          height: "100vh",
          top: 0,
          right: 0,
          width: "100%",
        }}
      >
        {/* Header Spacer */}
        <div style={{ height: "88px", flexShrink: 0 }} />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col">
            {(Object.keys(megaMenus) as Array<keyof typeof megaMenus>).map(
              (menuKey) => {
                const menuData = megaMenus[menuKey];
                const isOpen = openMobileMenu === menuKey;

                return (
                  <div
                    key={menuKey}
                    className="border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <button
                      onClick={() => handleMobileMenuToggle(menuKey)}
                      className="flex items-center justify-between w-full py-8 px-8 text-lg font-semibold transition-colors hover:bg-white/5 cursor-pointer"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span className="capitalize">{menuKey}</span>
                      <ChevronDown
                        className={`size-5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-8 px-8 bg-black/10 dark:bg-white/5">
                        {Array.isArray(menuData) &&
                          menuData.map((col) =>
                            col.sections.map((section) => (
                              <div key={section.title} className="pt-6 pb-4">
                                <h4
                                  className="text-xs font-semibold tracking-widest uppercase mb-4 px-4"
                                  style={{ color: "var(--accent)" }}
                                >
                                  {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2">
                                  {section.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                                      >
                                        <Icon
                                          name={item.icon as IconName}
                                          className="size-5 mt-1 flex-shrink-0"
                                          style={{ color: "var(--accent)" }}
                                        />
                                        <div className="flex flex-col">
                                          <span className="font-medium text-base flex items-center gap-2">
                                            {item.label}
                                            {item.isNew && (
                                              <span className="text-xs font-bold text-white bg-[#375bd2] px-3 py-1 rounded-full">
                                                NEW
                                              </span>
                                            )}
                                          </span>
                                          <span
                                            className="text-sm"
                                            style={{
                                              color: "var(--text-secondary)",
                                            }}
                                          >
                                            {item.description}
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          )}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Sticky Bottom Buttons Container */}
        <div
          className="mobile-menu-footer border-t"
          style={{
            borderTopColor: "var(--border)",
            flexShrink: 0,
            backgroundColor: "var(--background)",
          }}
        >
          <div className="flex gap-0">
            <Link
              href="/experts"
              onClick={handleNavClick}
              className="flex-1 flex items-center justify-center text-base font-semibold py-5 transition-colors hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: "#375bd2",
                color: "#ffffff",
              }}
            >
              Talk to an expert
            </Link>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="flex-1 flex items-center justify-center text-base font-semibold py-5 transition-colors border-l hover:bg-white/10 cursor-pointer"
              style={{
                color: "var(--text-primary)",
                borderLeftColor: "var(--border)",
              }}
            >
              Start building
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
