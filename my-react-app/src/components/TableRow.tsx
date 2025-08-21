import React from "react";
import { useNavigate } from "react-router-dom";
import "./TableRow.css";

type TableRowProps = {
  firstName: string;
  lastName: string;
  id: string;
  type: string;
};

const TableRow: React.FC<TableRowProps> = ({ firstName, lastName, id, type }) => {
  const navigate = useNavigate();
  return (
    <div className="table-row">
      <span className="table-row__cell">{firstName}</span>
      <span className="table-row__cell">{lastName}</span>
      <span className="table-row__cell">
        <span className="table-row__badge">{`#${id}`}</span>
      </span>
      <span className="table-row__cell">
        <span className="table-row__badge">{type}</span>
      </span>
      <span
        className="table-row__cell table-row__arrow"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/alien/${id}`)}
        title="View Profile"
      >
        &#8250;
      </span>
    </div>
  );
};

export default TableRow;