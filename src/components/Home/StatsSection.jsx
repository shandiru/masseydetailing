import React, { useEffect, useState } from "react";

const stats = [
  { number: 2500, suffix: "+", label: "Cars Detailed" },
  { number: 1800, suffix: "+", label: "Happy Customers" },
  { number: 8, suffix: "+", label: "Years Experience" },
  { number: 450, suffix: "+", label: "5-Star Reviews" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = stats[i].number;
          const increment = Math.ceil(target / 50);

          if (count < target) {
            return Math.min(count + increment, target);
          }
          return count;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    /* Pure Black Background as per image */
    <section className="py-20 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Image-la irukura athe blue shade: text-blue-600 */}
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 tabular-nums">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>

              {/* Label text in subtle gray */}
              <div className="mt-2 text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;