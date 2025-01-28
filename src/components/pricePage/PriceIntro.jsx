import React from "react";

const PriceIntro = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-[1080px] text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Tailored Pricing for Your Unique Needs
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At our company, we believe in flexibility and personalization. Rather
          than offering set pricing plans, we provide custom quotes based on
          your project’s unique requirements. This approach ensures you get
          exactly what you need without paying for unnecessary extras.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our commitment is to work within your budget while delivering the
          highest quality service. No matter the scope of your project, we’ll
          find a solution that fits your goals and finances.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          Let’s collaborate to bring your vision to life—affordably and
          effectively.
        </p>
      </div>
    </section>
  );
};

export default PriceIntro;
