"use client";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, TrendingUp } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Consultation",
    description:
      "JACKI: Describe what happens on the first call. What do you talk about? What should a parent expect?",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Custom Learning Plan",
    description:
      "JACKI: Describe how you build a plan for each student. What information do you pull from? How long does it take?",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Ongoing Support & Growth",
    description:
      "JACKI: Describe what ongoing sessions look like. How do you communicate with families along the way?",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
            How it works
          </h2>
          <p className="text-charcoal mt-4 max-w-xl mx-auto leading-relaxed">
            {/* JACKI: One sentence summarizing your process in your own words. */}
            Your process summary goes here.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <StaggerItem key={step}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm border border-blush h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-blush p-3 rounded-xl">
                    <Icon size={22} strokeWidth={1.75} className="text-navy" />
                  </div>
                  <span className="font-heading text-4xl text-blush font-bold">
                    {step}
                  </span>
                </div>
                <h3 className="text-navy text-xl font-heading">{title}</h3>
                <p className="text-charcoal leading-relaxed text-sm">{description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}