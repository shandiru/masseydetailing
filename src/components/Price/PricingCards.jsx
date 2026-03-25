import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react"; 
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PLANS = [
  {
    key: "maintenance-scheme",
    title: "Maintenance Scheme",
    description: "Keep your vehicle looking its best with regular upkeep.",
    price: "£70",
    duration: "1-2 hours",
    popular: false,
    features: [
      "Full exterior hand wash & dry",
      "Wheel cleaning & tyre dressing",
      "Interior vacuum & wipe down",
      "Dashboard & trim cleaning",
      "Glass cleaned inside & out",
      "Air freshener applied",
      "Door shuts cleaned",
    ],
    href: "/services/maintenance-scheme",
  },
  {
    key: "full-valet",
    title: "Full Valet",
    description: "A comprehensive clean inside and out for a showroom finish.",
    price: "£100",
    duration: "3-4 hours",
    popular: false,
    features: [
      "Everything in Maintenance Scheme",
      "Interior deep vacuum & shampoo",
      "Leather cleaning & conditioning",
      "Exterior hand polish",
      "Trim & plastic restoration",
      "Boot fully cleaned",
      "Engine bay rinse & dress"
    ],
    href: "/services/full-valet",
  },
  {
    key: "deep-clean",
    title: "Deep Clean",
    description: "An intensive restoration for neglected or heavily soiled vehicles.",
    price: "£175",
    duration: "5-7 hours",
    popular: false,
    features: [
      "Everything in Full Valet",
      "Hot water extraction on carpets & seats",
      "Steam cleaning of all surfaces",
      "Stain removal treatment",
      "Headlining cleaning",
      "Full decontamination wash",
      "Clay bar treatment on paintwork",
      "Odour elimination",
    ],
    href: "/services/deep-clean",
  },
  {
    key: "full-detail",
    title: "Full Detail",
    description: "Machine polish & 7-year ceramic coating for the ultimate, lasting finish.",
    price: "£400",
    duration: "1-2 days",
    popular: true,
    features: [
      "Everything in Deep Clean",
      "Multi-stage machine polish",
      "Swirl mark & scratch removal",
      "Paint depth gauge readings",
      "Ceramic coating application (7-year protection)",
      "Wheel ceramic coating",
      "Glass ceramic coating",
      "Trim ceramic coating",
      "Full paint correction report"
    ],
    href: "/services/full-detail",
  },
];

const PREVIEW_COUNT = 5;

export default function PricingCards() {
  const [expandedPlan, setExpandedPlan] = useState(null);

  const toggleExpand = (key) => {
    setExpandedPlan(expandedPlan === key ? null : key);
  };

  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {PLANS.map((plan) => {
            const isExpanded = expandedPlan === plan.key;
            const extraCount = plan.features.length - PREVIEW_COUNT;
            
            const visibleFeatures = isExpanded 
              ? plan.features 
              : plan.features.slice(0, PREVIEW_COUNT);

            return (
              <div key={plan.key}
                className={`relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden h-fit ${
                  plan.popular
                  ? "border-blue-500/40 bg-white/5"
                  : "border-white/10 bg-white/5 hover:border-white/20"
                }`}>

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-xs font-semibold text-center py-1.5 flex items-center justify-center gap-1">
                    <Star className="h-3 w-3 fill-current" /> Most Popular
                  </div>
                )}

                <div className={`p-6 flex flex-col flex-1 ${plan.popular ? "pt-10" : ""}`}>

                  {/* Title & description */}
                  <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                  <p className="text-sm text-white/60 mt-1 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-5 mb-6">
                    <span className="text-sm text-white/50">from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <span className="text-xs text-white/50">{plan.duration}</span>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {visibleFeatures.map((f, index) => (
                      <li 
                        key={`${plan.key}-${index}`} 
                        className="flex items-start gap-2 text-sm text-white/60 animate-in fade-in duration-300"
                      >
                        <IoMdCheckmarkCircleOutline className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                    
                    {/* Interactive Toggle */}
                    {extraCount > 0 && (
                      <li>
                        <button
                          onClick={() => toggleExpand(plan.key)}
                          className="text-xs text-blue-500 font-medium hover:text-blue-400 transition-colors focus:outline-none"
                        >
                          {isExpanded ? "Show less" : `+${extraCount} more included`}
                        </button>
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <Link to={plan.href}
                    className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                      plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white/10 text-white hover:bg-blue-600 hover:text-white"
                    }`}>
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}