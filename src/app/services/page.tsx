"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, BookOpen, Calculator, GraduationCap, Monitor, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const services = [
  {
    icon: Brain,
    title: "Executive Functioning Coaching",
    description:
      "JACKI: Describe this service in your own words. Who is it for? What do sessions focus on? What does a student walk away with?",
    details: [
      "JACKI: Key thing you work on in this service",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
    ],
    tags: ["ADHD", "All Ages", "Online & In-Person"],
  },
  {
    icon: BookOpen,
    title: "Special Education Support",
    description:
      "JACKI: Describe this service in your own words. What makes your approach to special ed support different?",
    details: [
      "JACKI: Key thing you work on in this service",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
    ],
    tags: ["IEP", "Learning Disabilities", "K–12"],
  },
  {
    icon: Calculator,
    title: "Academic Tutoring",
    description:
      "JACKI: Describe this service. What subjects do you cover? How do you approach a student who is behind vs one who needs enrichment?",
    details: [
      "JACKI: Key thing you work on in this service",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
    ],
    tags: ["All Subjects", "K–12", "Test Prep"],
  },
  {
    icon: GraduationCap,
    title: "College Readiness",
    description:
      "JACKI: Describe this service. What do high school students need that younger students don't? What does the transition to college look like with your support?",
    details: [
      "JACKI: Key thing you work on in this service",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
    ],
    tags: ["High School", "College Prep", "Independence"],
  },
  {
    icon: Monitor,
    title: "Online Sessions",
    description:
      "JACKI: Describe what online sessions look like. What platform do you use? How do you keep students engaged remotely?",
    details: [
      "JACKI: Key thing about your online sessions",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
    ],
    tags: ["Remote", "Flexible", "All Ages"],
  },
  {
    icon: Users,
    title: "Small Group Coaching",
    description:
      "JACKI: Describe small group sessions. How many students? What is the focus? How do you keep it individualized within a group?",
    details: [
      "JACKI: Key thing about your small group sessions",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
      "JACKI: Another key thing",
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
          <FadeIn className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              What Jacki Offers
            </span>
            <h1 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
              {/* JACKI: A headline for the services page. What is the throughline of everything you offer? */}
              Your services headline goes here.
            </h1>
            <p className="text-charcoal leading-relaxed">
              {/* JACKI: 2 sentences describing your overall approach to services. What makes the way you work different? */}
              Your services intro goes here.
            </p>
          </FadeIn>
        </section>

        {/* Services */}
        <section className="bg-blush py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="flex flex-col gap-10">
              {services.map(({ icon: Icon, title, description, details, tags }) => (
                <StaggerItem key={title}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 border border-white shadow-sm"
                  >
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
                    <div className="md:w-1/2 flex flex-col gap-3 justify-center">
                      {details.map((point) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                          <p className="text-charcoal text-sm leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
        
{/* CTA */}
<section className="bg-navy py-24 px-6">
  <FadeIn className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
    <h2 className="text-cream text-4xl md:text-5xl font-heading leading-tight">
      Not sure which service fits?
    </h2>
    <p className="text-cream/70 leading-relaxed max-w-xl">
      The free consultation is the right place to start. Jacki will
      figure out what makes sense based on your child's specific
      situation.
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Link
        href="/contact"
        className="bg-cream text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors block"
      >
        Book a Free Consult
      </Link>
    </motion.div>
  </FadeIn>
</section>

      </main>
      <Footer />
    </>
  );
}