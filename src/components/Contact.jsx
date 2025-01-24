import React from "react";
import Background from "../assets/contact-bg.jpg";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="relative py-12"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 max-w-[1080px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Contact Info */}
          <div
            ref={leftRef}
            className={`space-y-6 text-black transition-transform duration-[2000ms] ease-out ${
              leftInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-xl">
              We'd love to hear from you! Reach out to us through the contact
              form or using the information below.
            </p>
            <div>
              <h3 className="text-3xl font-bold">Email</h3>
              <p className="text-xl">contact@example.com</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Phone</h3>
              <p className="text-xl">(123) 456-7890</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            ref={formRef}
            className={`bg-white bg-opacity-90 p-6 rounded-lg shadow-lg space-y-4 transition-transform duration-[2000ms] ease-out ${
              formInView
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            action="mailto:contact@example.com"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
