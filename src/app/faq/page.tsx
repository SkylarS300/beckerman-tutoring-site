"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const faqs = [
  {
    question: "Do you offer a free consultation?",
    answer: "JACKI: Answer this in your own words. What happens on that first call?",
  },
  {
    question: "What age groups do you work with?",
    answer: "JACKI: Answer this. What is the youngest student you typically take on? Do you work with college students?",
  },
  {
    question: "Do you work with students who have IEPs?",
    answer: "JACKI: Answer this in your own words.",
  },
  {
    question: "What is the difference between tutoring and executive functioning coaching?",
    answer: "JACKI: You'll know the answer far better than I will.",
  },
  {
    question: "Do you offer online sessions?",
    answer: "JACKI: Answer this. What platform do you use? Is the experience different from in person?",
  },
  {
    question: "How are sessions structured?",
    answer: "JACKI: Describe what a typical session looks like from start to finish.",
  },
  {
    question: "How often do students typically meet?",
    answer: "JACKI: Answer this. What do you usually recommend and why?",
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-24 px-6">
          <FadeIn className="max-w-3xl mx-auto text-center flex flex-col gap-6 mb-16">
            <span className="text-navy font-medium text-sm uppercase tracking-widest">
              FAQ
            </span>
            <h1 className="text-charcoal text-4xl md:text-5xl font-heading leading-tight">
              Common questions
            </h1>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="border border-blush rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center px-6 py-5 text-left bg-cream hover:bg-blush transition-colors"
                    >
                      <span className="text-charcoal font-medium text-sm">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-navy font-bold text-lg ml-4"
                      >
                        +
                      </motion.span>
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-5 bg-cream border-t border-blush"
                      >
                        <p className="text-sage text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}