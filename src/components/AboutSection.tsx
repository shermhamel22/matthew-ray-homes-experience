import { Shield, Clock, Star, Eye } from "lucide-react";

const values = [
  { icon: Star, title: "5.0-Star Rated", desc: "Consistently top-rated by homeowners who trust our work." },
  { icon: Shield, title: "Full-Service", desc: "One team from concept to completion — no subcontractor shuffle." },
  { icon: Eye, title: "Detail-Obsessed", desc: "Every tile, every seam, every finish — precision is our standard." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule and deliver when we say we will." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — story */}
          <div>
            <div className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mb-8">
              Built on Craft,<br />Driven by Care
            </h2>
            <div className="space-y-5 text-secondary-foreground/80 text-base leading-relaxed font-sans">
              <p>
                Matthew Ray Homes Inc. is a full-service home remodeling company committed to
                transforming living spaces with precision, quality materials, and an unwavering
                attention to detail.
              </p>
              <p>
                From kitchens and bathrooms to whole-home renovations and additions, every project
                receives personalized care. We don't just renovate homes — we craft environments
                where families thrive.
              </p>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-background border border-border p-8 group hover:border-primary/40 transition-colors duration-300"
              >
                <v.icon className="w-5 h-5 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
