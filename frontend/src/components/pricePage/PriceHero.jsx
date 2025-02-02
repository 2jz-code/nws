import React, { useEffect, useState } from "react";
import Background from "../../assets/price-page-img.jpg";
import { ReactTyped as Typed } from "react-typed"; // Correct named import

const PriceHero = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("price-hero");
      const rect = heroElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="price-hero"
      className="relative h-[50vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bright Blur Tint */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm"></div>

      {/* Hero Content */}
      <div
        className={`relative z-10 px-6 transition-all duration-[1500ms] ease-in-out transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Our Pricing Plans
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Pricing plans that are{" "}
          <Typed
            strings={["Affordable.", "Flexible.", "Transparent."]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </p>
      </div>
    </section>
  );
};

export default PriceHero;
