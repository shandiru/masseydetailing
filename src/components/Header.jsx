import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
      if (
        locationsRef.current &&
        !locationsRef.current.contains(event.target)
      ) {
        setLocationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-10 w-auto brightness-0 invert"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4">

          <a className="px-4 py-2 text-blue-500 bg-blue-500/10 rounded-lg text-sm font-medium">
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-1"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Exterior Wash
                </a>
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Interior Detail
                </a>
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Full Valet
                </a>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div className="relative" ref={locationsRef}>
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-1"
            >
              Locations
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  locationsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {locationsOpen && (
              <div className="absolute top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg overflow-hidden">
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  London
                </a>
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Manchester
                </a>
                <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Birmingham
                </a>
              </div>
            )}
          </div>

          <a className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium">
            Pricing
          </a>
        </nav>

        {/* Phone Button Desktop */}
        <a
          href="tel:07399539744"
          className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          <Phone size={16} />
          07399 539744
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <a className="text-blue-500 font-medium">Home</a>
            <a className="text-gray-300">Services</a>
            <a className="text-gray-300">Locations</a>
            <a className="text-gray-300">Pricing</a>

            <a
              href="tel:07399539744"
              className="mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold"
            >
              <Phone size={16} />
              07399 539744
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;