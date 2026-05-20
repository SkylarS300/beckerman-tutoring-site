"use client";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function AboutTeaser() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Photo */}
        <FadeIn direction="right" className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-blush" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border-2 border-sage" />
            <div className="absolute inset-0 flex items-center justify-center font-heading text-charcoal text-lg text-center p-8">
              {/* JACKI: Your photo goes here */}
              Jacki's photo goes here
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn direction="left" className="flex-1 flex flex-col gap-6">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            About Jacki
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
            {/* JACKI: A short punchy line about yourself. */}
            Ten years in the classroom. Now working one on one.
          </h2>
          <p className="text-charcoal leading-relaxed">
            {/* JACKI: 2-3 sentences about yourself and your background. Keep it personal. */}
            Jacki started her career through Teach For America and spent over a
            decade as a special education teacher in New York City and Washington
            D.C. before moving into one on one coaching and learning support.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-fit">
            <Link
              href="/about"
              className="border border-navy text-navy px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors block"
            >
              More About Jacki
            </Link>
          </motion.div>
        </FadeIn>

      </div>
    </section>
  );
}