"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { X, Check, Clock, DollarSign, Users, Shield, ArrowRight, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui";

const metrics = [
  {
    icon: Clock,
    label: "Time to Production",
    without: "12-18 months",
    with: "4-6 weeks",
    improvement: "92% faster",
  },
  {
    icon: DollarSign,
    label: "Development Cost",
    without: "$2M+",
    with: "90% less",
    improvement: "$1.8M saved",
  },
  {
    icon: Users,
    label: "Team Required",
    without: "Specialized engineers",
    with: "Your existing team",
    improvement: "No hiring needed",
  },
  {
    icon: Shield,
    label: "Compliance",
    without: "Navigate alone",
    with: "Built-in",
    improvement: "ISO 27001, SOC 2",
  },
];

export function ProblemSolution() {
  return (
    <Section id="see-how" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ship compliant products
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              in weeks, not years
            </span>
          </h2>
        </motion.div>

        {/* Modern Comparison Table */}
        <div className="relative overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 min-w-[600px] sm:min-w-0">
            <div className="text-sm font-medium text-white/40 uppercase tracking-wider"></div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-300">Without fazezero</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500/20 border border-green-500/30">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-300">With fazezero</span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 items-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all group min-w-[600px] sm:min-w-0"
                >
                  {/* Label */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>

                  {/* Without */}
                  <div className="text-center">
                    <div className="text-xl font-bold text-white/40 line-through">
                      {metric.without}
                    </div>
                  </div>

                  {/* With */}
                  <div className="text-center relative">
                    <div className="text-2xl font-bold text-white mb-2">
                      {metric.with}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-green-400 font-medium">
                      <TrendingDown className="w-3.5 h-3.5" />
                      {metric.improvement}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="group"
            >
              Get Started
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </motion.div>
      </div>
    </Section>
  );
}
