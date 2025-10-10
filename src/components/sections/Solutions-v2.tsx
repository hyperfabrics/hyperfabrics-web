import { Network, Wallet, Building2, Shield, Database, LucideIcon } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { SOLUTION_TABS } from "@/data/solutions";

const solutionIcons: Record<string, LucideIcon> = {
  tokenization: Network,
  payments: Wallet,
  consulting: Building2,
  data: Database,
  resilience: Shield,
};

export function Solutions() {
  return (
    <Section id="solutions" className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Solutions
        </h2>
        <p className="text-lg sm:text-xl text-white/70">
          Enterprise-grade building blocks for compliant blockchain infrastructure
        </p>
      </div>

      <div className="grid gap-6 lg:gap-8">
        {SOLUTION_TABS.map((solution) => {
          const Icon = solutionIcons[solution.key];
          return (
            <Card
              key={solution.key}
              className="p-8 sm:p-10 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-indigo-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    {solution.blurb}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {solution.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all"
                  >
                    <h4 className="text-sm font-semibold mb-2">{service.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium transition-colors"
        >
          View all solutions
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
