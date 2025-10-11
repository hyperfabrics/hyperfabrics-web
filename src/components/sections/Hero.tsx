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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
              <span style={{ color: "var(--text-primary)" }}>
                Institutional rails for
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                tokenized assets
              </span>
            </h1>

            <p
              className="max-w-3xl mx-auto text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light"
              style={{ color: "var(--text-muted)" }}
            >
              Build, launch, and operate compliant blockchain systems—faster.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <Button href="/solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
            <Button href="/developers" variant="secondary" size="lg">
              For Developers
              <ArrowRight className="size-5" />
            </Button>
          </motion.div>

          {/* Stats Row - Clean Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-16 sm:pt-20"
          >
            <div className="flex items-center justify-center gap-12 sm:gap-16 lg:gap-20 text-center">
              <div className="flex-shrink-0">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  500+
                </div>
                <div
                  className="text-sm sm:text-base"
                  style={{ color: "var(--text-muted)" }}
                >
                  APIs
                </div>
              </div>

              <div
                className="h-16 sm:h-20 w-px flex-shrink-0"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="flex-shrink-0">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  100+
                </div>
                <div
                  className="text-sm sm:text-base"
                  style={{ color: "var(--text-muted)" }}
                >
                  Blockchains
                </div>
              </div>

              <div
                className="h-16 sm:h-20 w-px flex-shrink-0"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="flex-shrink-0">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  4-6 wks
                </div>
                <div
                  className="text-sm sm:text-base"
                  style={{ color: "var(--text-muted)" }}
                >
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
