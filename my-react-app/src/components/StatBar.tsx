import React from "react";
import "./StatBar.css";

type StatBarProps = {
  value: number;   
  levels?: number;
};

const StatBar: React.FC<StatBarProps> = ({ value, levels = 3 }) => (
  <div className="stat-bar stat-bar--levels">
    {Array.from({ length: levels }).map((_, i) => (
      <div
        key={i}
        className={`stat-bar-level${i < value ? " filled" : ""}`}
      />
    ))}
  </div>
);

export default StatBar;