"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, BookOpen, Calculator, GraduationCap } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const services = [
  {
    icon: Brain,
    title: "Executive Functioning Coaching",
    blurb: "Planning, organization, time management, and follow-through.",
  },
  {
    icon: BookOpen,
    title: "Special Education Support",
    blurb: "IEP-informed tutoring built around each student's learning profile.",
  },
  {
    icon: Calculator,
    title: "Academic Tutoring",
    blurb: "All subjects, K–12, differentiated to how each student learns.",
  },
  {
    icon: GraduationCap,
    title: "College Readiness",
    blurb: "Building independence and self-advocacy for life after high school.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-blush py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            What Jacki Offers
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
            Services
          </h2>
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
                  <h3 className="text-navy text-lg font-heading">{title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{blurb}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-14">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/services"
              className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}