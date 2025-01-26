import React from "react";
import Placeholder from "../../assets/placeholder.jpg";

const pricingPlans = [
  {
    type: "Static Marketing Website",
    range: "$1,000–$2,500",
    description:
      "A sleek and modern static website to showcase your business or portfolio. Ideal for projects that don't require dynamic content or backend integration. Prices range from $1,000 to $2,500, depending on the complexity of the design and features.",
  },
  {
    type: "Interactive Marketing Website",
    range: "$2,500–$5,000",
    description:
      "An engaging website with interactivity like forms, animations, and basic integrations. Perfect for businesses looking to improve customer engagement. Pricing typically ranges between $2,500 and $5,000, depending on the level of interactivity required.",
  },
  {
    type: "Custom Design & Advanced Features",
    range: "$5,000–$7,500+",
    description:
      "A fully custom website with advanced features and tailored design. Ideal for projects requiring unique functionality or detailed customization. Prices start at $5,000 and go up to $7,500 or more for highly complex features.",
  },
  {
    type: "Frontend + Backend",
    range: "$10,000–$20,000",
    description:
      "Comprehensive development for custom solutions that include both frontend and backend systems. Perfect for projects requiring dynamic functionality, database integrations, or custom APIs. Pricing ranges from $10,000 to $20,000, based on project scope.",
  },
];

const Prices = () => {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-[1080px]">
        {/* Header Section */}
        <div className="mb-10 text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Pricing Plans</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer pricing plans tailored to your project needs, ensuring
            high-quality results within your budget.
          </p>
        </div>

        {/* Individual Sections */}
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
              index !== pricingPlans.length - 1
                ? "border-b border-gray-300"
                : ""
            }`}
          >
            {/* Image */}
            <div
              className={`${
                index % 2 === 0 ? "order-1" : "order-2"
              } flex justify-center`}
            >
              <img
                src={Placeholder}
                alt={`${plan.type} Illustration`}
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div
              className={`${
                index % 2 === 0 ? "order-2" : "order-1"
              } text-center md:text-left`}
            >
              <h2 className="text-3xl font-bold text-gray-800">{plan.type}</h2>
              <p className="text-xl font-semibold text-gray-600 mt-2">
                {plan.range}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                {plan.description}
              </p>
            </div>
          </div>
        ))}

        {/* Request a Quote Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prices;
