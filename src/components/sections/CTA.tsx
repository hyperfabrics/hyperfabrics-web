import { Button, Section, Card } from "@/components/ui";

export function CTA() {
  return (
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
  );
}
