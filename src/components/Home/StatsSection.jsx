import React, { useEffect, useState, useRef } from "react";

const stats = [
  { number: 1500, label: "Cars Detailed" },
  { number: 300, label: "Happy Customers" },
  { number: 5, label: "Years Experience" },
  { number: 30, label: "5-Star Reviews" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          startCounter();
          setHasRun(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasRun]);

  const startCounter = () => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = (t) => t * (2 - t);

      setCounts(
        stats.map((stat) => Math.floor(stat.number * easeOutQuad(progress)))
      );

      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);
  };

  return (
    <section ref={sectionRef} className="py-14 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {/* Stat Item Container */}
              <div className="relative flex-1 w-full flex items-center justify-center py-12 px-5 md:py-0">
                
                {/* Background Large Number - and Bolder */}
                <div className="text-[140px] font-black leading-none select-none text-[#1A1A1A] transition-all duration-700">
                  {counts[index]}
                </div>

                {/* Foreground Label - Centered directly on top */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-blue-600 font-black text-sm md:text-base uppercase tracking-[0.4em] text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Vertical Divider - Very subtle gray/white line */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block h-24 w-[1px] bg-white/[0.08]" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;