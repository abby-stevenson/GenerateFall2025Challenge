import React from "react";
import "./StatBar.css";

type StatBarContainerProps = {
  children: React.ReactNode;
};

const StatBarContainer: React.FC<StatBarContainerProps> = ({ children }) => (
  <div className="stat-bar-container">
    {children}
  </div>
);

export default StatBarContainer;