import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const servicesLinks = [
  { label: "Maintenance Scheme", to: "/services/maintenance-scheme", fromPrice: "£70" },
  { label: "Full Valet", to: "/services/full-valet", fromPrice: "£100" },
  { label: "Deep Clean", to: "/services/deep-clean", fromPrice: "£175" },
  { label: "Full Detail", to: "/services/full-detail", fromPrice: "£400" },
];

const locationLinks = [
  { label: "Boroughbridge", to: "/locations/boroughbridge" },
  { label: "Harrogate", to: "/locations/harrogate" },
  { label: "Thirsk", to: "/locations/thirsk" },
  { label: "Leeds", to: "/locations/leeds" },
  { label: "Garforth", to: "/locations/garforth" },
  { label: "Wakefield", to: "/locations/wakefield" },
];

const ChevronDown = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const PhoneIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const headerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setServicesOpen(false);
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const navLinkClass = ({ isActive }) =>
    [
      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
      isActive
        ? "text-white bg-white/10"
        : "text-white/70 hover:text-white hover:bg-white/10",
    ].join(" ");

  const dropdownBtnClass = (active) =>
    [
      "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
      active
        ? "text-blue-400 bg-blue-500/10"
        : "text-white/70 hover:text-white hover:bg-white/10",
    ].join(" ");

  const isServicesRoute = pathname.startsWith("/services");
  const isLocationsRoute = pathname.startsWith("/locations");

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.webp"
            alt="Massey Detailing"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>

          {/* Services dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen((v) => !v);
                setLocationsOpen(false);
              }}
              className={dropdownBtnClass(servicesOpen || isServicesRoute)}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-xl border border-white/10 bg-black shadow-lg overflow-hidden">
                {servicesLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center justify-between px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-white/60">from {item.fromPrice}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLocationsOpen((v) => !v);
                setServicesOpen(false);
              }}
              className={dropdownBtnClass(locationsOpen || isLocationsRoute)}
            >
              Locations
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
            </button>

            {locationsOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/10 bg-black shadow-lg overflow-hidden">
                {locationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
        </nav>

        {/* Call button */}
        <a
          href="tel:07399539744"
          className="hidden lg:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <PhoneIcon className="h-4 w-4" />
          07399 539744
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link className="px-3 py-3 rounded-lg text-white hover:bg-white/10" to="/">Home</Link>

            <div className="px-3 py-2 text-xs font-semibold text-white/60 uppercase tracking-wider">
              Services
            </div>

            {servicesLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2.5 rounded-lg text-sm text-white hover:bg-white/10 ml-2 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-white/60 text-xs">from {item.fromPrice}</span>
              </Link>
            ))}

            <div className="px-3 py-2 text-xs font-semibold text-white/60 uppercase tracking-wider mt-2">
              Locations
            </div>

            {locationLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2.5 rounded-lg text-sm text-white hover:bg-white/10 ml-2"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:07399539744"
              className="mt-3 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:opacity-90 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="h-4 w-4" />
              Call 07399 539744
            </a>
          </div>
        </div>
      )}
    </header>
  );
}