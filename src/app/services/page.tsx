"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, BookOpen } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const services = [
  {
    icon: Brain,
    title: "Executive Functioning Coaching",
    description:
      "Personalized support for students who may struggle with organization, time management, task initiation, study strategies, planning, or maintaining confidence in school. Sessions focus on building practical systems and sustainable habits that help students feel more independent, capable, and in control academically.",
    details: [
      "Organization & time management",
      "Study skills & accountability",
      "Task initiation & planning",
      "Confidence & self-advocacy",
      "Personalized systems & strategies",
    ],
    tags: ["EF", "Time Management", "Grades 4–12", "Virtual & In-Person"],
  },
  {
    icon: BookOpen,
    title: "Specialized Learning Support",
    description:
      "Individualized academic support in Math, ELA, reading comprehension, writing, and study strategies tailored to each student's learning profile and needs. Sessions are designed to strengthen foundational skills, reduce overwhelm, and help students approach school with greater confidence and independence.",
    details: [
      "Math & problem-solving support",
      "Reading comprehension & writing",
      "Test prep & study strategies",
      "Support for diverse learners",
      "Confidence-building through individualized instruction",
    ],
    tags: ["Grades 4–12", "ADHD/LD/Anxiety", "Math & ELA", "Virtual & In-Person"],
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
            <span className="text-navy font-medium text-sm uppercase tracking-widest">
              What Jacki Offers
            </span>
            <h1 className="text-charcoal text-4xl md:text-5xl font-heading leading-tight">
              Helping students feel more organized, capable, and confident in school.
            </h1>
            <p className="text-sage leading-relaxed">
              Whether your child needs support with academics, executive functioning,
              study skills, or confidence, sessions are personalized to meet them
              where they are and help them move forward successfully.
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
                      <h2 className="text-charcoal text-2xl font-heading">{title}</h2>
                      <p className="text-sage text-sm leading-relaxed">{description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-blush text-charcoal text-xs font-medium px-3 py-1 rounded-full border border-charcoal/10"
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
                          <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />
                          <p className="text-sage text-sm leading-relaxed">{point}</p>
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
              Not sure where to start?
            </h2>
            <p className="text-cream/70 leading-relaxed max-w-xl">
              The free consultation is an opportunity to discuss your child's academic
              needs, executive functioning challenges, learning style, and goals so we
              can determine the most supportive path forward together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="bg-cream text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors block"
              >
                Schedule a Free Consultation
              </Link>
            </motion.div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}