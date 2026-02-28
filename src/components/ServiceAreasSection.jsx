import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Boroughbridge",
    county: "North Yorkshire",
    slug: "boroughbridge",
    description:
      "Serving Boroughbridge and the surrounding villages including Roecliffe, Aldborough, Minskip, and Green Hammerton. Our mobile detailing service comes directly to your home or workplace in the Boroughbridge area.",
  },
  {
    name: "Harrogate",
    county: "North Yorkshire",
    slug: "harrogate",
    description:
      "Providing premium car detailing across Harrogate, Knaresborough, Pannal, Starbeck, and Bilton. Our detailing services match the town's high standards with meticulous attention to every detail.",
  },
  {
    name: "Thirsk",
    county: "North Yorkshire",
    slug: "thirsk",
    description:
      "Serving Thirsk, Sowerby, Topcliffe, Carlton Miniott, and the Hambleton district. Our mobile service brings professional car detailing to this historic market town.",
  },
  {
    name: "Leeds",
    county: "West Yorkshire",
    slug: "leeds",
    featured: true,
    description:
      "Covering all of Leeds including the city centre, Headingley, Roundhay, Chapel Allerton, Moortown, Horsforth, and surrounding suburbs.",
  },
  {
    name: "Garforth",
    county: "West Yorkshire",
    slug: "garforth",
    description:
      "Serving Garforth, Kippax, Aberford, Barwick-in-Elmet, and Micklefield. Perfectly positioned for our mobile detailing routes.",
  },
  {
    name: "Wakefield",
    county: "West Yorkshire",
    slug: "wakefield",
    description:
      "Providing mobile car detailing across Wakefield, Ossett, Horbury, Sandal, Walton, and surrounding areas.",
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">
            Service Areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Covering the heart of Yorkshire
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We serve these key areas and everywhere in between. Click a
            location to learn more about our services in your area.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`/locations/${location.slug}`}
              className="group block h-full"
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  location.featured
                    ? "border-blue-500/50 bg-blue-900/10 shadow-2xl shadow-blue-900/20 ring-1 ring-blue-500/20"
                    : "border-gray-700 bg-gray-900 hover:border-blue-500/40 hover:shadow-xl hover:shadow-black/20"
                }`}
              >
                {/* Top Icons */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      location.featured
                        ? "bg-blue-500 text-white"
                        : "bg-gray-800 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"
                    }`}
                  >
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      location.featured
                        ? "bg-blue-500/10 text-blue-500"
                        : "text-gray-400 opacity-0 group-hover:opacity-100 group-hover:bg-blue-500/10 group-hover:text-blue-500"
                    }`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {location.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-400">
                    {location.county}
                  </p>
                  <p className="text-gray-400 leading-relaxed line-clamp-3 pt-2">
                    {location.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center text-sm font-semibold text-blue-500">
                  <span>View area details</span>
                  <div className="ml-2 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;