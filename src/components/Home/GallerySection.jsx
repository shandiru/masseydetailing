import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Window Tinting",
    desc: "Enhance your vehicle's style, comfort, and privacy with our professional window tinting services.",
    before: "detail-close.jpg",
    after: "full-valet (1).jpg",
    link: "/Window-Tinting",
  },
  {
    title: "Headlight Restoration",
    desc: "Bring clarity back to your headlights with our advanced restoration services.",
    before: "full-valet.jpg",
    after: "hero-car.jpg",
    link: "/Headlight-Restoration",
  },
  {
    title: "Headlight Crack Repair",
    desc: "Avoid unnecessary replacements with our expert headlight crack repair services.",
    before: "interior-clean.jpg",
    after: "Crack-a .jpeg",
    link: "/Crack-Repair",
  },
  {
    title: "Headlight Condensation Repair",
    desc: "Moisture inside headlights can reduce visibility and damage electrical components.",
    before: "Condensation1-b.jpg",
    after: "Condensation1-a.jpg",
    link: "/Condensation-Repair",
  },
  {
    title: "Headlight Lens Replacement",
    desc: "When restoration isn't enough, we provide professional headlight lens replacement services.",
    before: "Crack1-b.jpeg",
    after: "Crack1-a .jpeg",
    link: "/Lens-Replacement",
  },
  {
    title: "Exterior Enhancement",
    desc: "Transform your vehicle’s appearance with professional body kit styling.",
    before: "extirior-b.png",
    after: "extirior-a.jpg",
    link: "/Headlight",
  },
  {
    title: "Building Window Tinting",
    desc: "Upgrade comfort, privacy, and heat protection with professional building window tinting.",
    before: "building-b.jpeg",
    after: "building-a.jpeg",
    link: "/Building-Window-Tinting",
  },
  {
    title: "Ambient Light Installation",
    desc: "Transform your vehicle or space with intelligent ambient lighting.",
    before: "ambient1.jpeg",
    after: "ambient2.jpeg",
    link: "/Intelligent-Ambient-Light-Installation",
  },
  {
    title: "Interior Trims Restoration",
    desc: "Bring your interior back to life with trim restoration and wrapping.",
    before: "interior.jpeg",
    after: "interior1.jpeg",
    link: "/Interior-Trims-Restoration",
  }
];

// ─── Before/After Slider ────────────────────────────────────────────────
function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    updateFromClientX(e.clientX);
    const move = (ev) => dragging.current && updateFromClientX(ev.clientX);
    const up = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchMove = (e) => {
    if (e.touches?.[0]) updateFromClientX(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      className="relative h-full w-full overflow-hidden cursor-ew-resize select-none"
      style={{ touchAction: "none" }}
    >
      <img src={after} className="w-full h-full object-cover" draggable="false" alt="After" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} className="absolute inset-0 w-full h-full object-cover" draggable="false" alt="Before" />
      </div>

      {/* Blue Divider */}
      <div className="absolute top-0 h-full w-[2px] bg-blue-600" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg cursor-ew-resize">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}

// ─── Main Carousel Section ───────────────────────────────────────────────
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

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

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
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setDragStart(null);
    resetAuto();
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="mt-3 text-4xl font-bold text-white">Results that speak</h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="text-gray-400 max-w-lg">
              Massey Detailing upgrades designed to improve appearance, safety, and comfort. 
              Drag the slider on each image to see the transformation.
            </p>

            {/* NAV + COUNTER */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { prev(); resetAuto(); }}
                disabled={current === 0}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:border-blue-600 hover:bg-blue-600 disabled:opacity-20 transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => { next(); resetAuto(); }}
                disabled={current === services.length - 1}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:border-blue-600 hover:bg-blue-600 disabled:opacity-20 transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-sm text-gray-400">
                <span className="font-bold text-white">{String(current + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div
          className="relative overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setDragStart(null)}
          style={{ cursor: dragStart !== null ? "grabbing" : "grab" }}
        >
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-[420ms] ease-out"
            style={{
              transform: `translateX(calc(-${current} * (min(360px, 85vw) + 32px)))`,
            }}
          >
            {services.map((item, i) => {
              const isActive = i === current;
              const isNear = Math.abs(i - current) <= 1;

              return (
                <div
                  key={i}
                  className="flex-none transition-all duration-500"
                  style={{
                    width: "min(360px, 85vw)",
                    opacity: isNear ? 1 : 0.2,
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                  }}
                >
                  <div className="group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-600/30 transition-all">
                    {/* SLIDER */}
                    <div className="relative h-[230px] overflow-hidden m-4 rounded-xl">
                      <BeforeAfterSlider before={item.before} after={item.after} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAuto(); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "7px",
                height: "7px",
                background: i === current ? "#2563eb" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}