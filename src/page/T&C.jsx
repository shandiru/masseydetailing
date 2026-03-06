import React from "react";

export default function BookingTerms() {
  const terms = [
    "All bookings are subject to 20% deposit. If the deposit isn’t received your booking isn’t confirmed.",
    "Deposits are non refundable but are transferable if 48 hours notice is given.",
    "Payment is due immediately on handover.",
    "Every effort must be made to remove personal items from vehicle before work commences.",
    "Our prices are guidelines, we reserve the right to charge extra for unreasonable levels of pet hair, vomit, bodily matter, or anything that requires extra time to rectify.",
    "In the event of adverse weather, your deposit will be held until a rebook can be arranged.",
    "We will require suitable parking for our van and sufficient space for all vehicles doors to fully open.",
    "We require an electricity supply at your chosen location to carry out any work.",
    "We carry water on board, however, in some situations we may need access to extra water.",
    "Travel is free for the first 30 minutes but then charged at £20p/h both ways."
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Important Information
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Booking Terms & Conditions
          </h2>
        </div>

        {/* Terms List Container */}
        <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-8 md:p-12">
          <ul className="space-y-6 text-sm sm:text-base text-gray-400 leading-relaxed">
            {terms.map((term, index) => (
              <li key={index} className="flex gap-4">
                {/* Blue custom bullet point */}
                <span className="text-blue-600 font-bold">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>

          {/* Separation Line */}
          <div className="my-8 border-t border-white/5" />

          {/* Bottom Text */}
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed italic">
            Please take as much time as needed to take in all this information to
            ensure mutual expectations are met and for us to provide our service
            diligently. Please also be aware if any of the terms above are not
            adhered to, you will be liable to cover the full cost of the agreed
            booking.
          </p>

          <p className="mt-6 font-bold text-lg text-white">
            Thank you!
          </p>
        </div>

      </div>
    </section>
  );
}