"use client";
import React from "react";
import { Header, Compliance, CTA, Footer } from "@/components/sections";

export default function CompliancePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-300" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Background gradients - theme aware */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(ellipse at top, var(--gradient-from), var(--gradient-to))`
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] blur-3xl opacity-50 dark:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(to bottom, var(--gradient-from), transparent)`
        }}
      />

      <Header />
      <Compliance />
      <CTA />
      <Footer />
    </div>
  );
}
