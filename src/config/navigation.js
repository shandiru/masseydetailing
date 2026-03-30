// src/config/navigation.js

export const servicesLinks = [
  { label: "Maintenance Scheme", to: "/services/maintenance-scheme", fromPrice: "£70" },
  { label: "Full Valet", to: "/services/full-valet", fromPrice: "£100" },
  { label: "Deep Clean", to: "/services/deep-clean", fromPrice: "£175" },
  { label: "Full Detail", to: "/services/full-detail", fromPrice: "£400" },
];

export const locationLinks = [
  { city: "Boroughbridge", county: "North Yorkshire", to: "/locations/boroughbridge" },
  { city: "Harrogate", county: "North Yorkshire", to: "/locations/harrogate" },
  { city: "Thirsk", county: "North Yorkshire", to: "/locations/thirsk" },
  { city: "Leeds", county: "West Yorkshire", to: "/locations/leeds" },
  { city: "Garforth", county: "West Yorkshire", to: "/locations/garforth" },
  { city: "Wakefield", county: "West Yorkshire", to: "/locations/wakefield" },
];

export const contactInfo = {
  phone: "07399 539744",
  phoneRaw: "+447399539744",
  email: "info@masseydetailing.co.uk",
  facebook: "https://www.facebook.com/profile.php?id=100083111173136",
  instagram: "https://www.instagram.com/masseydetailing"
};