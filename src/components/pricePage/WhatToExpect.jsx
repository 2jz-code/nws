import React from "react";

const WhatToExpect = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-[1080px] text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          What to Expect with Your Website Project
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Building a website goes beyond the initial design and development.
          Some recurring charges are mandatory to ensure your website runs
          smoothly and remains accessible to your audience. These include:
        </p>
        <ul className="text-left space-y-4 mx-auto max-w-[800px] text-gray-600">
          <li className="text-lg">
            <span className="font-semibold text-gray-800">
              Website Hosting:
            </span>{" "}
            A monthly or yearly expense required to keep your website live on
            the internet. Hosting ensures your site has a server to operate on.
          </li>
          <li className="text-lg">
            <span className="font-semibold text-gray-800">Domain Name:</span> A
            yearly cost for your website's unique address (e.g.,
            <span className="italic">www.yourbusiness.com</span>).
          </li>
          <li className="text-lg">
            <span className="font-semibold text-gray-800">
              Payment Services:
            </span>{" "}
            If your project includes e-commerce or online transactions, services
            like Stripe or PayPal may include transaction fees.
          </li>
          <li className="text-lg">
            <span className="font-semibold text-gray-800">
              SSL Certificates:
            </span>{" "}
            Necessary to secure your website and ensure encrypted communication.
            SSL certificates are typically an annual cost but may be included
            with some hosting plans.
          </li>
          <li className="text-lg">
            <span className="font-semibold text-gray-800">Email Hosting:</span>{" "}
            If you want custom email addresses (e.g.,
            <span className="italic">info@yourbusiness.com</span>), there may be
            additional costs.
          </li>
          <li className="text-lg">
            <span className="font-semibold text-gray-800">
              Content Management Updates:
            </span>{" "}
            If your website requires frequent updates or content changes, you
            may incur ongoing maintenance fees.
          </li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed">
          Please note: These costs are only mandatory if they apply to your
          specific project needs. We’ll guide you through each of these and
          ensure transparency so you know exactly what to expect.
        </p>
      </div>
    </section>
  );
};

export default WhatToExpect;
