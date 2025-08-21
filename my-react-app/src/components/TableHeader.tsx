import React from "react";
import "./TableHeader.css";

const TableHeader: React.FC = () => (
  <div className="header-row">
    <span className="header-row__cell">first name</span>
    <span className="header-row__cell">last name</span>
    <span className="header-row__cell">id number</span>
    <span className="header-row__cell">rank</span>
    <span className="header-row__cell"></span>
  </div>
);

export default TableHeader;