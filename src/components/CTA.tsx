"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="bg-navy py-24 px-6">
      <FadeIn className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-cream/60 font-medium text-sm uppercase tracking-widest">
          Get Started
        </span>
        <h2 className="text-cream text-4xl md:text-5xl font-heading leading-tight">
          Not sure where to start?
        </h2>
        <p className="text-cream/70 leading-relaxed max-w-xl">
          The free consultation is an opportunity to discuss your child's academic
          needs, executive functioning challenges, learning style, and goals so we
          can determine the most supportive path forward together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="block bg-cream text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="block border border-cream text-cream px-8 py-4 rounded-full font-medium hover:bg-cream/10 transition-colors"
            >
              See Services
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}