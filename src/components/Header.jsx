import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const servicesLinks = [
  { label: "Maintenance Scheme", to: "/services/maintenance-scheme", fromPrice: "£70" },
  { label: "Full Valet", to: "/services/full-valet", fromPrice: "£100" },
  { label: "Deep Clean", to: "/services/deep-clean", fromPrice: "£175" },
  { label: "Full Detail", to: "/services/full-detail", fromPrice: "£400" },
];

// Separated label into city and county for better styling control
const locationLinks = [
  { city: "Boroughbridge", county: "North Yorkshire", to: "/locations/boroughbridge" },
  { city: "Harrogate", county: "North Yorkshire", to: "/locations/harrogate" },
  { city: "Thirsk", county: "North Yorkshire", to: "/locations/thirsk" },
  { city: "Leeds", county: "West Yorkshire", to: "/locations/leeds" },
  { city: "Garforth", county: "West Yorkshire", to: "/locations/garforth" },
  { city: "Wakefield", county: "West Yorkshire", to: "/locations/wakefield" },
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
      className="fixed z-9999 top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10"
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
                    <span>{item.label}  <span className="text-xs text-white/60">from {item.fromPrice}</span> </span>

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
              <div className="absolute left-0 mt-2 w-72 rounded-xl border border-white/10 bg-black shadow-lg overflow-hidden">
                {locationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex flex-col px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm text-white font-medium">{item.city}  <span className="text-[13px] text-white/40 font-normal leading-tight">{item.county}</span> </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
        </nav>

        {/* Call button */}
        <a
          href="tel:+447399539744"
          className="hidden lg:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <PhoneIcon className="h-4 w-4" />
          07399 539744
        </a>


        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 transition-colors hover:bg-white/10 rounded-lg"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 animate-in fade-in zoom-in duration-200" />
          ) : (
            <Menu className="h-6 w-6 animate-in fade-in zoom-in duration-200" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 h-screen overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-1 pb-20">
            <Link className="px-3 py-3 rounded-lg text-white hover:bg-white/10" to="/">Home</Link>

            {/* Services Dropdown in Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-white hover:bg-white/10 w-full text-left"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="flex flex-col gap-1 mb-2">
                  {servicesLinks.map((item) => (
                    <Link key={item.to} to={item.to} className="px-3 py-3 rounded-lg text-sm text-white/70 hover:bg-white/5 ml-4 border-l border-white/10">
                      {item.label} <span className="text-white/40 text-xs">- {item.fromPrice}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown in Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-white hover:bg-white/10 w-full text-left"
              >
                Locations
                <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="flex flex-col gap-1 mb-2">
                  {locationLinks.map((item) => (
                    <Link key={item.to} to={item.to} className="px-3 py-3 rounded-lg text-sm text-white/70 hover:bg-white/5 ml-4 border-l border-white/10">
                      {item.city} <span className="text-xs text-white/40">{item.county}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/pricing" className="px-3 py-3 rounded-lg text-white hover:bg-white/10">Pricing</NavLink>

            <a
              href="tel:+447399539744"
              className="mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:opacity-90 flex items-center justify-center gap-2"
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