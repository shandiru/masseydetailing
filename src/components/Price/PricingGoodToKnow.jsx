import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuPhone, LuMapPin } from "react-icons/lu";

const NOTES = [
  "All prices are 'from' and based on a standard-sized car. Larger vehicles may incur a small supplement.",
  "We are fully mobile and come to your home or workplace across Yorkshire.",
  "Payment is taken on completion so you can see the results first.",
  "We accept cash, bank transfer, and card payments.",
  "Gift vouchers are available for all services.",
  "Fleet and regular customer discounts available on request.",
  "We also work from our own unit, our parent garage, so you can drop your vehicle off if preferred."
];

export default function PricingGoodToKnow() {
  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
          
          <h2 className="text-2xl font-bold text-white mb-6">Good to know</h2>

          <div className="flex flex-col gap-4">
            {NOTES.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <IoMdCheckmarkCircleOutline className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/60 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="tel:+447399539744"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              <LuPhone className="h-4 w-4" aria-hidden="true" /> 
              Call 07399 539744
            </a>
            
            <div className="flex items-center gap-2 text-sm text-white/60">
              <LuMapPin className="h-4 w-4 text-blue-500" aria-hidden="true" /> 
              Covering all of Yorkshire
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}