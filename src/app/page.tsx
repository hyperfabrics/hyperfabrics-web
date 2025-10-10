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
