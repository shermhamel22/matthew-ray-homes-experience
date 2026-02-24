const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-serif text-xl text-foreground">Matthew Ray Homes</span>
            <span className="text-primary font-sans text-xs ml-1 tracking-wider">Inc.</span>
            <p className="text-muted-foreground text-xs mt-2 font-sans">
              Quality Craftsmanship. Exceptional Results.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {["Services", "About", "Testimonials", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-sans"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Matthew Ray Homes Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            Licensed & Insured General Contractor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
