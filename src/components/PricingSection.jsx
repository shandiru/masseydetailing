import React from "react";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    title: "Maintenance Scheme",
    description:
      "Keep your vehicle looking its best with regular upkeep.",
    price: 70,
    duration: "1-2 hours",
    featured: true,
    features: [
      "Full exterior hand wash & dry",
      "Wheel cleaning & tyre dressing",
      "Interior vacuum & wipe down",
      "Dashboard & trim cleaning",
      "Glass cleaned inside & out",
    ],
    more: 2,
    link: "/services/maintenance-scheme",
  },
  {
    title: "Full Valet",
    description:
      "A comprehensive clean inside and out for a showroom finish.",
    price: 100,
    duration: "3-4 hours",
    features: [
      "Everything in Maintenance Scheme",
      "Interior deep vacuum & shampoo",
      "Leather cleaning & conditioning",
      "Exterior hand polish",
      "Trim & plastic restoration",
    ],
    more: 2,
    link: "/services/full-valet",
  },
  {
    title: "Deep Clean",
    description:
      "An intensive restoration for neglected or heavily soiled vehicles.",
    price: 175,
    duration: "5-7 hours",
    features: [
      "Everything in Full Valet",
      "Hot water extraction on carpets & seats",
      "Steam cleaning of all surfaces",
      "Stain removal treatment",
      "Headlining cleaning",
    ],
    more: 3,
    link: "/services/deep-clean",
  },
  {
    title: "Full Detail",
    description:
      "Machine polish & ceramic coating for the ultimate finish.",
    price: 400,
    duration: "1-2 days",
    popular: true,
    features: [
      "Everything in Deep Clean",
      "Multi-stage machine polish",
      "Swirl mark & scratch removal",
      "Paint depth gauge readings",
      "Ceramic coating application (up to 2yr protection)",
    ],
    more: 4,
    link: "/services/full-detail",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            Pricing
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Transparent pricing, no hidden costs
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
            All prices are starting from. Final price depends on vehicle size and condition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? "border-blue-500 bg-blue-500/5 shadow-xl shadow-blue-500/10 scale-[1.02]"
                  : "border-gray-800 bg-gray-900 hover:border-gray-600"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-xs font-semibold text-center py-1.5 flex items-center justify-center gap-1">
                  <Star className="h-3 w-3" />
                  Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1 pt-10">

                {/* Title */}
                <h3 className="text-lg font-bold text-white">
                  {plan.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-5 mb-6">
                  <span className="text-sm text-gray-400">from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      £{plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {plan.duration}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <Check className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}

                  <li className="text-xs text-blue-500 font-medium">
                    +{plan.more} more included
                  </li>
                </ul>

                {/* Button */}
                <a
                  href={plan.link}
                  className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:opacity-90"
                      : "bg-gray-800 text-white hover:bg-blue-600"
                  }`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;