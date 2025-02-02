import React from "react";

const Alert = ({ type, message, onClose }) => {
  if (!message) return null; // Don't render if there's no message

  const alertStyles = {
    success: "text-green-800 bg-green-50",
    error: "text-red-800 bg-red-50",
    warning: "text-yellow-800 bg-yellow-50",
  };

  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg ${alertStyles[type]} flex justify-between items-center`}
      role="alert"
    >
      <span className="font-medium">
        {type === "success"
          ? "Success!"
          : type === "error"
          ? "Error!"
          : "Warning!"}
      </span>{" "}
      {message}
      <button
        onClick={onClose}
        className="ml-4 text-lg font-bold text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
    </div>
  );
};

export default Alert;
