// Common/Pricing/PricingHero.jsx
import React from "react";

export default function PricingHero() {
  return (
    <section className="py-16 sm:py-24 bg-black border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="h-3.5 w-3.5" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="text-white">Pricing</span>
        </div>

        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance">
            Simple, transparent{" "}
            <span className="text-blue-500">pricing</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            All prices are starting from and vary based on vehicle size and condition.
            No hidden fees, no surprises. Just exceptional detailing at fair prices.
          </p>
        </div>

      </div>
    </section>
  );
}