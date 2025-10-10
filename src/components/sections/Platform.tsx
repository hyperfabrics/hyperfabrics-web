import { Shield, Globe, Database, Network, Code2, Lock, Zap, CheckCircle2 } from "lucide-react";
import { Button, Section, Card } from "@/components/ui";

export function Platform() {
  const capabilities = [
    {
      icon: Code2,
      title: "Developer-First SDKs",
      desc: "500+ APIs and example apps for rapid delivery",
    },
    {
      icon: Network,
      title: "Multi-Chain Support",
      desc: "Ethereum, L2s, Hyperledger, Polygon, Solana with interop bridges",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      desc: "MPC + SGX security with policy engine and audit logs",
    },
    {
      icon: Zap,
      title: "Real-Time Observability",
      desc: "Metrics, traces, and event streaming for operations",
    },
    {
      icon: Shield,
      title: "Compliance-Ready",
      desc: "GDPR • ISO 27001 • SOC 2 • DIFC data",
    },
    {
      icon: Globe,
      title: "Global by Design",
      desc: "Multi‑region, multi‑cloud, HA/DR architecture",
    },
    {
      icon: Database,
      title: "Immutable Audit Trails",
      desc: "Complete logs and cryptographic proofs",
    },
    {
      icon: CheckCircle2,
      title: "Enterprise SSO & RBAC",
      desc: "Fine-grained access control and secrets management",
    },
  ];

  return (
    <Section id="platform" className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Platform Capabilities
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">
          Enterprise-grade infrastructure with developer-first tools, multi-chain support, 
          and compliance built-in from day one
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {capabilities.map((capability, i) => {
          const Icon = capability.icon;
          return (
            <Card
              key={i}
              className="group p-5 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 mb-3">
                  <Icon className="w-5 h-5 text-indigo-300" />
                </div>
                <h4 className="text-sm font-semibold group-hover:text-indigo-300 transition-colors mb-2">
                  {capability.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {capability.desc}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 sm:p-8 bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/5">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Ready to build on our platform?
            </h3>
            <p className="text-sm sm:text-base text-white/70 mb-6">
              Get access to our sandbox environment with pre-configured test data, 
              comprehensive documentation, and developer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/developers" className="justify-center sm:justify-start">
                <Code2 className="size-4" />
                Explore the SDK
              </Button>
              <Button
                href="/contact"
                className="justify-center sm:justify-start bg-transparent ring-1 ring-white/25 hover:bg-white/10"
              >
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-indigo-300">500+</div>
                <div className="text-xs text-white/60 mt-1">APIs</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-indigo-300">100+</div>
                <div className="text-xs text-white/60 mt-1">Chains</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-indigo-300">99.99%</div>
                <div className="text-xs text-white/60 mt-1">Uptime</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-indigo-300">24/7</div>
                <div className="text-xs text-white/60 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
