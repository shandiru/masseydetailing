import React from "react";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/fall.png"
          onError={(e) => (e.currentTarget.style.display = "none")}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full py-32 lg:py-0">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex mt-20 items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-1.5 text-sm text-blue-500 mb-6">
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
              href="tel:+447399539744"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
            >
              <Phone size={16} />
              07399 539744
            </a>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
            >
              View Pricing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;