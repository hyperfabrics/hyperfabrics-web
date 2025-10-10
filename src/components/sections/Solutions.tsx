import { ArrowRight } from "lucide-react";
import { Button, Section, Card } from "@/components/ui";
import { SOLUTION_TABS } from "@/data";

export function Solutions() {
  return (
    <Section id="solutions" className="py-10 sm:py-14 lg:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Solutions</h2>
      <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/70">
        Opinionated building blocks that compress risk and time‑to‑value.
        Choose a lane or combine them under one enterprise SLA.
      </p>
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6">
        {SOLUTION_TABS.map((tab) => (
          <Card key={tab.key}>
            <div className="flex flex-col gap-4 sm:gap-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold">{tab.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{tab.blurb}</p>
                </div>
                <Button 
                  href="#contact" 
                  className="self-start sm:self-auto whitespace-nowrap"
                >
                  Talk to an architect
                </Button>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tab.services.map((service, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 transition-all active:scale-[0.98] hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold flex-1">{service.title}</h4>
                    {service.tag && (
                      <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-indigo-200 shrink-0">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{service.summary}</p>
                  <a
                    href="#contact"
                    className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    Explore <ArrowRight className="size-3" />
                  </a>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
