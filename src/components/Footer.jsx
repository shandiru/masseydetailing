import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Massey Detailing"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional mobile car detailing across Yorkshire. We bring the showroom to your door.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:+447399539744" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Phone size={16} className="text-[#0052cc]" />
                07399 539744
              </a>
              <a href="mailto:info@masseydetailing.co.uk" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Mail size={16} className="text-[#0052cc]" />
                info@masseydetailing.co.uk
              </a>
            </div>

            {/* Social Media Added Here */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100083111173136"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] text-gray-400 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/masseydetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F] text-gray-400 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {['Maintenance Scheme', 'Full Valet', 'Deep Clean', '7 Year Ceramic'].map((item) => {
                // If it's the ceramic service, keep spaces (will encode to %20); otherwise, use hyphens
                const urlPath = item === '7-Year-Ceramic'
                  ? encodeURIComponent(item)
                  : item.toLowerCase().replace(/\s+/g, '-');

                return (
                  <li key={item}>
                    <Link
                      to={`/services/${urlPath}`}
                      className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Locations</h3>
            <ul className="space-y-3">
              {['Boroughbridge', 'Harrogate', 'Thirsk', 'Leeds', 'Garforth', 'Wakefield'].map((loc) => (
                <li key={loc}>
                  <Link to={`/locations/${loc.toLowerCase()}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                    <MapPin size={14} />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Pricing</Link></li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-500 text-[10px] uppercase tracking-wider">
              © {new Date().getFullYear()} Massey Detailing. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-wider text-gray-600">
              Powered by <a href="https://www.ansely.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ansely</a>
            </p>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <Link to="/terms-conditions" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;