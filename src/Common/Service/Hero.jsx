import React from "react";

export default function Hero({
  title,
  price,
  duration,
  backgroundImage,
  breadcrumb
}) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">

      {/* Dynamic Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-6 pb-12">

        {/* Dynamic Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? (
                <a href={item.link} className="hover:text-white">
                  {item.label}
                </a>
              ) : (
                <span className="text-white">{item.label}</span>
              )}

              {index !== breadcrumb.length - 1 && (
                <span className="text-white/40">›</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dynamic Title */}
        <h1 className="text-white font-extrabold tracking-tight text-4xl sm:text-6xl">
          {title}
        </h1>

        {/* Price + Duration */}
        <div className="mt-6 flex items-center gap-6">

          {/* Dynamic Price */}
          <div className="flex items-end gap-2">
            <span className="text-white/60 text-sm mb-1">from</span>
            <span className="text-blue-600 text-4xl font-extrabold">
              £{price}
            </span>
          </div>

          {/* Dynamic Duration */}
          <div className="flex items-center gap-2 text-white/65 text-sm">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>

            <span>{duration}</span>

          </div>

        </div>

      </div>

    </section>
  );
}