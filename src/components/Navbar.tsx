import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = ["Services", "About", "Testimonials", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-foreground">
            Matthew Ray Homes
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-sans font-medium">
            Inc.
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
            >
              {link}
            </button>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors text-left font-sans"
              >
                {link}
              </button>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 border border-primary text-primary px-5 py-3 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all w-fit"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
