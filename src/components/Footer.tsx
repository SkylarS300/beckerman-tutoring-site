import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-12">
      <div className="w-full h-0.5 bg-white/10 mb-12" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-heading text-cream text-xl">BeckermanEDU</span>
          <span className="text-cream/50 text-xs tracking-wide">
            Executive Functioning & Academic Support
          </span>
          <span className="text-cream/40 text-xs mt-1">
            NYC-Based · Online & In-Person
          </span>
        </div>

        <div className="flex gap-8 text-cream/70 text-sm font-medium">
          <Link href="/about" className="hover:text-cream transition-colors">About</Link>
          <Link href="/services" className="hover:text-cream transition-colors">Services</Link>
          <Link href="/faq" className="hover:text-cream transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-cream transition-colors">Contact</Link>
        </div>

        <span className="text-cream/40 text-sm">
          © {new Date().getFullYear()} BeckermanEDU. All rights reserved.
        </span>

      </div>
    </footer>
  );
}