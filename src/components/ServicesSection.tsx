import { useState } from "react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import serviceAddition from "@/assets/service-addition.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import serviceFlooring from "@/assets/service-flooring.jpg";

const services = [
  {
    title: "Kitchen Remodels",
    subtitle: "Kitchen Design & Remodels",
    desc: "We specialize in high-end kitchen design and remodeling that blends functionality with timeless elegance. Every kitchen we transform is crafted to elevate the heart of your home with thoughtful design, premium materials, and exceptional craftsmanship.",
    image: heroKitchen,
    alt: "Luxury kitchen remodel with marble countertops",
  },
  {
    title: "Bathroom Remodels",
    subtitle: "Bathroom Remodels",
    desc: "Your bathroom should be more than just functional — it should be a serene, spa-like retreat designed for comfort, luxury, and relaxation. We transform outdated spaces into custom sanctuaries that reflect your style.",
    image: heroBathroom,
    alt: "Luxury spa bathroom with freestanding tub",
  },
  {
    title: "Whole-Home Renovations",
    subtitle: "Complete Home Renovations",
    desc: "From outdated to outstanding — we handle complete whole-home transformations that breathe new life into every room, with consistent design language and impeccable finishes throughout.",
    image: heroLiving,
    alt: "Open concept luxury living space",
  },
  {
    title: "Home Additions",
    subtitle: "Home Additions",
    desc: "We specialize in expanding your home with elegance, creating luxurious new spaces that enhance both your lifestyle and your property's value — seamlessly integrated with your existing architecture.",
    image: serviceAddition,
    alt: "Modern home addition with glass walls",
  },
  {
    title: "Tile Work",
    subtitle: "Tile Work",
    desc: "From intricate mosaic patterns to large-format marble installations, our tile work showcases precision craftsmanship. Every tile is set with care, ensuring flawless walls and floors that stand the test of time.",
    image: serviceTile,
    alt: "Herringbone marble tile installation",
  },
  {
    title: "Flooring Installation",
    subtitle: "Flooring Installation",
    desc: "Beautiful flooring is the foundation of every great home. We install premium hardwood, luxury vinyl, stone, and tile flooring with expert precision and a perfect finish every time.",
    image: serviceFlooring,
    alt: "Wide plank hardwood flooring installation",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-amber mb-3">
            Home Remodeling Trends
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Most Popular Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveService(activeService === i ? null : i)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 service-card-overlay" />

              {/* Title always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-xl text-amber mb-1">
                  {service.title}
                </h3>
                <p className={`font-body text-sm text-white/70 transition-all duration-500 ${
                  activeService === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                } overflow-hidden`}>
                  {service.desc}
                </p>
              </div>

              {/* Hover hint */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-amber text-dark text-xs font-heading font-bold px-3 py-1.5 rounded-full">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
