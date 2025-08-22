import React from "react";
import AlienDataHeader from "../components/DataHeader";
import AlienTable from "../components/AlienTable";
import AlienDataFooter from "../components/DataFooter";
import "./TableScreen.css";

const TableScreen: React.FC = () => (
  <div className="alien-data-bg">
    <div className="alien-data-frame">
      <div className="alien-table-header">
        <AlienDataHeader />
      </div>
      <AlienTable />
      <AlienDataFooter />
    </div>
  </div>
);

export default TableScreen;