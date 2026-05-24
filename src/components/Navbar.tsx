"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full bg-cream border-b border-blush px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex flex-col leading-tight">
        <span className="font-heading text-navy text-xl font-semibold tracking-tight">
          BeckermanEDU
        </span>
        <span className="text-sage text-xs font-medium tracking-wide">
          Executive Functioning & Academic Support
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
        <Link href="/about" className="hover:text-navy transition-colors">About</Link>
        <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
        <Link href="/faq" className="hover:text-navy transition-colors">FAQ</Link>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="bg-navy text-cream px-5 py-2 rounded-full hover:bg-sage transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-charcoal block" />
        <span className="w-6 h-0.5 bg-charcoal block" />
        <span className="w-6 h-0.5 bg-charcoal block" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 w-full bg-cream border-b border-blush flex flex-col items-center gap-6 py-8 text-charcoal font-medium md:hidden"
        >
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-navy text-cream px-6 py-2 rounded-full"
          >
            Schedule a Free Consultation
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}