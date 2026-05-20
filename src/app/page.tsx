import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesPreview from "@/components/ServicesPreview";
import AboutTeaser from "@/components/AboutTeaser";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ServicesPreview />
      <AboutTeaser />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}