import Marquee from "react-fast-marquee";
import { GraduationCap, FileText, Brain, School, Heart } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Teach For America Alum" },
  { icon: FileText, label: "Certified Special Education Specialist" },
  { icon: Brain, label: "Executive Functioning Specialist" },
  { icon: School, label: "10+ Years in NYC & DC Schools" },
  { icon: Heart, label: "M.Ed — Master of Education" },
];

export default function TrustBar() {
  const doubled = [...credentials, ...credentials];

  return (
    <section className="bg-charcoal py-4 overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {doubled.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center text-cream mx-8">
            <Icon size={16} strokeWidth={1.75} className="text-navy mr-2" />
            <span className="text-xs font-medium tracking-wide">{label}</span>
            <span className="ml-8 text-cream/20">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}