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
        <div className="relative flex flex-col items-center text-center px-4 sm:px-8 py-10 sm:py-14">
          {/* Icon */}
          <div className="mb-4 p-3 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="size-6 text-indigo-300" />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl leading-tight">
            Ready to build the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              trust layer
            </span>{" "}
            for your ecosystem?
          </h3>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed">
            Book a call with our architects. We&apos;ll help you navigate compliance, choose the right tech stack, and ship faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              href="mailto:info@hyperfabrics.com"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 ring-0 text-sm sm:text-base px-6 sm:px-8 py-3 shadow-lg shadow-indigo-500/50"
            >
              <Mail className="size-4 sm:size-5" />
              info@hyperfabrics.com
              <ArrowRight className="size-3 sm:size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/contact"
              className="bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-sm sm:text-base px-6 sm:px-8 py-3 group"
            >
              <Calendar className="size-4 sm:size-5" />
              Schedule a demo
              <ArrowRight className="size-3 sm:size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-green-400" />
              <span>Response within 24h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-blue-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-purple-400" />
              <span>No commitment</span>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
