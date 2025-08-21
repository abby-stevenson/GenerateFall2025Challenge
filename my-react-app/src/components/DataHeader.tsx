import React from "react";
import alienLogo from "../assets/alien-logo.png";

const AlienDataHeader: React.FC = () => (
  <div className="alien-data-header">
    <img src={alienLogo} alt="Alien Logo" className="alien-logo" />
    <span className="alien-data-title">alien data</span>
  </div>
);

export default AlienDataHeader;