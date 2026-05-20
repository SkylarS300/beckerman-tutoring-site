"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Brain, FileText, Heart } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

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
      "JACKI: Describe what strength-based means to you in practice. What does this look like in a session?",
  },
  {
    icon: FileText,
    title: "IEP-informed",
    description:
      "JACKI: Describe how you use a student's IEP. What do you actually do with that documentation?",
  },
  {
    icon: Brain,
    title: "Whole-child",
    description:
      "JACKI: Describe what whole-child means to you. What factors beyond academics do you consider?",
  },
  {
    icon: GraduationCap,
    title: "Independence-focused",
    description:
      "JACKI: Describe your goal around student independence. What does success look like long term?",
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
            <FadeIn direction="right" className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-blush" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-sage" />
                <div className="absolute inset-0 flex items-center justify-center font-heading text-charcoal text-lg text-center p-8">
                  {/* JACKI: Your photo goes here */}
                  Jacki's photo goes here
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15} className="flex-1 flex flex-col gap-6">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                About Jacki
              </span>
              <h1 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
                {/* JACKI: A headline that captures who you are in one line. */}
                Your headline goes here.
              </h1>
              <p className="text-charcoal leading-relaxed">
                {/* JACKI: 2-3 sentences about your background. Where did you start? What brought you to this work? */}
                Your bio goes here.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-blush py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-16">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                Philosophy
              </span>
              <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
                How Jacki works
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-cream rounded-2xl p-8 flex flex-col gap-4 border border-white shadow-sm h-full"
                  >
                    <div className="bg-navy p-3 rounded-xl w-fit">
                      <Icon size={22} strokeWidth={1.75} className="text-cream" />
                    </div>
                    <h3 className="text-navy text-xl font-heading">{title}</h3>
                    <p className="text-charcoal text-sm leading-relaxed">{description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-cream py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                Experience
              </span>
              <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
                Background
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-0">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="w-3 h-3 rounded-full bg-sage mt-1 shrink-0"
                      />
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 bg-blush flex-1 my-1" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 pb-10">
                      <span className="text-sage text-sm font-medium">{item.years}</span>
                      <h3 className="text-navy font-heading text-xl">{item.role}</h3>
                      <span className="text-charcoal/60 text-sm">{item.place}</span>
                      <p className="text-charcoal text-sm leading-relaxed mt-2">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Inline CTA nudge — no redundant big section */}
        <section className="bg-navy py-16 px-6">
          <FadeIn className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-cream text-lg font-heading">
              Want to see if it's a good fit?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="bg-cream text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors block whitespace-nowrap"
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