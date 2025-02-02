import React from "react";
import { dotSpinner } from "ldrs";

dotSpinner.register();

const Loader = () => {
  return (
    // Default values shown
    <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
  );
};

export default Loader;
