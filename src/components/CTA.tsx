"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="bg-blush py-24 px-6">
      <FadeIn className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-sage font-medium text-sm uppercase tracking-widest">
          Get Started
        </span>
        <h2 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
          {/* JACKI: A closing line that sounds like you. Something warm and direct. */}
          Your closing line goes here.
        </h2>
        <p className="text-charcoal leading-relaxed max-w-xl">
          {/* JACKI: 1-2 sentences about the free consult. What should a parent expect from that first call? */}
          Your description goes here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="block bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
            >
              Book a Free Consult
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="block border border-navy text-navy px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              See Services
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}