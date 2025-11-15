import React, { useEffect, useState } from "react";

const PageBanner = ({ heading, subheading, description }) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative h-[20vh] sm:h-[60vh]"
      style={{
        background: `url(${"/images/406830.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              visibleElements.has("page-banner")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            id="page-banner"
            data-animate
          >
            <div className="mb-6">
              {heading && (
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-wider text-[#0092b8] font-bold block">
                  {heading}
                </span>
              )}
              {subheading && (
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider text-white font-bold mt-2">
                  {subheading}
                </h1>
              )}
            </div>
            {description && (
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
