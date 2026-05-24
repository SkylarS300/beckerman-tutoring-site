"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutTeaser() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        <FadeIn direction="right" className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-navy shadow-xl">
              <Image
                src="/images/jacki.png"
                alt="Jacki Beckerman"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border-2 border-blush -z-10" />
          </div>
        </FadeIn>

        <FadeIn direction="left" className="flex-1 flex flex-col gap-6">
          <span className="text-navy font-medium text-sm uppercase tracking-widest">
            About Jacki
          </span>
          <h2 className="text-charcoal text-4xl md:text-5xl font-heading leading-tight">
            {/* JACKI: A short punchy headline about yourself. One line. */}
            Your headline goes here.
          </h2>
          <p className="text-sage leading-relaxed">
            {/* JACKI: 2-3 sentences about your background. Keep it personal and direct. */}
            Your intro goes here.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-fit">
            <Link
              href="/about"
              className="border border-charcoal text-charcoal px-8 py-4 rounded-full font-medium hover:bg-blush transition-colors block"
            >
              More About Jacki
            </Link>
          </motion.div>
        </FadeIn>

      </div>
    </section>
  );
}