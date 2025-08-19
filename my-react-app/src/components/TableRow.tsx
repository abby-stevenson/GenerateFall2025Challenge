import React from "react";

type TableRowProps = {
  firstName: string;
  lastName: string;
  id: string;
  type: string;
};

const TableRow: React.FC<TableRowProps> = ({ firstName, lastName, id, type }) => (
  <div className="flex items-center border-2 border-lime-400 rounded px-3 py-2 bg-zinc-800 text-lime-400 font-mono text-2xl my-4 relative">
    <span className="flex-1 mr-4">{firstName}</span>
    <span className="flex-1 mr-4">{lastName}</span>
    <span className="bg-lime-400 text-zinc-900 px-3 py-1 rounded mr-4 text-xl">{`#${id}`}</span>
    <span className="bg-lime-400 text-zinc-900 px-3 py-1 rounded mr-4 text-xl">{type}</span>
    <span className="ml-auto text-lime-400 text-2xl font-bold pl-2">&#8250;</span>
  </div>
);

export default TableRow;