import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James T.",
    project: "Kitchen Remodel",
    text: "Matthew and his team completely transformed our kitchen. The attention to detail on the tile backsplash and countertops was incredible. They finished on time and the result exceeded our expectations.",
  },
  {
    name: "David M.",
    project: "Whole-Home Renovation",
    text: "We gutted our 1970s ranch and Matthew Ray Homes turned it into a modern, open-concept dream home. Their communication was outstanding throughout the entire process.",
  },
  {
    name: "Linda & Robert K.",
    project: "Bathroom Remodel",
    text: "Our master bathroom looks like it belongs in a luxury hotel. The tile work is flawless, and they helped us choose finishes that elevated the entire space. Highly recommend.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border p-8 md:p-10 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex gap-0.5 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-8 font-sans">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif text-foreground text-base">{t.name}</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase font-sans mt-1">
                  {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
