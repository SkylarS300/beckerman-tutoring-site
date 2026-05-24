"use client";
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
    blurb: "Personalized support for students who struggle with organization, time management, task initiation, study strategies, planning, or maintaining confidence in school.",
  },
  {
    icon: BookOpen,
    title: "Specialized Learning Support",
    blurb: "Individualized academic support in Math, ELA, reading comprehension, writing, and study strategies tailored to each student's learning profile and needs.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-blush py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-navy font-medium text-sm uppercase tracking-widest">
            What Jacki Offers
          </span>
          <h2 className="text-charcoal text-4xl md:text-5xl font-heading mt-3">
            Helping students feel more organized, capable, and confident in school.
          </h2>
          <p className="text-sage mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether your child needs support with academics, executive functioning,
            study skills, or confidence, sessions are personalized to meet them
            where they are and help them move forward successfully.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, blurb }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.25 }}
                className="bg-cream rounded-2xl p-8 flex items-start gap-5 border border-white shadow-sm"
              >
                <div className="bg-navy p-3 rounded-xl shrink-0">
                  <Icon size={20} strokeWidth={1.75} className="text-cream" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-charcoal text-lg font-heading">{title}</h3>
                  <p className="text-sage text-sm leading-relaxed">{blurb}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-14">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/services"
              className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-charcoal transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}