import React, { useState } from "react";
import { X, Check, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- WHATSAPP ICON (not in lucide, keep as SVG) ---
function IconWhatsApp(props) {
  return (
    <FaWhatsapp className="text-white text-lg sm:text-xl" />
  );
}

// --- SERVICE OPTIONS ---
const SERVICE_OPTIONS = [
  "Select Your Service",
  "Maintenance Scheme from £70",
  "Full Valet from £100",
  "Deep Clean from £175",
  "Full Detail from £400"
];

// --- MODAL COMPONENT ---
function QuoteModal({ isOpen, onClose, serviceTitle }) {
  const [selectedService, setSelectedService] = useState(serviceTitle || SERVICE_OPTIONS[0]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const details = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: selectedService,
      date: formData.get("date"),
      time: formData.get("time"),
      info: formData.get("info"),
    };
    const whatsappNumber = "447399539744";
    const message = `*New Quote Request*\n--------------------------\n Name: ${details.name}\n Phone: ${details.phone}\n Service: ${details.service}\nDate: ${details.date}\n Time: ${details.time}\n More Info: ${details.info}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0f0f0f] mt-15 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "min(90vh, 640px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Get a Free Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/8 text-white/40 hover:text-white hover:bg-white/15 transition-all shrink-0 ml-3"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(min(90vh, 640px) - 64px)" }}>
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">

            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">Full Name</label>
                <input
                  required name="name" type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">Phone Number</label>
                <input
                  required name="phone" type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all"
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>

            {/* Row 2: Service Dropdown */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">Service Required</label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 pr-9 text-sm text-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all cursor-pointer [color-scheme:dark]"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  {SERVICE_OPTIONS.map((svc) => (
                    <option
                      key={svc}
                      value={svc}
                      style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                    >
                      {svc}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Row 3: Date & Time */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">Preferred Date</label>
                <input
                  required name="date" type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white [color-scheme:dark] focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">Preferred Time</label>
                <input
                  required name="time" type="time"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white [color-scheme:dark] focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 4: Notes */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/35">More Info</label>
              <textarea
                name="info" rows="2"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50 outline-none transition-all resize-none"
                placeholder="How Can We Help Today?"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-green-600/20 mt-1"
            >
              <IconWhatsApp className="h-4 w-4 sm:h-5 sm:w-5" />
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function ServiceDetailsSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, description, includedItems, price, duration, locations } = data;
  const visibleItems = showAll ? includedItems : includedItems.slice(0, 5);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Service Tag */}
        <div className="mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 bg-blue-600/10 border border-blue-600/25 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Auto Centre Services
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 xl:gap-16">

          {/* ── LEFT ── */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
            <p className="text-white/65 leading-relaxed text-base sm:text-lg mb-10 max-w-2xl">{description}</p>

            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 mb-4">What's Included</h3>

            <div className="flex flex-col divide-y divide-white/[0.07]">
              {visibleItems.map((label) => (
                <div key={label} className="group flex items-center gap-3 sm:gap-4 py-3.5">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center transition-all duration-200 group-hover:bg-blue-600 group-hover:border-blue-600">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-sm sm:text-base text-white/85">{label}</span>
                </div>
              ))}
            </div>

            {includedItems.length > 5 && (
              <button
                onClick={() => setShowAll((s) => !s)}
                className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
              >
                {showAll ? "Show less" : `Show all ${includedItems.length} items`}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>

          {/* ── RIGHT ── */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-6 space-y-3">

              {/* Price Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 text-center">
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest font-bold">Starting Price</span>
                <div className="text-4xl sm:text-5xl font-extrabold mt-2 mb-6 tracking-tight bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent">
                  {price}
                </div>
                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-white/55 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-blue-500" />
                      Duration
                    </span>
                    <span className="font-semibold text-white text-xs sm:text-sm">{duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all shadow-xl shadow-blue-600/25"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Locations */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <h4 className="text-[10px] sm:text-xs font-bold mb-3 text-white/50 tracking-widest uppercase">Available Locations</h4>
                <div className="flex flex-wrap gap-1.5">
                  {locations.map((loc) => (
                    <span
                      key={loc.label}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-white/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
                    >
                      {loc.label}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={title}
      />
    </section>
  );
}