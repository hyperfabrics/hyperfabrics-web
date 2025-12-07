"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Coins, CreditCard, Shield } from "lucide-react";
import { Section, Button } from "@/components/ui";

const steps = [
  {
    step: "1",
    icon: Coins,
    title: "Tokenize Assets",
    solution: "Launch compliant security tokens in 4-6 weeks",
    keyPoints: ["KYC/AML automation", "100+ blockchains", "Policy controls"],
    cta: "Start Tokenizing",
  },
  {
    step: "2",
    icon: CreditCard,
    title: "Process Payments",
    solution: "24/7 global payments with stablecoin rails",
    keyPoints: ["Low-cost transfers", "24/7 availability", "Auto reconciliation"],
    cta: "Enable Payments",
  },
  {
    step: "3",
    icon: Shield,
    title: "Deploy Securely",
    solution: "Enterprise security and compliance from day one",
    keyPoints: ["ISO 27001 & SOC 2", "99.99% uptime", "Dedicated support"],
    cta: "Book a Demo",
  },
];

export function SolutionsJourney() {
  return (
    <Section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your path to production
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto">
            Three steps to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-8 lg:p-10 rounded-2xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-white/5 hover:ring-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 group overflow-visible"
              >
                {/* Step number */}
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/50 z-10">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-2">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-indigo-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors break-words">
                  {step.title}
                </h3>
                <p className="text-base text-white/70 mb-6 leading-relaxed break-words">
                  {step.solution}
                </p>

                {/* Key points */}
                <div className="space-y-2 mb-6">
                  {step.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  {step.cta}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 ring-1 ring-white/10"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Not sure where to start?</h3>
          <p className="text-lg text-white/70 mb-8">Talk to a solution architect</p>
          <Button href="/contact" variant="primary" size="lg">
            Get Started
            <ArrowRight className="size-5" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
