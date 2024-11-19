import React from "react";

const VirtualBankWallet = () => {
  const table = [
    " DATE",
    "TRANSACTION TYPE",
    "REMARKS",
    "DEBIT",
    "CREDIT",
    "BALANCE",
  ];
  return (
    <div className="shadow-lg">
      <table className="text-[15px]  flex justify-evenly gap-10 bg-background-gray p-3">
        {table.map((i) => (
          <th key={i} className="">
            {i}
          </th>
        ))}
      </table>
      <div className="h-[200px]  rounded-lg ">
        <h1 className="text-red-500 font-bold w-full flex justify-center">
          No data available
        </h1>
      </div>

      <div className="flex items-end w-full justify-end">
        <h3>Showing 1-0 of 0 entries</h3>
      </div>
    </div>
  );
};

export default VirtualBankWallet;
