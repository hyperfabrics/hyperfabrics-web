import { Shield, Globe, Database, Network } from "lucide-react";
import { Button, Section, Card, Feature, LI } from "@/components/ui";

export function Platform() {
  return (
    <Section id="platform" className="py-12 sm:py-16 lg:py-20">
      <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Platform capabilities
          </h2>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
            <LI>
              Developer‑first SDKs, 500+ APIs, and example apps for rapid
              delivery.
            </LI>
            <LI>
              Multi‑chain support (Ethereum, L2s, Hyperledger, Polygon, Solana)
              with interop bridges.
            </LI>
            <LI>
              MPC + SGX security, policy engine, and full audit logs baked into
              the API layer.
            </LI>
            <LI>
              Observability: metrics, traces, and event streaming for real‑time
              ops.
            </LI>
            <LI>Enterprise SSO, fine‑grained RBAC, and secrets management.</LI>
          </ul>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              href="#developers"
              className="justify-center sm:justify-start"
            >
              See the SDK
            </Button>
            <Button
              href="#contact"
              className="justify-center sm:justify-start bg-transparent ring-1 ring-white/25 hover:bg-white/10"
            >
              Request a demo
            </Button>
          </div>
        </div>
        <Card className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
  );
}
