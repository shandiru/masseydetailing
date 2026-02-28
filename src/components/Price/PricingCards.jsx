// Common/Pricing/PricingCards.jsx
import React from "react";

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
      "Door shuts wiped",
      "Tyres dressed & plastics refreshed",
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
      "Engine bay clean",
      "Full interior sanitisation",
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
      "Pet hair removal",
      "Odour elimination treatment",
      "Full interior detail & dress",
    ],
    href: "/services/deep-clean",
  },
  {
    key: "full-detail",
    title: "Full Detail",
    description: "Machine polish & ceramic coating for the ultimate finish.",
    price: "£400",
    duration: "1-2 days",
    popular: true,
    features: [
      "Everything in Deep Clean",
      "Multi-stage machine polish",
      "Swirl mark & scratch removal",
      "Paint depth gauge readings",
      "Ceramic coating application (up to 2yr protection)",
      "Paint decontamination & clay bar",
      "Glass sealant application",
      "Alloy wheel sealant",
      "Full condition report provided",
    ],
    href: "/services/full-detail",
  },
];

const PREVIEW_COUNT = 5;

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-3 w-3" aria-hidden="true">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

export default function PricingCards() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            const extra = plan.features.length - PREVIEW_COUNT;
            return (
              <div key={plan.key}
                className={`relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden h-full ${
                  plan.popular
                    ? "border-blue-500/40 bg-white/5"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}>

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-xs font-semibold text-center py-1.5 flex items-center justify-center gap-1">
                    <IconStar /> Most Popular
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

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.slice(0, PREVIEW_COUNT).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <IconCheck />
                        <span>{f}</span>
                      </li>
                    ))}
                    {extra > 0 && (
                      <li className="text-xs text-blue-500 font-medium">
                        +{extra} more included
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <a href={plan.href}
                    className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white/10 text-white hover:bg-blue-600 hover:text-white"
                    }`}>
                    View Details <IconArrowRight />
                  </a>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}