import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, Brain, School, FileText, Heart } from "lucide-react";

const timeline = [
  {
    years: "2022 – Present",
    role: "Associate Director & Learning Specialist",
    place: "Pediatric Assessment and Learning Support (PALS), NYC",
    description:
      "Provides one on one and small group coaching for students working on executive functioning, foundational skills, and self-advocacy. Builds customized learning plans pulling from family, school, and clinical input.",
  },
  {
    years: "2022 – 2023",
    role: "Special Education Learning Specialist",
    place: "Frank Sinatra School of the Arts, Queens NY",
    description:
      "Co-taught physics and chemistry in general education settings while providing specialized support for students with IEPs.",
  },
  {
    years: "2019 – 2022",
    role: "Special Education Teacher",
    place: "Simon Baruch Junior High School, NYC",
    description:
      "Taught all subjects in SETSS and self-contained settings for students with a range of learning profiles and disabilities.",
  },
  {
    years: "2013 – 2019",
    role: "Special Education Teacher & Department Chair",
    place: "Anacostia Senior High School, Washington D.C.",
    description:
      "Taught all subjects and led the special education department for three years. Ran professional development on differentiation, rigor, and classroom management for staff.",
  },
  {
    years: "2012 – 2015",
    role: "Special Education Teacher",
    place: "Teach For America",
    description:
      "Began her teaching career through Teach For America, working in under-resourced schools and developing the foundational skills that have driven her work ever since.",
  },
];

const approach = [
  {
    icon: Heart,
    title: "Strength-based",
    description:
      "Sessions start with what a student is good at, not what they're behind on. Building from strengths creates momentum.",
  },
  {
    icon: FileText,
    title: "IEP-informed",
    description:
      "Jacki reads the paperwork. She pulls from IEPs, school reports, and evaluations to make sure sessions are actually aligned with what each student needs.",
  },
  {
    icon: Brain,
    title: "Whole-child",
    description:
      "Academic struggles rarely exist in isolation. Jacki looks at the full picture including confidence, anxiety, home environment, and social factors.",
  },
  {
    icon: GraduationCap,
    title: "Independence-focused",
    description:
      "The goal is never dependency on a tutor. Every session is building toward a student who can manage their own learning.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-cream py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

            {/* Photo */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-blush" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-sage" />
                <div className="absolute inset-0 flex items-center justify-center font-heading text-charcoal text-lg text-center p-8">
                  Jacki's photo goes here
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                About Jacki
              </span>
              <h1 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
                She's been in the classroom. She knows what it actually takes.
              </h1>
              <p className="text-charcoal leading-relaxed">
                Jacki Beckerman spent over a decade as a special education
                teacher in New York City and Washington D.C. public schools
                before moving into one on one coaching and learning support.
                She has worked with students across every grade level, in
                self-contained classrooms, co-teaching settings, and
                private coaching practices.
              </p>
              <p className="text-charcoal leading-relaxed">
                She started through Teach For America and stayed because
                she genuinely loves this work. Her students tend to stick
                with her for years.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-blush py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                Philosophy
              </span>
              <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
                How Jacki works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-cream rounded-2xl p-8 flex flex-col gap-4 border border-white shadow-sm"
                >
                  <div className="bg-navy p-3 rounded-xl w-fit">
                    <Icon size={22} strokeWidth={1.75} className="text-cream" />
                  </div>
                  <h3 className="text-navy text-xl font-heading">{title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-cream py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                Experience
              </span>
              <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
                Background
              </h2>
            </div>
            <div className="flex flex-col gap-0">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-sage mt-1 shrink-0" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 bg-blush flex-1 my-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-1 pb-10">
                    <span className="text-sage text-sm font-medium">
                      {item.years}
                    </span>
                    <h3 className="text-navy font-heading text-xl">
                      {item.role}
                    </h3>
                    <span className="text-charcoal/60 text-sm">{item.place}</span>
                    <p className="text-charcoal text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-24 px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="text-cream text-4xl md:text-5xl font-heading leading-tight">
              Want to see if it's a good fit?
            </h2>
            <p className="text-cream/70 leading-relaxed max-w-xl">
              The first call is free and there's no commitment. Just a
              conversation about your child and what they need.
            </p>
            <Link
              href="/contact"
              className="bg-cream text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors"
            >
              Book a Free Consult
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}