// Common/Location/LocationCta.jsx
import React from "react";

export default function LocationCta({ data }) {
  const { heading, description, buttonText, buttonHref } = data;

  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <h2 className="text-3xl font-bold text-white text-balance">
          {heading}
        </h2>

        <p className="mt-4 text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttonHref}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}