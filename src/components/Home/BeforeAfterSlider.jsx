import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const move = (e) => updateFromClientX(e.clientX);
    const up = () => setIsDragging(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [isDragging, updateFromClientX]);

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updateFromClientX(e.clientX);
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
      <img src={after} loading="lazy" className="w-full h-full object-cover" draggable="false" alt="After treatment" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} loading="lazy" alt="massay-detailing" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      </div>

      <div className="absolute top-0 h-full w-[2px] bg-blue-600" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg cursor-ew-resize">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}