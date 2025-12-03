import Link from "next/link";
import { Button, Section } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <Header />
      
      <Section className="py-32 sm:py-40">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Page not found
            </h2>
            <p className="text-lg text-white/60 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="lg" className="group">
              <Home className="size-5 group-hover:scale-110 transition-transform" />
              Go Home
            </Button>
            <Button 
              href="javascript:history.back()" 
              variant="secondary" 
              size="lg"
              className="group"
            >
              <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/platform" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                Platform
              </Link>
              <Link href="/solutions" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                Solutions
              </Link>
              <Link href="/developers" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                Developers
              </Link>
              <Link href="/contact" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

