import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button, Section, Pill } from "@/components/ui";

export function Hero() {
  return (
    <Section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        {/* Centered Content */}
        <div className="text-center space-y-8 sm:space-y-10">
          <Pill>
            <Shield className="size-3.5" />
            ISO 27001 • SOC 2 Type 2 • 99.99% uptime
          </Pill>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1
              className="text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight px-4 sm:px-0"
              style={{ color: "var(--text-primary)" }}
            >
              Institutional rails for{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                tokenized assets
              </span>
            </h1>

            <p
              className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed font-light px-4 sm:px-0"
              style={{ color: "var(--text-muted)" }}
            >
              Build, launch, and operate compliant blockchain systems—faster.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6 px-4 sm:px-0">
            <Button
              href="/solutions"
              className="justify-center text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 bg-white text-black hover:bg-white/90 ring-0 shadow-2xl shadow-white/10 font-semibold"
            >
              Explore Solutions
            </Button>
            <Button
              href="/developers"
              className="justify-center text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 bg-transparent ring-1 ring-white/30 hover:bg-white/5"
            >
              For Developers
              <ArrowRight className="size-5" />
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="pt-12 sm:pt-16 flex flex-wrap justify-center gap-8 sm:gap-12 text-center px-4 sm:px-0">
            <div>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                500+
              </div>
              <div
                className="text-xs sm:text-sm mt-2"
                style={{ color: "var(--text-muted)" }}
              >
                APIs
              </div>
            </div>
            <div
              className="hidden sm:block h-12 w-px"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                100+
              </div>
              <div
                className="text-xs sm:text-sm mt-2"
                style={{ color: "var(--text-muted)" }}
              >
                Blockchains
              </div>
            </div>
            <div
              className="hidden sm:block h-12 w-px"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div>
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                4-6 wks
              </div>
              <div
                className="text-xs sm:text-sm mt-2"
                style={{ color: "var(--text-muted)" }}
              >
                To PoC
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
