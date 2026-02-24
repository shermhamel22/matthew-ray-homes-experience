import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroLiving from "@/assets/hero-living.jpg";

const slides = [
  {
    image: heroKitchen,
    label: "Kitchen Remodeling",
    title: "Crafting Kitchens\nThat Inspire",
    alt: "Luxury kitchen remodel with marble countertops",
  },
  {
    image: heroBathroom,
    label: "Bathroom Remodeling",
    title: "Spa-Worthy\nBathroom Retreats",
    alt: "Luxury bathroom with freestanding tub and marble walls",
  },
  {
    image: heroLiving,
    label: "Whole-Home Renovations",
    title: "Complete Home\nTransformations",
    alt: "Luxury whole home renovation with open living room",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="gold-line mb-6" />
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
          {slide.label}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground leading-[1.1] whitespace-pre-line mb-8">
          {slide.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors duration-300 w-fit"
          >
            Get a Free Estimate
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:border-primary hover:text-primary transition-all duration-300 w-fit"
          >
            Our Services
          </a>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-500 ${
                i === current ? "w-12 bg-primary" : "w-6 bg-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 5-star badge */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 z-10 flex items-center gap-2 text-foreground/70">
        <div className="flex gap-0.5 text-primary">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-sm">★</span>
          ))}
        </div>
        <span className="text-xs tracking-wider font-sans">5.0 Rated</span>
      </div>
    </section>
  );
};

export default HeroSection;
