import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import serviceAddition from "@/assets/service-addition.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import serviceFlooring from "@/assets/service-flooring.jpg";
import heroLiving from "@/assets/hero-living.jpg";

const services = [
  { title: "Kitchen Remodels", image: heroKitchen, alt: "Kitchen remodel" },
  { title: "Bathroom Remodels", image: heroBathroom, alt: "Bathroom remodel" },
  { title: "Whole-Home Renovations", image: heroLiving, alt: "Whole home renovation" },
  { title: "Home Additions", image: serviceAddition, alt: "Home addition" },
  { title: "Tile Work", image: serviceTile, alt: "Tile installation" },
  { title: "Flooring Installation", image: serviceFlooring, alt: "Flooring installation" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 service-overlay transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
