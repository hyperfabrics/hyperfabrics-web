import { Button, Section, Card, LI } from "@/components/ui";

export function Developers() {
  return (
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
          <h3 className="text-xl font-semibold">Why engineers pick fazezero</h3>
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
  );
}
