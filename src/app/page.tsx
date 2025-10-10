"use client";
import React from "react";
import {
  Header,
  Hero,
  ProblemSolution,
  SolutionsJourney,
  SocialProof,
  Industries,
  Platform,
  Compliance,
  CTA,
  Footer,
} from "@/components/sections";

/*
  fazezero — Institutional Web3 Website (Homepage)
  Framework: Next.js App Router + TailwindCSS + shadcn/ui style system

  Journey-focused flow:
  1. Hero - Capture attention with bold promise
  2. Problem/Solution - Show pain points and transformation
  3. Solutions Journey - Guide through 3-step path to production
  4. Social Proof - Build trust with metrics and testimonial
  5. Industries - Show applicability across sectors
  6. Platform - Technical credibility
  7. Compliance - Address key concern
  8. CTA - Convert with urgency
*/

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Background gradients - theme aware */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(ellipse at top, var(--gradient-from), var(--gradient-to))`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] blur-3xl opacity-50 dark:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(to bottom, var(--gradient-from), transparent)`,
        }}
      />

      <Header />
      <Hero />
      <ProblemSolution />
      <SolutionsJourney />
      <SocialProof />
      <Industries />
      <Platform />
      <Compliance />
      <CTA />
      <Footer />
    </div>
  );
}
