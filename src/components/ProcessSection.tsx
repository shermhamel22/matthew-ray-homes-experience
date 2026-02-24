const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We meet to discuss your vision, goals, timeline, and budget — completely free and no-obligation.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Our team develops detailed designs, selects materials, and creates a comprehensive project plan tailored to you.",
  },
  {
    step: "03",
    title: "Construction",
    desc: "Expert builders execute the plan with precision craftsmanship, keeping you informed at every stage.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    desc: "We walk through every detail together, ensuring everything exceeds your expectations before handoff.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-amber mb-3">
            About Us and Our Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-background rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-heading text-5xl font-black text-amber/20 group-hover:text-amber/40 transition-colors mb-4">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className="mt-16 text-center">
          <p className="font-heading font-semibold text-foreground text-lg mb-6">
            Full-Service Home Remodeling
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Kitchen Remodels",
              "Bathroom Remodels",
              "Whole-Home Renovations",
              "Home Additions",
              "Tile Work",
              "Flooring",
            ].map((s) => (
              <span
                key={s}
                className="bg-background border border-border px-5 py-2.5 rounded-full text-sm font-body text-foreground hover:border-amber hover:text-amber transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a href="#contact" className="btn-outline-dark">
              Request a Free Estimate!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
