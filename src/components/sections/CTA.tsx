import { Button, Section, Card } from "@/components/ui";
import { Mail, Calendar, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <Section id="contact" className="py-16 sm:py-20 lg:py-24">
      <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 border-indigo-500/30">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center text-center px-4 sm:px-8 py-12 sm:py-16">
          {/* Icon */}
          <div className="mb-6 p-4 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="size-8 text-indigo-300" />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl">
            Ready to build the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              trust layer
            </span>{" "}
            for your ecosystem?
          </h3>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Book a call with our architects and see how quickly you can go from
            idea to production. We&apos;ll help you navigate compliance, choose
            the right tech stack, and ship faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              href="mailto:info@fazezero.com"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 ring-0 text-base px-8 py-4 shadow-lg shadow-indigo-500/50"
            >
              <Mail className="size-5" />
              info@fazezero.com
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/contact"
              className="bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-base px-8 py-4 group"
            >
              <Calendar className="size-5" />
              Schedule a demo
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
              <span>Response within 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50" />
              <span>No commitment required</span>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
