import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Fantastic service by James. I had neglected cleaning the outside of my car for months- I work on a Port and with a white car it’s a challenge to keep it clean. I decided to book Massey Detailing for a deep clean having seen James’s work on Instagram. James arrived on time and didn’t stop for hours, it’s clear he has a great attention to detail and made my car look like new once again. I’ll be using James monthly from now on for a regular maintenace clean. Highly recommended.",
    name: "Greg Lacey.",
    location: "Uk",
  },
  {
    text: "James did an absolutely amazing job. Attention to detail second to none and what a fantastic finish. Cars like new again. Highly recommended.",
    name: "BM RG.",
    location: "UK",
  },
  {
    text: "I don't often leave reviews, but I'm so pleased with the results on my car that I have to. James arrived promptly and worked his magic. I'm absolutely blown away by the finish, the depth of shine in the paint is amazing and the interior is like new - I don't think my car has ever looked better.",
    name: "Dave Foster",
    location: "UK",
  },
  {
    text: "James is a true professional in what he does and really cares about the quality of his work. Always goes that extra mile to make sure the car is spotless. Would recommend to anyone as he’s the only person I’d use!",
    name: "Dan Nilsson.",
    location: "UK",
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