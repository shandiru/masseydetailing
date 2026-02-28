import React, { useState } from "react";

function IconCheck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconClock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconChevronDown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function ServiceDetailsSection({ data }) {
  const [showAll, setShowAll] = useState(false);

  const {
    title,
    description,
    includedItems,
    price,
    duration,
    quoteLink,
    locations,
  } = data;

  const visibleItems = showAll ? includedItems : includedItems.slice(0, 5);

  return (
    <section className="py-16 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-3">
            <div>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {description}
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">What's Included</h3>
              <div className="flex flex-col">
                {visibleItems.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 py-4 border-b border-white/10 group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-blue-600/15 flex items-center justify-center shrink-0 group-hover:bg-blue-600/25 transition-colors">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                    </div>
                    <span className="text-white/90">{label}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowAll((s) => !s)}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              >
                {showAll ? "Show less" : `Show all ${includedItems.length} items`}
                <IconChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          {/* END LEFT */}

          {/* RIGHT */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">

              {/* Price Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-center">
                  <span className="text-sm text-white/60">Starting from</span>
                  <div className="text-5xl font-bold mt-1">{price}</div>
                  <p className="text-sm text-white/60 mt-2">
                    Price varies based on vehicle size &amp; condition
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <IconClock className="h-4 w-4 text-blue-500" />
                    <span className="text-white/60">Duration:</span>
                    <span className="text-white font-medium ml-auto">
                      {duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <IconCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-white/60">Items:</span>
                    <span className="text-white font-medium ml-auto">
                      {includedItems.length} included
                    </span>
                  </div>
                </div>
                <a
                  href={quoteLink}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Quote <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
              {/* END Price Card */}

              {/* Locations Card */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-sm font-semibold mb-4">Available In</h4>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <a
                      key={loc.href}
                      href={loc.href}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {loc.label}
                    </a>
                  ))}
                </div>
              </div>
              {/* END Locations Card */}

            </div>
            {/* END sticky */}
          </div>
          {/* END RIGHT */}

        </div>
      </div>
    </section>
  );
}