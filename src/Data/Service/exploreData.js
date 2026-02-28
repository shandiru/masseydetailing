// All 4 services master list
export const allServices = [
  {
    key: "maintenance-scheme",
    title: "Maintenance Scheme",
    price: "from £70",
    image: " /hero-car.jpg",
    href: "/services/maintenance-scheme",
  },
  {
    key: "full-valet",
    title: "Full Valet",
    price: "from £100",
    image: " /full-valet.jpg",
    href: "/services/full-valet",
  },
  {
    key: "deep-clean",
    title: "Deep Clean",
    price: "from £175",
    image: " /interior-clean.jpg",
    href: "/services/deep-clean",
  },
  {
    key: "full-detail",
    title: "Full Detail",
    price: "from £400",
    image: " /detail-close.jpg",
    href: "/services/full-detail",
  },
];

// Per-page explore data — previous & next
export const exploreData = {
  "maintenance-scheme": {
    previous: "full-detail",
    next: "full-valet",
  },
  "full-valet": {
    previous: "maintenance-scheme",
    next: "deep-clean",
  },
  "deep-clean": {
    previous: "full-valet",
    next: "full-detail",
  },
  "full-detail": {
    previous: "deep-clean",
    next: "maintenance-scheme",
  },
};