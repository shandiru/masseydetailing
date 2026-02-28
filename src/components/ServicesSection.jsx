import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Maintenance Scheme",
    description:
      "Keep your vehicle looking its best with regular upkeep.",
    price: "70",
    image: "/hero-car.jpg",
    link: "/services/maintenance-scheme",
  },
  {
    title: "Full Valet",
    description:
      "A comprehensive clean inside and out for a showroom finish.",
    price: "100",
    image: "/full-valet.jpg",
    link: "/services/full-valet",
  },
  {
    title: "Deep Clean",
    description:
      "An intensive restoration for neglected or heavily soiled vehicles.",
    price: "175",
    image: "/interior-clean.jpg",
    link: "/services/deep-clean",
  },
  {
    title: "Full Detail",
    description:
      "Machine polish & ceramic coating for the ultimate finish.",
    price: "400",
    image: "/detail-close.jpg",
    link: "/services/full-detail",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Detailing services tailored to you
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
            From a quick maintenance wash to a full machine polish and ceramic coating,
            we have a package for every need and budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 h-80 transition-all duration-500 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-gray-400">from</span>
                      <div className="text-2xl font-bold text-blue-500">
                        £{service.price}
                      </div>
                    </div>
                  </div>

                  {/* Learn More */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-blue-500 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;