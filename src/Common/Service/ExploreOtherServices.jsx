import React from "react";
import { allServices, exploreData } from "../../Data/Service/exploreData";

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ExploreOtherServices({ currentService }) {
  const explore = exploreData[currentService];
  if (!explore) return null;

  const previousService = allServices.find((s) => s.key === explore.previous);
  const nextService = allServices.find((s) => s.key === explore.next);

  const cards = [
    { ...previousService, label: "Previous", align: "left" },
    { ...nextService,     label: "Next",     align: "right" },
  ];

  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-white mb-8">
          Explore Other Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((service) => (
            <a key={service.key} href={service.href} className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 h-48 hover:border-blue-600/40 transition-all duration-500">

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 flex items-end ${
                    service.align === "right" ? "justify-end" : "justify-between"
                  }`}
                >
                  <div className={service.align === "right" ? "ml-auto text-right" : ""}>

                    {/* Label */}
                    <div
                      className={`flex items-center gap-2 text-xs text-white/60 mb-1 ${
                        service.align === "right" ? "justify-end" : ""
                      }`}
                    >
                      {service.align === "left" && <ArrowLeft />}
                      {service.label}
                      {service.align === "right" && <ArrowRight />}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>

                    {/* Price */}
                    <span className="text-sm text-blue-500 font-medium">
                      {service.price}
                    </span>

                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}