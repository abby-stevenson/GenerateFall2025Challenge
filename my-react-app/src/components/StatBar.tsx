import React from "react";
import "./StatBar.css";

type StatBarProps = {
  fillPercent: number; 
  levels?: number;     
};

const StatBar: React.FC<StatBarProps> = ({ fillPercent, levels = 3 }) => {
  const filledLevels = Math.round((fillPercent / 100) * levels);

  return (
    <div className="stat-bar stat-bar--levels">
      {Array.from({ length: levels }).map((_, i) => (
        <div
          key={i}
          className={`stat-bar-level${i < filledLevels ? " filled" : ""}`}
        />
      ))}
    </div>
  );
};

export default StatBar;