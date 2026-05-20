import { GraduationCap, FileText, Brain, School, Heart } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Teach For America Alum" },
  { icon: FileText, label: "Certified Special Education Specialist" },
  { icon: Brain, label: "Executive Functioning Coach" },
  { icon: School, label: "10+ Years in NYC & DC Schools" },
  { icon: Heart, label: "Strength-Based & Whole-Child Approach" },
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {credentials.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-cream">
            <Icon size={18} strokeWidth={1.75} className="text-sage" />
            <span className="text-sm font-medium tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}