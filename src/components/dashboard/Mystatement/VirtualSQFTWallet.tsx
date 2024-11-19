import React from "react";

const VirtualSQFTWallet = () => {
  const table = [
    "DATE",
    "INVESTMENT OPPORTUNITY",
    "TRANSACTION TYPE",
    "ORDER TYPE",
    "QUANTITY",
  ];
  return (
    <div className="shadow-lg px-4 py-2 rounded-lg">
      <table className="flex justify-evenly gap-5 w-full bg-background-gray p-3">
        {table.map((i) => (
          <th className="text-[15px] ">{i}</th>
        ))}
      </table>
      <div className="h-[200px]">
        <h2 className="flex w-full  justify-center text-red-600">
          No data Available
        </h2>
      </div>
      <div className="flex items-end w-full justify-end">
        <h3>Showing 1-0 of 0 entries</h3>
      </div>
    </div>
  );
};

export default VirtualSQFTWallet;
