import heroExterior from "@/assets/hero-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroExterior}
        alt="Luxury modern home exterior by Matthew Ray Homes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        {/* Large company name - bottom left like Magnet */}
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber leading-none mb-6">
          Matthew Ray<br />
          <span className="text-white">Homes</span>
        </h1>

        {/* Subtitle + CTA - right side on desktop */}
        <div className="md:absolute md:right-10 md:bottom-28 md:max-w-md">
          <p className="font-body text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-6">
            High-Quality Home Renovations, Design, and Complete Remodeling Solutions
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get An Estimate
            </a>
            <a href="#services" className="btn-outline-light">
              Check Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
