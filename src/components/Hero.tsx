"use client";
import Link from "next/link";
import Image from "next/image";
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
            NYC-Based · Online & In-Person · Grades 4–12
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal text-5xl md:text-6xl font-heading leading-tight"
          >
            Where executive functioning meets{" "}
            <span className="text-navy">personalized academic support.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sage text-lg leading-relaxed max-w-xl"
          >
            Through individualized coaching and tutoring, students strengthen
            executive functioning skills, improve academic performance, and build
            greater confidence, organization, and independence.
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
                className="block bg-navy text-cream text-center px-8 py-4 rounded-full font-medium hover:bg-charcoal transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="block border border-charcoal text-charcoal text-center px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors"
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
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-navy shadow-xl">
            <Image
              src="/images/jacki.png"
              alt="Jacki Beckerman"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}