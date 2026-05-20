import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blush py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-sage font-medium text-sm uppercase tracking-widest">
          Get Started
        </span>
        <h2 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
          Not sure where to start? That's what the first call is for.
        </h2>
        <p className="text-charcoal leading-relaxed max-w-xl">
          The free consultation is a no-pressure conversation about your child,
          what they're working through, and whether Jacki is the right fit. No
          commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
          >
            Book a Free Consult
          </Link>
          <Link
            href="/services"
            className="border border-navy text-navy px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
          >
            See Services
          </Link>
        </div>
      </div>
    </section>
  );
}