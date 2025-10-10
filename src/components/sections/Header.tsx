"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Section } from "@/components/ui";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/platform", label: "Platform" },
    { href: "/compliance", label: "Compliance" },
    { href: "/developers", label: "Developers" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/5">
      <Section className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="grid size-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <span className="font-black">Ø</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">fazezero</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/contact">
            Book a call <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2 rounded-lg bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-[#07080b]/95 backdrop-blur-xl z-40">
          <nav className="flex flex-col h-full">
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg text-white/80 hover:text-white py-4 px-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto p-6 border-t border-white/10">
              <Button
                href="/contact"
                className="w-full justify-center"
                onClick={handleNavClick}
              >
                Book a call <ArrowRight className="size-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
