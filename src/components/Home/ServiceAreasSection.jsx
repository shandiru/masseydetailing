import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Boroughbridge",
    county: "North Yorkshire",
    slug: "boroughbridge",
    description:
      "Serving Boroughbridge and the surrounding villages including Roecliffe, Aldborough, Minskip, and Green Hammerton.",
  },
  {
    name: "Harrogate",
    county: "North Yorkshire",
    slug: "harrogate",
    description:
      "Providing premium car detailing across Harrogate, Knaresborough, Pannal, Starbeck, and Bilton.",
  },
  {
    name: "Thirsk",
    county: "North Yorkshire",
    slug: "thirsk",
    description:
      "Serving Thirsk, Sowerby, Topcliffe, Carlton Miniott, and the Hambleton district.",
  },
  {
    name: "Leeds",
    county: "West Yorkshire",
    slug: "leeds",
    description:
      "Covering all of Leeds including the city centre, Headingley, Roundhay, and surrounding suburbs.",
  },
  {
    name: "Garforth",
    county: "West Yorkshire",
    slug: "garforth",
    description:
      "Serving Garforth, Kippax, Aberford, Barwick-in-Elmet, and Micklefield.",
  },
  {
    name: "Wakefield",
    county: "West Yorkshire",
    slug: "wakefield",
    featured: true, 
    description:
      "Providing mobile car detailing across Wakefield, Ossett, Horbury, Sandal, and Walton.",
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Service Areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white">
            Covering the heart of Yorkshire
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We serve these key areas and everywhere in between.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link key={location.slug} to={`/locations/${location.slug}`} className="group block">
              <div
                className={`relative h-full rounded-3xl border p-8 transition-all duration-300 ${
                  location.featured
                    ? "border-blue-600 bg-blue-600/5 shadow-lg shadow-blue-600/10"
                    : "border-gray-800 bg-[#0A0A0A] hover:border-blue-600/50"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                    location.featured ? "bg-blue-600 text-white" : "bg-gray-800 text-blue-600"
                  }`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-all ${
                    location.featured ? "text-blue-600 opacity-100" : "text-gray-600 opacity-0 group-hover:opacity-100"
                  }`} />
                </div>

                <h3 className="text-xl font-bold text-white">{location.name}</h3>
                <p className="text-sm font-medium text-blue-500">{location.county}</p>
                <p className="text-gray-400 mt-3 line-clamp-3">{location.description}</p>

                <div className="mt-8 flex items-center text-sm font-semibold text-blue-600">
                  <span>View area details</span>
                  <div className="ml-2 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-8" />
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