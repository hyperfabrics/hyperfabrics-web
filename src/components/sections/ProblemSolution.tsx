import { Section, Card } from "@/components/ui";
import { X, Check, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <Section id="see-how" className="py-16 sm:py-20 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          The old way vs. The fazezero way
        </h2>
        <p className="text-base sm:text-lg text-white/70 text-center mb-12 max-w-3xl mx-auto px-4 sm:px-0">
          Stop wasting 12-18 months building infrastructure. Start shipping compliant products in weeks.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Without fazezero */}
          <Card className="p-6 sm:p-8 bg-red-500/5 border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-red-300">Without fazezero</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>12-18 months to build blockchain infrastructure from scratch</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>$2M+ in development costs before first transaction</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Hire specialized blockchain engineers (if you can find them)</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Navigate complex compliance requirements alone</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Risk regulatory violations and security breaches</span>
              </li>
            </ul>
          </Card>

          {/* With fazezero */}
          <Card className="p-6 sm:p-8 bg-green-500/5 border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-300">With fazezero</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">4-6 weeks</strong> to production with pre-built infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">90% cost reduction</strong> with managed platform</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Deploy with your existing team using standard APIs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Built-in compliance (ISO 27001, SOC 2, GDPR, DIFC)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Enterprise security with 99.99% uptime SLA</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 sm:mt-12 text-center px-4 sm:px-0">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-indigo-300 hover:text-indigo-200 transition-colors group"
          >
            See how we can help your organization
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
}
