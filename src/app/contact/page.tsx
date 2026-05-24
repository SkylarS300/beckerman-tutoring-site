"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    grade: "",
    subjects: "",
    goals: "",
    heardAbout: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email Jacki directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <section className="bg-cream py-24 px-6">
          <FadeIn className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-navy text-4xl md:text-5xl font-heading leading-tight">
              {/* JACKI: A welcoming headline for the contact page. */}
              Your contact headline goes here.
            </h1>
            <p className="text-charcoal leading-relaxed">
              {/* JACKI: 1-2 sentences telling parents what to expect after they fill out the form. How soon will you follow up? */}
              Your contact intro goes here.
            </p>
          </FadeIn>
        </section>

        {/* Form */}
        <section className="bg-blush py-24 px-6">
          <FadeIn className="max-w-2xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-cream rounded-2xl p-12 text-center flex flex-col gap-4"
              >
                <h2 className="text-navy text-3xl font-heading">
                  {/* JACKI: A warm confirmation message after someone submits the form. */}
                  Got it. Talk soon.
                </h2>
                <p className="text-charcoal leading-relaxed">
                  {/* JACKI: A follow-up line telling them what happens next. */}
                  Your confirmation message goes here.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="bg-cream rounded-2xl p-8 md:p-12 flex flex-col gap-6"
              >
                <h2 className="text-navy text-2xl font-heading">
                  Tell Jacki about your child
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-charcoal text-sm font-medium">Your name</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                      placeholder="Parent or guardian name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-charcoal text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-charcoal text-sm font-medium">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                    placeholder="Optional"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-charcoal text-sm font-medium">Student's name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                      placeholder="First name is fine"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-charcoal text-sm font-medium">Grade</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                    >
                      <option value="">Select a grade</option>
                      {["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "College"].map((g) => (
                        <option key={g} value={g}>
                          {g === "K" ? "Kindergarten" : g === "College" ? "College" : `Grade ${g}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-charcoal text-sm font-medium">
                    What subjects or areas do you need support with?
                  </label>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                    placeholder="e.g. Math, reading, executive functioning, all subjects"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-charcoal text-sm font-medium">
                    What are your goals for your child?
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors resize-none"
                    placeholder="Share as much or as little as you'd like. The more context the better."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-charcoal text-sm font-medium">
                    How did you hear about Jacki?
                  </label>
                  <input
                    type="text"
                    name="heardAbout"
                    value={formData.heardAbout}
                    onChange={handleChange}
                    className="border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-cream focus:outline-none focus:border-sage transition-colors"
                    placeholder="Referral, Google, social media, etc."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            )}
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}