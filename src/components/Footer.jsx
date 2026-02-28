import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Replace with your actual logo image */}
           <img
            src="/logo.webp"
            alt="Massey Detailing"
            className="h-10 w-auto"
          />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional mobile car detailing across Yorkshire. We bring the showroom to your door.
            </p>
            <div className="space-y-3">
              <a href="tel:07399539744" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Phone size={16} className="text-[#0052cc]" />
                07399 539744
              </a>
              <a href="mailto:info@masseydetailing.co.uk" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                <Mail size={16} className="text-[#0052cc]" />
                info@masseydetailing.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {['Maintenance Scheme', 'Full Valet', 'Deep Clean', 'Full Detail'].map((item) => (
                <li key={item}>
                  <a href={`/services/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Locations</h3>
            <ul className="space-y-3">
              {['Boroughbridge', 'Harrogate', 'Thirsk', 'Leeds', 'Garforth', 'Wakefield'].map((loc) => (
                <li key={loc}>
                  <a href={`/locations/${loc.toLowerCase()}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0052cc] transition-colors">
                    <MapPin size={14} />
                    {loc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Home</a></li>
              <li><a href="/pricing" className="text-sm text-gray-400 hover:text-[#0052cc] transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            Massey Detailing. Professional mobile car detailing.
          </p>
          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            Covering Boroughbridge, Harrogate, Thirsk, Leeds, Garforth, Wakefield & everywhere in between.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;