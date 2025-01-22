import React from "react";
import {
  CodeBracketIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Background from "../assets/services-bg.jpg";

const servicesData = [
  {
    title: "Web Design",
    description:
      "Every website needs two things: the technology to offer quality services to your customers and the design to provide an enjoyable visit and consistent professional image for your site.",
    icon: <CodeBracketIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "E-commerce",
    description:
      "We set up ecommerce platforms that drive people from the product they want to the checkout screen without unnecessary complications.",
    icon: <ShoppingCartIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Website Maintenance",
    description:
      "Your website needs regular updates and backups to continue running smoothly for yourself and for customers.",
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "SEO",
    description:
      "Search Engine Optimization enhances a website’s visibility on search engines like Google.",
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "IT Services",
    description:
      "We provide comprehensive IT solutions, from setting up secure networks to integrating home automation systems.",
    icon: <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-12 mb-6"
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
      <div className="relative text-center mb-10 z-10">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 ease-in-out hover:bg-slate-400 hover:bg-opacity-80"
            >
              <div className="flex items-center space-x-3 mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold text-white hover:text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
