import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Link மற்றும் useLocation சேர்த்துள்ளேன்

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const location = useLocation(); // தற்போதைய பக்கத்தை அறிய

  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  // பக்கம் மாறும்போது மொபைல் மெனுவை மூட
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo - கிளிக் செய்தால் ஹோம் பேஜ் செல்லும் */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-auto brightness-0 invert hover:opacity-80 transition"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              location.pathname === "/" ? "text-blue-500 bg-blue-500/10" : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium flex items-center gap-1"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2">
                <Link to="/services/exterior-wash" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Exterior Wash</Link>
                <Link to="/services/interior-detail" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Interior Detail</Link>
                <Link to="/services/full-valet" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Full Valet</Link>
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
              <ChevronDown size={16} className={`transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
            </button>

            {locationsOpen && (
              <div className="absolute top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Link to="/locations/leeds" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Leeds</Link>
                <Link to="/locations/harrogate" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Harrogate</Link>
                <Link to="/locations/wakefield" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400">Wakefield</Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium">
            Pricing
          </Link>
        </nav>

        {/* Phone Button */}
        <a
          href="tel:07399539744"
          className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          <Phone size={16} />
          07399 539744
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link to="/" className="text-blue-500 font-medium py-2">Home</Link>
            <Link to="/services" className="text-gray-300 py-2">Services</Link>
            <Link to="/locations" className="text-gray-300 py-2">Locations</Link>
            <Link to="/pricing" className="text-gray-300 py-2">Pricing</Link>
            <a href="tel:07399539744" className="mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold">
              <Phone size={16} /> 07399 539744
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;