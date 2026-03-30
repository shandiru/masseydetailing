import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesLinks, locationLinks, contactInfo } from '../config/navigation';

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
              {/* Using dynamic contact info */}
              <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Phone size={16} className="text-[#0052cc]" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Mail size={16} className="text-[#0052cc]" />
                {contactInfo.email}
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] text-gray-400 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F] text-gray-400 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Dynamic Services List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Locations List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Locations</h3>
            <ul className="space-y-3">
              {locationLinks.map((loc) => (
                <li key={loc.to}>
                  <Link 
                    to={loc.to} 
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0052cc] transition-colors"
                  >
                    <MapPin size={14} />
                    {loc.city}
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
              <li><Link to="/review" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Reviews</Link></li>
              <li><Link to="/tcs" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Booking T&C's</Link></li>
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