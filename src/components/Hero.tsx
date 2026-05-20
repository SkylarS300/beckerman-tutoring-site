import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-cream min-h-[90vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            NYC-Based · Online & In-Person
          </span>

          <h1 className="text-navy text-5xl md:text-6xl font-heading leading-tight">
            Every student has a way they learn best.{" "}
            <span className="text-sage">Let's find yours.</span>
          </h1>

          <p className="text-charcoal text-lg leading-relaxed max-w-xl">
            Jacki Beckerman is a certified special education specialist and
            executive functioning coach with 10+ years helping students
            K–12 unlock their full potential—especially those with learning
            disabilities, ADHD, and IEPs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="bg-navy text-cream text-center px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
            >
              Book a Free Consult
            </Link>
            <Link
              href="/services"
              className="border border-navy text-navy text-center px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors"
            >
              See Services
            </Link>
          </div>
        </div>

        {/* Right: Photo placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-blush flex items-center justify-center text-charcoal text-center p-8 font-heading text-xl">
            Jacki's photo goes here
          </div>
        </div>

      </div>
    </section>
  );
}