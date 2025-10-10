import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button, Section, Pill } from "@/components/ui";

export function Hero() {
  return (
    <Section className="pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Pill>
            <Shield className="size-3.5" />
            Trusted by regulated institutions worldwide
          </Pill>
        </motion.div>

        {/* Main Headline - More compelling */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-center mb-6"
        >
          Launch compliant blockchain systems{" "}
          <span className="text-indigo-400">in weeks, not years</span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/70 text-center max-w-4xl mx-auto mb-8"
        >
          Stop building blockchain infrastructure from scratch. Get enterprise-grade 
          tokenization, payments, and compliance—ready to deploy today.
        </motion.p>

        {/* Social Proof Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-green-400" />
            ISO 27001 & SOC 2 certified
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-green-400" />
            99.99% uptime SLA
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-green-400" />
            4-6 weeks to production
          </div>
        </motion.div>

        {/* Strong CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button 
            href="/contact" 
            className="text-base px-8 py-4 bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:scale-105 transition-all"
          >
            Book a Free Consultation <ArrowRight className="size-5 ml-2" />
          </Button>
          <Button
            href="#see-how"
            className="text-base px-8 py-4 bg-transparent ring-1 ring-white/25 hover:bg-white/10"
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Urgency / Risk-Free */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-sm text-white/50"
        >
          No credit card required • Free 30-minute consultation • Talk to a solution architect
        </motion.p>
      </div>
    </Section>
  );
}
