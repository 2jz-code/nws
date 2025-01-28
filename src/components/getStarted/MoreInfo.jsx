import React, { useState } from "react";

const MoreInfo = () => {
  const [selectedType, setSelectedType] = useState(""); // Store the selected type
  const [formData, setFormData] = useState({
    projectType: "",
    extraDetails: "",
    priority: "",
    timeline: "",
    contactName: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your request has been submitted! We'll contact you soon.");
  };

  return (
    <section className="py-32 bg-gray-50">
      {/* Spacing between Navbar */}
      <div className="container mx-auto px-6 max-w-[1080px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Request a Quote
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
          Tell us more about your project, and we’ll create a custom plan that
          works for your needs and budget.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl space-y-8"
        >
          {/* Project Type */}
          <div>
            <label
              htmlFor="projectType"
              className="block text-lg font-medium text-gray-800"
            >
              What type of website are you looking for?
            </label>
            <select
              id="projectType"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.projectType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                handleInputChange("projectType", e.target.value);
              }}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Basic Website">
                Basic Website (Information-only marketing website, no extras)
              </option>
              <option value="Interactive Website">
                Interactive Website (Includes forms or animations)
              </option>
              <option value="Custom Website">
                Custom Website (Custom animations and/or advanced features)
              </option>
              <option value="Complete Website">
                Complete Website (Includes eCommerce solutions, online services,
                data storage, etc.)
              </option>
            </select>
          </div>

          {/* Additional Questions Based on Selection */}
          {selectedType && (
            <div>
              <label className="block text-lg font-medium text-gray-800">
                {selectedType === "Basic Website"
                  ? "What pages do you need? (e.g., Home, About Us, Contact)"
                  : selectedType === "Interactive Website"
                  ? "What features do you need? (e.g., Contact forms, simple animations)"
                  : selectedType === "Custom Website"
                  ? "What advanced features do you need? (e.g., Event Scheduling, user accounts)"
                  : "Tell us about your project in simple terms."}
              </label>
              <textarea
                rows="4"
                placeholder={
                  selectedType === "Basic Website"
                    ? "Please list the pages you'd like."
                    : selectedType === "Interactive Website"
                    ? "Tell us about the features you’d like."
                    : selectedType === "Custom Website"
                    ? "Describe the advanced features you’re looking for."
                    : "What would you like your website to do? How should it work?"
                }
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
                onChange={(e) =>
                  handleInputChange("extraDetails", e.target.value)
                }
              ></textarea>
            </div>
          )}

          {/* Project Priority */}
          <div>
            <label className="block text-lg font-medium text-gray-800">
              What’s most important to you in this project?
            </label>
            <select
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.priority}
              onChange={(e) => handleInputChange("priority", e.target.value)}
              required
            >
              <option value="" disabled>
                Select your top priority
              </option>
              <option value="Affordability">Affordability</option>
              <option value="Quality">High-Quality Design</option>
              <option value="Speed">Quick Turnaround</option>
            </select>
          </div>

          {/* Project Timeline */}
          <div>
            <label className="block text-lg font-medium text-gray-800">
              Do you have a specific timeline in mind?
            </label>
            <input
              type="text"
              placeholder="e.g., 2 months, specific deadline"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              onChange={(e) => handleInputChange("timeline", e.target.value)}
            />
          </div>

          {/* Contact Information */}
          <div>
            <label className="block text-lg font-medium text-gray-800">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              onChange={(e) => handleInputChange("contactName", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-800">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MoreInfo;
