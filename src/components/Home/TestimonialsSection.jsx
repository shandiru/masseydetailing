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
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What our customers say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#0A0A0A] rounded-3xl border border-white/5 p-10 sm:p-16 text-center transition-all duration-500 shadow-2xl">
            
            {/* Blue Quote Icon matching image */}
            <div className="flex justify-center mb-8">
              <Quote className="h-10 w-10 text-blue-600 opacity-60 fill-current" />
            </div>

            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed italic font-medium">
              “{testimonials[current].text}”
            </p>

            {/* Blue Stars matching image */}
            <div className="mt-8 flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-blue-600 text-blue-600"
                />
              ))}
            </div>

            <div className="mt-6">
              <span className="text-lg font-bold text-white">
                {testimonials[current].name}
              </span>
              <span className="text-gray-500 ml-3 text-sm font-medium">
                {testimonials[current].location}
              </span>
            </div>
          </div>

          {/* Navigation Controls matching image style */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border border-white/10 bg-black flex items-center justify-center text-white hover:bg-[#111] transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Progress Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    current === index
                      ? "w-10 bg-blue-600"
                      : "w-2.5 bg-white/10 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border border-white/10 bg-black flex items-center justify-center text-white hover:bg-[#111] transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;