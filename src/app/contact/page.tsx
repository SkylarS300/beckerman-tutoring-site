"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const faqs = [
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes. The first call is always free. It's a conversation about your child, what they're working through, and whether Jacki is the right fit. No commitment required.",
  },
  {
    question: "What age groups do you work with?",
    answer:
      "Jacki works with students from elementary school through high school and into college transition. The youngest students she typically takes on are in 2nd or 3rd grade.",
  },
  {
    question: "Do you work with students who have IEPs?",
    answer:
      "Yes. Jacki has spent her entire career in special education. She reads IEPs, understands accommodations, and builds sessions around what each student's documentation says they need.",
  },
  {
    question: "What is the difference between tutoring and executive functioning coaching?",
    answer:
      "Tutoring focuses on specific subject content. Executive functioning coaching focuses on the skills behind learning — planning, organization, time management, and follow-through. Many students need both and Jacki can address both within the same engagement.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. All services are available fully online over video call. Students anywhere in the country can work with Jacki.",
  },
  {
    question: "How are sessions structured?",
    answer:
      "Every student starts with an intake process where Jacki collects information from the family, reviews any school documentation, and identifies goals. From there sessions are built around a customized plan that gets updated as the student progresses.",
  },
  {
    question: "How often do students typically meet?",
    answer:
      "Most students meet once or twice a week. Frequency depends on the student's needs, goals, and schedule. Jacki will make a recommendation after the initial consultation.",
  },
];

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Let's figure out what your child needs.
            </h1>
            <p className="text-charcoal leading-relaxed">
              Fill out the form below and Jacki will follow up within 48 hours
              to schedule a free consultation. The more detail you can share
              the better.
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
                  Got it. Talk soon.
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Jacki will be in touch within 48 hours to set up a time
                  to talk. In the meantime feel free to look through the
                  services page if you haven't already.
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

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-sage transition-colors mt-2"
                >
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-16">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                FAQ
              </span>
              <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
                Common questions
              </h2>
            </FadeIn>
            <StaggerContainer className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="border border-blush rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center px-6 py-5 text-left bg-cream hover:bg-blush transition-colors"
                    >
                      <span className="text-navy font-medium text-sm">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sage font-bold text-lg ml-4"
                      >
                        +
                      </motion.span>
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-5 bg-cream border-t border-blush"
                      >
                        <p className="text-charcoal text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}