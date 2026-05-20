import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left: Photo placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-blush" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-sage" />
            <div className="absolute inset-0 flex items-center justify-center font-heading text-charcoal text-lg text-center p-8">
              Jacki's photo goes here
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            About Jacki
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
            Ten years in the classroom. Now working one on one.
          </h2>
          <p className="text-charcoal leading-relaxed">
            Jacki started her career through Teach For America and spent over a
            decade as a special education teacher in New York City and Washington
            D.C. public schools. She has worked as a department chair, learning
            specialist, and executive functioning coach across a wide range of
            schools and settings.
          </p>
          <p className="text-charcoal leading-relaxed">
            Her sessions are built around the individual student. She pulls from
            school records, IEPs, and family input to figure out what actually
            works, then builds from there.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { number: "10+", label: "Years Teaching" },
              { number: "K–12", label: "All Grade Levels" },
              { number: "All", label: "Subjects Covered" },
              { number: "NYC", label: "In-Person & Online" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-blush rounded-xl p-4">
                <p className="text-navy font-heading text-2xl font-bold">{number}</p>
                <p className="text-charcoal text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="border border-navy text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors w-fit mt-2"
          >
            More About Jacki
          </Link>
        </div>

      </div>
    </section>
  );
}