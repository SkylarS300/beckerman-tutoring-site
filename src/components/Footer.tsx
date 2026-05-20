import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-12">
      <div className="w-full h-0.5 bg-white/15 mb-12" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading text-cream text-xl">
              Beckerman Learning
            </span>
            <span className="text-cream/50 text-sm">
              NYC-Based · Online & In-Person
            </span>
          </div>
          <div className="flex gap-8 text-cream/70 text-sm font-medium">
            <Link href="/about" className="hover:text-cream transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-cream transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-cream transition-colors">
              Contact
            </Link>
          </div>
          <span className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Beckerman Learning. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}