"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-cream min-h-[90vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sage font-medium text-sm uppercase tracking-widest"
          >
            NYC-Based · Online & In-Person
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy text-5xl md:text-6xl font-heading leading-tight"
          >
            {/* JACKI: This is your headline. Replace with something in your own words. */}
            Every student has a way they learn best.{" "}
            <span className="text-sage">Let's find yours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-charcoal text-lg leading-relaxed max-w-xl"
          >
            {/* JACKI: Write 2-3 sentences introducing yourself and who you work with. */}
            Jacki Beckerman is a certified special education specialist and
            executive functioning coach with 10+ years helping students
            K–12 — especially those with learning disabilities, ADHD, and IEPs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="block bg-navy text-cream text-center px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors"
              >
                Book a Free Consult
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="block border border-navy text-navy text-center px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors"
              >
                See Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-blush flex items-center justify-center text-charcoal text-center p-8 font-heading text-xl">
            {/* JACKI: Your photo goes here */}
            Jacki's photo goes here
          </div>
        </motion.div>

      </div>
    </section>
  );
}