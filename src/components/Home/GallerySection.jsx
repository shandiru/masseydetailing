import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const services = [
  { title: "Window Tinting", before: "m1.png", after: "m2.jpeg" },
  { title: "Headlight Restoration", before: "m2.jpg", after: "m3.jpeg" },
  { title: "Headlight Crack Repair", before: "m3.jpg", after: "m4.jpg" },
  { title: "Headlight Condensation Repair", before: "m5.jpeg", after: "m5.jpg" },
  { title: "Headlight Lens Replacement", before: "m6.jpg", after: "m7.jpg" },
  { title: "Exterior Enhancement", before: "m8.jpg", after: "m10.jpeg" },
  { title: "Building Window Tinting", before: "m1.png", after: "m12.jpeg" },
  { title: "Ambient Light Installation", before: "m3.jpeg", after: "m5.jpeg" },
  { title: "Interior Trims Restoration", before: "m6.jpg", after: "m12.jpeg" }
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, services.length - 1)));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 >= services.length ? 0 : c + 1));
    }, 5000);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  const onPointerDown = (e) => setDragStart(e.clientX);
  const onPointerUp = (e) => {
    if (dragStart === null) return;
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    setDragStart(null);
    resetAuto();
  };

  return (
    <section id="gallery" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Portfolio</span>
            <h2 className="mt-3 text-4xl font-bold text-white">Results that speak</h2>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <p className="text-gray-400 max-w-lg">
              Massey Detailing upgrades designed to improve appearance, safety, and comfort. 
              Drag the slider on each image to see the transformation.
            </p>
            <div className="flex items-center gap-3">
              <button onClick={() => { goTo(current - 1); resetAuto(); }} disabled={current === 0} className="w-10 h-10 rounded-full border border-white/10 text-white hover:bg-blue-600 disabled:opacity-20 transition-all"><ChevronLeft size={18} /></button>
              <button onClick={() => { goTo(current + 1); resetAuto(); }} disabled={current === services.length - 1} className="w-10 h-10 rounded-full border border-white/10 text-white hover:bg-blue-600 disabled:opacity-20 transition-all"><ChevronRight size={18} /></button>
              <span className="text-sm text-gray-400"><span className="font-bold text-white">{String(current + 1).padStart(2, "0")}</span> / {String(services.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* TRACK */}
        <div className="relative overflow-hidden" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerLeave={() => setDragStart(null)} style={{ cursor: dragStart !== null ? "grabbing" : "grab" }}>
          <div ref={trackRef} className="flex gap-8 transition-transform duration-[420ms] ease-out" style={{ transform: `translateX(calc(-${current} * (min(360px, 85vw) + 32px)))` }}>
            {services.map((item, i) => (
              <div key={i} className="flex-none transition-all duration-500" style={{ width: "min(360px, 85vw)", opacity: Math.abs(i - current) <= 1 ? 1 : 0.2, transform: i === current ? "scale(1)" : "scale(0.95)" }}>
                <div className="group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-600/30 transition-all">
                  <div className="relative h-[230px] overflow-hidden m-4 rounded-xl">
                    <BeforeAfterSlider before={item.before} after={item.after} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {services.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetAuto(); }} className="transition-all duration-300 rounded-full" style={{ width: i === current ? "28px" : "7px", height: "7px", background: i === current ? "#2563eb" : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}