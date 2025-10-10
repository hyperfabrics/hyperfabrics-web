import {
  Building2,
  Landmark,
  Shield,
  HeartPulse,
  Umbrella,
  Package,
  Gamepad2,
  Film,
  Leaf,
} from "lucide-react";
import { Section, Card } from "@/components/ui";
import { INDUSTRIES } from "@/data/industries";

const industryIcons = [
  Building2, // Central Banks
  Landmark, // Financial Services
  Shield, // Government
  HeartPulse, // Healthcare
  Umbrella, // Insurance
  Package, // Supply Chain
  Gamepad2, // Gaming
  Film, // Media & Entertainment
  Leaf, // ESG
];

export function Industries() {
  return (
    <Section id="industries" className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Industries we serve
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">
          Production‑ready patterns for regulated and high‑stakes environments
        </p>
      </div>
      
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((item, i) => {
          const Icon = industryIcons[i];
          return (
            <Card
              key={i}
              className="group p-5 sm:p-6 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
