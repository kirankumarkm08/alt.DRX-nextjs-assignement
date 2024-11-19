import React from "react";

interface TableProps {
  tableItems: string[];
}

const Table: React.FC<TableProps> = ({ tableItems, className }) => {

  return (
    <div>
      <table className={className}>
        <tr className="">
          <th>{tableItems}</th>
        </tr>
      </table>
      
    </div>
  );
};

export default Table;
