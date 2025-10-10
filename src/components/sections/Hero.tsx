import { motion } from "framer-motion";
import { Shield, Cpu, Lock, Network, Timer } from "lucide-react";
import { Button, Section, Pill, Card, Metric } from "@/components/ui";

export function Hero() {
  return (
    <Section className="pt-8 pb-8 sm:pt-16 sm:pb-10 lg:pt-24">
      <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-12">
        {/* Content */}
        <div className="space-y-6 lg:col-span-7">
          <Pill>
            <Shield className="size-3.5" />
            ISO 27001 • SOC 2 Type 2 • 99.99% uptime
          </Pill>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Institutional rails for tokenized assets, payments, and Web3
            transformation.
          </motion.h1>
          <p className="max-w-2xl text-pretty text-base sm:text-lg text-white/80">
            Build, launch, and operate compliant blockchain systems—faster. From
            RWA tokenization and stablecoin settlement to identity, data, and
            zero‑trust security, fazezero is the trust layer for the
            decentralized economy.
          </p>

          {/* Buttons - Stack on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href="#solutions"
              className="justify-center sm:justify-start"
            >
              Explore Solutions
            </Button>
            <Button
              href="#developers"
              className="bg-transparent ring-1 ring-white/25 hover:bg-white/10 justify-center sm:justify-start"
            >
              For Developers
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-xs sm:text-sm">
            <span>Multi‑chain • Multi‑cloud • Interop by design</span>
          </div>
        </div>

        {/* Metrics Card - Hidden on small mobile, shown on tablet+ */}
        <div className="hidden sm:block lg:col-span-5">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Metric
                icon={<Cpu className="size-4" />}
                label="500+ APIs"
                value="Developer‑first"
              />
              <Metric
                icon={<Lock className="size-4" />}
                label="MPC + SGX"
                value="Custody‑grade"
              />
              <Metric
                icon={<Network className="size-4" />}
                label="100+ chains"
                value="Protocol‑agnostic"
              />
              <Metric
                icon={<Timer className="size-4" />}
                label="4–6 wks"
                value="PoC velocity"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
