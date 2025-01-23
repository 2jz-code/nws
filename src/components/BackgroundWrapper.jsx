import React from "react";
import Background from "../assets/contact-bg.jpg";

const BackgroundWrapper = ({ children }) => {
  return (
    <section
      className="relative pt-12"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default BackgroundWrapper;
