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
      style={{
        background: `url(${"/images/406830.webp"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "70vh",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
        <div
          className={`text-center w-full sm:w-auto transition-all duration-1000 transform ${
            visibleElements.has("page-banner")
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          id="page-banner"
          data-animate
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider text-white font-bold">
            <span className="text-cyan-500">{heading}</span>
            <h2 className="py-2 sm:py-3 md:py-4">{subheading}</h2>
          </div>
          {description && (
            <p className="text-sm sm:text-base lg:text-base text-white leading-tight mb-6 px-4 sm:px-0">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
