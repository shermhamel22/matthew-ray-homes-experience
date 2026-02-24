import heroLiving from "@/assets/hero-living.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-amber mb-3">
            About Matthew Ray Homes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Premium Home Remodeling &<br className="hidden md:block" /> Custom Construction
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-14">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroLiving}
              alt="Luxury home interior renovation"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              At <strong className="text-foreground">Matthew Ray Homes Inc.</strong>, we specialize in
              <strong className="text-foreground"> luxury home remodeling</strong>,
              <strong className="text-foreground"> custom renovations</strong>, and
              <strong className="text-foreground"> high-end home additions</strong> that elevate the way you live. With years of industry expertise, we've earned a reputation for delivering timeless, elegant, and innovative designs that reflect the unique style and vision of each homeowner we serve.
            </p>
            <p>
              We provide <strong className="text-foreground">complete remodeling solutions</strong> — from concept to completion — so our clients don't have to manage multiple contractors or deal with fragmented responsibilities. Our fully integrated team handles every detail with exceptional craftsmanship and meticulous attention to detail.
            </p>
            <p>
              Whether it's a <strong className="text-foreground">modern kitchen renovation</strong>, a <strong className="text-foreground">spa-inspired bathroom remodel</strong>, a <strong className="text-foreground">whole-home transformation</strong>, or a beautiful <strong className="text-foreground">home addition</strong>, we handle the entire process under one roof.
            </p>
            <p className="font-heading font-bold text-foreground text-lg mt-4 pt-4 border-t border-border">
              We don't just remodel homes — we design and craft luxurious living experiences, one masterpiece at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
