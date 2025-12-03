"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { X, Check, Clock, DollarSign, Users, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const comparison = [
  {
    metric: "Time to Production",
    without: { value: "12-18", unit: "months", icon: Clock },
    with: { value: "4-6", unit: "weeks", icon: Zap, highlight: true },
  },
  {
    metric: "Development Cost",
    without: { value: "$2M+", unit: "before first transaction", icon: DollarSign },
    with: { value: "90%", unit: "cost reduction", icon: DollarSign, highlight: true },
  },
  {
    metric: "Team Required",
    without: { value: "Specialized", unit: "blockchain engineers", icon: Users },
    with: { value: "Your existing", unit: "team + APIs", icon: Users, highlight: true },
  },
  {
    metric: "Compliance",
    without: { value: "Navigate", unit: "requirements alone", icon: Shield },
    with: { value: "Built-in", unit: "ISO 27001, SOC 2, GDPR", icon: Shield, highlight: true },
  },
];

export function ProblemSolution() {
  return (
    <Section id="see-how" className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Stop building from scratch
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto">
            Ship compliant products in weeks, not years
          </p>
        </motion.div>

        {/* Visual Comparison - Modern Card Design */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Without fazezero */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm ring-1 ring-red-500/20 hover:ring-red-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-red-300">Without fazezero</h3>
            </div>

            <div className="space-y-6">
              {comparison.map((item, index) => {
                const Icon = item.without.icon;
                return (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                        {item.metric}
                      </div>
                      <div className="text-lg font-semibold text-white/90">
                        {item.without.value}
                      </div>
                      <div className="text-sm text-white/50">{item.without.unit}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* With fazezero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-green-500/10 backdrop-blur-sm ring-1 ring-green-500/30 hover:ring-green-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-green-300">With fazezero</h3>
            </div>

            <div className="space-y-6">
              {comparison.map((item, index) => {
                const Icon = item.with.icon;
                return (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                        {item.metric}
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {item.with.value}
                        {item.with.highlight && (
                          <span className="ml-2 text-green-400">✓</span>
                        )}
                      </div>
                      <div className="text-sm text-white/60">{item.with.unit}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="group"
          >
            See how we can help
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
