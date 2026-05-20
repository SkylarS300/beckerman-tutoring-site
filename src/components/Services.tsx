import Link from "next/link";
import { Brain, BookOpen, Calculator, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Executive Functioning Coaching",
    description:
      "Building the skills behind the skills—planning, organization, time management, and self-regulation strategies tailored to each student.",
    tags: ["ADHD", "Study Skills", "All Ages"],
  },
  {
    icon: BookOpen,
    title: "Special Education Support",
    description:
      "IEP-informed tutoring that meets students exactly where they are. Specialized strategies for learning disabilities, reading, and writing.",
    tags: ["IEP", "Learning Disabilities", "K–12"],
  },
  {
    icon: Calculator,
    title: "Academic Tutoring",
    description:
      "All subjects covered—math, science, English, and more. Lessons are differentiated to match each student's learning profile.",
    tags: ["All Subjects", "K–12", "Test Prep"],
  },
  {
    icon: GraduationCap,
    title: "College Readiness",
    description:
      "Helping older students build independence, manage coursework, and develop the self-advocacy skills they need to thrive beyond high school.",
    tags: ["High School", "College Prep", "Independence"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-blush py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            What Jacki Offers
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
            Services
          </h2>
          <p className="text-charcoal mt-4 max-w-xl mx-auto leading-relaxed">
            Every service is built around the whole child—not just the grade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="bg-cream rounded-2xl p-8 flex flex-col gap-4 border border-white shadow-sm"
            >
              <div className="bg-navy p-3 rounded-xl w-fit">
                <Icon size={22} strokeWidth={1.75} className="text-cream" />
              </div>
              <h3 className="text-navy text-xl font-heading">{title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blush text-navy text-xs font-medium px-3 py-1 rounded-full border border-navy/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}