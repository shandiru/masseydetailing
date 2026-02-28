import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const ShowroomCTA = () => {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            Ready for a showroom finish?
          </h2>
          
          {/* Subtext - Using a muted grey for readability on black */}
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Get in touch today and let us transform your vehicle. We cover Boroughbridge, 
            Harrogate, Thirsk, Leeds, Garforth, Wakefield and everywhere in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Blue Call Button (Primary) */}
            <a 
              href="tel:07399539744" 
              className="inline-flex items-center gap-2 bg-[#0052cc] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#0047b3] transition-colors"
            >
              <Phone size={18} />
              Call 07399 539744
            </a>

            {/* Dark Grey Pricing Button (Secondary) */}
            <a 
              href="/pricing"
              className="inline-flex items-center gap-2 bg-[#121212] text-gray-300 border border-gray-800 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#1a1a1a] transition-colors"
            >
              View Pricing 
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomCTA;