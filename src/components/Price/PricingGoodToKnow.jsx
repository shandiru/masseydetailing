// Common/Pricing/PricingGoodToKnow.jsx
import React from "react";

const NOTES = [
  "All prices are 'from' and based on a standard-sized car. Larger vehicles may incur a small supplement.",
  "We are fully mobile and come to your home or workplace across Yorkshire.",
  "Payment is taken on completion so you can see the results first.",
  "We accept cash, bank transfer, and card payments.",
  "Gift vouchers are available for all services.",
  "Fleet and regular customer discounts available on request.",
];

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-4 w-4" aria-hidden="true">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="h-4 w-4 text-blue-500" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function PricingGoodToKnow() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">

          <h2 className="text-2xl font-bold text-white mb-6">Good to know</h2>

          <div className="flex flex-col gap-4">
            {NOTES.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <IconCheck />
                <p className="text-white/60 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:07399539744"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
              <IconPhone /> Call 07399 539744
            </a>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <IconMapPin /> Covering all of Yorkshire
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}