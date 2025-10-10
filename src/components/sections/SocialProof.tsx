import { Section, Card } from "@/components/ui";
import { Building2, TrendingUp, Shield, Clock } from "lucide-react";

export function SocialProof() {
  return (
    <Section className="py-16 sm:py-20 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Trusted by regulated institutions
          </h2>
          <p className="text-base sm:text-lg text-white/70 px-4 sm:px-0">
            Join central banks, financial institutions, and enterprises shipping blockchain products faster
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <Card className="p-6 text-center hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-indigo-300" />
            </div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm text-white/60">Enterprise Clients</div>
          </Card>

          <Card className="p-6 text-center hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-indigo-300" />
            </div>
            <div className="text-3xl font-bold mb-2">$10B+</div>
            <div className="text-sm text-white/60">Assets Tokenized</div>
          </Card>

          <Card className="p-6 text-center hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-indigo-300" />
            </div>
            <div className="text-3xl font-bold mb-2">99.99%</div>
            <div className="text-sm text-white/60">Uptime SLA</div>
          </Card>

          <Card className="p-6 text-center hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-indigo-300" />
            </div>
            <div className="text-3xl font-bold mb-2">4-6wks</div>
            <div className="text-sm text-white/60">To Production</div>
          </Card>
        </div>

        {/* Testimonial */}
        <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-indigo-500/5 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-3xl sm:text-4xl text-indigo-300 mb-4">&ldquo;</div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 italic">
              fazezero helped us launch our tokenized securities platform in 6 weeks—something 
              that would have taken us 18 months to build ourselves. Their compliance-first 
              approach gave our board confidence to move forward.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-semibold">Michael Chen</div>
                <div className="text-xs sm:text-sm text-white/60">CTO, Global Investment Bank</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
