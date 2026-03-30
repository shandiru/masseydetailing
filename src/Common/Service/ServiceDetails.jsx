import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaClock,
  FaArrowRight,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

// --- SERVICE OPTIONS ---
const SERVICE_OPTIONS = [
  "Select Your Service",
  "Maintenance Scheme from £70",
  "Full Valet from £100",
  "Deep Clean from £175",
  "Full Detail from £400",
];

// --- MODAL ---
function QuoteModal({ isOpen, onClose, serviceTitle }) {
  const [selectedService, setSelectedService] = useState(
    serviceTitle || SERVICE_OPTIONS[0]
  );

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

    const message = `*New Quote Request*
--------------------------
Name: ${details.name}
Phone: ${details.phone}
Service: ${details.service}
Date: ${details.date}
Time: ${details.time}
More Info: ${details.info}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="text-white font-bold">Get a Free Quote</h3>
          <button onClick={onClose}>
            <FaTimes className="text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          <input
            required
            name="name"
            placeholder="Full Name"
            className="w-full p-2 bg-white/5 border border-white/10 rounded text-white"
          />
          <input
            required
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 bg-white/5 border border-white/10 rounded text-white"
          />

          <div className="relative">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 bg-white/5 border border-white/10 rounded text-white appearance-none"
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-white/40" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input type="date" name="date" className="p-2 rounded" />
            <input type="time" name="time" className="p-2 rounded" />
          </div>

          <textarea
            name="info"
            placeholder="More info..."
            className="w-full p-2 rounded"
          />

          <button className="w-full bg-green-600 py-3 rounded flex items-center justify-center gap-2 text-white font-bold">
            <FaWhatsapp />
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function ServiceDetailsSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, description, includedItems, price, duration } = data;

  const visibleItems = showAll
    ? includedItems
    : includedItems.slice(0, 5);

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-10">
        
        {/* LEFT */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-white/60 mb-6">{description}</p>

          {visibleItems.map((item) => (
            <div key={item} className="flex items-center gap-3 py-2">
              <FaCheck className="text-blue-500" />
              {item}
            </div>
          ))}

          {includedItems.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 mt-3 text-blue-500"
            >
              {showAll ? "Show Less" : "Show More"}
              <FaChevronDown
                className={`transition ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* RIGHT */}
        <div>
          <div className="p-6 border border-white/10 rounded-xl text-center">
            <h4 className="text-sm text-white/50">Starting Price</h4>
            <div className="text-4xl font-bold">{price}</div>

            <div className="flex justify-between mt-4 text-sm">
              <span className="flex items-center gap-2">
                <FaClock />
                Duration
              </span>
              {duration}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-5 bg-blue-600 w-full py-3 rounded flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <FaArrowRight />
            </button>
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