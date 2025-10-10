import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button, Section, Pill, Card } from "@/components/ui";

export function Hero() {
  return (
    <Section className="pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32">
      <div className="max-w-5xl mx-auto">
        {/* Centered Content */}
        <div className="text-center space-y-10">
          <Pill>
            <Shield className="size-3.5" />
            ISO 27001 • SOC 2 Type 2 • 99.99% uptime
          </Pill>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-balance text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl tracking-tight">
              Institutional rails for{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                tokenized assets
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-white/60 leading-relaxed font-light">
              Build, launch, and operate compliant blockchain systems—faster.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              href="/solutions"
              className="justify-center text-lg px-10 py-5 bg-white text-black hover:bg-white/90 ring-0 shadow-2xl shadow-white/10 font-semibold"
            >
              Explore Solutions
            </Button>
            <Button
              href="/developers"
              className="justify-center text-lg px-10 py-5 bg-transparent ring-1 ring-white/30 hover:bg-white/5"
            >
              For Developers
              <ArrowRight className="size-5" />
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="pt-16 flex justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/50 mt-2">APIs</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-white/50 mt-2">Blockchains</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">4-6 wks</div>
              <div className="text-sm text-white/50 mt-2">To PoC</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
