import { Section, Card } from "@/components/ui";
import { INDUSTRIES } from "@/data/industries";

export function Industries() {
  return (
    <Section id="industries" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Industries we serve
      </h2>
      <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/70">
        Production‑ready patterns for regulated and high‑stakes environments.
      </p>
      <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((item, i) => (
          <Card key={i} className="p-4 sm:p-6">
            <h4 className="text-sm sm:text-base font-semibold">{item.title}</h4>
            <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
