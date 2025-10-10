"use client";
import React from "react";
import { Header, Developers, CTA, Footer } from "@/components/sections";

export default function DevelopersPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080b] text-white">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-indigo-500/5 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] bg-gradient-to-b from-indigo-600/30 to-transparent blur-3xl"
      />

      <Header />
      <Developers />
      <CTA />
      <Footer />
    </div>
  );
}
