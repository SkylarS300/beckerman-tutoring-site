import { MessageCircle, ClipboardList, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Consultation",
    description:
      "We start with a no-pressure conversation about your child's unique needs, goals, and learning style. No commitment required.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Custom Learning Plan",
    description:
      "Jacki builds a personalized roadmap drawing from school records, IEPs, and family input—targeting exactly where support is needed most.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Ongoing Support & Growth",
    description:
      "Regular 1:1 or small group sessions build skills, confidence, and independence—with consistent communication to families along the way.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-navy text-4xl md:text-5xl font-heading mt-3">
            How it works
          </h2>
          <p className="text-charcoal mt-4 max-w-xl mx-auto leading-relaxed">
            Every student is different. The process is simple—the results are lasting.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm border border-blush"
            >
              <div className="flex items-center justify-between">
                <div className="bg-blush p-3 rounded-xl">
                  <Icon size={22} strokeWidth={1.75} className="text-navy" />
                </div>
                <span className="font-heading text-4xl text-blush font-bold">
                  {step}
                </span>
              </div>
              <h3 className="text-navy text-xl font-heading">{title}</h3>
              <p className="text-charcoal leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}