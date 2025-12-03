"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { X, Check, Clock, DollarSign, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const metrics = [
  {
    icon: Clock,
    label: "Time to Production",
    without: "12-18 months",
    with: "4-6 weeks",
  },
  {
    icon: DollarSign,
    label: "Development Cost",
    without: "$2M+",
    with: "90% less",
  },
  {
    icon: Users,
    label: "Team Required",
    without: "Specialized engineers",
    with: "Your existing team",
  },
  {
    icon: Shield,
    label: "Compliance",
    without: "Navigate alone",
    with: "Built-in",
  },
];

export function ProblemSolution() {
  return (
    <Section id="see-how" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Without fazezero */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate p-10 rounded-3xl bg-white/[0.01] backdrop-blur-sm border border-red-500/10"
            style={{ boxShadow: "0 0 0 1px rgba(239, 68, 68, 0.1)" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <X className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-red-300">Without fazezero</h3>
            </div>

            <div className="space-y-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-500/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-400/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/30 mb-2 font-medium">
                        {metric.label}
                      </div>
                      <div className="text-2xl font-bold text-white/50 leading-tight">
                        {metric.without}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* With fazezero */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate p-10 rounded-3xl border border-green-500/20"
            style={{
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(34, 197, 94, 0.1) 100%)",
              boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-green-300">With fazezero</h3>
            </div>

            <div className="space-y-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-white/30 mb-2 font-medium">
                        {metric.label}
                      </div>
                      <div className="text-2xl font-bold text-white leading-tight">
                        {metric.with}
                      </div>
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
            className="group text-lg px-8 py-6"
          >
            See how we can help
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
