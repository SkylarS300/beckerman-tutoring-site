import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, BookOpen, Calculator, GraduationCap, Monitor, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Executive Functioning Coaching",
    description:
      "A lot of students who struggle academically aren't behind on content. They're behind on the skills that make learning possible. Jacki works with students on planning, organization, time management, task initiation, and follow-through. Sessions are practical and specific to each student's day to day challenges.",
    details: [
      "Breaking down assignments and long term projects",
      "Building routines that actually stick",
      "Managing homework, deadlines, and materials",
      "Strategies for focus and task initiation",
      "Self-monitoring and self-advocacy skills",
    ],
    tags: ["ADHD", "All Ages", "Online & In-Person"],
  },
  {
    icon: BookOpen,
    title: "Special Education Support",
    description:
      "Jacki has spent her entire career working with students who have IEPs, learning disabilities, and a range of cognitive profiles. She reads the documentation, understands the accommodations, and builds sessions that align with what each student actually needs rather than a generic approach.",
    details: [
      "IEP-informed session planning",
      "Reading and writing support",
      "Foundational skill building",
      "Learning disability specific strategies",
      "Communication with families and schools",
    ],
    tags: ["IEP", "Learning Disabilities", "K–12"],
  },
  {
    icon: Calculator,
    title: "Academic Tutoring",
    description:
      "Jacki has taught all subjects across K–12 in both general and special education settings. Whether a student needs help keeping up, catching up, or getting ahead, sessions are built around their specific gaps and learning style rather than a one size fits all curriculum.",
    details: [
      "Math, science, English, and more",
      "Test preparation and study skills",
      "Writing and essay support",
      "Subject specific foundational gaps",
      "Homework support and review",
    ],
    tags: ["All Subjects", "K–12", "Test Prep"],
  },
  {
    icon: GraduationCap,
    title: "College Readiness",
    description:
      "High school students who have had support systems their whole academic lives often hit a wall when they get to college. Jacki works with older students on building the independence, time management, and self-advocacy skills they'll need to manage their own learning when there's no one standing over them.",
    details: [
      "Managing a college course load",
      "Navigating disability services independently",
      "Long term planning and deadlines",
      "Study strategies for college level work",
      "Building routines without external structure",
    ],
    tags: ["High School", "College Prep", "Independence"],
  },
  {
    icon: Monitor,
    title: "Online Sessions",
    description:
      "All of Jacki's services are available fully online. Sessions run over video call and are just as structured and hands on as in person. Students across the country have worked with Jacki remotely.",
    details: [
      "All services available online",
      "Flexible scheduling",
      "Students anywhere in the country",
      "Same structure as in person sessions",
    ],
    tags: ["Remote", "Flexible", "All Ages"],
  },
  {
    icon: Users,
    title: "Small Group Coaching",
    description:
      "For students who benefit from peer learning, Jacki offers small group sessions focused on executive functioning and study skills. Groups are kept small so every student still gets direct attention and a plan tailored to them.",
    details: [
      "Groups of 2 to 4 students",
      "Executive functioning focus",
      "Peer accountability and collaboration",
      "Still individualized within the group",
    ],
    tags: ["Group", "Executive Functioning", "K–12"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-cream py-24 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              What Jacki Offers
            </span>
            <h1 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
              Every session is built around the student in front of her.
            </h1>
            <p className="text-charcoal leading-relaxed">
              No two students are the same. Jacki doesn't use a preset
              curriculum. She pulls from her background in special education,
              executive functioning coaching, and classroom teaching to build
              something specific to each student.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-blush py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {services.map(({ icon: Icon, title, description, details, tags }) => (
              <div
                key={title}
                className="bg-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 border border-white shadow-sm"
              >
                {/* Left */}
                <div className="flex flex-col gap-4 md:w-1/2">
                  <div className="bg-navy p-3 rounded-xl w-fit">
                    <Icon size={22} strokeWidth={1.75} className="text-cream" />
                  </div>
                  <h2 className="text-navy text-2xl font-heading">{title}</h2>
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

                {/* Right */}
                <div className="md:w-1/2 flex flex-col gap-3 justify-center">
                  {details.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                      <p className="text-charcoal text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-24 px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="text-cream text-4xl md:text-5xl font-heading leading-tight">
              Not sure which service fits?
            </h2>
            <p className="text-cream/70 leading-relaxed max-w-xl">
              The free consultation is the right place to start. Jacki will
              figure out what makes sense based on your child's specific
              situation.
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