// Common/Location/LocationHero.jsx
import React from "react";

const MAPS_API_KEY = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

export default function LocationHero({ data }) {
  const { breadcrumb, region, city, description, phone, quoteLink, mapQuery, mapZoom } = data;

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${mapQuery}&zoom=${mapZoom}&maptype=roadmap`;

  return (
    <section className="relative bg-black border-b border-white/10 py-16 sm:py-24 overflow-hidden">

      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
          {breadcrumb.map((crumb, i) => (
            <React.Fragment key={crumb}>
              {i < breadcrumb.length - 1 ? (
                <>
                  <a href={i === 0 ? "/" : `/locations`} className="hover:text-blue-500 transition-colors">
                    {crumb}
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </>
              ) : (
                <span className="text-white">{crumb}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            {/* Region badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-1.5 text-sm text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {region}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance">
              Car Detailing in{" "}
              <span className="text-blue-500">{city}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={quoteLink}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/15 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                {phone}
              </a>
            </div>
          </div>

          {/* Right — Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] sm:h-[350px]">
            <iframe
              title={`Map of ${city}`}
              width="100%"
              height="100%"
              loading="lazy"
              src={mapSrc}
              style={{ border: 0 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}