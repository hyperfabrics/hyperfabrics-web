import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Section } from "@/components/ui";
// import { Shield, Pill } from "@/components/ui"; // Commented out for now

export function Hero() {
  return (
    <Section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <div className="text-center space-y-10 sm:space-y-12">
          {/* Trust Badge - Commented out for now */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Pill>
              <Shield className="size-3.5" />
              ISO 27001 • SOC 2 Type 2 • 99.99% uptime
            </Pill>
          </motion.div> */}

          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-[-0.02em] px-4">
              <span className="text-white/95">
                Institutional rails for
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-extrabold">
                tokenized assets
              </span>
            </h1>

            <p
              className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal text-white/70 px-4"
            >
              Build, launch, and operate compliant blockchain systems—faster.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button href="/solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
            <Button href="/developers" variant="secondary" size="lg">
              For Developers
              <ArrowRight className="size-5" />
            </Button>
          </motion.div>

          {/* Stats Row - Modern Card Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-20 sm:pt-24 lg:pt-28"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-4xl mx-auto px-4">
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-wider">
                  APIs
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-wider">
                  Blockchains
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all backdrop-blur-sm">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                  4-6 wks
                </div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-wider">
                  To PoC
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
