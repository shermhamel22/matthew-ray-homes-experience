import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Years of Experience", value: 15, prefix: "+", suffix: "" },
  { label: "Projects Completed", value: 200, prefix: "+", suffix: "" },
  { label: "Happy Clients", value: 100, prefix: "", suffix: "%" },
];

const useCountUp = (target: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
};

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-dark-lighter section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Complete Home Remodeling Solutions
          </h2>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">
              Contact Us!
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  visible,
}: {
  stat: { label: string; value: number; prefix: string; suffix: string };
  visible: boolean;
}) => {
  const count = useCountUp(stat.value, 2000, visible);

  return (
    <div className="text-center">
      <p className="font-body text-sm text-white/60 tracking-wider uppercase mb-3">
        {stat.label}
      </p>
      <p className="font-heading text-5xl md:text-6xl font-black text-amber">
        {stat.prefix}{count}{stat.suffix}
      </p>
    </div>
  );
};

export default StatsSection;
