import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - info */}
          <div>
            <p className="font-heading text-sm font-semibold tracking-widest uppercase text-amber mb-3">
              Get a Free Estimate!
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transform<br />Your Home?
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-10 max-w-md">
              Contact us today for a free, no-obligation estimate. We'd love to hear about your project and show you what's possible.
            </p>

            <div className="space-y-6">
              <a href="tel:+1234567890" className="flex items-center gap-4 text-white hover:text-amber transition-colors group">
                <div className="w-12 h-12 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-body mb-0.5">Phone</p>
                  <p className="font-heading font-semibold text-lg">(123) 456-7890</p>
                </div>
              </a>
              <a href="mailto:info@matthewrayhomes.com" className="flex items-center gap-4 text-white hover:text-amber transition-colors group">
                <div className="w-12 h-12 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-body mb-0.5">Email</p>
                  <p className="font-heading font-semibold">info@matthewrayhomes.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-body mb-0.5">Service Area</p>
                  <p className="font-heading font-semibold">Serving the Local Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-dark-lighter rounded-2xl p-8 md:p-10 border border-white/5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 font-body block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-white/30"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/50 font-body block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-white/30"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/50 font-body block mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-white/30"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 font-body block mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-body focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/50 transition-all resize-none placeholder:text-white/30"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
