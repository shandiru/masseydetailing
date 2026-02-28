// Common/Location/LocationOtherAreas.jsx
import React from "react";

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-blue-500 group-hover:text-white"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white/40 group-hover:text-blue-500 transition-colors"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function LocationOtherAreas({ data }) {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-white mb-8">
          Other Areas We Cover
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((location) => (
            <a key={location.href} href={location.href} className="group block">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-600/40 transition-all duration-300">

                {/* Icon */}
                <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MapPinIcon />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white">{location.city}</h3>
                  <p className="text-xs text-white/50">{location.region}</p>
                </div>

                {/* Arrow */}
                <ArrowRightIcon />

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}