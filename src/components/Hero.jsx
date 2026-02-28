import React from "react";
import { Phone, ArrowRight, Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-car.jpg"
          alt="Premium car detailing"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full py-32 lg:py-0">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-1.5 text-sm text-blue-500 mb-6">
            <Shield size={14} />
            Massey Detailing - Professional Mobile Service
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Your car deserves{" "}
            <span className="text-blue-500">perfection</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
            Massey Detailing brings premium mobile car care across Yorkshire.
            From regular maintenance to full ceramic coating, we bring the
            showroom to your door.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:07399539744"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
            >
              <Phone size={16} />
              07399 539744
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
            >
              View Pricing
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust Section */}
          <div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
            
            {/* Initial Avatars */}
            <div className="flex -space-x-2">
              {["JW", "ST", "MR", "LH", "PD"].map((item, index) => (
                <div
                  key={index}
                  className="h-8 w-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-blue-500 text-blue-500"
                  />
                ))}
              </div>
              <span>Trusted by 1,800+ customers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;