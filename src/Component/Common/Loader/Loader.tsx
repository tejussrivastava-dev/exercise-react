import React from "react";
import "./Loader.css"; // Add a separate CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
