import { ArrowRight, Boxes, Wallet, Lightbulb, Shield, Zap } from "lucide-react";
import { Button, Section, Card } from "@/components/ui";
import { SOLUTION_TABS } from "@/data/solutions";

const solutionIcons = [Boxes, Wallet, Lightbulb, Shield, Zap];

export function Solutions() {
  return (
    <Section id="solutions" className="py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Solutions
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Choose a lane or combine them under one enterprise SLA
        </p>
      </div>

      <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SOLUTION_TABS.map((tab, index) => {
          const Icon = solutionIcons[index];
          return (
            <Card
              key={tab.key}
              className="group p-8 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer border-white/5 hover:border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 group-hover:scale-110 group-hover:ring-white/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-indigo-300" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                {tab.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-6 min-h-[60px]">
                {tab.blurb}
              </p>

              <div className="flex items-center text-sm text-indigo-300 group-hover:text-indigo-200 transition-colors font-medium">
                Learn more
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button
          href="/solutions"
          className="px-8 py-4 text-base bg-white/5 ring-1 ring-white/20 hover:bg-white/10"
        >
          View all solutions
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </Section>
  );
}
