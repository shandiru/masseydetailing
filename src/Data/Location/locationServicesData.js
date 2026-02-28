// Data/Location/locationServicesData.js

export const allServiceCards = [
  {
    key: "maintenance-scheme",
    title: "Maintenance Scheme",
    description: "Keep your vehicle looking its best with regular upkeep.",
    price: "£70",
    image: "/images/hero-car.jpg",
    href: "/services/maintenance-scheme",
  },
  {
    key: "full-valet",
    title: "Full Valet",
    description: "A comprehensive clean inside and out for a showroom finish.",
    price: "£100",
    image: "/images/full-valet.jpg",
    href: "/services/full-valet",
  },
  {
    key: "deep-clean",
    title: "Deep Clean",
    description: "An intensive restoration for neglected or heavily soiled vehicles.",
    price: "£175",
    image: "/images/interior-clean.jpg",
    href: "/services/deep-clean",
  },
  {
    key: "full-detail",
    title: "Full Detail",
    description: "Machine polish & ceramic coating for the ultimate finish.",
    price: "£400",
    image: "/images/detail-close.jpg",
    href: "/services/full-detail",
  },
];

// Per-location overrides (all locations share same services for now)
export const locationServicesData = {
  boroughbridge: {
    city: "Boroughbridge",
    services: allServiceCards,
  },
  harrogate: {
    city: "Harrogate",
    services: allServiceCards,
  },
  thirsk: {
    city: "Thirsk",
    services: allServiceCards,
  },
  leeds: {
    city: "Leeds",
    services: allServiceCards,
  },
  garforth: {
    city: "Garforth",
    services: allServiceCards,
  },
  wakefield: {
    city: "Wakefield",
    services: allServiceCards,
  },
};