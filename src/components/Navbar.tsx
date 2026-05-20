"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-cream border-b border-blush px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo / Name */}
      <Link href="/" className="font-heading text-navy text-xl font-semibold tracking-tight">
        Beckerman Learning
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
        <Link href="/about" className="hover:text-sage transition-colors">About</Link>
        <Link href="/services" className="hover:text-sage transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-sage transition-colors">Contact</Link>
        <Link
          href="/contact"
          className="bg-navy text-cream px-5 py-2 rounded-full hover:bg-sage transition-colors"
        >
          Book a Free Consult
        </Link>
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
        <div className="absolute top-full left-0 w-full bg-cream border-b border-blush flex flex-col items-center gap-6 py-8 text-charcoal font-medium md:hidden">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-navy text-cream px-6 py-2 rounded-full"
          >
            Book a Free Consult
          </Link>
        </div>
      )}
    </nav>
  );
}