"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "My son has ADHD and had been struggling in school for years. After a few months with Jacki he started turning in assignments on time and actually felt good about going to school. I wish we had found her sooner.",
    name: "Parent of a 7th grader",
    detail: "Executive Functioning Coaching",
  },
  {
    quote:
      "Jacki took the time to actually read my daughter's IEP and build sessions around it. She didn't just drill her on content. She taught her how to study, how to ask for help, and how to advocate for herself.",
    name: "Parent of a 9th grader",
    detail: "Special Education Support",
  },
  {
    quote:
      "I came to Jacki junior year completely overwhelmed. She helped me get organized, stay on top of deadlines, and actually understand the material instead of just memorizing it. I got into my first choice school.",
    name: "High school student",
    detail: "Academic Tutoring & College Readiness",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeTo = (index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeTo((current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () =>
    changeTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    changeTo((current + 1) % testimonials.length);

  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">

        {/* Header */}
        <div className="text-center">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            What Families Say
          </span>
          <h2 className="text-cream text-4xl md:text-5xl font-heading mt-3">
            Real results
          </h2>
        </div>

        {/* Card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 300ms ease, transform 300ms ease",
          }}
          className="bg-cream rounded-2xl p-10 md:p-14 w-full flex flex-col gap-6 min-h-[260px] justify-between"
        >
          <p className="text-charcoal text-lg leading-relaxed">
            "{testimonials[current].quote}"
          </p>
          <div>
            <p className="text-navy font-semibold">{testimonials[current].name}</p>
            <p className="text-sage text-sm mt-1">{testimonials[current].detail}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => changeTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-sage w-6" : "bg-cream/30 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}