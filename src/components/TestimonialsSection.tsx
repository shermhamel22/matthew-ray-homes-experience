import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James T.",
    text: "Matthew and his team completely transformed our kitchen. The attention to detail on the tile backsplash and countertops was incredible. They finished on time and the result exceeded our expectations. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "David M.",
    text: "We gutted our 1970s ranch and Matthew Ray Homes turned it into a modern, open-concept dream home. Their communication was outstanding throughout the entire process. Truly a top-tier contractor.",
    rating: 5,
  },
  {
    name: "Linda & Robert K.",
    text: "Our master bathroom looks like it belongs in a luxury hotel. The tile work is flawless, and they helped us choose finishes that elevated the entire space. Highly recommend to anyone looking for quality work.",
    rating: 5,
  },
  {
    name: "Michael P.",
    text: "From the initial consultation to the final walkthrough, the entire experience was seamless. They built a gorgeous home addition that perfectly matches our existing home. Professional, reliable, and talented.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-amber mb-3">
            What Our Clients Are Saying
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Client Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-secondary rounded-2xl p-8 md:p-10 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-amber/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-[15px]">
                "{t.text}"
              </p>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
