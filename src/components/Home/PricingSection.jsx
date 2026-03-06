import React from "react";
import { ArrowRight, Star, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Maintenance Scheme",
    description: "Keep your vehicle looking its best with regular upkeep.",
    price: 70,
    duration: "1-2 hours",
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
    description: "A comprehensive clean inside and out for a showroom finish.",
    price: 120,
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
    description: "An intensive restoration for neglected or heavily soiled vehicles.",
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
    description: "Machine polish & ceramic coating for the ultimate finish.",
    price: 400,
    duration: "1-2 days",
    popular: true,
    features: [
      "Everything in Deep Clean",
      "Multi-stage machine polish",
      "Swirl mark & scratch removal",
      "Paint depth gauge readings",
      "Ceramic coating application (up to 10yr protection)",
    ],
    more: 4,
    link: "/services/full-detail",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Area */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em]">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Transparent pricing, no hidden costs
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed text-base">
            All prices are starting from. Final price depends on vehicle size and condition.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
               className={`group relative flex flex-col rounded-2xl border transition-all duration-500 bg-[#0A0A0A] ${
                plan.popular
                  ? "border-blue-600 shadow-[0_0_40px_-15px_rgba(37,99,235,0.3)]"
                  : "border-white/[0.05] hover:scale-[1.02] hover:border-blue-600 group-hover:border-blue-600 group-hover:shadow-[0_0_40px_-15px_rgba(37,99,235,0.3)]"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold text-center py-2 flex items-center justify-center gap-1.5 rounded-t-[14px]">
                  <Star className="h-3 w-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 flex flex-col flex-1 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors">{plan.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{plan.description}</p>

                {/* Price Display */}
                <div className="mt-8 mb-8">
                  <span className="text-xs text-gray-600 font-medium">from</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-5xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-500 origin-left block">
                        £{plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 mt-2 block">{plan.duration}</span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <CircleCheckBig className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-blue-600 font-bold tracking-wide mt-1">
                    +{plan.more} MORE INCLUDED
                  </li>
                </ul>

                {/* CTA Button: Reacts to Group Hover */}
                <Link
                  to={plan.link}
                  className={`mt-10 flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20"
                      : "bg-[#141414] text-white border border-white/[0.05] group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-900/40"
                  }`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;