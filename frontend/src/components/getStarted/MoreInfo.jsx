import React, { useState } from "react";

const MoreInfo = () => {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    projectType: "",
    extraDetails: "",
    priority: "",
    timeline: "",
    contactName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your quote request has been submitted! We'll contact you soon.");
        setFormData({
          projectType: "",
          extraDetails: "",
          priority: "",
          timeline: "",
          contactName: "",
          email: "",
        });
        setSelectedType("");
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-32 bg-gray-50">
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
              name="projectType"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.projectType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                handleInputChange(e);
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
                name="extraDetails"
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
                value={formData.extraDetails}
                onChange={handleInputChange}
              ></textarea>
            </div>
          )}

          {/* Project Priority */}
          <div>
            <label className="block text-lg font-medium text-gray-800">
              What’s most important to you in this project?
            </label>
            <select
              name="priority"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.priority}
              onChange={handleInputChange}
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
              name="timeline"
              placeholder="e.g., 2 months, specific deadline"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.timeline}
              onChange={handleInputChange}
            />
          </div>

          {/* Contact Information */}
          <div>
            <label className="block text-lg font-medium text-gray-800">
              Your Name
            </label>
            <input
              type="text"
              name="contactName"
              placeholder="Enter your full name"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.contactName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-800">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={handleInputChange}
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
