import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely incredible work on my BMW. The ceramic coating has kept it looking showroom-fresh for months. Best detailer in Yorkshire.",
    name: "James W.",
    location: "Harrogate",
  },
  {
    text: "Used the Deep Clean on my family car after a muddy camping trip. You'd never know it had been off-road. Brilliant service.",
    name: "Sarah T.",
    location: "Leeds",
  },
  {
    text: "The Maintenance Scheme is perfect for keeping my Land Rover clean through the winter. Reliable, professional, and great value.",
    name: "Mark R.",
    location: "Boroughbridge",
  },
  {
    text: "Had the Full Valet before selling my car and got a fantastic price for it. The buyer thought it was nearly new. Thank you!",
    name: "Lucy H.",
    location: "Wakefield",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            What our customers say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto">

          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 sm:p-12 text-center transition-all duration-500">

            <Quote className="h-8 w-8 text-blue-500/30 mx-auto mb-6" />

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed italic">
              “{testimonials[current].text}”
            </p>

            {/* Stars */}
            <div className="mt-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-blue-500 text-blue-500"
                />
              ))}
            </div>

            <div className="mt-3">
              <span className="font-semibold text-white">
                {testimonials[current].name}
              </span>
              <span className="text-gray-400 ml-2 text-sm">
                {testimonials[current].location}
              </span>
            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">

            <button
              onClick={prevSlide}
              className="h-10 w-10 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-gray-700 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="h-10 w-10 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;