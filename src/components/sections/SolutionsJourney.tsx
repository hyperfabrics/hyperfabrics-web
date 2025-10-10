import { ArrowRight, Check } from "lucide-react";
import { Section, Card, Button } from "@/components/ui";

export function SolutionsJourney() {
  const solutions = [
    {
      step: "1",
      title: "Tokenize Real-World Assets",
      problem: "Need to digitize securities, real estate, or commodities?",
      solution: "Launch compliant security tokens in 4-6 weeks with our Studio platform",
      benefits: [
        "Automated KYC/AML and investor accreditation",
        "Policy-aware transfer rules (jurisdiction, lockups, caps)",
        "E-sign documents and tax pack automation",
        "Connect to 100+ blockchain networks",
      ],
      cta: "Start Tokenizing",
    },
    {
      step: "2",
      title: "Process Global Payments",
      problem: "Need 24/7 cross-border payments without banks?",
      solution: "Settle payments in minutes using our stablecoin rails",
      benefits: [
        "24/7 global payouts (no banking hours)",
        "Low-cost remittance and A2A transfers",
        "Automated reconciliation and audit trails",
        "Treasury controls with spend limits",
      ],
      cta: "Enable Payments",
    },
    {
      step: "3",
      title: "Deploy with Confidence",
      problem: "Worried about security, compliance, and uptime?",
      solution: "Get enterprise-grade security and support from day one",
      benefits: [
        "ISO 27001 & SOC 2 Type 2 certified",
        "99.99% uptime SLA with 24/7 monitoring",
        "GDPR, DIFC, and jurisdiction compliance",
        "Dedicated solution architects",
      ],
      cta: "Book a Demo",
    },
  ];

  return (
    <Section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Your path to production
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Three simple steps to launch your blockchain product
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {solutions.map((solution, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 lg:p-10 hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500/10 ring-2 ring-indigo-500/20 flex items-center justify-center text-xl sm:text-2xl font-bold text-indigo-300">
                  {solution.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/60 mb-2">{solution.problem}</p>
                  <p className="text-base sm:text-lg text-white/90 font-medium">{solution.solution}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6 sm:ml-20">
                {solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="ml-20">
                <Button 
                  href="/contact" 
                  className="group-hover:scale-105 transition-transform"
                >
                  {solution.cta} <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-white/10">
          <h3 className="text-2xl font-semibold mb-3">
            Not sure which solution fits your needs?
          </h3>
          <p className="text-white/70 mb-6">
            Talk to a solution architect for a free consultation
          </p>
          <Button href="/contact" className="bg-indigo-600 hover:bg-indigo-500">
            Schedule Free Consultation <ArrowRight className="size-5 ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
