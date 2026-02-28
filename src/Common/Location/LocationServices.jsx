// Common/Location/LocationServices.jsx
import React from "react";

export default function LocationServices({ data }) {
  const { city, services } = data;

  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white text-balance">
            Services available in {city}
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            All of our detailing packages are available in {city} and the surrounding area. We come to you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <a key={service.key} href={service.href} className="group block h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 h-full transition-all duration-500 hover:border-blue-600/40 hover:shadow-lg hover:shadow-blue-600/5">

                {/* Image */}
                <div className="relative h-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-white/60 mt-1 line-clamp-2">{service.description}</p>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-white/50">from</span>
                      <span className="ml-1 text-xl font-bold text-blue-500">{service.price}</span>
                    </div>
                    <span className="text-xs text-blue-500 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}