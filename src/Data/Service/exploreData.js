// All 4 services master list
export const allServices = [
  {
    key: "maintenance-scheme",
    title: "Maintenance Scheme",
    price: "from £70",
    image: "/m3.jpg",
    href: "/services/maintenance-scheme",
  },
  {
    key: "full-valet",
    title: "Full Valet",
    price: "from £120",
    image: " /m1.png",
    href: "/services/full-valet",
  },
  {
    key: "deep-clean",
    title: "Deep Clean",
    price: "from £175",
    image: "/m12.jpeg",
    href: "/services/deep-clean",
  },
  {
    key: "7 Year Ceramic",
    title: "7 Year Ceramic",
    price: "from £400",
    image: "/m10.jpeg",
    href: "/services/7 Year Ceramic",
  },
];

// Per-page explore data — previous & next
export const exploreData = {
  "maintenance-scheme": {
    previous: "7 Year Ceramic",
    next: "full-valet",
  },
  "full-valet": {
    previous: "maintenance-scheme",
    next: "deep-clean",
  },
  "deep-clean": {
    previous: "full-valet",
    next: "7 Year Ceramic",
  },
  "7 Year Ceramic": {
    previous: "deep-clean",
    next: "maintenance-scheme",
  },
};