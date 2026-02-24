import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <div className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
              Get Started
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mb-6">
              Let's Build<br />Something Beautiful
            </h2>
            <p className="text-secondary-foreground/80 leading-relaxed font-sans mb-10">
              Ready to transform your home? Reach out for a free consultation and estimate.
              We'd love to hear about your project.
            </p>

            <div className="space-y-5">
              <a href="tel:+1234567890" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Phone</p>
                  <p className="font-sans text-sm">(123) 456-7890</p>
                </div>
              </a>
              <a href="mailto:info@matthewrayhomes.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Email</p>
                  <p className="font-sans text-sm">info@matthewrayhomes.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-sans">Location</p>
                  <p className="font-sans text-sm">Serving the Local Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans block mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans block mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                rows={4}
                className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm font-sans focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Describe your project, timeline, and any specific requirements..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              Request Free Estimate
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
