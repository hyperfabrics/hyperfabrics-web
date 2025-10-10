"use client";
import React from "react";
import {
  Header,
  Hero,
  Solutions,
  Industries,
  Platform,
  Compliance,
  Developers,
  CTA,
  Footer,
} from "@/components/sections";

/*
  fazezero — Institutional Web3 Website (Homepage)
  Framework: Next.js App Router + TailwindCSS + shadcn/ui style system
  
  Refactored for better maintainability:
  - Components split into separate files
  - Data extracted to separate modules
  - TypeScript interfaces for type safety
  - Better organization and modularity
*/

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080b] text-white">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-indigo-500/5 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] bg-gradient-to-b from-indigo-600/30 to-transparent blur-3xl"
      />

      <Header />
      <Hero />
      <Solutions />
      <Industries />
      <Platform />
      <Compliance />
      <Developers />
      <CTA />
      <Footer />
    </div>
  );
}

// --- Faux shadcn primitives (inline) ---
// If you already have shadcn/ui, delete these and import from "@/components/ui/*" instead.
const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

function Button({ className, children, as = "button", href, ...props }: any) {
  const Comp: any = href ? "a" : as;
  return (
    <Comp
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm",
        "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

function Section({ id, className, children }: any) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
}

function Card({ className, children }: any) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

// --- Data: Solutions & Services ---

type Service = {
  title: string;
  summary: string;
  tag?: string;
};

type SolutionTab = {
  key: string;
  title: string;
  blurb: string;
  services: Service[];
};

const SOLUTION_TABS: SolutionTab[] = [
  {
    key: "tokenization",
    title: "Tokenization & RWAs",
    blurb:
      "Compliance-first rails to issue, manage, and distribute real‑world assets with audit‑grade reporting and policy‑aware transfers.",
    services: [
      {
        title: "Studio (Issuer Console)",
        summary:
          "Onboard SPVs/assets, design classes, e‑sign docs, allocate, and go live with distribution statements and tax packs.",
        tag: "Platform",
      },
      {
        title: "Rail (Transfer Rules Engine)",
        summary:
          "Jurisdiction + investor‑class aware token with whitelist/blacklist, lockups, and automated cash‑flow distributions.",
      },
      {
        title: "Verify (KYC/AML & Accreditation)",
        summary:
          "Wallet binding, sanctions screening, and eligibility checks embedded at the API layer.",
      },
      {
        title: "Digital Assets Platform (Institutions)",
        summary:
          "MPC + SGX custody, hot/warm/cold wallet policy controls, and connectivity to 100+ chains.",
      },
    ],
  },
  {
    key: "payments",
    title: "Payments & Treasury",
    blurb:
      "Settlement‑grade stablecoin rails that blend bank and on‑chain flows for 24/7 global payouts and automated reconciliation.",
    services: [
      {
        title: "Stablecoin Payment Rail",
        summary:
          "Fast, low‑cost settlement across chains and regions; ideal for remittance, A2A, payroll, suppliers, and gov disbursements.",
      },
      {
        title: "Treasury (Policy‑Driven Ops)",
        summary:
          "Signer policies, spend limits, segregation of duties, and complete audit trails for digital asset finance.",
      },
      {
        title: "API & Microservices Modernization",
        summary:
          "Re‑platform legacy payment stacks to event‑driven, cloud‑native microservices with real‑time observability.",
      },
    ],
  },
  {
    key: "consulting",
    title: "Consulting & Architecture",
    blurb:
      "From discovery to production: blueprints, PoCs, and SLAs to ship regulated blockchain systems fast.",
    services: [
      {
        title: "Use‑Case Identification & Prioritization",
        summary:
          "Protocol‑agnostic workshops + quantitative scoring matrix to pick the highest‑ROI initiatives first.",
      },
      {
        title: "Blockchain Feasibility Analysis",
        summary:
          "Two‑week executive scorecard: ROI, TCO, compliance gaps, and a 7‑protocol benchmark for a go/no‑go decision.",
      },
      {
        title: "Implementation & Architecture",
        summary:
          "End‑to‑end builds on public/private chains with security reviews, runbooks, and production SLAs.",
      },
      {
        title: "PoC Development",
        summary:
          "4–6 week multi‑chain prototypes using 500+ APIs, templates, and event streaming—demo‑ready, not slideware.",
      },
      {
        title: "Strategic Roadmap & Implementation",
        summary:
          "Living roadmap tied to OKRs and funding gates; pre‑integrations with ERP/IAM/data‑lakes to de‑risk delivery.",
      },
    ],
  },
  {
    key: "data",
    title: "Data, Identity & Security",
    blurb:
      "Privacy‑first data and identity patterns with zero‑trust controls and verifiable audit trails.",
    services: [
      {
        title: "Digital Identity (DID + VC)",
        summary:
          "W3C‑compliant decentralized identity with ZK proofs—frictionless KYC and selective disclosure.",
      },
      {
        title: "Data‑Mesh & Real‑Time Analytics",
        summary:
          "Domain‑oriented mesh, streaming pipelines, and dashboards; dual‑write blockchain for immutable audit.",
      },
      {
        title: "Zero‑Trust Security & Blockchain Ref Arch",
        summary:
          "Assume‑breach posture, least privilege, and auditable interactions across apps and partners.",
      },
      {
        title: "Smart‑Contract Consulting",
        summary:
          "Architecture, gas optimization, static analysis & fuzzing; third‑party audit handoff optional.",
      },
    ],
  },
  {
    key: "resilience",
    title: "Resilience & Ops",
    blurb:
      "Enterprise‑grade availability, performance, and disaster recovery for mission‑critical Web3.",
    services: [
      {
        title: "Scalability & Performance Optimization",
        summary:
          "Layer‑2 rollups, sharding, state channels; load‑balancing, caching, and DB tuning—up to 8× throughput lifts.",
      },
      {
        title: "Multi‑Cloud Resiliency & DR",
        summary:
          "Cross‑cloud failover, automated runbooks, RTO/RPO alignment, and hybrid on‑prem integrations.",
      },
      {
        title: "Consortium & Private Blockchain Formation",
        summary:
          "Governance design, legal bylaws templates, and automated member onboarding on Fabric/Quorum/Besu/Corda.",
      },
    ],
  },
];

const INDUSTRIES = [
  {
    title: "Central Banks & CBDC",
    desc: "Policy‑driven CBDC pilots to production with interoperability and legacy integration.",
  },
  {
    title: "Financial Services",
    desc: "Tokenization, settlement, custody, and compliance built for banks and fintechs.",
  },
  {
    title: "Government & Public Sector",
    desc: "Tamper‑proof records, identity, funding transparency, and cross‑agency data.",
  },
  {
    title: "Healthcare",
    desc: "Verified providers, claim integrity, and secure health data exchange.",
  },
  {
    title: "Insurance",
    desc: "Immutable policy + claims rails with automated payouts and fraud reduction.",
  },
  {
    title: "Supply Chain",
    desc: "End‑to‑end traceability, provenance, and partner trust without intermediaries.",
  },
  {
    title: "Gaming",
    desc: "Player‑owned assets, on‑chain economies, and marketplace interoperability.",
  },
  {
    title: "Media & Entertainment",
    desc: "Creator royalties, rights management, and fan engagement via NFTs.",
  },
  {
    title: "ESG & Sustainability",
    desc: "Trusted disclosures, carbon tracking, and real‑time impact reporting.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080b] text-white">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-indigo-500/5 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] bg-gradient-to-b from-indigo-600/30 to-transparent blur-3xl"
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 w-full backdrop-blur">
        <Section className="flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="grid size-8 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <span className="font-black">Ø</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              fazezero
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#solutions"
              className="text-sm text-white/80 hover:text-white"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="text-sm text-white/80 hover:text-white"
            >
              Industries
            </a>
            <a
              href="#platform"
              className="text-sm text-white/80 hover:text-white"
            >
              Platform
            </a>
            <a
              href="#compliance"
              className="text-sm text-white/80 hover:text-white"
            >
              Compliance
            </a>
            <a
              href="#developers"
              className="text-sm text-white/80 hover:text-white"
            >
              Developers
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#contact" className="hidden md:inline-flex">
              Book a call <ArrowRight className="size-4" />
            </Button>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="pt-10 pb-6 sm:pt-16 sm:pb-10 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Pill>
              <Shield className="size-3.5" />
              ISO 27001 • SOC 2 Type 2 • 99.99% uptime
            </Pill>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            >
              Institutional rails for tokenized assets, payments, and Web3
              transformation.
            </motion.h1>
            <p className="max-w-2xl text-pretty text-lg text-white/80">
              Build, launch, and operate compliant blockchain systems—faster.
              From RWA tokenization and stablecoin settlement to identity, data,
              and zero‑trust security, fazezero is the trust layer for the
              decentralized economy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#solutions">Explore Solutions</Button>
              <Button
                href="#developers"
                className="bg-transparent ring-1 ring-white/25 hover:bg-white/10"
              >
                For Developers
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-white/60">
              <span className="text-xs">
                Multi‑chain • Multi‑cloud • Interop by design
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10" />
              <div className="grid grid-cols-2 gap-4">
                <Metric
                  icon={<Cpu className="size-4" />}
                  label="500+ APIs"
                  value="Developer‑first"
                />
                <Metric
                  icon={<Lock className="size-4" />}
                  label="MPC + SGX"
                  value="Custody‑grade"
                />
                <Metric
                  icon={<Network className="size-4" />}
                  label="100+ chains"
                  value="Protocol‑agnostic"
                />
                <Metric
                  icon={<Timer className="size-4" />}
                  label="4–6 wks"
                  value="PoC velocity"
                />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section id="solutions" className="py-14 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Solutions</h2>
        <p className="mt-2 max-w-3xl text-white/70">
          Opinionated building blocks that compress risk and time‑to‑value.
          Choose a lane or combine them under one enterprise SLA.
        </p>
        <div className="mt-8 grid gap-6">
          {SOLUTION_TABS.map((tab) => (
            <Card key={tab.key}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{tab.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{tab.blurb}</p>
                </div>
                <Button href="#contact" className="self-start">
                  Talk to an architect
                </Button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tab.services.map((s, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">{s.title}</h4>
                      {s.tag && (
                        <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-indigo-200">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-white/70">{s.summary}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200"
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

      {/* Industries */}
      <Section id="industries" className="py-14 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          Industries we serve
        </h2>
        <p className="mt-2 max-w-3xl text-white/70">
          Production‑ready patterns for regulated and high‑stakes environments.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item, i) => (
            <Card key={i}>
              <h4 className="text-base font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Platform */}
      <Section id="platform" className="py-14 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Platform capabilities
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <LI>
                Developer‑first SDKs, 500+ APIs, and example apps for rapid
                delivery.
              </LI>
              <LI>
                Multi‑chain support (Ethereum, L2s, Hyperledger, Polygon,
                Solana) with interop bridges.
              </LI>
              <LI>
                MPC + SGX security, policy engine, and full audit logs baked
                into the API layer.
              </LI>
              <LI>
                Observability: metrics, traces, and event streaming for
                real‑time ops.
              </LI>
              <LI>
                Enterprise SSO, fine‑grained RBAC, and secrets management.
              </LI>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button href="#developers">See the SDK</Button>
              <Button
                href="#contact"
                className="bg-transparent ring-1 ring-white/25 hover:bg-white/10"
              >
                Request a demo
              </Button>
            </div>
          </div>
          <Card>
            <div className="grid grid-cols-2 gap-4">
              <Feature
                icon={<Shield className="size-4" />}
                title="Compliance‑ready"
                desc="GDPR • ISO 27001 • SOC 2 • DIFC data"
              />
              <Feature
                icon={<Globe className="size-4" />}
                title="Global by design"
                desc="Multi‑region, multi‑cloud, HA/DR"
              />
              <Feature
                icon={<Database className="size-4" />}
                title="Audit trails"
                desc="Immutable logs + proofs"
              />
              <Feature
                icon={<Network className="size-4" />}
                title="Interoperable"
                desc="Public & private chains"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* Compliance */}
      <Section id="compliance" className="py-14 sm:py-20">
        <Card>
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Regulatory & compliance</h3>
              <p className="mt-2 text-sm text-white/70">
                Embedded rule‑engines enforce regional policies at the API
                layer. Navigate KYC/AML and data‑privacy with confidence.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="grid gap-3 sm:grid-cols-2">
                <LI>
                  Pre‑mapped controls for GDPR, SOC 2, ISO 27001, DIFC Data Law
                </LI>
                <LI>Partnership network for jurisdiction‑specific opinions</LI>
                <LI>Sanctions screening, accreditation, and wallet binding</LI>
                <LI>Automated statements, tax packs, and distribution logs</LI>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* Developers */}
      <Section id="developers" className="py-14 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for developers
            </h2>
            <p className="mt-2 text-white/70">
              Clear SDKs, sandbox keys, and reference apps help you ship in
              days—not quarters.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5 font-mono text-sm">
              <pre className="whitespace-pre-wrap leading-7 text-white/80">{`import { Studio, Verify } from "@fazezero/sdk";

// Create an RWA class and enforce transfer rules
const studio = new Studio({ apiKey: process.env.FZ_API_KEY });
await studio.assets.create({
  name: "Harbour Tower SPV A",
  classes: [{ symbol: "HT-A", cap: 1_000_000, currency: "USD" }],
});

// Bind wallet to a verified investor
const verify = new Verify({ apiKey: process.env.FZ_API_KEY });
await verify.kyc.bindWallet({ wallet: "0xabc...", investorId: "INV-2219" });
`}</pre>
            </div>
          </div>
          <Card>
            <h3 className="text-xl font-semibold">
              Why engineers pick fazezero
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <LI>Typesafe SDKs and granular webhooks</LI>
              <LI>First‑class examples for tokenization, treasury, identity</LI>
              <LI>Staging environments with seeded test data</LI>
              <LI>24/7 SRE and incident playbooks</LI>
            </ul>
            <div className="mt-6">
              <Button href="#contact">Get sandbox access</Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="pb-24">
        <Card className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold">
            Ready to build the trust layer for your ecosystem?
          </h3>
          <p className="mt-2 max-w-2xl text-white/70">
            Book a call with our architects and see how quickly you can go from
            idea to production.
          </p>
          <div className="mt-4 flex gap-3">
            <Button href="mailto:info@fazezero.com">info@fazezero.com</Button>
            <Button href="#">Schedule a demo</Button>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <Section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-white/60">
            © {new Date().getFullYear()} fazezero. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">
              Security
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Status
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}

function Metric({ icon, label, value }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-white/70">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2">
        <span className="text-indigo-200">{icon}</span>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-xs text-white/70">{desc}</p>
    </div>
  );
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 size-4 shrink-0 text-indigo-300" />
      <span>{children}</span>
    </li>
  );
}
