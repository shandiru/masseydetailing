// Data/Service/detailsData.js

const LOCATIONS = [
  { label: "Boroughbridge", href: "/locations/boroughbridge" },
  { label: "Harrogate",     href: "/locations/harrogate" },
  { label: "Thirsk",        href: "/locations/thirsk" },
  { label: "Leeds",         href: "/locations/leeds" },
  { label: "Garforth",      href: "/locations/garforth" },
  { label: "Wakefield",     href: "/locations/wakefield" },
];

export const servicesDetailsData = {
  "maintenance-scheme": {
    title: "About This Service",
    description:
      "Our Maintenance Scheme is designed for customers who want to keep their vehicle in pristine condition between full details. This service includes a thorough exterior wash, wheel cleaning, tyre dressing, interior vacuum, dashboard wipe, and glass cleaning. Perfect as a regular monthly or bi-monthly treatment.",
    includedItems: [
      "Full exterior hand wash & dry",
      "Wheel cleaning & tyre dressing",
      "Interior vacuum & wipe down",
      "Dashboard & trim cleaning",
      "Glass cleaned inside & out",
      "Door shuts wiped",
      "Tyres dressed & plastics refreshed",
    ],
    price: "£70",
    duration: "1-2 hours",
    quoteLink: "/pricing",
    locations: LOCATIONS,
  },

  "full-valet": {
    title: "About This Service",
    description:
      "Our Full Valet takes your vehicle to the next level with a meticulous interior and exterior clean. We deep clean carpets and upholstery, condition leather surfaces, polish exterior paintwork, and leave your vehicle looking and smelling like new. Ideal before a special occasion or seasonal refresh.",
    includedItems: [
      "Everything in Maintenance Scheme",
      "Interior deep vacuum & shampoo",
      "Leather cleaning & conditioning",
      "Exterior hand polish",
      "Trim & plastic restoration",
      "Engine bay clean",
      "Full interior sanitisation",
    ],
    price: "£100",
    duration: "3-4 hours",
    quoteLink: "/pricing",
    locations: LOCATIONS,
  },

  "deep-clean": {
    title: "About This Service",
    description:
      "The Deep Clean is our most intensive cleaning service, designed for vehicles that need serious attention. Whether it's pet hair, coffee stains, muddy boots, or years of grime, we use professional extraction equipment, steam cleaners, and specialist chemicals to restore your interior and exterior to an exceptional standard.",
    includedItems: [
      "Everything in Full Valet",
      "Hot water extraction on carpets & seats",
      "Steam cleaning of all surfaces",
      "Stain removal treatment",
      "Headlining cleaning",
      "Pet hair removal",
      "Odour elimination treatment",
      "Full interior detail & dress",
    ],
    price: "£175",
    duration: "5-7 hours",
    quoteLink: "/pricing",
    locations: LOCATIONS,
  },

  "full-detail": {
    title: "About This Service",
    description:
      "Our flagship Full Detail service combines everything we offer into one premium package. We machine polish your paintwork to remove swirl marks, scratches, and oxidation, then protect it with a professional-grade ceramic coating that lasts up to 2 years. This is the ultimate treatment for those who demand perfection.",
    includedItems: [
      "Everything in Deep Clean",
      "Multi-stage machine polish",
      "Swirl mark & scratch removal",
      "Paint depth gauge readings",
      "Ceramic coating application (up to 2yr protection)",
      "Paint decontamination & clay bar",
      "Glass sealant application",
      "Alloy wheel sealant",
      "Full condition report provided",
    ],
    price: "£400",
    duration: "1-2 days",
    quoteLink: "/pricing",
    locations: LOCATIONS,
  },
};