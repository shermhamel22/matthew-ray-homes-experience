import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const services = [
    "Kitchen Remodels",
    "Bathroom Remodels",
    "Whole-Home Renovations",
    "Home Additions",
    "Flooring Installation",
    "Tile Work",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-dark">
              <path d="M3 21V9l9-7 9 7v12H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M9 21V13h6v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-lg tracking-tight text-white">
              MATTHEW RAY
            </span>
            <span className="font-heading text-[10px] font-medium tracking-[0.2em] text-amber uppercase">
              Homes Inc.
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-amber transition-colors font-body"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-3 left-0 bg-dark-lighter border border-white/10 rounded-lg shadow-2xl py-2 min-w-[220px] animate-fade-in">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => scrollTo("services")}
                    className="block w-full text-left px-5 py-2.5 text-sm text-white/70 hover:text-amber hover:bg-white/5 transition-colors font-body"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors font-body">
            About Us
          </button>
          <button onClick={() => scrollTo("testimonials")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors font-body">
            Reviews
          </button>
          <button onClick={() => scrollTo("process")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors font-body">
            Our Process
          </button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors font-body">
            Get an Estimate
          </button>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+1234567890"
          className="hidden lg:flex items-center gap-2 border border-amber text-amber px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber hover:text-dark transition-all duration-300 font-body"
        >
          <Phone className="w-4 h-4" />
          (123) 456-7890
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-4">
            <button onClick={() => scrollTo("services")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors text-left font-body py-2">Services</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors text-left font-body py-2">About Us</button>
            <button onClick={() => scrollTo("testimonials")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors text-left font-body py-2">Reviews</button>
            <button onClick={() => scrollTo("process")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors text-left font-body py-2">Our Process</button>
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-white/80 hover:text-amber transition-colors text-left font-body py-2">Get an Estimate</button>
            <a href="tel:+1234567890" className="btn-primary w-fit mt-2">
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
