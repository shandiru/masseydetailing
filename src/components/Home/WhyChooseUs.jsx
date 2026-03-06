import React from "react";
import { Clock, Shield, Award, Warehouse } from "lucide-react"; // Added Warehouse icon

const features = [
  {
    icon: Clock,
    title: "Fully Mobile Service",
    description:
      "We come to your home or workplace anywhere across Yorkshire. No need to drop your car off or wait around.",
  },
  {
    icon: Shield,
    title: "Professional Products",
    description:
      "We use only the highest-quality detailing products and ceramic coatings from leading manufacturers.",
  },
  {
    icon: Award,
    title: "Experienced & Insured",
    description:
      "Fully insured with years of experience detailing everything from family cars to supercars.",
  },
  /* New Unit Available Box */
  {
    icon: Warehouse,
    title: "Unit Available",
    description:
      "While we are primarily mobile, a secure detailing unit is available upon request for larger or specialized projects.",
  },
];

const WhyChooseUsSection = () => {
  return (
    /* Pure Black Background */
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            The Massey Detailing difference
          </h2>
        </div>

        {/* Features Grid - Updated to grid-cols-4 for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-blue-600/40 hover:bg-blue-600/5 transition-all duration-500"
              >
                {/* Icon Container with subtle blue glow */}
                <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description - Muted Gray */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;