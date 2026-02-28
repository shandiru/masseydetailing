// Common/Location/LocationFaq.jsx
import React, { useState } from "react";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? "border-blue-600/40 bg-blue-600/5" : "border-white/10 bg-transparent hover:border-white/20"}`}>
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span className={`font-semibold pr-4 transition-colors ${open ? "text-blue-500" : "text-white"}`}>
          {question}
        </span>
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${open ? "bg-blue-600 text-white" : "bg-white/10 text-white"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 pb-5">
          <p className="text-white/60 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function LocationFaq({ data }) {
  const { city, faqs } = data;

  return (
    <section className="py-16 bg-black border-y border-white/10">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white text-balance">
            Questions about {city}
          </h2>
          <p className="mt-3 text-white/60">
            Common questions from customers in the {city} area.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
}