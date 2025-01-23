import React, { useEffect, useState } from "react";
import Placeholder from "../assets/placeholder.jpg";

const Meet = () => {
  const [rowInView, setRowInView] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll(".fade-in-row");
      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          setRowInView((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="bg-white py-32">
      <div className="container mx-auto px-6 max-w-[1280px] space-y-12">
        <div className="relative text-center mb-10 z-10">
          <h1 className="text-4xl font-bold text-gray-800">Meet the Team</h1>
        </div>
        {/* Row 1: Fade in from the right with drop effect */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center fade-in-row transition-all duration-1000 ease-in-out ${
            rowInView[0]
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-20 translate-y-10"
          }`}
        >
          <img
            src={Placeholder}
            alt="About Placeholder"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to delivering the best solutions tailored to your
              needs. Our mission is to innovate, inspire, and deliver
              exceptional value through cutting-edge technology and
              customer-centric services. Join us on our journey to success.
            </p>
          </div>
        </div>

        {/* Row 2: Fade in from the left with drop effect */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center fade-in-row transition-all duration-1000 ease-in-out ${
            rowInView[1]
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-20 translate-y-10"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to empower businesses and individuals with the tools
              and resources they need to thrive in an ever-changing world. We
              focus on collaboration, innovation, and a commitment to excellence
              in every project we undertake.
            </p>
          </div>
          <img
            src={Placeholder}
            alt="About Placeholder"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Meet;
