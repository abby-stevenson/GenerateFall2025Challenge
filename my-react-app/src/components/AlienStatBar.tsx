import React from "react";
import "./AlienStatBar.css";
import StatBar from "./StatBar";

type AlienStatBarProps = {
  label: string;
  value: number;
  max: number;
  description: string;
};

const AlienStatBar: React.FC<AlienStatBarProps> = ({ label, value, max, description }) => (
  <div className="alien-profile-stat-row">
    <div className="alien-profile-stat-header-bar">
      <span className="alien-profile-stat-label">{label}</span>
      <span className="alien-profile-stat-desc">{description}</span>
    </div>
    <div className="alien-profile-stat-value">{label} = {value}</div>
    <div className="alien-profile-stat-bar-row">
      <StatBar value={value} levels={3} />
    </div>
  </div>
);

export default AlienStatBar;
