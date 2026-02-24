import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-dark">
                  <path d="M3 21V9l9-7 9 7v12H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M9 21V13h6v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-sm text-white">MATTHEW RAY</span>
                <br />
                <span className="font-heading text-[9px] font-medium tracking-[0.15em] text-amber uppercase">Homes Inc.</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
              Quality craftsmanship and exceptional results. Licensed & insured general contractor.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Services", id: "services" },
                { label: "About Us", id: "about" },
                { label: "Reviews", id: "testimonials" },
                { label: "Our Process", id: "process" },
                { label: "Get an Estimate", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-white/50 hover:text-amber transition-colors font-body"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-white/50 hover:text-amber transition-colors font-body">
                <Phone className="w-4 h-4 text-amber" /> (123) 456-7890
              </a>
              <a href="mailto:info@matthewrayhomes.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-amber transition-colors font-body">
                <Mail className="w-4 h-4 text-amber" /> info@matthewrayhomes.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50 font-body">
                <MapPin className="w-4 h-4 text-amber" /> Serving the Local Area
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Matthew Ray Homes Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-body">
            Licensed & Insured General Contractor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
