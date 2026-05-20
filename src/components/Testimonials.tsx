"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "JACKI: Paste a real testimonial here from a parent or student. If you don't have one yet, ask a past student or family you've worked with.",
    name: "JACKI: Parent or student title e.g. Parent of a 7th grader",
    detail: "JACKI: Which service did they use? e.g. Executive Functioning Coaching",
  },
  {
    quote:
      "JACKI: Paste a second testimonial here.",
    name: "JACKI: Parent or student title",
    detail: "JACKI: Service name",
  },
  {
    quote:
      "JACKI: Paste a third testimonial here.",
    name: "JACKI: Parent or student title",
    detail: "JACKI: Service name",
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
        <div className="text-center">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            What Families Say
          </span>
          <h2 className="text-cream text-4xl md:text-5xl font-heading mt-3">
            Real results
          </h2>
        </div>

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

        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
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