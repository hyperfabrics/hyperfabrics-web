import { Section, Card } from "@/components/ui";
import { Building2, TrendingUp, Shield, Clock } from "lucide-react";

export function SocialProof() {
  return (
    <Section className="py-24 sm:py-32 lg:py-40 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trusted by regulated institutions
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
            Join central banks, financial institutions, and enterprises shipping
            blockchain products faster
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <Card className="p-8 lg:p-10 text-center hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Building2 className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold mb-3">50+</div>
            <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Enterprise Clients</div>
          </Card>

          <Card className="p-8 lg:p-10 text-center hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold mb-3">$10B+</div>
            <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Assets Tokenized</div>
          </Card>

          <Card className="p-8 lg:p-10 text-center hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold mb-3">99.99%</div>
            <div className="text-sm font-medium text-white/60 uppercase tracking-wider">Uptime SLA</div>
          </Card>

          <Card className="p-8 lg:p-10 text-center hover:bg-white/[0.04] transition-all duration-300">
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold mb-3">4-6 wks</div>
            <div className="text-sm font-medium text-white/60 uppercase tracking-wider">To Production</div>
          </Card>
        </div>

        {/* Testimonial */}
        <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-indigo-500/5 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-3xl sm:text-4xl text-indigo-300 mb-4">
              &ldquo;
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 italic">
              HyperFabrics helped us launch our tokenized securities platform in 6
              weeks—something that would have taken us 18 months to build
              ourselves. Their compliance-first approach gave our board
              confidence to move forward.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-semibold">
                  Michael Chen
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  CTO, Global Investment Bank
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
