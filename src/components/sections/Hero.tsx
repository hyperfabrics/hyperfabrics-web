import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Section } from "@/components/ui";
// import { Shield, Pill } from "@/components/ui"; // Commented out for now

export function Hero() {
  return (
    <Section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">
          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.03em] mb-6 sm:mb-8">
              <span className="text-white block mb-2">
                Institutional rails for
              </span>
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-extrabold block">
                tokenized assets
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal text-white/70 max-w-3xl mx-auto">
              Build, launch, and operate compliant blockchain systems—faster.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 sm:mb-24 lg:mb-32"
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
            className="w-full max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="group relative p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent leading-none">
                  500+
                </div>
                <div className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  APIs
                </div>
              </div>

              <div className="group relative p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent leading-none">
                  100+
                </div>
                <div className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  Blockchains
                </div>
              </div>

              <div className="group relative p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent leading-none">
                  4-6 wks
                </div>
                <div className="text-sm font-semibold text-white/60 uppercase tracking-widest">
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
