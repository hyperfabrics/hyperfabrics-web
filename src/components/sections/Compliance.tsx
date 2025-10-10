import { Section, Card, LI } from "@/components/ui";

export function Compliance() {
  return (
    <Section id="compliance" className="py-14 sm:py-20">
      <Card>
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Regulatory & compliance</h3>
            <p className="mt-2 text-sm text-white/70">
              Embedded rule‑engines enforce regional policies at the API layer.
              Navigate KYC/AML and data‑privacy with confidence.
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
  );
}
